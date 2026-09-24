---
title: Variables
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Variables

[SA 2026.1.0529.7](/api/python/variables) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/variables)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Double to Named Double List Variable {/* #add-double-to-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#add-double-to-named-double-list-variable)

```python
async def add_double_to_named_double_list_variable(
        self,
        *,
        name: str = "",
        double_value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Named Double List Variable {/* #clear-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#clear-named-double-list-variable)

```python
async def clear_named_double_list_variable(
        self,
        *,
        name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variable {/* #delete-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variable) · [gRPC Contract](/api/grpc/variables#delete-variable)

```python
async def delete_variable(
        self,
        *,
        name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Variables -- Wildcard Match {/* #delete-variables----wildcard-match */}

[MP Catalog](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC Contract](/api/grpc/variables#delete-variables----wildcard-match)

```python
async def delete_variables_wildcard_match(
        self,
        *,
        variable_wildcard_criteria: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean Variable {/* #get-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC Contract](/api/grpc/variables#get-boolean-variable)

```python
async def get_boolean_variable(
        self,
        *,
        name: str = "",
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Name Variable {/* #get-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC Contract](/api/grpc/variables#get-collection-object-name-variable)

```python
async def get_collection_object_name_variable(
        self,
        *,
        name: str = "",
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Collection Object Ref List Variable {/* #get-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-collection-object-ref-list-variable)

```python
async def get_collection_object_ref_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double Variable {/* #get-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC Contract](/api/grpc/variables#get-double-variable)

```python
async def get_double_variable(
        self,
        *,
        name: str = "",
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer Variable {/* #get-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC Contract](/api/grpc/variables#get-integer-variable)

```python
async def get_integer_variable(
        self,
        *,
        name: str = "",
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable {/* #get-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#get-named-double-list-variable)

```python
async def get_named_double_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[float]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Named Double List Variable Min/Max {/* #get-named-double-list-variable-minmax */}

[MP Catalog](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC Contract](/api/grpc/variables#get-named-double-list-variable-minmax)

```python
async def get_named_double_list_variable_min_max(
        self,
        *,
        name: str = "",
    ) -> GetNamedDoubleListVariableMinMaxResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Ref List Variable {/* #get-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-point-name-ref-list-variable)

```python
async def get_point_name_ref_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Name Variable {/* #get-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC Contract](/api/grpc/variables#get-point-name-variable)

```python
async def get_point_name_variable(
        self,
        *,
        name: str = "",
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Relationship Ref List Variable {/* #get-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-relationship-ref-list-variable)

```python
async def get_relationship_ref_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Items Reference List Variable {/* #get-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/variables#get-report-items-reference-list-variable)

```python
async def get_report_items_reference_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Ref List Variable {/* #get-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-string-ref-list-variable)

```python
async def get_string_ref_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String Variable {/* #get-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC Contract](/api/grpc/variables#get-string-variable)

```python
async def get_string_variable(
        self,
        *,
        name: str = "",
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform Variable {/* #get-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC Contract](/api/grpc/variables#get-transform-variable)

```python
async def get_transform_variable(
        self,
        *,
        name: str = "",
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Name Ref List Variable {/* #get-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#get-vector-name-ref-list-variable)

```python
async def get_vector_name_ref_list_variable(
        self,
        *,
        name: str = "",
    ) -> list[VectorName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector Variable {/* #get-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC Contract](/api/grpc/variables#get-vector-variable)

```python
async def get_vector_variable(
        self,
        *,
        name: str = "",
    ) -> Vector: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean Variable {/* #set-boolean-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC Contract](/api/grpc/variables#set-boolean-variable)

```python
async def set_boolean_variable(
        self,
        *,
        name: str = "",
        value: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Name Variable {/* #set-collection-object-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC Contract](/api/grpc/variables#set-collection-object-name-variable)

```python
async def set_collection_object_name_variable(
        self,
        *,
        name: str = "",
        value: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Object Ref List Variable {/* #set-collection-object-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-collection-object-ref-list-variable)

```python
async def set_collection_object_ref_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double Variable {/* #set-double-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC Contract](/api/grpc/variables#set-double-variable)

```python
async def set_double_variable(
        self,
        *,
        name: str = "",
        value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Font Variable {/* #set-font-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC Contract](/api/grpc/variables#set-font-variable)

```python
async def set_font_variable(
        self,
        *,
        name: str = "",
        value: Font = Font.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer Variable {/* #set-integer-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC Contract](/api/grpc/variables#set-integer-variable)

```python
async def set_integer_variable(
        self,
        *,
        name: str = "",
        value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Named Double List Variable {/* #set-named-double-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC Contract](/api/grpc/variables#set-named-double-list-variable)

```python
async def set_named_double_list_variable(
        self,
        *,
        name: str = "",
        double_list_variable: Iterable[float],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Ref List Variable {/* #set-point-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-point-name-ref-list-variable)

```python
async def set_point_name_ref_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[PointName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Name Variable {/* #set-point-name-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC Contract](/api/grpc/variables#set-point-name-variable)

```python
async def set_point_name_variable(
        self,
        *,
        name: str = "",
        value: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Ref List Variable {/* #set-relationship-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-relationship-ref-list-variable)

```python
async def set_relationship_ref_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[CollectionItemName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Items Reference List Variable {/* #set-report-items-reference-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC Contract](/api/grpc/variables#set-report-items-reference-list-variable)

```python
async def set_report_items_reference_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[CollectionItemName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Ref List Variable {/* #set-string-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-string-ref-list-variable)

```python
async def set_string_ref_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[str],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String Variable {/* #set-string-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC Contract](/api/grpc/variables#set-string-variable)

```python
async def set_string_variable(
        self,
        *,
        name: str = "",
        value: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform Variable {/* #set-transform-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC Contract](/api/grpc/variables#set-transform-variable)

```python
async def set_transform_variable(
        self,
        *,
        name: str = "",
        value: Transform,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Name Ref List Variable {/* #set-vector-name-ref-list-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC Contract](/api/grpc/variables#set-vector-name-ref-list-variable)

```python
async def set_vector_name_ref_list_variable(
        self,
        *,
        name: str = "",
        value: Iterable[VectorName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Variable {/* #set-vector-variable */}

[MP Catalog](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC Contract](/api/grpc/variables#set-vector-variable)

```python
async def set_vector_variable(
        self,
        *,
        name: str = "",
        value: Vector,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
