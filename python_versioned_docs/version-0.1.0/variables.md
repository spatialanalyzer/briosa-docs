---
title: Variables
description: Briosa 0.1.0 Python APIs for supported Variables MP commands.
toc_max_heading_level: 2
---

# Variables

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Add Double to Named Double List Variable

[Add Double to Named Double List Variable](/mp-command-catalog/commands/variables#add-double-to-named-double-list-variable) · [gRPC contract](/api/grpc/variables#add-double-to-named-double-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `double_value` | `float` | `Double Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_double_to_named_double_list_variable(
    self,
    *,
    name: str = '',
    double_value: float = 0.000000,
) -> None: ...
```

```python
await briosa.add_double_to_named_double_list_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Clear Named Double List Variable

[Clear Named Double List Variable](/mp-command-catalog/commands/variables#clear-named-double-list-variable) · [gRPC contract](/api/grpc/variables#clear-named-double-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def clear_named_double_list_variable(
    self,
    *,
    name: str = '',
) -> None: ...
```

```python
await briosa.clear_named_double_list_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Variable

[Delete Variable](/mp-command-catalog/commands/variables#delete-variable) · [gRPC contract](/api/grpc/variables#delete-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_variable(
    self,
    *,
    name: str = '',
) -> None: ...
```

```python
await briosa.delete_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Variables -- Wildcard Match

[Delete Variables -- Wildcard Match](/mp-command-catalog/commands/variables#delete-variables----wildcard-match) · [gRPC contract](/api/grpc/variables#delete-variables----wildcard-match)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `variable_wildcard_criteria` | `str` | `Variable Wildcard Criteria` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_variables_wildcard_match(
    self,
    *,
    variable_wildcard_criteria: str = '',
) -> None: ...
```

```python
await briosa.delete_variables_wildcard_match()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Boolean Variable

