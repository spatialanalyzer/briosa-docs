---
title: Dimension Operations
description: Current and next gRPC contracts for supported Dimension Operations MP commands.
toc_max_heading_level: 2
---

# Dimension Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Delete Dimension

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Delete Dimension](/mp-command-catalog/commands/dimension-operations#delete-dimension) |
| Service | `briosa.DimensionOperations` |
| RPC | `DeleteDimension` |
| Operation ID | `dimension_operations.delete_dimension` |
| Route | `/briosa.DimensionOperations/DeleteDimension` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteDimension(DeleteDimensionRequest) returns (DeleteDimensionResult);

message DeleteDimensionRequest {
  optional CollectionObjectName dimension_name = 1;
}

message DeleteDimensionResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Get Dimension Value

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Get Dimension Value](/mp-command-catalog/commands/dimension-operations#get-dimension-value) |
| Service | `briosa.DimensionOperations` |
| RPC | `GetDimensionValue` |
| Operation ID | `dimension_operations.get_dimension_value` |
| Route | `/briosa.DimensionOperations/GetDimensionValue` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `CollectionObjectName` | `Dimension Name` | Required |
| Result | 1 | `dimensions_value` | `double` | `Dimensions Value` | — |
| Result | 2 | `nominal_value_enabled` | `bool` | `Nominal Value Enabled?` | — |
| Result | 3 | `high_tolerance_enabled` | `bool` | `High Tolerance Enabled?` | — |
| Result | 4 | `low_tolerance_enabled` | `bool` | `Low Tolerance Enabled?` | — |
| Result | 5 | `nominal_value` | `double` | `Nominal Value` | — |
| Result | 6 | `high_tolerance` | `double` | `High Tolerance` | — |
| Result | 7 | `low_tolerance` | `double` | `Low Tolerance` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetDimensionValue(GetDimensionValueRequest) returns (GetDimensionValueResult);

message GetDimensionValueRequest {
  optional CollectionObjectName dimension_name = 1;
}

message GetDimensionValueResult {
  optional double dimensions_value = 1;
  optional bool nominal_value_enabled = 2;
  optional bool high_tolerance_enabled = 3;
  optional bool low_tolerance_enabled = 4;
  optional double nominal_value = 5;
  optional double high_tolerance = 6;
  optional double low_tolerance = 7;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Set Dimension Tolerance

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Set Dimension Tolerance](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance) |
| Service | `briosa.DimensionOperations` |
| RPC | `SetDimensionTolerance` |
| Operation ID | `dimension_operations.set_dimension_tolerance` |
| Route | `/briosa.DimensionOperations/SetDimensionTolerance` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `CollectionItemName` | `Dimension Name` | Required |
| Request | 2 | `enable_nominal` | `bool` | `Enable Nominal` | false |
| Request | 3 | `enable_high` | `bool` | `Enable High` | false |
| Request | 4 | `enable_low` | `bool` | `Enable Low` | false |
| Request | 5 | `nominal` | `double` | `Nominal` | 0.000000 |
| Request | 6 | `high_tolerance` | `double` | `High Tolerance` | 0.000000 |
| Request | 7 | `low_tolerance` | `double` | `Low Tolerance` | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetDimensionTolerance(SetDimensionToleranceRequest) returns (SetDimensionToleranceResult);

message SetDimensionToleranceRequest {
  optional CollectionItemName dimension_name = 1;
  optional bool enable_nominal = 2;
  optional bool enable_high = 3;
  optional bool enable_low = 4;
  optional double nominal = 5;
  optional double high_tolerance = 6;
  optional double low_tolerance = 7;
}

message SetDimensionToleranceResult {
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
