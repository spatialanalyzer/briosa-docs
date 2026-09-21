---
title: Construction Operations / Other MP Types
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Construction Operations / Other MP Types

[SA 2026.1.0529.7](/api/python/construction-operations-other-mp-types) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-other-mp-types)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Make a System String {/* #make-a-system-string */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-system-string)

```python
async def make_system_string(
        self,
        string_content: SystemString,
        *,
        format_string: str | None = None,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Name - Runtime Select {/* #make-a-collection-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-name---runtime-select)

```python
async def make_collection_name_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> CollectionName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Item Name Reference List - WildCard Selection {/* #make-a-collection-item-name-reference-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection)

```python
async def make_collection_item_name_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        item_wildcard_criteria: str = "*",
        item_type: ItemType = ItemType.ANY,
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Runtime Select {/* #make-a-collection-object-name---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select)

```python
async def make_collection_object_name_runtime_select(
        self,
        *,
        user_prompt: str = "",
        object_type: ObjectType = ObjectType.ANY,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name - Ensure Unique {/* #make-a-collection-object-name---ensure-unique */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name---ensure-unique)

```python
async def make_collection_object_name_ensure_unique(
        self,
        collection_object_name: CollectionObjectName,
        *,
        use_number_suffix: bool = False,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- Runtime Select {/* #make-a-collection-object-name-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select)

```python
async def make_collection_object_name_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
        object_type: ObjectType = ObjectType.ANY,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Reference List- WildCard Selection {/* #make-a-collection-object-name-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection)

```python
async def make_collection_object_name_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        object_wildcard_criteria: str = "*",
        object_type: ObjectType = ObjectType.ANY,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type {/* #make-a-collection-object-name-ref-list---by-type */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type)