[Get Boolean Variable](/mp-command-catalog/commands/variables#get-boolean-variable) · [gRPC contract](/api/grpc/variables#get-boolean-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `bool` | `Value` |

```python
async def get_boolean_variable(
    self,
    *,
    name: str = '',
) -> bool: ...
```

```python
await briosa.get_boolean_variable()
```

Returns the MP output `Value` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Collection Object Name Variable

[Get Collection Object Name Variable](/mp-command-catalog/commands/variables#get-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-name-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `CollectionObjectName` | `Value` |

```python
async def get_collection_object_name_variable(
    self,
    *,
    name: str = '',
) -> CollectionObjectName: ...
```

```python
await briosa.get_collection_object_name_variable()
```

Returns the MP output `Value` directly as `CollectionObjectName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Collection Object Ref List Variable

[Get Collection Object Ref List Variable](/mp-command-catalog/commands/variables#get-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-collection-object-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[CollectionObjectName]` | `Value` |

```python
async def get_collection_object_ref_list_variable(
    self,
    *,
    name: str = '',
) -> list[CollectionObjectName]: ...
```

```python
await briosa.get_collection_object_ref_list_variable()
```

Returns the MP output `Value` directly as `list[CollectionObjectName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Double Variable

[Get Double Variable](/mp-command-catalog/commands/variables#get-double-variable) · [gRPC contract](/api/grpc/variables#get-double-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `float` | `Value` |

```python
async def get_double_variable(
    self,
    *,
    name: str = '',
) -> float: ...
```

```python
await briosa.get_double_variable()
```

Returns the MP output `Value` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Integer Variable

[Get Integer Variable](/mp-command-catalog/commands/variables#get-integer-variable) · [gRPC contract](/api/grpc/variables#get-integer-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `int` | `Value` |

```python
async def get_integer_variable(
    self,
    *,
    name: str = '',
) -> int: ...
```

```python
await briosa.get_integer_variable()
```

Returns the MP output `Value` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Named Double List Variable

[Get Named Double List Variable](/mp-command-catalog/commands/variables#get-named-double-list-variable) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `double_list_variable` | `list[float]` | `Double List Variable` |

```python
async def get_named_double_list_variable(
    self,
    *,
    name: str = '',
) -> list[float]: ...
```

```python
await briosa.get_named_double_list_variable()
```

Returns the MP output `Double List Variable` directly as `list[float]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Named Double List Variable Min/Max

[Get Named Double List Variable Min/Max](/mp-command-catalog/commands/variables#get-named-double-list-variable-minmax) · [gRPC contract](/api/grpc/variables#get-named-double-list-variable-minmax)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `minimum_value` | `float` | `Minimum Value` |
| `maximum_value` | `float` | `Maximum Value` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetNamedDoubleListVariableMinMaxResult:
    minimum_value: float
    maximum_value: float

async def get_named_double_list_variable_min_max(
    self,
    *,
    name: str = '',
) -> GetNamedDoubleListVariableMinMaxResult: ...
```

```python
await briosa.get_named_double_list_variable_min_max()
```

Returns the 2 MP outputs in the named `GetNamedDoubleListVariableMinMaxResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Name Ref List Variable

[Get Point Name Ref List Variable](/mp-command-catalog/commands/variables#get-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-point-name-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[PointName]` | `Value` |

```python
async def get_point_name_ref_list_variable(
    self,
    *,
    name: str = '',
) -> list[PointName]: ...
```

```python
await briosa.get_point_name_ref_list_variable()
```

Returns the MP output `Value` directly as `list[PointName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Point Name Variable

[Get Point Name Variable](/mp-command-catalog/commands/variables#get-point-name-variable) · [gRPC contract](/api/grpc/variables#get-point-name-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `PointName` | `Value` |

```python
async def get_point_name_variable(
    self,
    *,
    name: str = '',
) -> PointName: ...
```

```python
await briosa.get_point_name_variable()
```

Returns the MP output `Value` directly as `PointName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Relationship Ref List Variable

[Get Relationship Ref List Variable](/mp-command-catalog/commands/variables#get-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-relationship-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[CollectionItemName]` | `Value` |

```python
async def get_relationship_ref_list_variable(
    self,
    *,
    name: str = '',
) -> list[CollectionObjectName]: ...
```

```python
await briosa.get_relationship_ref_list_variable()
```

Returns the MP output `Value` directly as `list[CollectionObjectName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Report Items Reference List Variable

[Get Report Items Reference List Variable](/mp-command-catalog/commands/variables#get-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#get-report-items-reference-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[CollectionItemName]` | `Value` |

```python
async def get_report_items_reference_list_variable(
    self,
    *,
    name: str = '',
) -> list[CollectionObjectName]: ...
```

```python
await briosa.get_report_items_reference_list_variable()
```

Returns the MP output `Value` directly as `list[CollectionObjectName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get String Ref List Variable

[Get String Ref List Variable](/mp-command-catalog/commands/variables#get-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-string-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[str]` | `Value` |

```python
async def get_string_ref_list_variable(
    self,
    *,
    name: str = '',
) -> list[str]: ...
```

```python
await briosa.get_string_ref_list_variable()
```

Returns the MP output `Value` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get String Variable

[Get String Variable](/mp-command-catalog/commands/variables#get-string-variable) · [gRPC contract](/api/grpc/variables#get-string-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `str` | `Value` |

```python
async def get_string_variable(
    self,
    *,
    name: str = '',
) -> str: ...
```

```python
await briosa.get_string_variable()
```

Returns the MP output `Value` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Transform Variable

[Get Transform Variable](/mp-command-catalog/commands/variables#get-transform-variable) · [gRPC contract](/api/grpc/variables#get-transform-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `Transform` | `Value` |

```python
async def get_transform_variable(
    self,
    *,
    name: str = '',
) -> Transform: ...
```

```python
await briosa.get_transform_variable()
```

Returns the MP output `Value` directly as `Transform`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Vector Name Ref List Variable

[Get Vector Name Ref List Variable](/mp-command-catalog/commands/variables#get-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#get-vector-name-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `list[VectorName]` | `Value` |

```python
async def get_vector_name_ref_list_variable(
    self,
    *,
    name: str = '',
) -> list[VectorName]: ...
```

```python
await briosa.get_vector_name_ref_list_variable()
```

Returns the MP output `Value` directly as `list[VectorName]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Vector Variable

[Get Vector Variable](/mp-command-catalog/commands/variables#get-vector-variable) · [gRPC contract](/api/grpc/variables#get-vector-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `Vector` | `Value` |

```python
async def get_vector_variable(
    self,
    *,
    name: str = '',
) -> Vector: ...
```

```python
await briosa.get_vector_variable()
```

Returns the MP output `Value` directly as `Vector`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Boolean Variable

[Set Boolean Variable](/mp-command-catalog/commands/variables#set-boolean-variable) · [gRPC contract](/api/grpc/variables#set-boolean-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `bool` | `Value` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_boolean_variable(
    self,
    *,
    name: str = '',
    value: bool = False,
) -> None: ...
```

```python
await briosa.set_boolean_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Collection Object Name Variable

[Set Collection Object Name Variable](/mp-command-catalog/commands/variables#set-collection-object-name-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-name-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `CollectionObjectName` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_collection_object_name_variable(
    self,
    *,
    name: str = '',
    value: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_collection_object_name_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Collection Object Ref List Variable

[Set Collection Object Ref List Variable](/mp-command-catalog/commands/variables#set-collection-object-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-collection-object-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[CollectionObjectName]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_collection_object_ref_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[CollectionObjectName],
) -> None: ...
```

```python
await briosa.set_collection_object_ref_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Double Variable

[Set Double Variable](/mp-command-catalog/commands/variables#set-double-variable) · [gRPC contract](/api/grpc/variables#set-double-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `float` | `Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_double_variable(
    self,
    *,
    name: str = '',
    value: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_double_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Font Variable

[Set Font Variable](/mp-command-catalog/commands/variables#set-font-variable) · [gRPC contract](/api/grpc/variables#set-font-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Font` | `Value` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_font_variable(
    self,
    *,
    name: str = '',
    value: Font = Font.DEFAULT,
) -> None: ...
```

```python
await briosa.set_font_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Integer Variable

[Set Integer Variable](/mp-command-catalog/commands/variables#set-integer-variable) · [gRPC contract](/api/grpc/variables#set-integer-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `int` | `Value` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_integer_variable(
    self,
    *,
    name: str = '',
    value: int = 0,
) -> None: ...
```

```python
await briosa.set_integer_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Named Double List Variable

[Set Named Double List Variable](/mp-command-catalog/commands/variables#set-named-double-list-variable) · [gRPC contract](/api/grpc/variables#set-named-double-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `double_list_variable` | `Iterable[float]` | `Double List Variable` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_named_double_list_variable(
    self,
    *,
    name: str = '',
    double_list_variable: Iterable[float],
) -> None: ...
```

```python
await briosa.set_named_double_list_variable(double_list_variable=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Name Ref List Variable

[Set Point Name Ref List Variable](/mp-command-catalog/commands/variables#set-point-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-point-name-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[PointName]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_name_ref_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[PointName],
) -> None: ...
```

```python
await briosa.set_point_name_ref_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Name Variable

[Set Point Name Variable](/mp-command-catalog/commands/variables#set-point-name-variable) · [gRPC contract](/api/grpc/variables#set-point-name-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `PointName` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_name_variable(
    self,
    *,
    name: str = '',
    value: PointName,
) -> None: ...
```

```python
await briosa.set_point_name_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Ref List Variable

[Set Relationship Ref List Variable](/mp-command-catalog/commands/variables#set-relationship-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-relationship-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[CollectionItemName]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_ref_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[CollectionItemName],
) -> None: ...
```

```python
await briosa.set_relationship_ref_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Items Reference List Variable

[Set Report Items Reference List Variable](/mp-command-catalog/commands/variables#set-report-items-reference-list-variable) · [gRPC contract](/api/grpc/variables#set-report-items-reference-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[CollectionItemName]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_items_reference_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[CollectionItemName],
) -> None: ...
```

```python
await briosa.set_report_items_reference_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set String Ref List Variable

[Set String Ref List Variable](/mp-command-catalog/commands/variables#set-string-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-string-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[str]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_string_ref_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[str],
) -> None: ...
```

```python
await briosa.set_string_ref_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set String Variable

[Set String Variable](/mp-command-catalog/commands/variables#set-string-variable) · [gRPC contract](/api/grpc/variables#set-string-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `str` | `Value` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_string_variable(
    self,
    *,
    name: str = '',
    value: str = '',
) -> None: ...
```

```python
await briosa.set_string_variable()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Transform Variable

[Set Transform Variable](/mp-command-catalog/commands/variables#set-transform-variable) · [gRPC contract](/api/grpc/variables#set-transform-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Transform` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_transform_variable(
    self,
    *,
    name: str = '',
    value: Transform,
) -> None: ...
```

```python
await briosa.set_transform_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector Name Ref List Variable

[Set Vector Name Ref List Variable](/mp-command-catalog/commands/variables#set-vector-name-ref-list-variable) · [gRPC contract](/api/grpc/variables#set-vector-name-ref-list-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Iterable[VectorName]` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_name_ref_list_variable(
    self,
    *,
    name: str = '',
    value: Iterable[VectorName],
) -> None: ...
```

```python
await briosa.set_vector_name_ref_list_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector Variable

[Set Vector Variable](/mp-command-catalog/commands/variables#set-vector-variable) · [gRPC contract](/api/grpc/variables#set-vector-variable)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `name` | `str` | `Name` | Empty |
| `value` | `Vector` | `Value` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_variable(
    self,
    *,
    name: str = '',
    value: Vector,
) -> None: ...
```

```python
await briosa.set_vector_variable(value=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
