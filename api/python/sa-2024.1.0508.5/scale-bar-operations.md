---
title: Scale Bar Operations
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Scale Bar Operations

[SA 2026.1.0529.7](/api/python/scale-bar-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/scale-bar-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Scale Bar {/* #delete-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#delete-scale-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#delete-scale-bar)

```python
async def delete_scale_bar(
        self,
        scale_bar_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Scale Bar Stats {/* #get-scale-bar-stats */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#get-scale-bar-stats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#get-scale-bar-stats)

```python
async def get_scale_bar_stats(
        self,
        scale_bar_name: CollectionObjectName,
    ) -> GetScaleBarStatsResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Bar Check {/* #scale-bar-check */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#scale-bar-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#scale-bar-check)

```python
async def scale_bar_check(
        self,
        scale_bar_point_a: PointName,
        scale_bar_point_b: PointName,
        *,
        current_temperature: float = 0.000000,
        length_of_bar_at_68f: float = 0.000000,
        material_cte: float = 0.000000,
        tolerance: float = 0.000000,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `current_temperature` | Temperature in degrees Fahrenheit. |
| `material_cte` | Coefficient in parts per million per degree Fahrenheit. |

## Set Inward Positive Normal {/* #set-inward-positive-normal */}

[MP Catalog](/mp-command-catalog/commands/scale-bar-operations#set-inward-positive-normal) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/scale-bar-operations#set-inward-positive-normal)

```python
async def set_inward_positive_normal(
        self,
        object_name: CollectionObjectName,
        *,
        inward_positive: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2024.1.0508.5)
