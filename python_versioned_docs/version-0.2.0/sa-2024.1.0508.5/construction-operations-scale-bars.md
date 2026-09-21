---
title: Construction Operations / Scale Bars
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Scale Bars

[SA 2026.1.0529.7](/api/python/construction-operations-scale-bars) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/construction-operations-scale-bars)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Construct Scale Bar {/* #construct-scale-bar */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-scale-bars#construct-scale-bar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/construction-operations-scale-bars#construct-scale-bar)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## construct_scale_bar {/* #construct_scale_bar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