```python
async def make_collection_object_name_ref_list_by_type(
        self,
        collection: str,
        *,
        object_type: ObjectType = ObjectType.ANY,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List - By Type and Color {/* #make-a-collection-object-name-ref-list---by-type-and-color */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color)

```python
async def make_collection_object_name_ref_list_by_type_and_color(
        self,
        collection: str,
        *,
        object_type: ObjectType = ObjectType.ANY,
        object_color: Color = Color(255, 0, 0),
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Object Name Ref List from all Groups in a Collection {/* #make-a-collection-object-name-ref-list-from-all-groups-in-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-object-name-ref-list-from-all-groups-in-a-collection)

```python
async def make_collection_object_name_ref_list_from_all_groups_in_collection(
        self,
        collection_name: CollectionName,
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Instrument Ref List Variable {/* #get-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-collection-instrument-ref-list-variable)

```python
async def get_collection_instrument_ref_list_variable(
        self,
        name: str,
    ) -> list[CollectionInstrumentId]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Instrument Ref List Variable {/* #set-collection-instrument-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#set-collection-instrument-ref-list-variable)

```python
async def set_collection_instrument_ref_list_variable(
        self,
        name: str,
        value: Iterable[CollectionInstrumentId],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Collection Instruments to a Ref List - WildCard Selection {/* #add-collection-instruments-to-a-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#add-collection-instruments-to-a-ref-list---wildcard-selection)

```python
async def add_collection_instruments_to_ref_list_wildcard_selection(
        self,
        collection_instrument_ref_list: Iterable[CollectionInstrumentId],
        *,
        collection_wildcard_criteria: str = "*",
        instrument_wildcard_criteria: str = "*",
    ) -> list[CollectionInstrumentId]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument Reference List- Runtime Select {/* #make-a-collection-instrument-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-reference-list--runtime-select)

```python
async def make_collection_instrument_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> list[CollectionInstrumentId]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- WildCard Selection {/* #make-a-relationship-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--wildcard-selection)

```python
async def make_relationship_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        relationship_wildcard_criteria: str = "*",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Relationship Reference List- Runtime Select {/* #make-a-relationship-reference-list--runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-relationship-reference-list--runtime-select)

```python
async def make_relationship_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make an Event Reference List- WildCard Selection {/* #make-an-event-reference-list--wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-an-event-reference-list--wildcard-selection)

```python
async def make_event_ref_list_wildcard_selection(
        self,
        *,
        collection_wildcard_criteria: str = "*",
        event_wildcard_criteria: str = "*",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Collection Instrument ID - Runtime Select {/* #make-a-collection-instrument-id---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-collection-instrument-id---runtime-select)

```python
async def make_collection_instrument_id_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> CollectionInstrumentId: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List from a Collection {/* #make-a-report-ref-list-from-a-collection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list-from-a-collection)

```python
async def make_report_ref_list_from_collection(
        self,
        collection_name: CollectionName,
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Report Ref List - Runtime Select {/* #make-a-report-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-report-ref-list---runtime-select)

```python
async def make_report_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Picture Name Ref List - Runtime Select {/* #make-a-picture-name-ref-list---runtime-select */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-picture-name-ref-list---runtime-select)

```python
async def make_picture_name_ref_list_runtime_select(
        self,
        *,
        user_prompt: str = "",
    ) -> list[CollectionItemName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Fixed XYZ) {/* #make-a-transform-from-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-fixed-xyz)

```python
async def make_transform_from_doubles_fixed_xyz(
        self,
        *,
        x: float = 0,
        y: float = 0,
        z: float = 0,
        rx: float = 0,
        ry: float = 0,
        rz: float = 0,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make a Transform from Doubles (Euler Parameters) {/* #make-a-transform-from-doubles-euler-parameters */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#make-a-transform-from-doubles-euler-parameters)

```python
async def make_transform_from_doubles_euler_parameters(
        self,
        *,
        x: float = 0,
        y: float = 0,
        z: float = 0,
        e1: float = 0,
        e2: float = 0,
        e3: float = 0,
        e4: float = 0,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Transform of Object (Fixed XYZ) {/* #get-working-transform-of-object-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#get-working-transform-of-object-fixed-xyz)

```python
async def get_working_transform_of_object_fixed_xyz(
        self,
        object_name: CollectionObjectName,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Invert Transform {/* #invert-transform */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#invert-transform) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#invert-transform)

```python
async def invert_transform(
        self,
        transform: Transform,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Fixed XYZ) {/* #decompose-transform-into-doubles-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-fixed-xyz)

```python
async def decompose_transform_into_doubles_fixed_xyz(
        self,
        input_transform: Transform,
    ) -> FixedXyzTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Fixed XYZ) {/* #decompose-transform-into-vectors-fixed-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-fixed-xyz)

```python
async def decompose_transform_into_vectors_fixed_xyz(
        self,
        input_transform: Transform,
    ) -> FixedXyzTransformVectors: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Vectors (Origin and Axes) {/* #decompose-transform-into-vectors-origin-and-axes */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-vectors-origin-and-axes)

```python
async def decompose_transform_into_vectors_origin_and_axes(
        self,
        transform: Transform,
    ) -> TransformAxes: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Doubles (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-doubles-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-doubles-fixed-xyz-in-world)

```python
async def decompose_world_transform_operator_into_doubles_fixed_xyz_in_world(
        self,
        input_world_transform_operator: WorldTransform,
    ) -> WorldFixedXyzTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler XYZ) {/* #decompose-transform-into-doubles-euler-xyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-xyz)

```python
async def decompose_transform_into_doubles_euler_xyz(
        self,
        input_transform: Transform,
    ) -> EulerXyzTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYX) {/* #decompose-transform-into-doubles-euler-zyx */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyx)

```python
async def decompose_transform_into_doubles_euler_zyx(
        self,
        input_transform: Transform,
    ) -> EulerZyxTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZYZ) {/* #decompose-transform-into-doubles-euler-zyz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zyz)

```python
async def decompose_transform_into_doubles_euler_zyz(
        self,
        input_transform: Transform,
    ) -> EulerZyzTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose Transform into Doubles (Euler ZXZ) {/* #decompose-transform-into-doubles-euler-zxz */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-transform-into-doubles-euler-zxz)

```python
async def decompose_transform_into_doubles_euler_zxz(
        self,
        input_transform: Transform,
    ) -> EulerZxzTransformComponents: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Decompose World Transform Operator into Vectors (Fixed XYZ in World) {/* #decompose-world-transform-operator-into-vectors-fixed-xyz-in-world */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world) · [gRPC Contract](/api/grpc/construction-operations-other-mp-types#decompose-world-transform-operator-into-vectors-fixed-xyz-in-world)

```python
async def decompose_world_transform_operator_into_vectors_fixed_xyz_in_world(
        self,
        input_world_transform_operator: WorldTransform,
    ) -> WorldFixedXyzTransformVectors: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Values {/* #shared-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## Related References {/* #related-references */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
