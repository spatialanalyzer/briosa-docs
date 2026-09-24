---
title: Reporting Operations
description: Unreleased grpc 0.8.0-dev.1 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Reporting Operations

[SA 2026.1.0529.7](/api/grpc/reporting-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/reporting-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.8.0-dev.1** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Charts to Report Bar {/* #add-charts-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar)

`/briosa.ReportingOperations/AddChartsToReportBar` · Operation ID: `reporting_operations.add_charts_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `charts` | `repeated CollectionItemName` | Chart(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddChartsToReportBar(AddChartsToReportBarRequest) returns (AddChartsToReportBarResult);

message AddChartsToReportBarRequest {
  repeated CollectionItemName charts = 1;
  optional bool clear_existing = 2;
}

message AddChartsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Custom Table to SA Report {/* #add-custom-table-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report)

`/briosa.ReportingOperations/AddCustomTableToSaReport` · Operation ID: `reporting_operations.add_custom_table_to_sa_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Request | 3 | `show_report` | `optional bool` | Show Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddCustomTableToSaReport(AddCustomTableToSaReportRequest) returns (AddCustomTableToSaReportResult);

message AddCustomTableToSaReportRequest {
  optional CollectionObjectName table_name = 1;
  optional CollectionObjectName report_name = 2;
  optional bool show_report = 3;
}

message AddCustomTableToSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Custom Tables to Report Bar {/* #add-custom-tables-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar)

`/briosa.ReportingOperations/AddCustomTablesToReportBar` · Operation ID: `reporting_operations.add_custom_tables_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `custom_tables_to_report` | `repeated CollectionItemName` | Custom Table(s) To Report | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddCustomTablesToReportBar(AddCustomTablesToReportBarRequest) returns (AddCustomTablesToReportBarResult);

message AddCustomTablesToReportBarRequest {
  repeated CollectionItemName custom_tables_to_report = 1;
  optional bool clear_existing = 2;
}

message AddCustomTablesToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Datums to Report Bar {/* #add-datums-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar)

`/briosa.ReportingOperations/AddDatumsToReportBar` · Operation ID: `reporting_operations.add_datums_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `datums` | `repeated CollectionObjectName` | Datum(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddDatumsToReportBar(AddDatumsToReportBarRequest) returns (AddDatumsToReportBarResult);

message AddDatumsToReportBarRequest {
  repeated CollectionObjectName datums = 1;
  optional bool clear_existing = 2;
}

message AddDatumsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Events to Report Bar {/* #add-events-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar)

`/briosa.ReportingOperations/AddEventsToReportBar` · Operation ID: `reporting_operations.add_events_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `events` | `repeated CollectionItemName` | Event(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddEventsToReportBar(AddEventsToReportBarRequest) returns (AddEventsToReportBarResult);

message AddEventsToReportBarRequest {
  repeated CollectionItemName events = 1;
  optional bool clear_existing = 2;
}

message AddEventsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Feature Checks to Report Bar {/* #add-feature-checks-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar)

`/briosa.ReportingOperations/AddFeatureChecksToReportBar` · Operation ID: `reporting_operations.add_feature_checks_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `feature_checks` | `repeated CollectionItemName` | Feature Check(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddFeatureChecksToReportBar(AddFeatureChecksToReportBarRequest) returns (AddFeatureChecksToReportBarResult);

message AddFeatureChecksToReportBarRequest {
  repeated CollectionItemName feature_checks = 1;
  optional bool clear_existing = 2;
}

message AddFeatureChecksToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Item to SA Report at Location {/* #add-item-to-sa-report-at-location */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location)

`/briosa.ReportingOperations/AddItemToSaReportAtLocation` · Operation ID: `reporting_operations.add_item_to_sa_report_at_location`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Request | 2 | `item_name` | `optional CollectionObjectName` | Item Name | Required |
| Request | 3 | `page_number` | `optional int32` | Page Number | 0 |
| Request | 4 | `horizontal_location` | `optional double` | Horizontal Location | 1.000000 |
| Request | 5 | `vertical_location` | `optional double` | Vertical Location | 1.000000 |
| Request | 6 | `show_report` | `optional bool` | Show Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddItemToSaReportAtLocation(AddItemToSaReportAtLocationRequest) returns (AddItemToSaReportAtLocationResult);

message AddItemToSaReportAtLocationRequest {
  optional CollectionObjectName report_name = 1;
  optional CollectionObjectName item_name = 2;
  optional int32 page_number = 3;
  optional double horizontal_location = 4;
  optional double vertical_location = 5;
  optional bool show_report = 6;
}

message AddItemToSaReportAtLocationResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Objects to Report Bar {/* #add-objects-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar)

`/briosa.ReportingOperations/AddObjectsToReportBar` · Operation ID: `reporting_operations.add_objects_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `objects` | `repeated CollectionObjectName` | Object(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddObjectsToReportBar(AddObjectsToReportBarRequest) returns (AddObjectsToReportBarResult);

message AddObjectsToReportBarRequest {
  repeated CollectionObjectName objects = 1;
  optional bool clear_existing = 2;
}

message AddObjectsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Pictures to Report Bar {/* #add-pictures-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar)

`/briosa.ReportingOperations/AddPicturesToReportBar` · Operation ID: `reporting_operations.add_pictures_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `pictures` | `repeated CollectionItemName` | Picture(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddPicturesToReportBar(AddPicturesToReportBarRequest) returns (AddPicturesToReportBarResult);

message AddPicturesToReportBarRequest {
  repeated CollectionItemName pictures = 1;
  optional bool clear_existing = 2;
}

message AddPicturesToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Add Relationships to Report Bar {/* #add-relationships-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar)

`/briosa.ReportingOperations/AddRelationshipsToReportBar` · Operation ID: `reporting_operations.add_relationships_to_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationships` | `repeated CollectionItemName` | Relationship(s) | Required |
| Request | 2 | `clear_existing` | `optional bool` | Clear Existing? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AddRelationshipsToReportBar(AddRelationshipsToReportBarRequest) returns (AddRelationshipsToReportBarResult);

message AddRelationshipsToReportBarRequest {
  repeated CollectionItemName relationships = 1;
  optional bool clear_existing = 2;
}

message AddRelationshipsToReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Append Items to SA Report {/* #append-items-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report)

`/briosa.ReportingOperations/AppendItemsToSaReport` · Operation ID: `reporting_operations.append_items_to_sa_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Request | 2 | `items_to_report` | `repeated CollectionObjectName` | Items To Report | Required |
| Request | 3 | `show_report` | `optional bool` | Show Report? | false |
| Request | 4 | `begin_on_new_page` | `optional bool` | Begin On New Page? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc AppendItemsToSaReport(AppendItemsToSaReportRequest) returns (AppendItemsToSaReportResult);

message AppendItemsToSaReportRequest {
  optional CollectionObjectName report_name = 1;
  repeated CollectionObjectName items_to_report = 2;
  optional bool show_report = 3;
  optional bool begin_on_new_page = 4;
}

message AppendItemsToSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Capture Current View {/* #capture-current-view */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-current-view)

`/briosa.ReportingOperations/CaptureCurrentView` · Operation ID: `reporting_operations.capture_current_view`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `optional CollectionItemName` | Picture Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CaptureCurrentView(CaptureCurrentViewRequest) returns (CaptureCurrentViewResult);

message CaptureCurrentViewRequest {
  optional CollectionItemName picture_name = 1;
}

message CaptureCurrentViewResult {
  MpExecutionDetails execution = 1000;
}
```

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF) {/* #capture-screen-to-file-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

`/briosa.ReportingOperations/CaptureScreenToFileBmpJpgPngGifTiff` · Operation ID: `reporting_operations.capture_screen_to_file_bmp_jpg_png_gif_tiff`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_to_save_to` | `optional FileReference` | File to save to | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CaptureScreenToFileBmpJpgPngGifTiff(CaptureScreenToFileBmpJpgPngGifTiffRequest) returns (CaptureScreenToFileBmpJpgPngGifTiffResult);

message CaptureScreenToFileBmpJpgPngGifTiffRequest {
  optional FileReference file_to_save_to = 1;
}

message CaptureScreenToFileBmpJpgPngGifTiffResult {
  MpExecutionDetails execution = 1000;
}
```

## Clear Custom Table {/* #clear-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#clear-custom-table)

`/briosa.ReportingOperations/ClearCustomTable` · Operation ID: `reporting_operations.clear_custom_table`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc ClearCustomTable(ClearCustomTableRequest) returns (ClearCustomTableResult);

message ClearCustomTableRequest {
  optional CollectionObjectName table_name = 1;
}

message ClearCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

## Close All Reports {/* #close-all-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-all-reports)

`/briosa.ReportingOperations/CloseAllReports` · Operation ID: `reporting_operations.close_all_reports`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CloseAllReports(CloseAllReportsRequest) returns (CloseAllReportsResult);

message CloseAllReportsRequest {
  // No MP inputs.
}

message CloseAllReportsResult {
  MpExecutionDetails execution = 1000;
}
```

## Close HTML Display Board {/* #close-html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-html-display-board)

`/briosa.ReportingOperations/CloseHtmlDisplayBoard` · Operation ID: `reporting_operations.close_html_display_board`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CloseHtmlDisplayBoard(CloseHtmlDisplayBoardRequest) returns (CloseHtmlDisplayBoardResult);

message CloseHtmlDisplayBoardRequest {
  // No MP inputs.
}

message CloseHtmlDisplayBoardResult {
  MpExecutionDetails execution = 1000;
}
```

## Combine SA Reports {/* #combine-sa-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#combine-sa-reports)

`/briosa.ReportingOperations/CombineSaReports` · Operation ID: `reporting_operations.combine_sa_reports`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `sa_reports_to_combine` | `repeated CollectionItemName` | SA Reports to Combine | Required |
| Request | 2 | `output_sa_report_name` | `optional CollectionObjectName` | Output SA Report Name | Required |
| Request | 3 | `show_report` | `optional bool` | Show Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CombineSaReports(CombineSaReportsRequest) returns (CombineSaReportsResult);

message CombineSaReportsRequest {
  repeated CollectionItemName sa_reports_to_combine = 1;
  optional CollectionObjectName output_sa_report_name = 2;
  optional bool show_report = 3;
}

message CombineSaReportsResult {
  MpExecutionDetails execution = 1000;
}
```

## Create Chart from Vector Group {/* #create-chart-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group)

`/briosa.ReportingOperations/CreateChartFromVectorGroup` · Operation ID: `reporting_operations.create_chart_from_vector_group`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_chart_name` | `optional ChartName` | New Chart Name | Required |
| Request | 2 | `vector_group_name` | `optional CollectionObjectName` | Vector Group Name | Required |
| Request | 3 | `chart_type` | `optional ChartType` | Chart Type | Required |
| Request | 4 | `data_set_to_chart` | `optional DatasetType` | Data Set to Chart | Required |
| Request | 5 | `aux_data_set_to_chart` | `optional DatasetType` | Aux Data Set to Chart | Required |
| Request | 6 | `template_chart_name` | `optional ChartName` | Template Chart Name (optional) | Required |
| Request | 7 | `show_interface` | `optional bool` | Show Interface? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc CreateChartFromVectorGroup(CreateChartFromVectorGroupRequest) returns (CreateChartFromVectorGroupResult);

message CreateChartFromVectorGroupRequest {
  optional ChartName new_chart_name = 1;
  optional CollectionObjectName vector_group_name = 2;
  optional ChartType chart_type = 3;
  optional DatasetType data_set_to_chart = 4;
  optional DatasetType aux_data_set_to_chart = 5;
  optional ChartName template_chart_name = 6;
  optional bool show_interface = 7;
}

message CreateChartFromVectorGroupResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `template_chart_name` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Define Report Template {/* #define-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#define-report-template)

`/briosa.ReportingOperations/DefineReportTemplate` · Operation ID: `reporting_operations.define_report_template`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template_name` | `optional CollectionObjectName` | Report Template Name | Required |
| Request | 2 | `title` | `repeated string` | Title | Required |
| Request | 3 | `graphical_view_options` | `optional ReportViewOptions` | Graphical View Options | Required |
| Request | 4 | `items_to_report` | `repeated CollectionObjectName` | Items To Report | Required |
| Request | 5 | `relationships_to_report` | `repeated CollectionItemName` | Relationships To Report | Required |
| Request | 6 | `events_to_report` | `repeated CollectionItemName` | Events To Report | Required |
| Request | 7 | `report_output_options` | `optional ReportOutputOptions` | Report Output Options | ::My Report |
| Request | 8 | `report_page_settings` | `optional ReportPageSettings` | Report Page Settings ( SA Report only ) | Portrait |
| Request | 9 | `generate_now` | `optional bool` | Generate Now? | false |
| Request | 10 | `show_generated_report` | `optional bool` | Show Generated Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DefineReportTemplate(DefineReportTemplateRequest) returns (DefineReportTemplateResult);

message DefineReportTemplateRequest {
  optional CollectionObjectName report_template_name = 1;
  repeated string title = 2;
  optional ReportViewOptions graphical_view_options = 3;
  repeated CollectionObjectName items_to_report = 4;
  repeated CollectionItemName relationships_to_report = 5;
  repeated CollectionItemName events_to_report = 6;
  optional ReportOutputOptions report_output_options = 7;
  optional ReportPageSettings report_page_settings = 8;
  optional bool generate_now = 9;
  optional bool show_generated_report = 10;
}

message DefineReportTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `report_page_settings` | MP qualifier: SA Report only. |

## Delete Chart {/* #delete-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-chart)

`/briosa.ReportingOperations/DeleteChart` · Operation ID: `reporting_operations.delete_chart`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `chart_name` | `optional CollectionObjectName` | Chart Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteChart(DeleteChartRequest) returns (DeleteChartResult);

message DeleteChartRequest {
  optional CollectionObjectName chart_name = 1;
}

message DeleteChartResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Custom Table {/* #delete-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-custom-table)

`/briosa.ReportingOperations/DeleteCustomTable` · Operation ID: `reporting_operations.delete_custom_table`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteCustomTable(DeleteCustomTableRequest) returns (DeleteCustomTableResult);

message DeleteCustomTableRequest {
  optional CollectionObjectName table_name = 1;
}

message DeleteCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete Picture {/* #delete-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-picture)

`/briosa.ReportingOperations/DeletePicture` · Operation ID: `reporting_operations.delete_picture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `optional CollectionItemName` | Picture Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeletePicture(DeletePictureRequest) returns (DeletePictureResult);

message DeletePictureRequest {
  optional CollectionItemName picture_name = 1;
}

message DeletePictureResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete SA Doc {/* #delete-sa-doc */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-doc)

`/briosa.ReportingOperations/DeleteSaDoc` · Operation ID: `reporting_operations.delete_sa_doc`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `doc_name` | `optional CollectionObjectName` | Doc Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteSaDoc(DeleteSaDocRequest) returns (DeleteSaDocResult);

message DeleteSaDocRequest {
  optional CollectionObjectName doc_name = 1;
}

message DeleteSaDocResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete SA Report {/* #delete-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report)

`/briosa.ReportingOperations/DeleteSaReport` · Operation ID: `reporting_operations.delete_sa_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteSaReport(DeleteSaReportRequest) returns (DeleteSaReportResult);

message DeleteSaReportRequest {
  optional CollectionObjectName report_name = 1;
}

message DeleteSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Delete SA Report Template {/* #delete-sa-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template)

`/briosa.ReportingOperations/DeleteSaReportTemplate` · Operation ID: `reporting_operations.delete_sa_report_template`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template_name` | `optional CollectionObjectName` | Report Template Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc DeleteSaReportTemplate(DeleteSaReportTemplateRequest) returns (DeleteSaReportTemplateResult);

message DeleteSaReportTemplateRequest {
  optional CollectionObjectName report_template_name = 1;
}

message DeleteSaReportTemplateResult {
  MpExecutionDetails execution = 1000;
}
```

## Generate Quick Report from Tab Order {/* #generate-quick-report-from-tab-order */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order)

`/briosa.ReportingOperations/GenerateQuickReportFromTabOrder` · Operation ID: `reporting_operations.generate_quick_report_from_tab_order`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_output_options` | `optional ReportOutputOptions` | Report Output Options | ::My Report |
| Request | 2 | `open_report` | `optional bool` | Open Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateQuickReportFromTabOrder(GenerateQuickReportFromTabOrderRequest) returns (GenerateQuickReportFromTabOrderResult);

message GenerateQuickReportFromTabOrderRequest {
  optional ReportOutputOptions report_output_options = 1;
  optional bool open_report = 2;
}

message GenerateQuickReportFromTabOrderResult {
  MpExecutionDetails execution = 1000;
}
```

## Generate Standard HTML Report {/* #generate-standard-html-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report)

`/briosa.ReportingOperations/GenerateStandardHtmlReport` · Operation ID: `reporting_operations.generate_standard_html_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `html_output_file` | `optional FileReference` | HTML Output File | Required |
| Request | 2 | `decimal_precision` | `optional int32` | Decimal Precision | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateStandardHtmlReport(GenerateStandardHtmlReportRequest) returns (GenerateStandardHtmlReportResult);

message GenerateStandardHtmlReportRequest {
  optional FileReference html_output_file = 1;
  optional int32 decimal_precision = 2;
}

message GenerateStandardHtmlReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Generate/Update Templated Report {/* #generateupdate-templated-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report)

`/briosa.ReportingOperations/GenerateUpdateTemplatedReport` · Operation ID: `reporting_operations.generate_update_templated_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_template` | `optional CollectionObjectName` | Report Template | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GenerateUpdateTemplatedReport(GenerateUpdateTemplatedReportRequest) returns (GenerateUpdateTemplatedReportResult);

message GenerateUpdateTemplatedReportRequest {
  optional CollectionObjectName report_template = 1;
}

message GenerateUpdateTemplatedReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Get Custom Table Cell Double {/* #get-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double)

`/briosa.ReportingOperations/GetCustomTableCellDouble` · Operation ID: `reporting_operations.get_custom_table_cell_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Result | 1 | `value` | `optional double` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCustomTableCellDouble(GetCustomTableCellDoubleRequest) returns (GetCustomTableCellDoubleResult);

message GetCustomTableCellDoubleRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
}

