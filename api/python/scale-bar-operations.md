---
title: Scale Bar Operations
description: Next Briosa Python APIs for supported Scale Bar Operations MP commands.
toc_max_heading_level: 2
---

# Scale Bar Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Delete Scale Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Scale Bar](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC contract](/api/grpc/scale-bar-operations#delete-scale-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scale_bar_name` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_scale_bar(
    self,
    scale_bar_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_scale_bar(scale_bar_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Scale Bar Stats

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Scale Bar Stats](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC contract](/api/grpc/scale-bar-operations#get-scale-bar-stats)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scale_bar_name` | `CollectionObjectName` | `Scale Bar Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `nominal_length` | `float` | `Nominal Length` |
| `actual_length` | `float` | `Actual Length` |
| `deviation` | `float` | `Deviation` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetScaleBarStatsResult:
    nominal_length: float
    actual_length: float
    deviation: float

async def get_scale_bar_stats(
    self,
    scale_bar_name: CollectionObjectName,
) -> GetScaleBarStatsResult: ...
```

```python
await briosa.get_scale_bar_stats(scale_bar_name=...)
```

Returns the 3 MP outputs in the named `GetScaleBarStatsResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Scale Bar Check

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Scale Bar Check](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC contract](/api/grpc/scale-bar-operations#scale-bar-check)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `scale_bar_point_a` | `PointName` | `ScaleBar Point A` | Required |
| `scale_bar_point_b` | `PointName` | `ScaleBar Point B` | Required |
| `current_temperature_f` | `float` | `Current Temperature (F)` | 0.000000 |
| `length_of_bar_at_68f` | `float` | `Length of Bar at 68F` | 0.000000 |
| `material_cte_ppm_f` | `float` | `Material CTE (PPM/F)` | 0.000000 |
| `tolerance` | `float` | `Tolerance` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `deviation_at_68f` | `float` | `Deviation at 68F` |

```python
async def scale_bar_check(
    self,
    scale_bar_point_a: PointName,
    scale_bar_point_b: PointName,
    *,
    current_temperature_f: float = 0.000000,
    length_of_bar_at_68f: float = 0.000000,
    material_cte_ppm_f: float = 0.000000,
    tolerance: float = 0.000000,
) -> float: ...
```

```python
await briosa.scale_bar_check(scale_bar_point_a=..., scale_bar_point_b=...)
```

Returns the MP output `Deviation at 68F` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Inward Positive Normal

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Inward Positive Normal](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC contract](/api/grpc/scale-bar-operations#set-inward-positive-normal)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name` | `CollectionObjectName` | `Object Name` | Required |
| `inward_positive` | `bool` | `Inward Positive?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_inward_positive_normal(
    self,
    object_name: CollectionObjectName,
    *,
    inward_positive: bool = True,
) -> None: ...
```

```python
await briosa.set_inward_positive_normal(object_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
