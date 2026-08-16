---
title: Dimension Operations
description: Next Briosa Python APIs for supported Dimension Operations MP commands.
toc_max_heading_level: 2
---

# Dimension Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Delete Dimension

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Dimension](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC contract](/api/grpc/dimension-operations#delete-dimension)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_dimension(
    self,
    dimension_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_dimension(dimension_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Dimension Value

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Dimension Value](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC contract](/api/grpc/dimension-operations#get-dimension-value)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `dimensions_value` | `float` | `Dimensions Value` |
| `nominal_value_enabled` | `bool` | `Nominal Value Enabled?` |
| `high_tolerance_enabled` | `bool` | `High Tolerance Enabled?` |
| `low_tolerance_enabled` | `bool` | `Low Tolerance Enabled?` |
| `nominal_value` | `float` | `Nominal Value` |
| `high_tolerance` | `float` | `High Tolerance` |
| `low_tolerance` | `float` | `Low Tolerance` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetDimensionValueResult:
    dimensions_value: float
    nominal_value_enabled: bool
    high_tolerance_enabled: bool
    low_tolerance_enabled: bool
    nominal_value: float
    high_tolerance: float
    low_tolerance: float

async def get_dimension_value(
    self,
    dimension_name: CollectionObjectName,
) -> GetDimensionValueResult: ...
```

```python
await briosa.get_dimension_value(dimension_name=...)
```

Returns the 7 MP outputs in the named `GetDimensionValueResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Dimension Tolerance

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Dimension Tolerance](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC contract](/api/grpc/dimension-operations#set-dimension-tolerance)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dimension_name` | `CollectionItemName` | `Dimension Name` | Required |
| `enable_nominal` | `bool` | `Enable Nominal` | false |
| `enable_high` | `bool` | `Enable High` | false |
| `enable_low` | `bool` | `Enable Low` | false |
| `nominal` | `float` | `Nominal` | 0.000000 |
| `high_tolerance` | `float` | `High Tolerance` | 0.000000 |
| `low_tolerance` | `float` | `Low Tolerance` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_dimension_tolerance(
    self,
    dimension_name: CollectionItemName,
    *,
    enable_nominal: bool = False,
    enable_high: bool = False,
    enable_low: bool = False,
    nominal: float = 0.000000,
    high_tolerance: float = 0.000000,
    low_tolerance: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_dimension_tolerance(dimension_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