message GetCustomTableCellDoubleResult {
  optional double value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Custom Table Cell String {/* #get-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string)

`/briosa.ReportingOperations/GetCustomTableCellString` · Operation ID: `reporting_operations.get_custom_table_cell_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Result | 1 | `value` | `optional string` | Value | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetCustomTableCellString(GetCustomTableCellStringRequest) returns (GetCustomTableCellStringResult);

message GetCustomTableCellStringRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
}

message GetCustomTableCellStringResult {
  optional string value = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Defined Report Tags {/* #get-defined-report-tags */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags)

`/briosa.ReportingOperations/GetDefinedReportTags` · Operation ID: `reporting_operations.get_defined_report_tags`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `defined_tags` | `repeated string` | Defined Tags | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetDefinedReportTags(GetDefinedReportTagsRequest) returns (GetDefinedReportTagsResult);

message GetDefinedReportTagsRequest {
  // No MP inputs.
}

message GetDefinedReportTagsResult {
  repeated string defined_tags = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Report Tag Value {/* #get-report-tag-value */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-report-tag-value)

`/briosa.ReportingOperations/GetReportTagValue` · Operation ID: `reporting_operations.get_report_tag_value`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `optional string` | Tag Name | Empty |
| Result | 1 | `tag_value_as_string` | `optional string` | Tag Value As String | — |
| Result | 2 | `tag_value_as_integer` | `optional int32` | Tag Value As Integer | — |
| Result | 3 | `tag_value_as_double` | `optional double` | Tag Value As Double | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc GetReportTagValue(GetReportTagValueRequest) returns (GetReportTagValueResult);

message GetReportTagValueRequest {
  optional string tag_name = 1;
}

message GetReportTagValueResult {
  optional string tag_value_as_string = 1;
  optional int32 tag_value_as_integer = 2;
  optional double tag_value_as_double = 3;
  MpExecutionDetails execution = 1000;
}
```

## HTML Display Board {/* #html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#html-display-board)

`/briosa.ReportingOperations/HtmlDisplayBoard` · Operation ID: `reporting_operations.html_display_board`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `input_html_file` | `optional FileReference` | Input HTML File | Required |
| Request | 2 | `show_board` | `optional bool` | Show Board? | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc HtmlDisplayBoard(HtmlDisplayBoardRequest) returns (HtmlDisplayBoardResult);

message HtmlDisplayBoardRequest {
  optional FileReference input_html_file = 1;
  optional bool show_board = 2;
}

message HtmlDisplayBoardResult {
  MpExecutionDetails execution = 1000;
}
```

## Make Custom Table {/* #make-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-custom-table)

`/briosa.ReportingOperations/MakeCustomTable` · Operation ID: `reporting_operations.make_custom_table`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `decimal_precision` | `optional int32` | Decimal Precision | 6 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeCustomTable(MakeCustomTableRequest) returns (MakeCustomTableResult);

message MakeCustomTableRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 decimal_precision = 2;
}

message MakeCustomTableResult {
  MpExecutionDetails execution = 1000;
}
```

## Make New SA Report {/* #make-new-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-new-sa-report)

`/briosa.ReportingOperations/MakeNewSaReport` · Operation ID: `reporting_operations.make_new_sa_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `new_sa_report_name` | `optional CollectionObjectName` | New SA Report Name | Required |
| Request | 2 | `sa_report_template` | `optional CollectionObjectName` | SA Report Template (optional) | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeNewSaReport(MakeNewSaReportRequest) returns (MakeNewSaReportResult);

message MakeNewSaReportRequest {
  optional CollectionObjectName new_sa_report_name = 1;
  optional CollectionObjectName sa_report_template = 2;
}

message MakeNewSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `sa_report_template` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Make Utility Chart {/* #make-utility-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-utility-chart)

`/briosa.ReportingOperations/MakeUtilityChart` · Operation ID: `reporting_operations.make_utility_chart`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `ascii_file_path` | `optional FileReference` | ASCII File Path | Required |
| Request | 2 | `chart_title_override` | `optional string` | Chart Title Override | Empty |
| Request | 3 | `output_picture_name` | `optional CollectionItemName` | Output Picture Name | Required |
| Request | 4 | `show_chart_dialog` | `optional bool` | Show Chart Dialog? | false |
| Request | 5 | `plot_additional_xy_value` | `optional bool` | Plot Additional XY Value? | false |
| Request | 6 | `x_value` | `optional double` | X Value | 0.000000 |
| Request | 7 | `y_value` | `optional double` | Y Value | 0.000000 |
| Result | 1 | `is_point_inside` | `optional bool` | Is Point Inside? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc MakeUtilityChart(MakeUtilityChartRequest) returns (MakeUtilityChartResult);

message MakeUtilityChartRequest {
  optional FileReference ascii_file_path = 1;
  optional string chart_title_override = 2;
  optional CollectionItemName output_picture_name = 3;
  optional bool show_chart_dialog = 4;
  optional bool plot_additional_xy_value = 5;
  optional double x_value = 6;
  optional double y_value = 7;
}

message MakeUtilityChartResult {
  optional bool is_point_inside = 1;
  MpExecutionDetails execution = 1000;
}
```

## Notify User Double {/* #notify-user-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-double)

`/briosa.ReportingOperations/NotifyUserDouble` · Operation ID: `reporting_operations.notify_user_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `leading_text` | `optional string` | Leading Text | Empty |
| Request | 2 | `font` | `optional Font` | Font | MS Shell Dlg |
| Request | 3 | `reported_value` | `optional double` | Reported Value | 0.000000 |
| Request | 4 | `decimal_precision` | `optional int32` | Decimal Precision | 0 |
| Request | 5 | `display_timeout` | `optional int32` | Display Timeout | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NotifyUserDouble(NotifyUserDoubleRequest) returns (NotifyUserDoubleResult);

message NotifyUserDoubleRequest {
  optional string leading_text = 1;
  optional Font font = 2;
  optional double reported_value = 3;
  optional int32 decimal_precision = 4;
  optional int32 display_timeout = 5;
}

message NotifyUserDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

## Notify User HTML {/* #notify-user-html */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-html)

`/briosa.ReportingOperations/NotifyUserHtml` · Operation ID: `reporting_operations.notify_user_html`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `html_file` | `optional FileReference` | HTML File | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NotifyUserHtml(NotifyUserHtmlRequest) returns (NotifyUserHtmlResult);

message NotifyUserHtmlRequest {
  optional FileReference html_file = 1;
}

message NotifyUserHtmlResult {
  MpExecutionDetails execution = 1000;
}
```

## Notify User Integer {/* #notify-user-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-integer)

`/briosa.ReportingOperations/NotifyUserInteger` · Operation ID: `reporting_operations.notify_user_integer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `leading_text` | `optional string` | Leading Text | Empty |
| Request | 2 | `font` | `optional Font` | Font | MS Shell Dlg |
| Request | 3 | `reported_value` | `optional int32` | Reported Value | 0 |
| Request | 4 | `display_timeout` | `optional int32` | Display Timeout | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NotifyUserInteger(NotifyUserIntegerRequest) returns (NotifyUserIntegerResult);

message NotifyUserIntegerRequest {
  optional string leading_text = 1;
  optional Font font = 2;
  optional int32 reported_value = 3;
  optional int32 display_timeout = 4;
}

message NotifyUserIntegerResult {
  MpExecutionDetails execution = 1000;
}
```

## Notify User Text Array {/* #notify-user-text-array */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-text-array)

`/briosa.ReportingOperations/NotifyUserTextArray` · Operation ID: `reporting_operations.notify_user_text_array`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `notification_text` | `repeated string` | Notification Text | Required |
| Request | 2 | `font` | `optional Font` | Font | MS Shell Dlg |
| Request | 3 | `auto_expand_to_fit_text` | `optional bool` | Auto expand to fit text? | false |
| Request | 4 | `display_timeout` | `optional int32` | Display Timeout | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc NotifyUserTextArray(NotifyUserTextArrayRequest) returns (NotifyUserTextArrayResult);

message NotifyUserTextArrayRequest {
  repeated string notification_text = 1;
  optional Font font = 2;
  optional bool auto_expand_to_fit_text = 3;
  optional int32 display_timeout = 4;
}

message NotifyUserTextArrayResult {
  MpExecutionDetails execution = 1000;
}
```

## Output SA Report to Excel {/* #output-sa-report-to-excel */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel)

`/briosa.ReportingOperations/OutputSaReportToExcel` · Operation ID: `reporting_operations.output_sa_report_to_excel`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Request | 2 | `file_name` | `optional FileReference` | File Name | Required |
| Request | 3 | `show_file` | `optional bool` | Show File? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc OutputSaReportToExcel(OutputSaReportToExcelRequest) returns (OutputSaReportToExcelResult);

message OutputSaReportToExcelRequest {
  optional CollectionObjectName report_name = 1;
  optional FileReference file_name = 2;
  optional bool show_file = 3;
}

message OutputSaReportToExcelResult {
  MpExecutionDetails execution = 1000;
}
```

## Output SA Report to PDF {/* #output-sa-report-to-pdf */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf)

`/briosa.ReportingOperations/OutputSaReportToPdf` · Operation ID: `reporting_operations.output_sa_report_to_pdf`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionObjectName` | Report Name | Required |
| Request | 2 | `file_name` | `optional FileReference` | File Name | Required |
| Request | 3 | `show_pdf` | `optional bool` | Show PDF? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc OutputSaReportToPdf(OutputSaReportToPdfRequest) returns (OutputSaReportToPdfResult);

message OutputSaReportToPdfRequest {
  optional CollectionObjectName report_name = 1;
  optional FileReference file_name = 2;
  optional bool show_pdf = 3;
}

message OutputSaReportToPdfResult {
  MpExecutionDetails execution = 1000;
}
```

## Quick Report {/* #quick-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#quick-report)

`/briosa.ReportingOperations/QuickReport` · Operation ID: `reporting_operations.quick_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `item_name` | `optional CollectionObjectName` | Item Name | Required |
| Request | 2 | `report_name` | `optional string` | Report Name (optional) | Empty |
| Request | 3 | `open_report` | `optional bool` | Open Report? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc QuickReport(QuickReportRequest) returns (QuickReportResult);

message QuickReportRequest {
  optional CollectionObjectName item_name = 1;
  optional string report_name = 2;
  optional bool open_report = 3;
}

message QuickReportResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `report_name` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Refresh Callout Views in SA Report {/* #refresh-callout-views-in-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report)

`/briosa.ReportingOperations/RefreshCalloutViewsInSaReport` · Operation ID: `reporting_operations.refresh_callout_views_in_sa_report`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `report_name` | `optional CollectionItemName` | Report Name | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RefreshCalloutViewsInSaReport(RefreshCalloutViewsInSaReportRequest) returns (RefreshCalloutViewsInSaReportResult);

message RefreshCalloutViewsInSaReportRequest {
  optional CollectionItemName report_name = 1;
}

message RefreshCalloutViewsInSaReportResult {
  MpExecutionDetails execution = 1000;
}
```

## Refresh Report Bar {/* #refresh-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-report-bar)

`/briosa.ReportingOperations/RefreshReportBar` · Operation ID: `reporting_operations.refresh_report_bar`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RefreshReportBar(RefreshReportBarRequest) returns (RefreshReportBarResult);

message RefreshReportBarRequest {
  // No MP inputs.
}

message RefreshReportBarResult {
  MpExecutionDetails execution = 1000;
}
```

## Remove Report Tag {/* #remove-report-tag */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#remove-report-tag)

`/briosa.ReportingOperations/RemoveReportTag` · Operation ID: `reporting_operations.remove_report_tag`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `optional string` | Tag Name | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RemoveReportTag(RemoveReportTagRequest) returns (RemoveReportTagResult);

message RemoveReportTagRequest {
  optional string tag_name = 1;
}

message RemoveReportTagResult {
  MpExecutionDetails execution = 1000;
}
```

## Rename Picture {/* #rename-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#rename-picture)

`/briosa.ReportingOperations/RenamePicture` · Operation ID: `reporting_operations.rename_picture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `original_picture_name` | `optional CollectionItemName` | Original Picture Name | Required |
| Request | 2 | `new_picture_name` | `optional CollectionItemName` | New Picture Name | Required |
| Request | 3 | `overwrite_if_exists` | `optional bool` | Overwrite if exists? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc RenamePicture(RenamePictureRequest) returns (RenamePictureResult);

message RenamePictureRequest {
  optional CollectionItemName original_picture_name = 1;
  optional CollectionItemName new_picture_name = 2;
  optional bool overwrite_if_exists = 3;
}

message RenamePictureResult {
  MpExecutionDetails execution = 1000;
}
```

## Save Chart to JPeg file {/* #save-chart-to-jpeg-file */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file)

`/briosa.ReportingOperations/SaveChartToJPegFile` · Operation ID: `reporting_operations.save_chart_to_jpeg_file`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `chart_to_save` | `optional ChartName` | Chart to Save | Required |
| Request | 2 | `file_to_save_to` | `optional FileReference` | File to save to | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveChartToJPegFile(SaveChartToJPegFileRequest) returns (SaveChartToJPegFileResult);

message SaveChartToJPegFileRequest {
  optional ChartName chart_to_save = 1;
  optional FileReference file_to_save_to = 2;
}

message SaveChartToJPegFileResult {
  MpExecutionDetails execution = 1000;
}
```

## Save Current View (BMP/JPG/PNG/GIF/TIFF) {/* #save-current-view-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff)

`/briosa.ReportingOperations/SaveCurrentViewBmpJpgPngGifTiff` · Operation ID: `reporting_operations.save_current_view_bmp_jpg_png_gif_tiff`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `file_to_save_to` | `optional FileReference` | File to save to | Required |
| Request | 2 | `render_scale_factor` | `optional double` | Render Scale Factor (1.0 uses window size) | 1.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SaveCurrentViewBmpJpgPngGifTiff(SaveCurrentViewBmpJpgPngGifTiffRequest) returns (SaveCurrentViewBmpJpgPngGifTiffResult);

message SaveCurrentViewBmpJpgPngGifTiffRequest {
  optional FileReference file_to_save_to = 1;
  optional double render_scale_factor = 2;
}

message SaveCurrentViewBmpJpgPngGifTiffResult {
  MpExecutionDetails execution = 1000;
}
```

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `render_scale_factor` | 1.0 uses the window size. |

## Set Custom Table Cell Color {/* #set-custom-table-cell-color */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color)

`/briosa.ReportingOperations/SetCustomTableCellColor` · Operation ID: `reporting_operations.set_custom_table_cell_color`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Request | 4 | `foreground_color_name` | `optional Color` | Foreground Color Name | RGB 255, 0, 0 |
| Request | 5 | `background_color_name` | `optional Color` | Background Color Name | RGB 255, 0, 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableCellColor(SetCustomTableCellColorRequest) returns (SetCustomTableCellColorResult);

message SetCustomTableCellColorRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional Color foreground_color_name = 4;
  optional Color background_color_name = 5;
}

message SetCustomTableCellColorResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Cell Double {/* #set-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double)

`/briosa.ReportingOperations/SetCustomTableCellDouble` · Operation ID: `reporting_operations.set_custom_table_cell_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Request | 4 | `value` | `optional double` | Value | 0.000000 |
| Request | 5 | `span` | `optional int32` | Span | 1 |
| Request | 6 | `decimal_precision` | `optional int32` | Decimal Precision | -1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableCellDouble(SetCustomTableCellDoubleRequest) returns (SetCustomTableCellDoubleResult);

message SetCustomTableCellDoubleRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional double value = 4;
  optional int32 span = 5;
  optional int32 decimal_precision = 6;
}

message SetCustomTableCellDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Cell Font {/* #set-custom-table-cell-font */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font)

`/briosa.ReportingOperations/SetCustomTableCellFont` · Operation ID: `reporting_operations.set_custom_table_cell_font`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Request | 4 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableCellFont(SetCustomTableCellFontRequest) returns (SetCustomTableCellFontResult);

message SetCustomTableCellFontRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional Font font = 4;
}

message SetCustomTableCellFontResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Cell String {/* #set-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string)

`/briosa.ReportingOperations/SetCustomTableCellString` · Operation ID: `reporting_operations.set_custom_table_cell_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Request | 4 | `value` | `optional string` | Value | Empty |
| Request | 5 | `span` | `optional int32` | Span | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableCellString(SetCustomTableCellStringRequest) returns (SetCustomTableCellStringResult);

message SetCustomTableCellStringRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional string value = 4;
  optional int32 span = 5;
}

message SetCustomTableCellStringResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Header Cell {/* #set-custom-table-header-cell */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell)

`/briosa.ReportingOperations/SetCustomTableHeaderCell` · Operation ID: `reporting_operations.set_custom_table_header_cell`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `column` | `optional int32` | Column | 0 |
| Request | 4 | `header_text` | `optional string` | Header Text | Empty |
| Request | 5 | `span` | `optional int32` | Span | 1 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableHeaderCell(SetCustomTableHeaderCellRequest) returns (SetCustomTableHeaderCellResult);

message SetCustomTableHeaderCellRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional int32 column = 3;
  optional string header_text = 4;
  optional int32 span = 5;
}

message SetCustomTableHeaderCellResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Header Row {/* #set-custom-table-header-row */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row)

