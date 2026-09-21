---
title: Reporting Operations
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Reporting Operations

[SA 2026.1.0529.7](/api/python/reporting-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/reporting-operations)

This reference covers **SA 2026.1.0529.7**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Charts to Report Bar {/* #add-charts-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

```python
async def add_charts_to_report_bar(
        self,
        charts: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Table to SA Report {/* #add-custom-table-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

```python
async def add_custom_table_to_sa_report(
        self,
        table_name: CollectionObjectName,
        report_name: CollectionObjectName,
        *,
        show_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Tables to Report Bar {/* #add-custom-tables-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

```python
async def add_custom_tables_to_report_bar(
        self,
        custom_tables_to_report: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Datums to Report Bar {/* #add-datums-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

```python
async def add_datums_to_report_bar(
        self,
        datums: Iterable[CollectionObjectName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Events to Report Bar {/* #add-events-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-events-to-report-bar)

```python
async def add_events_to_report_bar(
        self,
        events: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Feature Checks to Report Bar {/* #add-feature-checks-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

```python
async def add_feature_checks_to_report_bar(
        self,
        feature_checks: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Item to SA Report at Location {/* #add-item-to-sa-report-at-location */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC Contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

```python
async def add_item_to_sa_report_at_location(
        self,
        report_name: CollectionObjectName,
        item_name: CollectionObjectName,
        *,
        page_number: int = 0,
        horizontal_location: float = 1.000000,
        vertical_location: float = 1.000000,
        show_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Objects to Report Bar {/* #add-objects-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

```python
async def add_objects_to_report_bar(
        self,
        objects: Iterable[CollectionObjectName],
        *,
        clear_existing: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Pictures to Report Bar {/* #add-pictures-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

```python
async def add_pictures_to_report_bar(
        self,
        pictures: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Relationships to Report Bar {/* #add-relationships-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

```python
async def add_relationships_to_report_bar(
        self,
        relationships: Iterable[CollectionItemName],
        *,
        clear_existing: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Append Items to SA Report {/* #append-items-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#append-items-to-sa-report)

```python
async def append_items_to_sa_report(
        self,
        report_name: CollectionObjectName,
        items_to_report: Iterable[CollectionObjectName],
        *,
        show_report: bool = False,
        begin_on_new_page: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Current View {/* #capture-current-view */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC Contract](/api/grpc/reporting-operations#capture-current-view)

```python
async def capture_current_view(
        self,
        picture_name: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF) {/* #capture-screen-to-file-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

```python
async def capture_screen_to_file_bmp_jpg_png_gif_tiff(
        self,
        file_to_save_to: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Custom Table {/* #clear-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#clear-custom-table)

```python
async def clear_custom_table(
        self,
        table_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close All Reports {/* #close-all-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC Contract](/api/grpc/reporting-operations#close-all-reports)

```python
async def close_all_reports(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close HTML Display Board {/* #close-html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#close-html-display-board)

```python
async def close_html_display_board(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine SA Reports {/* #combine-sa-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC Contract](/api/grpc/reporting-operations#combine-sa-reports)

```python
async def combine_sa_reports(
        self,
        sa_reports_to_combine: Iterable[CollectionItemName],
        output_sa_report_name: CollectionObjectName,
        *,
        show_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Chart from Vector Group {/* #create-chart-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC Contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

```python
async def create_chart_from_vector_group(
        self,
        new_chart_name: ChartName,
        vector_group_name: CollectionObjectName,
        chart_type: ChartType,
        data_set_to_chart: DatasetType,
        aux_data_set_to_chart: DatasetType,
        template_chart_name_optional: ChartName,
        *,
        show_interface: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Define Report Template {/* #define-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC Contract](/api/grpc/reporting-operations#define-report-template)

```python
async def define_report_template(
        self,
        report_template_name: CollectionObjectName,
        title: Iterable[str],
        graphical_view_options: ReportViewOptions,
        items_to_report: Iterable[CollectionObjectName],
        relationships_to_report: Iterable[CollectionItemName],
        events_to_report: Iterable[CollectionItemName],
        *,
        report_output_options: ReportOutputOptions = ReportOutputOptions.DEFAULT,
        report_page_settings_sa_report_only: ReportPageSettings = ReportPageSettings.PORTRAIT,
        generate_now: bool = False,
        show_generated_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Chart {/* #delete-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC Contract](/api/grpc/reporting-operations#delete-chart)

```python
async def delete_chart(
        self,
        chart_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Custom Table {/* #delete-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#delete-custom-table)

```python
async def delete_custom_table(
        self,
        table_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Picture {/* #delete-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC Contract](/api/grpc/reporting-operations#delete-picture)

```python
async def delete_picture(
        self,
        picture_name: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Doc {/* #delete-sa-doc */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-doc)

```python
async def delete_sa_doc(
        self,
        doc_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report {/* #delete-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report)

```python
async def delete_sa_report(
        self,
        report_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report Template {/* #delete-sa-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report-template)

```python
async def delete_sa_report_template(
        self,
        report_template_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Quick Report from Tab Order {/* #generate-quick-report-from-tab-order */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC Contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

```python
async def generate_quick_report_from_tab_order(
        self,
        *,
        report_output_options: ReportOutputOptions = ReportOutputOptions.DEFAULT,
        open_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Standard HTML Report {/* #generate-standard-html-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC Contract](/api/grpc/reporting-operations#generate-standard-html-report)

```python
async def generate_standard_html_report(
        self,
        html_output_file: FileReference,
        *,
        decimal_precision: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate/Update Templated Report {/* #generateupdate-templated-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC Contract](/api/grpc/reporting-operations#generateupdate-templated-report)

```python
async def generate_update_templated_report(
        self,
        report_template: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell Double {/* #get-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

```python
async def get_custom_table_cell_double(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell String {/* #get-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

```python
async def get_custom_table_cell_string(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Defined Report Tags {/* #get-defined-report-tags */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC Contract](/api/grpc/reporting-operations#get-defined-report-tags)

```python
async def get_defined_report_tags(self) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Tag Value {/* #get-report-tag-value */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC Contract](/api/grpc/reporting-operations#get-report-tag-value)

```python
async def get_report_tag_value(
        self,
        *,
        tag_name: str = "",
    ) -> GetReportTagValueResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## HTML Display Board {/* #html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#html-display-board)

```python
async def html_display_board(
        self,
        input_html_file: FileReference,
        *,
        show_board: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Custom Table {/* #make-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#make-custom-table)

```python
async def make_custom_table(
        self,
        table_name: CollectionObjectName,
        *,
        decimal_precision: int = 6,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make New SA Report {/* #make-new-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#make-new-sa-report)

```python
async def make_new_sa_report(
        self,
        new_sa_report_name: CollectionObjectName,
        sa_report_template_optional: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Utility Chart {/* #make-utility-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC Contract](/api/grpc/reporting-operations#make-utility-chart)

```python
async def make_utility_chart(
        self,
        ascii_file_path: FileReference,
        *,
        chart_title_override: str = "",
        output_picture_name: CollectionItemName,
        show_chart_dialog: bool = False,
        plot_additional_xy_value: bool = False,
        x_value: float = 0.000000,
        y_value: float = 0.000000,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Double {/* #notify-user-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-double)

```python
async def notify_user_double(
        self,
        *,
        leading_text: str = "",
        font: Font = Font.DEFAULT,
        reported_value: float = 0.000000,
        decimal_precision: int = 0,
        display_timeout: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User HTML {/* #notify-user-html */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-html)

```python
async def notify_user_html(
        self,
        html_file: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Integer {/* #notify-user-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-integer)

```python
async def notify_user_integer(
        self,
        *,
        leading_text: str = "",
        font: Font = Font.DEFAULT,
        reported_value: int = 0,
        display_timeout: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Text Array {/* #notify-user-text-array */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-text-array)

```python
async def notify_user_text_array(
        self,
        notification_text: Iterable[str],
        *,
        font: Font = Font.DEFAULT,
        auto_expand_to_fit_text: bool = False,
        display_timeout: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to Excel {/* #output-sa-report-to-excel */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

```python
async def output_sa_report_to_excel(
        self,
        report_name: CollectionObjectName,
        file_name: FileReference,
        *,
        show_file: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to PDF {/* #output-sa-report-to-pdf */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

```python
async def output_sa_report_to_pdf(
        self,
        report_name: CollectionObjectName,
        file_name: FileReference,
        *,
        show_pdf: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Report {/* #quick-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC Contract](/api/grpc/reporting-operations#quick-report)

```python
async def quick_report(
        self,
        item_name: CollectionObjectName,
        *,
        report_name_optional: str = "",
        open_report: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Callout Views in SA Report {/* #refresh-callout-views-in-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

```python
async def refresh_callout_views_in_sa_report(
        self,
        report_name: CollectionItemName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Report Bar {/* #refresh-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#refresh-report-bar)

```python
async def refresh_report_bar(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Remove Report Tag {/* #remove-report-tag */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC Contract](/api/grpc/reporting-operations#remove-report-tag)

```python
async def remove_report_tag(
        self,
        *,
        tag_name: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Picture {/* #rename-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC Contract](/api/grpc/reporting-operations#rename-picture)

```python
async def rename_picture(
        self,
        original_picture_name: CollectionItemName,
        new_picture_name: CollectionItemName,
        *,
        overwrite_if_exists: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Chart to JPeg file {/* #save-chart-to-jpeg-file */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC Contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

```python
async def save_chart_to_jpeg_file(
        self,
        chart_to_save: ChartName,
        file_to_save_to: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Current View (BMP/JPG/PNG/GIF/TIFF) {/* #save-current-view-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

```python
async def save_current_view_bmp_jpg_png_gif_tiff(
        self,
        file_to_save_to: FileReference,
        *,
        render_scale_factor_1_0_uses_window_size: float = 1.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Color {/* #set-custom-table-cell-color */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

```python
async def set_custom_table_cell_color(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
        foreground_color_name: Color,
        background_color_name: Color,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Double {/* #set-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

```python
async def set_custom_table_cell_double(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
        value: float = 0.000000,
        span: int = 1,
        decimal_precision: int = -1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Font {/* #set-custom-table-cell-font */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

```python
async def set_custom_table_cell_font(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
        font: Font = Font.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell String {/* #set-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

```python
async def set_custom_table_cell_string(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
        value: str = "",
        span: int = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Cell {/* #set-custom-table-header-cell */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

```python
async def set_custom_table_header_cell(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        column: int = 0,
        header_text: str = "",
        span: int = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Row {/* #set-custom-table-header-row */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-row)

```python
async def set_custom_table_header_row(
        self,
        table_name: CollectionObjectName,
        *,
        row: int = 0,
        value: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Title {/* #set-custom-table-title */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-title)

```python
async def set_custom_table_title(
        self,
        table_name: CollectionObjectName,
        *,
        title_line_1: str = "",
        title_line_2: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Group Report Options {/* #set-point-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-point-group-report-options)

```python
async def set_point_group_report_options(
        self,
        point_group: CollectionObjectName,
        *,
        coordinate_system: CoordinateSystemType = CoordinateSystemType.CARTESIAN,
        show_x_component: bool = True,
        show_y_component: bool = True,
        show_z_component: bool = True,
        show_offsets: bool = False,
        show_uncertainty: bool = True,
        show_notes: bool = False,
        show_measurements: bool = False,
        show_measurement_details: bool = False,
        show_pointing_error_worst_angle: bool = False,
        sort_by_point_names: bool = True,
        make_default: bool = False,
        apply_to_all: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Report Options {/* #set-relationship-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-relationship-report-options)

```python
async def set_relationship_report_options(
        self,
        relationship_name: CollectionObjectName,
        *,
        report_options: PointDeltaReportOptions = PointDeltaReportOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Bar Visibility {/* #set-report-bar-visibility */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC Contract](/api/grpc/reporting-operations#set-report-bar-visibility)

```python
async def set_report_bar_visibility(
        self,
        *,
        show_report_bar: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Options for Object {/* #set-report-options-for-object */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC Contract](/api/grpc/reporting-operations#set-report-options-for-object)

```python
async def set_report_options_for_object(
        self,
        object: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Double {/* #set-report-tag-value-from-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

```python
async def set_report_tag_value_from_double(
        self,
        *,
        tag_name: str = "",
        tag_value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Integer {/* #set-report-tag-value-from-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

```python
async def set_report_tag_value_from_integer(
        self,
        *,
        tag_name: str = "",
        tag_value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From String {/* #set-report-tag-value-from-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

```python
async def set_report_tag_value_from_string(
        self,
        *,
        tag_name: str = "",
        tag_value: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Scale for Picture {/* #set-scale-for-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC Contract](/api/grpc/reporting-operations#set-scale-for-picture)

```python
async def set_scale_for_picture(
        self,
        picture_name: CollectionItemName,
        *,
        scale: float = 100.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Report Options {/* #set-vector-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-vector-group-report-options)

```python
async def set_vector_group_report_options(
        self,
        vector_group: CollectionObjectName,
        *,
        report_options: PointDeltaReportOptions = PointDeltaReportOptions.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2026.1.0529.7)
