---
title: Construction Operations / Scale Bars
description: Next Briosa Python API for scale-bar construction.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

## construct_scale_bar

```python
async def construct_scale_bar(
    self,
    scale_bar_name: CollectionItemName,
    begin_target: PointName,
    end_target: PointName,
    *,
    length: float = 0.0,
    uncertainty: float = 0.0,
    use_relative_tolerances: bool = True,
    use_high_tolerances: bool = False,
    use_low_tolerances: bool = False,
    high_tolerance: float = 0.0,
    low_tolerance: float = 0.0,
) -> None: ...
```

Relative high/low values are offsets from nominal; with relative tolerances
disabled they are actual upper and lower bounds. The client adds no validation
across these settings and never automatically replays the call.

```python
await briosa.construction_operations.construct_scale_bar(
    scale_bar,
    begin_point,
    end_point,
    length=64.0,
    uncertainty=0.001,
    use_high_tolerances=True,
    use_low_tolerances=True,
    high_tolerance=0.005,
    low_tolerance=-0.005,
)
```

[Catalog](/mp-command-catalog/commands/construction-operations-scale-bars) · [gRPC](/api/grpc/construction-operations-scale-bars)
