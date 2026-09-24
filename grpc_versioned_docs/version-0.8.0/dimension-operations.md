---
title: Dimension Operations
description: Released grpc 0.8.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Dimension Operations

[SA 2026.1.0529.7](/api/grpc/dimension-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/dimension-operations)

This reference covers **SA 2026.1.0529.7**, Server **0.8.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Dimension {/* #delete-dimension */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#delete-dimension)

`/briosa.DimensionOperations/DeleteDimension` · Operation ID: `dimension_operations.delete_dimension`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `optional CollectionObjectName` | Dimension Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteDimension(DeleteDimensionRequest) returns (DeleteDimensionResult);

message DeleteDimensionRequest {
  optional CollectionObjectName dimension_name = 1;
}

message DeleteDimensionResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Dimension Value {/* #get-dimension-value */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#get-dimension-value)

`/briosa.DimensionOperations/GetDimensionValue` · Operation ID: `dimension_operations.get_dimension_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `optional CollectionObjectName` | Dimension Name | Required |
| Result | 1 | `dimensions_value` | `optional double` | Dimensions Value | — |
| Result | 2 | `nominal_value_enabled` | `optional bool` | Nominal Value Enabled? | — |
| Result | 3 | `high_tolerance_enabled` | `optional bool` | High Tolerance Enabled? | — |
| Result | 4 | `low_tolerance_enabled` | `optional bool` | Low Tolerance Enabled? | — |
| Result | 5 | `nominal_value` | `optional double` | Nominal Value | — |
| Result | 6 | `high_tolerance` | `optional double` | High Tolerance | — |
| Result | 7 | `low_tolerance` | `optional double` | Low Tolerance | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Set Dimension Tolerance {/* #set-dimension-tolerance */}

[MP Catalog](/mp-command-catalog/commands/dimension-operations#set-dimension-tolerance)

`/briosa.DimensionOperations/SetDimensionTolerance` · Operation ID: `dimension_operations.set_dimension_tolerance`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `dimension_name` | `optional CollectionItemName` | Dimension Name | Required |
| Request | 2 | `enable_nominal` | `optional bool` | Enable Nominal | false |
| Request | 3 | `enable_high` | `optional bool` | Enable High | false |
| Request | 4 | `enable_low` | `optional bool` | Enable Low | false |
| Request | 5 | `nominal` | `optional double` | Nominal | 0.000000 |
| Request | 6 | `high_tolerance` | `optional double` | High Tolerance | 0.000000 |
| Request | 7 | `low_tolerance` | `optional double` | Low Tolerance | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.8.0/targets/2026.1.0529.7)
