---
title: Dimension Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Dimension Operations

[SA 2026.1.0529.7](/api/python/dimension-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/dimension-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Dimension {/* #delete-dimension */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#delete-dimension) · [gRPC Contract](/api/grpc/dimension-operations#delete-dimension)

```python
async def delete_dimension(
        self,
        dimension_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Dimension Value {/* #get-dimension-value */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#get-dimension-value) · [gRPC Contract](/api/grpc/dimension-operations#get-dimension-value)

```python
async def get_dimension_value(
        self,
        dimension_name: CollectionObjectName,
    ) -> GetDimensionValueResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Dimension Tolerance {/* #set-dimension-tolerance */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) · [gRPC Contract](/api/grpc/dimension-operations#set-dimension-tolerance)

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

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
