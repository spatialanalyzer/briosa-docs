---
title: Construction Operations / Callout Views and Callouts
description: Next gRPC contracts for selected callout-view MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

:::note[Next Contracts]
These contracts are not callable until implemented and released.
:::

All RPCs use `briosa.ConstructionOperations`. Every result includes
`MpExecutionDetails execution = 1000`, and none is automatically replayed after
an unknown execution outcome.

## Shared Callout Property Values

```proto
message Font {
  optional string family = 1;
  optional int32 point_size = 2;
  optional bool bold = 3;
  optional bool italic = 4;
  optional bool underline = 5;
}

message CalloutViewProperties {
  optional bool lock_view_point = 1;
  optional bool recall_working_frame = 2;
  optional bool recall_visible_layer = 3;
  optional int32 callout_leader_thickness = 4;
  optional Color callout_leader_color = 5;
  optional int32 callout_border_thickness = 6;
  optional Color callout_border_color = 7;
  optional bool divide_text_with_lines = 8;
  optional Font font = 9;
}
```

The property defaults are false for all three view flags, leader thickness 2,
leader RGB `(128, 128, 128)`, border thickness 2, border RGB `(0, 0, 255)`, no
text dividers, and `MS Shell Dlg` 8-point regular font.

## Create Vector Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreateVectorCallout` |
| Operation ID | `construction_operations.create_vector_callout` |
| Route | `/briosa.ConstructionOperations/CreateVectorCallout` |
| Validation | At Risk - fixture validation required |

| Field | Type | Exact MP Argument | Default |
| --- | --- | --- | --- |
| `destination_callout_view` | `CollectionItemName` | `Destination Callout View` | Required |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `vector_name` | `string` | `Vector Name` | Required |
| `view_x_position`, `view_y_position` | `double` | View positions | 0, 0 |
| `show_collection`, `show_vector_group`, `show_vector_name` | `bool` | Corresponding display flags | false, false, true |
| `show_dx`, `show_dy`, `show_dz`, `show_d_mag` | `bool` | Delta display flags | true, true, true, true |
| `show_tolerance_color`, `show_out_of_tolerance_value`, `show_tolerance_range` | `bool` | Tolerance display flags | true, false, false |
| `show_vector_color`, `show_start_point`, `show_end_point`, `show_units` | `bool` | Corresponding display flags | false, false, false, false |
| `additional_notes` | `repeated string` | `Additional Notes (blank for none)` | Empty |
| `attach_callout_to_end_point`, `use_default_placement` | `bool` | Corresponding placement flags | false, false |

Returns execution details only. [Catalog entry](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout)

## Create Min/Max Vector Group Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreateMinMaxVectorGroupCallout` |
| Operation ID | `construction_operations.create_min_max_vector_group_callout` |
| Route | `/briosa.ConstructionOperations/CreateMinMaxVectorGroupCallout` |
| Validation | At Risk - fixture validation required |

The request requires `destination_callout_view: CollectionItemName` and
`vector_group_name: CollectionObjectName`. Integer fields
`number_of_vectors_with_highest_mag` and `number_of_vectors_with_lowest_mag`
default to 1. Display flags default exactly as follows:

| Fields | Defaults |
| --- | --- |
| `show_collection`, `show_vector_group`, `show_vector_name` | false, false, true |
| `show_dx`, `show_dy`, `show_dz`, `show_d_mag` | false, false, false, true |
| `show_tolerance_color`, `tolerance_color_blue_green_red` | true, false |
| `show_out_of_tolerance_value`, `show_tolerance_range`, `show_vector_color` | true, false, true |
| `show_start_point`, `show_end_point`, `show_units` | false, false, false |
| `attach_callout_to_end_point`, `use_default_placement` | true, false |