`/briosa.ReportingOperations/SetCustomTableHeaderRow` · Operation ID: `reporting_operations.set_custom_table_header_row`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `row` | `optional int32` | Row | 0 |
| Request | 3 | `value` | `optional string` | Value | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableHeaderRow(SetCustomTableHeaderRowRequest) returns (SetCustomTableHeaderRowResult);

message SetCustomTableHeaderRowRequest {
  optional CollectionObjectName table_name = 1;
  optional int32 row = 2;
  optional string value = 3;
}

message SetCustomTableHeaderRowResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Custom Table Title {/* #set-custom-table-title */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-title)

`/briosa.ReportingOperations/SetCustomTableTitle` · Operation ID: `reporting_operations.set_custom_table_title`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `table_name` | `optional CollectionObjectName` | Table Name | Required |
| Request | 2 | `title_line_1` | `optional string` | Title Line 1 | Empty |
| Request | 3 | `title_line_2` | `optional string` | Title Line 2 | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetCustomTableTitle(SetCustomTableTitleRequest) returns (SetCustomTableTitleResult);

message SetCustomTableTitleRequest {
  optional CollectionObjectName table_name = 1;
  optional string title_line_1 = 2;
  optional string title_line_2 = 3;
}

message SetCustomTableTitleResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Point Group Report Options {/* #set-point-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options)

`/briosa.ReportingOperations/SetPointGroupReportOptions` · Operation ID: `reporting_operations.set_point_group_report_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point_group` | `optional CollectionObjectName` | Point Group | Required |
| Request | 2 | `coordinate_system` | `optional CoordinateSystemType` | Coordinate System | Cartesian |
| Request | 3 | `show_x_component` | `optional bool` | Show X Component | true |
| Request | 4 | `show_y_component` | `optional bool` | Show Y Component | true |
| Request | 5 | `show_z_component` | `optional bool` | Show Z Component | true |
| Request | 6 | `show_offsets` | `optional bool` | Show Offsets | false |
| Request | 7 | `show_uncertainty` | `optional bool` | Show Uncertainty | true |
| Request | 8 | `show_notes` | `optional bool` | Show Notes | false |
| Request | 9 | `show_measurements` | `optional bool` | Show Measurements | false |
| Request | 10 | `show_measurement_details` | `optional bool` | Show Measurement Details | false |
| Request | 11 | `show_pointing_error_worst_angle` | `optional bool` | Show PointingError/Worst Angle | false |
| Request | 12 | `sort_by_point_names` | `optional bool` | Sort by Point Names | true |
| Request | 13 | `make_default` | `optional bool` | Make Default | false |
| Request | 14 | `apply_to_all` | `optional bool` | Apply to All | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetPointGroupReportOptions(SetPointGroupReportOptionsRequest) returns (SetPointGroupReportOptionsResult);

message SetPointGroupReportOptionsRequest {
  optional CollectionObjectName point_group = 1;
  optional CoordinateSystemType coordinate_system = 2;
  optional bool show_x_component = 3;
  optional bool show_y_component = 4;
  optional bool show_z_component = 5;
  optional bool show_offsets = 6;
  optional bool show_uncertainty = 7;
  optional bool show_notes = 8;
  optional bool show_measurements = 9;
  optional bool show_measurement_details = 10;
  optional bool show_pointing_error_worst_angle = 11;
  optional bool sort_by_point_names = 12;
  optional bool make_default = 13;
  optional bool apply_to_all = 14;
}

message SetPointGroupReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Relationship Report Options {/* #set-relationship-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options)

`/briosa.ReportingOperations/SetRelationshipReportOptions` · Operation ID: `reporting_operations.set_relationship_report_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `relationship_name` | `optional CollectionObjectName` | Relationship Name | Required |
| Request | 2 | `report_options` | `optional PointDeltaReportOptions` | Report Options | Single |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetRelationshipReportOptions(SetRelationshipReportOptionsRequest) returns (SetRelationshipReportOptionsResult);

message SetRelationshipReportOptionsRequest {
  optional CollectionObjectName relationship_name = 1;
  optional PointDeltaReportOptions report_options = 2;
}

message SetRelationshipReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Bar Visibility {/* #set-report-bar-visibility */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility)

