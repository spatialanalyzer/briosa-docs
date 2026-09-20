---
title: Construction Operations / Callout Views and Callouts
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Construction Operations / Callout Views and Callouts

[SA 2026.1.0529.7](/api/grpc/construction-operations-callout-views-and-callouts) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/construction-operations-callout-views-and-callouts)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Create Vector Callout {/* #create-vector-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-vector-callout)

`/briosa.ConstructionOperations/CreateVectorCallout` · Operation ID: `construction_operations.create_vector_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 3 | `vector_name` | `optional string` | Vector Name | Empty |
| Request | 4 | `view_x_position` | `optional double` | View X Position | 0.000000 |
| Request | 5 | `view_y_position` | `optional double` | View Y Position | 0.000000 |
| Request | 6 | `show_collection` | `optional bool` | Show Collection? | false |
| Request | 7 | `show_vector_group` | `optional bool` | Show Vector Group? | false |
| Request | 8 | `show_vector_name` | `optional bool` | Show Vector Name? | true |
| Request | 9 | `show_dx` | `optional bool` | Show dX? | true |
| Request | 10 | `show_dy` | `optional bool` | Show dY? | true |
| Request | 11 | `show_dz` | `optional bool` | Show dZ? | true |
| Request | 12 | `show_d_mag` | `optional bool` | Show dMag? | true |
| Request | 13 | `show_tolerance_color` | `optional bool` | Show Tolerance Color? | true |
| Request | 14 | `show_out_of_tolerance_value` | `optional bool` | Show Out of Tolerance Value? | false |
| Request | 15 | `show_tolerance_range` | `optional bool` | Show Tolerance Range? | false |
| Request | 16 | `show_vector_color` | `optional bool` | Show Vector Color? | false |
| Request | 17 | `show_start_point` | `optional bool` | Show Start Point? | false |
| Request | 18 | `show_end_point` | `optional bool` | Show End Point? | false |
| Request | 19 | `show_units` | `optional bool` | Show Units? | false |
| Request | 20 | `additional_notes` | `repeated string` | Additional Notes (blank for none) | Empty |
| Request | 21 | `attach_callout_to_end_point` | `optional bool` | Attach Callout to End Point? | false |
| Request | 22 | `use_default_placement` | `optional bool` | Use default placement? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateVectorCallout(CreateVectorCalloutRequest) returns (CreateVectorCalloutResult);

message CreateVectorCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional CollectionObjectName vector_group_name = 2;
  optional string vector_name = 3;
  optional double view_x_position = 4;
  optional double view_y_position = 5;
  optional bool show_collection = 6;
  optional bool show_vector_group = 7;
  optional bool show_vector_name = 8;
  optional bool show_dx = 9;
  optional bool show_dy = 10;
  optional bool show_dz = 11;
  optional bool show_d_mag = 12;
  optional bool show_tolerance_color = 13;
  optional bool show_out_of_tolerance_value = 14;
  optional bool show_tolerance_range = 15;
  optional bool show_vector_color = 16;
  optional bool show_start_point = 17;
  optional bool show_end_point = 18;
  optional bool show_units = 19;
  repeated string additional_notes = 20;
  optional bool attach_callout_to_end_point = 21;
  optional bool use_default_placement = 22;
}

message CreateVectorCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Min/Max Vector Group Callout {/* #create-minmax-vector-group-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-minmax-vector-group-callout)

`/briosa.ConstructionOperations/CreateMinMaxVectorGroupCallout` · Operation ID: `construction_operations.create_min_max_vector_group_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 3 | `number_of_vectors_with_highest_mag` | `optional int32` | Number of vectors with Highest Mag? | 1 |
| Request | 4 | `number_of_vectors_with_lowest_mag` | `optional int32` | Number of vectors with Lowest Mag? | 1 |
| Request | 5 | `show_collection` | `optional bool` | Show Collection? | false |
| Request | 6 | `show_vector_group` | `optional bool` | Show Vector Group? | false |
| Request | 7 | `show_vector_name` | `optional bool` | Show Vector Name? | true |
| Request | 8 | `show_dx` | `optional bool` | Show dX? | false |
| Request | 9 | `show_dy` | `optional bool` | Show dY? | false |
| Request | 10 | `show_dz` | `optional bool` | Show dZ? | false |
| Request | 11 | `show_d_mag` | `optional bool` | Show dMag? | true |
| Request | 12 | `show_tolerance_color` | `optional bool` | Show Tolerance Color? | true |
| Request | 13 | `tolerance_color_blue_green_red` | `optional bool` | Tolerance Color Blue(+)/Green/Red(-)? | false |
| Request | 14 | `show_out_of_tolerance_value` | `optional bool` | Show Out of Tolerance Value? | true |
| Request | 15 | `show_tolerance_range` | `optional bool` | Show Tolerance Range? | false |
| Request | 16 | `show_vector_color` | `optional bool` | Show Vector Color? | true |
| Request | 17 | `show_start_point` | `optional bool` | Show Start Point? | false |
| Request | 18 | `show_end_point` | `optional bool` | Show End Point? | false |
| Request | 19 | `show_units` | `optional bool` | Show Units? | false |
| Request | 20 | `attach_callout_to_end_point` | `optional bool` | Attach Callout to End Point? | true |
| Request | 21 | `use_default_placement` | `optional bool` | Use default placement? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateMinMaxVectorGroupCallout(CreateMinMaxVectorGroupCalloutRequest) returns (CreateMinMaxVectorGroupCalloutResult);

message CreateMinMaxVectorGroupCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional CollectionObjectName vector_group_name = 2;
  optional int32 number_of_vectors_with_highest_mag = 3;
  optional int32 number_of_vectors_with_lowest_mag = 4;
  optional bool show_collection = 5;
  optional bool show_vector_group = 6;
  optional bool show_vector_name = 7;
  optional bool show_dx = 8;
  optional bool show_dy = 9;
  optional bool show_dz = 10;
  optional bool show_d_mag = 11;
  optional bool show_tolerance_color = 12;
  optional bool tolerance_color_blue_green_red = 13;
  optional bool show_out_of_tolerance_value = 14;
  optional bool show_tolerance_range = 15;
  optional bool show_vector_color = 16;
  optional bool show_start_point = 17;
  optional bool show_end_point = 18;
  optional bool show_units = 19;
  optional bool attach_callout_to_end_point = 20;
  optional bool use_default_placement = 21;
}

message CreateMinMaxVectorGroupCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Point Callout {/* #create-point-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-callout)

`/briosa.ConstructionOperations/CreatePointCallout` · Operation ID: `construction_operations.create_point_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `point` | `optional PointName` | Point | Required |
| Request | 3 | `view_x_position` | `optional double` | View X Position | 0.000000 |
| Request | 4 | `view_y_position` | `optional double` | View Y Position | 0.000000 |
| Request | 5 | `show_point_collection` | `optional bool` | Show Point Collection? | false |
| Request | 6 | `show_point_group` | `optional bool` | Show Point Group? | true |
| Request | 7 | `show_point_target` | `optional bool` | Show Point Target? | true |
| Request | 8 | `show_x_r` | `optional bool` | Show X (R)? | true |
| Request | 9 | `show_y_theta` | `optional bool` | Show Y (Theta)? | true |
| Request | 10 | `show_z_phi` | `optional bool` | Show Z (Phi)? | true |
| Request | 11 | `show_units` | `optional bool` | Show Units? | false |
| Request | 12 | `show_ux_ur` | `optional bool` | Show Ux (Ur)? | false |
| Request | 13 | `show_uy_utheta` | `optional bool` | Show Uy (Utheta)? | false |
| Request | 14 | `show_uz_uphi` | `optional bool` | Show Uz (Uphi)? | false |
| Request | 15 | `show_umag` | `optional bool` | Show Umag? | false |
| Request | 16 | `desired_coordinate_system` | `optional CoordinateSystemType` | Desired Coordinate System | Required |
| Request | 17 | `notes` | `repeated string` | Notes (blank for none) | Empty |
| Request | 18 | `use_default_placement` | `optional bool` | Use default placement? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreatePointCallout(CreatePointCalloutRequest) returns (CreatePointCalloutResult);

message CreatePointCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional PointName point = 2;
  optional double view_x_position = 3;
  optional double view_y_position = 4;
  optional bool show_point_collection = 5;
  optional bool show_point_group = 6;
  optional bool show_point_target = 7;
  optional bool show_x_r = 8;
  optional bool show_y_theta = 9;
  optional bool show_z_phi = 10;
  optional bool show_units = 11;
  optional bool show_ux_ur = 12;
  optional bool show_uy_utheta = 13;
  optional bool show_uz_uphi = 14;
  optional bool show_umag = 15;
  optional CoordinateSystemType desired_coordinate_system = 16;
  repeated string notes = 17;
  optional bool use_default_placement = 18;
}

message CreatePointCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Point Comparison Callout {/* #create-point-comparison-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-point-comparison-callout)

`/briosa.ConstructionOperations/CreatePointComparisonCallout` · Operation ID: `construction_operations.create_point_comparison_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `first_point` | `optional PointName` | First Point | Required |
| Request | 3 | `second_point` | `optional PointName` | Second Point | Required |
| Request | 4 | `view_x_position` | `optional double` | View X Position | 0.000000 |
| Request | 5 | `view_y_position` | `optional double` | View Y Position | 0.000000 |
| Request | 6 | `show_first_point_collection` | `optional bool` | Show First Point Collection? | false |
| Request | 7 | `show_first_point_group` | `optional bool` | Show First Point Group? | true |
| Request | 8 | `show_first_point_target` | `optional bool` | Show First Point Target? | true |
| Request | 9 | `show_first_point_coordinates` | `optional bool` | Show First Point Coordinates? | false |
| Request | 10 | `show_second_point_collection` | `optional bool` | Show Second Point Collection? | false |
| Request | 11 | `show_second_point_group` | `optional bool` | Show Second Point Group? | true |
| Request | 12 | `show_second_point_target` | `optional bool` | Show Second Point Target? | true |
| Request | 13 | `show_second_point_coordinates` | `optional bool` | Show Second Point Coordinates? | false |
| Request | 14 | `show_dx` | `optional bool` | Show dX? | true |
| Request | 15 | `show_dy` | `optional bool` | Show dY? | true |
| Request | 16 | `show_dz` | `optional bool` | Show dZ? | true |
| Request | 17 | `show_d_mag` | `optional bool` | Show dMag? | true |
| Request | 18 | `additional_x_comments` | `optional string` | Additional X Comments (blank for none) | Empty |
| Request | 19 | `additional_y_comments` | `optional string` | Additional Y Comments (blank for none) | Empty |
| Request | 20 | `additional_z_comments` | `optional string` | Additional Z Comments (blank for none) | Empty |
| Request | 21 | `additional_notes` | `repeated string` | Additional Notes (blank for none) | Empty |
| Request | 22 | `use_default_placement` | `optional bool` | Use default placement? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreatePointComparisonCallout(CreatePointComparisonCalloutRequest) returns (CreatePointComparisonCalloutResult);

message CreatePointComparisonCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional PointName first_point = 2;
  optional PointName second_point = 3;
  optional double view_x_position = 4;
  optional double view_y_position = 5;
  optional bool show_first_point_collection = 6;
  optional bool show_first_point_group = 7;
  optional bool show_first_point_target = 8;
  optional bool show_first_point_coordinates = 9;
  optional bool show_second_point_collection = 10;
  optional bool show_second_point_group = 11;
  optional bool show_second_point_target = 12;
  optional bool show_second_point_coordinates = 13;
  optional bool show_dx = 14;
  optional bool show_dy = 15;
  optional bool show_dz = 16;
  optional bool show_d_mag = 17;
  optional string additional_x_comments = 18;
  optional string additional_y_comments = 19;
  optional string additional_z_comments = 20;
  repeated string additional_notes = 21;
  optional bool use_default_placement = 22;
}

message CreatePointComparisonCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Relationship Callout {/* #create-relationship-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-relationship-callout)

`/briosa.ConstructionOperations/CreateRelationshipCallout` · Operation ID: `construction_operations.create_relationship_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `relationship_name` | `optional CollectionItemName` | Relationship Name | Required |
| Request | 3 | `view_x_position` | `optional double` | View X Position | 0.000000 |
| Request | 4 | `view_y_position` | `optional double` | View Y Position | 0.000000 |
| Request | 5 | `additional_notes` | `repeated string` | Additional Notes (blank for none) | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateRelationshipCallout(CreateRelationshipCalloutRequest) returns (CreateRelationshipCalloutResult);

message CreateRelationshipCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional CollectionItemName relationship_name = 2;
  optional double view_x_position = 3;
  optional double view_y_position = 4;
  repeated string additional_notes = 5;
}

message CreateRelationshipCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Picture Callout {/* #create-picture-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-picture-callout)

`/briosa.ConstructionOperations/CreatePictureCallout` · Operation ID: `construction_operations.create_picture_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `picture_name` | `optional CollectionItemName` | Picture Name | Required |
| Request | 3 | `view_x_position` | `optional double` | View X Position | 0.400000 |
| Request | 4 | `view_y_position` | `optional double` | View Y Position | 0.600000 |
| Request | 5 | `scale_image_percent` | `optional int32` | Scale Image Percent (10-200) | Omitted |
| Request | 6 | `object_for_callout_anchor_point` | `optional CollectionItemName` | Object for Callout Anchor Point | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreatePictureCallout(CreatePictureCalloutRequest) returns (CreatePictureCalloutResult);

message CreatePictureCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  optional CollectionItemName picture_name = 2;
  optional double view_x_position = 3;
  optional double view_y_position = 4;
  optional int32 scale_image_percent = 5;
  optional CollectionItemName object_for_callout_anchor_point = 6;
}

message CreatePictureCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Text Callout {/* #create-text-callout */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#create-text-callout)

`/briosa.ConstructionOperations/CreateTextCallout` · Operation ID: `construction_operations.create_text_callout`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `destination_callout_view` | `optional CollectionItemName` | Destination Callout View | Required |
| Request | 2 | `text` | `repeated string` | Text | Omitted |
| Request | 3 | `view_x_position` | `optional double` | View X Position | 0.400000 |
| Request | 4 | `view_y_position` | `optional double` | View Y Position | 0.600000 |
| Request | 5 | `callout_anchor_point` | `optional PointName` | Callout Anchor Point (Optional) | Omitted |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateTextCallout(CreateTextCalloutRequest) returns (CreateTextCalloutResult);

message CreateTextCalloutRequest {
  optional CollectionItemName destination_callout_view = 1;
  repeated string text = 2;
  optional double view_x_position = 3;
  optional double view_y_position = 4;
  optional PointName callout_anchor_point = 5;
}

message CreateTextCalloutResult {
  MpExecutionDetails execution = 1000;
}
```

## Make a Callout View Ref List - WildCard Selection {/* #make-a-callout-view-ref-list---wildcard-selection */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#make-a-callout-view-ref-list---wildcard-selection)

`/briosa.ConstructionOperations/MakeCalloutViewRefListWildcardSelection` · Operation ID: `construction_operations.make_callout_view_ref_list_wildcard_selection`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `collection_wildcard_criteria` | `optional string` | Collection Wildcard Criteria | * |
| Request | 2 | `callout_view_wildcard_criteria` | `optional string` | Callout View Wildcard Criteria | * |
| Result | 1 | `callout_views` | `repeated CollectionItemName` | Resultant Callout View List | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCalloutViewRefListWildcardSelection(MakeCalloutViewRefListWildcardSelectionRequest) returns (MakeCalloutViewRefListWildcardSelectionResult);

message MakeCalloutViewRefListWildcardSelectionRequest {
  optional string collection_wildcard_criteria = 1; // default "*"
  optional string callout_view_wildcard_criteria = 2; // default "*"
}

message MakeCalloutViewRefListWildcardSelectionResult {
  repeated CollectionItemName callout_views = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Default Callout View Properties {/* #set-default-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-default-callout-view-properties)

`/briosa.ConstructionOperations/SetDefaultCalloutViewProperties` · Operation ID: `construction_operations.set_default_callout_view_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `default_callout_view_name` | `optional string` | Default Callout View Name | Callout 1 |
| Request | 2 | `properties` | `optional CalloutViewProperties` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetDefaultCalloutViewProperties(SetDefaultCalloutViewPropertiesRequest) returns (SetDefaultCalloutViewPropertiesResult);

message SetDefaultCalloutViewPropertiesRequest {
  optional string default_callout_view_name = 1;
  optional CalloutViewProperties properties = 2;
}

message SetDefaultCalloutViewPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Callout View Properties {/* #set-callout-view-properties */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-callout-view-properties)

`/briosa.ConstructionOperations/SetCalloutViewProperties` · Operation ID: `construction_operations.set_callout_view_properties`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_views` | `repeated CollectionItemName` | Callout View List | Required |
| Request | 2 | `properties` | `optional CalloutViewProperties` | See Typed Binding | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCalloutViewProperties(SetCalloutViewPropertiesRequest) returns (SetCalloutViewPropertiesResult);

message SetCalloutViewPropertiesRequest {
  repeated CollectionItemName callout_views = 1;
  optional CalloutViewProperties properties = 2;
}

message SetCalloutViewPropertiesResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Callout View {/* #delete-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#delete-callout-view)

`/briosa.ConstructionOperations/DeleteCalloutView` · Operation ID: `construction_operations.delete_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view` | `optional CollectionItemName` | Callout View | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCalloutView(DeleteCalloutViewRequest) returns (DeleteCalloutViewResult);

message DeleteCalloutViewRequest {
  optional CollectionItemName callout_view = 1;
}

message DeleteCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Callout View {/* #rename-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#rename-callout-view)

`/briosa.ConstructionOperations/RenameCalloutView` · Operation ID: `construction_operations.rename_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_callout_view_name` | `optional CollectionItemName` | Original Callout View Name | Required |
| Request | 2 | `new_callout_view_name` | `optional CollectionItemName` | New Callout View Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenameCalloutView(RenameCalloutViewRequest) returns (RenameCalloutViewResult);

message RenameCalloutViewRequest {
  optional CollectionItemName original_callout_view_name = 1;
  optional CollectionItemName new_callout_view_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenameCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Auto Arrange Callout View {/* #auto-arrange-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#auto-arrange-callout-view)

`/briosa.ConstructionOperations/AutoArrangeCalloutView` · Operation ID: `construction_operations.auto_arrange_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view` | `optional CollectionItemName` | Callout View | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AutoArrangeCalloutView(AutoArrangeCalloutViewRequest) returns (AutoArrangeCalloutViewResult);

message AutoArrangeCalloutViewRequest {
  optional CollectionItemName callout_view = 1;
}

message AutoArrangeCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Number of Callouts in Callout View {/* #get-number-of-callouts-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-number-of-callouts-in-callout-view)

`/briosa.ConstructionOperations/GetNumberOfCalloutsInCalloutView` · Operation ID: `construction_operations.get_number_of_callouts_in_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view` | `optional CollectionItemName` | Callout View | Required |
| Result | 1 | `callouts_count` | `optional int32` | Callouts Count | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetNumberOfCalloutsInCalloutView(GetNumberOfCalloutsInCalloutViewRequest) returns (GetNumberOfCalloutsInCalloutViewResult);

message GetNumberOfCalloutsInCalloutViewRequest {
  optional CollectionItemName callout_view = 1;
}

message GetNumberOfCalloutsInCalloutViewResult {
  optional int32 callouts_count = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get I-th Callout Position in Callout View {/* #get-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#get-i-th-callout-position-in-callout-view)

`/briosa.ConstructionOperations/GetIthCalloutPositionInCalloutView` · Operation ID: `construction_operations.get_ith_callout_position_in_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view` | `optional CollectionItemName` | Callout View | Required |
| Request | 2 | `callout_view_index` | `optional int32` | Callout View Index | 0 |
| Result | 1 | `x_position` | `optional int32` | X Position | — |
| Result | 2 | `y_position` | `optional int32` | Y Position | — |
| Result | 3 | `x_anchor_position` | `optional int32` | X Anchor Position | — |
| Result | 4 | `y_anchor_position` | `optional int32` | Y Anchor Position | — |
| Result | 5 | `callout_width` | `optional int32` | Callout Width | — |
| Result | 6 | `callout_height` | `optional int32` | Callout Height | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetIthCalloutPositionInCalloutView(GetIthCalloutPositionInCalloutViewRequest) returns (GetIthCalloutPositionInCalloutViewResult);

message GetIthCalloutPositionInCalloutViewRequest {
  optional CollectionItemName callout_view = 1;
  optional int32 callout_view_index = 2;
}

message GetIthCalloutPositionInCalloutViewResult {
  optional int32 x_position = 1;
  optional int32 y_position = 2;
  optional int32 x_anchor_position = 3;
  optional int32 y_anchor_position = 4;
  optional int32 callout_width = 5;
  optional int32 callout_height = 6;
  MpExecutionDetails execution = 1000;
}
```

## Set I-th Callout Position in Callout View {/* #set-i-th-callout-position-in-callout-view */}

[MP Catalog](/mp-command-catalog/commands/construction-operations-callout-views-and-callouts#set-i-th-callout-position-in-callout-view)

`/briosa.ConstructionOperations/SetIthCalloutPositionInCalloutView` · Operation ID: `construction_operations.set_ith_callout_position_in_callout_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `callout_view` | `optional CollectionItemName` | Callout View | Required |
| Request | 2 | `callout_view_index` | `optional int32` | Callout View Index | 0 |
| Request | 3 | `x_position` | `optional int32` | X Position | 0 |
| Request | 4 | `y_position` | `optional int32` | Y Position | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetIthCalloutPositionInCalloutView(SetIthCalloutPositionInCalloutViewRequest) returns (SetIthCalloutPositionInCalloutViewResult);

message SetIthCalloutPositionInCalloutViewRequest {
  optional CollectionItemName callout_view = 1;
  optional int32 callout_view_index = 2;
  optional int32 x_position = 3;
  optional int32 y_position = 4;
}

message SetIthCalloutPositionInCalloutViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Shared Callout Property Values {/* #shared-callout-property-values */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