Returns execution details only. [Catalog entry](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

## Create Point Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreatePointCallout` |
| Operation ID | `construction_operations.create_point_callout` |
| Route | `/briosa.ConstructionOperations/CreatePointCallout` |
| Validation | At Risk - fixture validation required |

The request requires `destination_callout_view: CollectionItemName` and
`point: PointName`. X/Y positions default to 0. `show_point_collection`
defaults false; group and target default true. X/R, Y/Theta, and Z/Phi display
default true; units and all four uncertainty fields default false.
`desired_coordinate_system: CoordinateSystemType` defaults Cartesian,
`notes` is `repeated string`, and `use_default_placement` defaults false.

Returns execution details only. [Catalog entry](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout)

## Create Point Comparison Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreatePointComparisonCallout` |
| Operation ID | `construction_operations.create_point_comparison_callout` |
| Route | `/briosa.ConstructionOperations/CreatePointComparisonCallout` |
| Validation | At Risk - fixture validation required |

The request requires a destination callout view and two `PointName` values.
X/Y positions default to 0. For both points, collection and coordinate display
default false while group and target display default true. All four delta
display flags default true. Optional fields are the three axis-comment strings
and repeated note lines. `use_default_placement` defaults false.

Returns execution details only. [Catalog entry](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

## Create Relationship Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreateRelationshipCallout` |
| Operation ID | `construction_operations.create_relationship_callout` |
| Route | `/briosa.ConstructionOperations/CreateRelationshipCallout` |

The request requires `destination_callout_view: CollectionItemName` and
`relationship_name: CollectionItemName`. X/Y positions default to 0 and
`additional_notes` is a repeated string. Returns execution details only.

## Create Picture Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreatePictureCallout` |
| Operation ID | `construction_operations.create_picture_callout` |
| Route | `/briosa.ConstructionOperations/CreatePictureCallout` |

The request requires a destination callout view and picture identity. X/Y
positions default to 0.4/0.6, `scale_image_percent` defaults to 100 and must be
10–200, and `object_for_callout_anchor_point` is optional. Returns execution
details only.

## Create Text Callout

| Contract Item | Value |
| --- | --- |
| RPC | `CreateTextCallout` |
| Operation ID | `construction_operations.create_text_callout` |
| Route | `/briosa.ConstructionOperations/CreateTextCallout` |

The request requires a destination callout view and non-empty repeated `text`.
X/Y positions default to 0.4/0.6 and `callout_anchor_point: PointName` is
optional. Returns execution details only.

## Make a Callout View Ref List - WildCard Selection

| Contract Item | Value |
| --- | --- |
| RPC | `MakeCalloutViewRefListWildcardSelection` |
| Operation ID | `construction_operations.make_callout_view_ref_list_wildcard_selection` |
| Route | `/briosa.ConstructionOperations/MakeCalloutViewRefListWildcardSelection` |
| Validation | At Risk - exact-target output binding validation required |

```proto
message MakeCalloutViewRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1; // default "*"
  optional string callout_view_wildcard_criteria = 2; // default "*"
}

message MakeCalloutViewRefListWildcardSelectionResult {
  repeated CollectionItemName callout_views = 1;
  MpExecutionDetails execution = 1000;
}
```

The result is an ordinary list of callout-view identities. Briosa retains no MP
reference-list state.

## Set Default Callout View Properties

| Contract Item | Value |
| --- | --- |
| RPC | `SetDefaultCalloutViewProperties` |
| Operation ID | `construction_operations.set_default_callout_view_properties` |
| Route | `/briosa.ConstructionOperations/SetDefaultCalloutViewProperties` |

The request has `default_callout_view_name: string` defaulting to `Callout 1`
and optional `properties: CalloutViewProperties`. Returns execution details
only.

## Set Callout View Properties

| Contract Item | Value |
| --- | --- |
| RPC | `SetCalloutViewProperties` |
| Operation ID | `construction_operations.set_callout_view_properties` |
| Route | `/briosa.ConstructionOperations/SetCalloutViewProperties` |
| Validation | At Risk - exact-target input binding and fixture validation required |

The request contains required repeated `callout_views: CollectionItemName` and
optional `properties: CalloutViewProperties`. The server rejects an empty list.
Returns execution details only.

## Delete Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `DeleteCalloutView` |
| Operation ID | `construction_operations.delete_callout_view` |
| Route | `/briosa.ConstructionOperations/DeleteCalloutView` |

The request requires `callout_view: CollectionItemName`. This destructive call
returns execution details only and is never automatically replayed.

## Rename Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `RenameCalloutView` |
| Operation ID | `construction_operations.rename_callout_view` |
| Route | `/briosa.ConstructionOperations/RenameCalloutView` |

The request requires `original_callout_view_name` and `new_callout_view_name`
as `CollectionItemName`; `overwrite_if_exists` defaults false. Returns execution
details only.

## Auto Arrange Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `AutoArrangeCalloutView` |
| Operation ID | `construction_operations.auto_arrange_callout_view` |
| Route | `/briosa.ConstructionOperations/AutoArrangeCalloutView` |

The request requires `callout_view: CollectionItemName`. Returns execution
details only.

## Get Number of Callouts in Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `GetNumberOfCalloutsInCalloutView` |
| Operation ID | `construction_operations.get_number_of_callouts_in_callout_view` |
| Route | `/briosa.ConstructionOperations/GetNumberOfCalloutsInCalloutView` |

The request requires a callout view. The result returns
`int32 callouts_count = 1` plus execution details.

## Get I-th Callout Position in Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `GetIthCalloutPositionInCalloutView` |
| Operation ID | `construction_operations.get_ith_callout_position_in_callout_view` |
| Route | `/briosa.ConstructionOperations/GetIthCalloutPositionInCalloutView` |

The request requires `callout_view: CollectionItemName` and a non-negative
`callout_view_index: int32`. The result returns integer `x_position`,
`y_position`, `x_anchor_position`, `y_anchor_position`, `callout_width`, and
`callout_height`, followed by execution details.

## Set I-th Callout Position in Callout View

| Contract Item | Value |
| --- | --- |
| RPC | `SetIthCalloutPositionInCalloutView` |
| Operation ID | `construction_operations.set_ith_callout_position_in_callout_view` |
| Route | `/briosa.ConstructionOperations/SetIthCalloutPositionInCalloutView` |

The request requires a callout view, non-negative `callout_view_index`, and
integer `x_position` and `y_position`. Returns execution details only.