`/briosa.ReportingOperations/SetReportBarVisibility` · Operation ID: `reporting_operations.set_report_bar_visibility`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `show_report_bar` | `optional bool` | Show Report Bar? | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportBarVisibility(SetReportBarVisibilityRequest) returns (SetReportBarVisibilityResult);

message SetReportBarVisibilityRequest {
  optional bool show_report_bar = 1;
}

message SetReportBarVisibilityResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Options for Object {/* #set-report-options-for-object */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object)

`/briosa.ReportingOperations/SetReportOptionsForObject` · Operation ID: `reporting_operations.set_report_options_for_object`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object` | `optional CollectionObjectName` | Object | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportOptionsForObject(SetReportOptionsForObjectRequest) returns (SetReportOptionsForObjectResult);

message SetReportOptionsForObjectRequest {
  optional CollectionObjectName object = 1;
}

message SetReportOptionsForObjectResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Tag Value From Double {/* #set-report-tag-value-from-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double)

`/briosa.ReportingOperations/SetReportTagValueFromDouble` · Operation ID: `reporting_operations.set_report_tag_value_from_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `optional string` | Tag Name | Empty |
| Request | 2 | `tag_value` | `optional double` | Tag Value | 0.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportTagValueFromDouble(SetReportTagValueFromDoubleRequest) returns (SetReportTagValueFromDoubleResult);

message SetReportTagValueFromDoubleRequest {
  optional string tag_name = 1;
  optional double tag_value = 2;
}

message SetReportTagValueFromDoubleResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Tag Value From Integer {/* #set-report-tag-value-from-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer)

`/briosa.ReportingOperations/SetReportTagValueFromInteger` · Operation ID: `reporting_operations.set_report_tag_value_from_integer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `optional string` | Tag Name | Empty |
| Request | 2 | `tag_value` | `optional int32` | Tag Value | 0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportTagValueFromInteger(SetReportTagValueFromIntegerRequest) returns (SetReportTagValueFromIntegerResult);

message SetReportTagValueFromIntegerRequest {
  optional string tag_name = 1;
  optional int32 tag_value = 2;
}

message SetReportTagValueFromIntegerResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Report Tag Value From String {/* #set-report-tag-value-from-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string)

`/briosa.ReportingOperations/SetReportTagValueFromString` · Operation ID: `reporting_operations.set_report_tag_value_from_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `tag_name` | `optional string` | Tag Name | Empty |
| Request | 2 | `tag_value` | `optional string` | Tag Value | Empty |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetReportTagValueFromString(SetReportTagValueFromStringRequest) returns (SetReportTagValueFromStringResult);

message SetReportTagValueFromStringRequest {
  optional string tag_name = 1;
  optional string tag_value = 2;
}

message SetReportTagValueFromStringResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Scale for Picture {/* #set-scale-for-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture)

`/briosa.ReportingOperations/SetScaleForPicture` · Operation ID: `reporting_operations.set_scale_for_picture`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `picture_name` | `optional CollectionItemName` | Picture Name | Required |
| Request | 2 | `scale` | `optional double` | Scale | 100.000000 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetScaleForPicture(SetScaleForPictureRequest) returns (SetScaleForPictureResult);

message SetScaleForPictureRequest {
  optional CollectionItemName picture_name = 1;
  optional double scale = 2;
}

message SetScaleForPictureResult {
  MpExecutionDetails execution = 1000;
}
```

## Set Vector Group Report Options {/* #set-vector-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options)

`/briosa.ReportingOperations/SetVectorGroupReportOptions` · Operation ID: `reporting_operations.set_vector_group_report_options`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `vector_group` | `optional CollectionObjectName` | Vector Group | Required |
| Request | 2 | `report_options` | `optional PointDeltaReportOptions` | Report Options | Single |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

```proto
rpc SetVectorGroupReportOptions(SetVectorGroupReportOptionsRequest) returns (SetVectorGroupReportOptionsResult);

message SetVectorGroupReportOptionsRequest {
  optional CollectionObjectName vector_group = 1;
  optional PointDeltaReportOptions report_options = 2;
}

message SetVectorGroupReportOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

[Candidate Source](https://github.com/spatialanalyzer/briosa/tree/3306d43253a1e4e41b75b83360ad4f6f2b7f60b7/targets/2024.1.0508.5)
