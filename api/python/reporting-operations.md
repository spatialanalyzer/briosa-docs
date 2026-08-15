---
title: Reporting Operations
description: Next Briosa Python APIs for supported Reporting Operations MP commands.
toc_max_heading_level: 2
---

# Reporting Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Add Charts to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Charts to Report Bar](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `charts` | `Iterable[CollectionObjectName]` | `Chart(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_charts_to_report_bar(
    self,
    charts: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_charts_to_report_bar(charts=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Custom Table to SA Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Custom Table to SA Report](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |
| `show_report` | `bool` | `Show Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_custom_table_to_sa_report(
    self,
    table_name: CollectionObjectName,
    report_name: CollectionObjectName,
    *,
    show_report: bool = False,
) -> None: ...
```

```python
await briosa.add_custom_table_to_sa_report(table_name=..., report_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Custom Tables to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Custom Tables to Report Bar](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `custom_tables_to_report` | `Iterable[CollectionObjectName]` | `Custom Table(s) To Report` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_custom_tables_to_report_bar(
    self,
    custom_tables_to_report: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_custom_tables_to_report_bar(custom_tables_to_report=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Datums to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Datums to Report Bar](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datums` | `Iterable[CollectionObjectName]` | `Datum(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_datums_to_report_bar(
    self,
    datums: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_datums_to_report_bar(datums=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Events to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Events to Report Bar](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-events-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `events` | `Iterable[CollectionObjectName]` | `Event(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_events_to_report_bar(
    self,
    events: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_events_to_report_bar(events=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Feature Checks to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Feature Checks to Report Bar](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `feature_checks` | `Iterable[CollectionObjectName]` | `Feature Check(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_feature_checks_to_report_bar(
    self,
    feature_checks: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_feature_checks_to_report_bar(feature_checks=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Item to SA Report at Location

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Item to SA Report at Location](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |
| `item_name` | `CollectionObjectName` | `Item Name` | Required |
| `page_number` | `int` | `Page Number` | 0 |
| `horizontal_location` | `float` | `Horizontal Location` | 1.000000 |
| `vertical_location` | `float` | `Vertical Location` | 1.000000 |
| `show_report` | `bool` | `Show Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.add_item_to_sa_report_at_location(report_name=..., item_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Objects to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Objects to Report Bar](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable[CollectionObjectName]` | `Object(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_objects_to_report_bar(
    self,
    objects: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = True,
) -> None: ...
```

```python
await briosa.add_objects_to_report_bar(objects=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Pictures to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Pictures to Report Bar](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictures` | `Iterable[CollectionObjectName]` | `Picture(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_pictures_to_report_bar(
    self,
    pictures: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_pictures_to_report_bar(pictures=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Add Relationships to Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Add Relationships to Report Bar](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable[CollectionObjectName]` | `Relationship(s)` | Required |
| `clear_existing` | `bool` | `Clear Existing?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def add_relationships_to_report_bar(
    self,
    relationships: Iterable[CollectionObjectName],
    *,
    clear_existing: bool = False,
) -> None: ...
```

```python
await briosa.add_relationships_to_report_bar(relationships=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Append Items to SA Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Append Items to SA Report](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#append-items-to-sa-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |
| `items_to_report` | `Iterable[CollectionObjectName]` | `Items To Report` | Required |
| `show_report` | `bool` | `Show Report?` | false |
| `begin_on_new_page` | `bool` | `Begin On New Page?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.append_items_to_sa_report(report_name=..., items_to_report=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Capture Current View

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Capture Current View](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC contract](/api/grpc/reporting-operations#capture-current-view)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `picture_name` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def capture_current_view(
    self,
    picture_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.capture_current_view(picture_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_to_save_to` | `FileReference` | `File to save to` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def capture_screen_to_file_bmp_jpg_png_gif_tiff(
    self,
    file_to_save_to: FileReference,
) -> None: ...
```

```python
await briosa.capture_screen_to_file_bmp_jpg_png_gif_tiff(file_to_save_to=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Clear Custom Table

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Clear Custom Table](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC contract](/api/grpc/reporting-operations#clear-custom-table)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def clear_custom_table(
    self,
    table_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.clear_custom_table(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Close All Reports

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Close All Reports](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC contract](/api/grpc/reporting-operations#close-all-reports)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def close_all_reports(self) -> None: ...
```

```python
await briosa.close_all_reports()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Close HTML Display Board

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Close HTML Display Board](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC contract](/api/grpc/reporting-operations#close-html-display-board)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def close_html_display_board(self) -> None: ...
```

```python
await briosa.close_html_display_board()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Combine SA Reports

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Combine SA Reports](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC contract](/api/grpc/reporting-operations#combine-sa-reports)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sa_reports_to_combine` | `Iterable[CollectionObjectName]` | `SA Reports to Combine` | Required |
| `output_sa_report_name` | `CollectionObjectName` | `Output SA Report Name` | Required |
| `show_report` | `bool` | `Show Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def combine_sa_reports(
    self,
    sa_reports_to_combine: Iterable[CollectionObjectName],
    output_sa_report_name: CollectionObjectName,
    *,
    show_report: bool = False,
) -> None: ...
```

```python
await briosa.combine_sa_reports(sa_reports_to_combine=..., output_sa_report_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Create Chart from Vector Group

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Create Chart from Vector Group](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `new_chart_name` | `ChartName` | `New Chart Name` | Required |
| `vector_group_name` | `CollectionObjectName` | `Vector Group Name` | Required |
| `chart_type` | `ChartType` | `Chart Type` | Required |
| `data_set_to_chart` | `DatasetType` | `Data Set to Chart` | Required |
| `aux_data_set_to_chart` | `DatasetType` | `Aux Data Set to Chart` | Required |
| `template_chart_name_optional` | `ChartName` | `Template Chart Name (optional)` | Required |
| `show_interface` | `bool` | `Show Interface?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.create_chart_from_vector_group(new_chart_name=..., vector_group_name=..., chart_type=..., data_set_to_chart=..., aux_data_set_to_chart=..., template_chart_name_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Define Report Template

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Define Report Template](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC contract](/api/grpc/reporting-operations#define-report-template)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_template_name` | `CollectionObjectName` | `Report Template Name` | Required |
| `title` | `Iterable[str]` | `Title` | Required |
| `graphical_view_options` | `ReportViewOptions` | `Graphical View Options` | Required |
| `items_to_report` | `Iterable[CollectionObjectName]` | `Items To Report` | Required |
| `relationships_to_report` | `Iterable[CollectionObjectName]` | `Relationships To Report` | Required |
| `events_to_report` | `Iterable[CollectionObjectName]` | `Events To Report` | Required |
| `report_output_options` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `report_page_settings_sa_report_only` | `ReportPageSettings` | `Report Page Settings ( SA Report only )` | Portrait |
| `generate_now` | `bool` | `Generate Now?` | false |
| `show_generated_report` | `bool` | `Show Generated Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def define_report_template(
    self,
    report_template_name: CollectionObjectName,
    title: Iterable[str],
    graphical_view_options: ReportViewOptions,
    items_to_report: Iterable[CollectionObjectName],
    relationships_to_report: Iterable[CollectionObjectName],
    events_to_report: Iterable[CollectionObjectName],
    *,
    report_output_options: ReportOutputOptions = ReportOutputOptions.DEFAULT,
    report_page_settings_sa_report_only: ReportPageSettings = ReportPageSettings.DEFAULT,
    generate_now: bool = False,
    show_generated_report: bool = False,
) -> None: ...
```

```python
await briosa.define_report_template(report_template_name=..., title=..., graphical_view_options=..., items_to_report=..., relationships_to_report=..., events_to_report=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Chart

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Chart](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC contract](/api/grpc/reporting-operations#delete-chart)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chart_name` | `CollectionObjectName` | `Chart Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_chart(
    self,
    chart_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_chart(chart_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Custom Table

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Custom Table](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC contract](/api/grpc/reporting-operations#delete-custom-table)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_custom_table(
    self,
    table_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_custom_table(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete Picture

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete Picture](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC contract](/api/grpc/reporting-operations#delete-picture)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `picture_name` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_picture(
    self,
    picture_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_picture(picture_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete SA Doc

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete SA Doc](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-doc)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `doc_name` | `CollectionObjectName` | `Doc Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_sa_doc(
    self,
    doc_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_sa_doc(doc_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete SA Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete SA Report](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_sa_report(
    self,
    report_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_sa_report(report_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Delete SA Report Template

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Delete SA Report Template](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report-template)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_template_name` | `CollectionObjectName` | `Report Template Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def delete_sa_report_template(
    self,
    report_template_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.delete_sa_report_template(report_template_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Generate Quick Report from Tab Order

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Generate Quick Report from Tab Order](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_output_options` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `open_report` | `bool` | `Open Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def generate_quick_report_from_tab_order(
    self,
    *,
    report_output_options: ReportOutputOptions = ReportOutputOptions.DEFAULT,
    open_report: bool = False,
) -> None: ...
```

```python
await briosa.generate_quick_report_from_tab_order()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Generate Standard HTML Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Generate Standard HTML Report](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC contract](/api/grpc/reporting-operations#generate-standard-html-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `html_output_file` | `FileReference` | `HTML Output File` | Required |
| `decimal_precision` | `int` | `Decimal Precision` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def generate_standard_html_report(
    self,
    html_output_file: FileReference,
    *,
    decimal_precision: int = 0,
) -> None: ...
```

```python
await briosa.generate_standard_html_report(html_output_file=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Generate/Update Templated Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Generate/Update Templated Report](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC contract](/api/grpc/reporting-operations#generateupdate-templated-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_template` | `CollectionObjectName` | `Report Template` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def generate_update_templated_report(
    self,
    report_template: CollectionObjectName,
) -> None: ...
```

```python
await briosa.generate_update_templated_report(report_template=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Custom Table Cell Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `float` | `Value` |

```python
async def get_custom_table_cell_double(
    self,
    table_name: CollectionObjectName,
    *,
    row: int = 0,
    column: int = 0,
) -> float: ...
```

```python
await briosa.get_custom_table_cell_double(table_name=...)
```

Returns the MP output `Value` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Custom Table Cell String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `value` | `str` | `Value` |

```python
async def get_custom_table_cell_string(
    self,
    table_name: CollectionObjectName,
    *,
    row: int = 0,
    column: int = 0,
) -> str: ...
```

```python
await briosa.get_custom_table_cell_string(table_name=...)
```

Returns the MP output `Value` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Defined Report Tags

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Defined Report Tags](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC contract](/api/grpc/reporting-operations#get-defined-report-tags)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `defined_tags` | `list[str]` | `Defined Tags` |

```python
async def get_defined_report_tags(self) -> list[str]: ...
```

```python
await briosa.get_defined_report_tags()
```

Returns the MP output `Defined Tags` directly as `list[str]`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Get Report Tag Value

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Get Report Tag Value](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC contract](/api/grpc/reporting-operations#get-report-tag-value)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tag_name` | `str` | `Tag Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `tag_value_as_string` | `str` | `Tag Value As String` |
| `tag_value_as_integer` | `int` | `Tag Value As Integer` |
| `tag_value_as_double` | `float` | `Tag Value As Double` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class GetReportTagValueResult:
    tag_value_as_string: str
    tag_value_as_integer: int
    tag_value_as_double: float

async def get_report_tag_value(
    self,
    *,
    tag_name: str = '',
) -> GetReportTagValueResult: ...
```

```python
await briosa.get_report_tag_value()
```

Returns the 3 MP outputs in the named `GetReportTagValueResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## HTML Display Board

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[HTML Display Board](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC contract](/api/grpc/reporting-operations#html-display-board)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `input_html_file` | `FileReference` | `Input HTML File` | Required |
| `show_board` | `bool` | `Show Board?` | true |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def html_display_board(
    self,
    input_html_file: FileReference,
    *,
    show_board: bool = True,
) -> None: ...
```

```python
await briosa.html_display_board(input_html_file=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Custom Table

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Custom Table](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC contract](/api/grpc/reporting-operations#make-custom-table)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `decimal_precision` | `int` | `Decimal Precision` | 6 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_custom_table(
    self,
    table_name: CollectionObjectName,
    *,
    decimal_precision: int = 6,
) -> None: ...
```

```python
await briosa.make_custom_table(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make New SA Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make New SA Report](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC contract](/api/grpc/reporting-operations#make-new-sa-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `new_sa_report_name` | `CollectionObjectName` | `New SA Report Name` | Required |
| `sa_report_template_optional` | `CollectionObjectName` | `SA Report Template (optional)` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def make_new_sa_report(
    self,
    new_sa_report_name: CollectionObjectName,
    sa_report_template_optional: CollectionObjectName,
) -> None: ...
```

```python
await briosa.make_new_sa_report(new_sa_report_name=..., sa_report_template_optional=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Make Utility Chart

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Make Utility Chart](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC contract](/api/grpc/reporting-operations#make-utility-chart)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ascii_file_path` | `FileReference` | `ASCII File Path` | Required |
| `chart_title_override` | `str` | `Chart Title Override` | Empty |
| `output_picture_name` | `CollectionObjectName` | `Output Picture Name` | Required |
| `show_chart_dialog` | `bool` | `Show Chart Dialog?` | false |
| `plot_additional_xy_value` | `bool` | `Plot Additional XY Value?` | false |
| `x_value` | `float` | `X Value` | 0.000000 |
| `y_value` | `float` | `Y Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `is_point_inside` | `bool` | `Is Point Inside?` |

```python
async def make_utility_chart(
    self,
    ascii_file_path: FileReference,
    *,
    chart_title_override: str = '',
    output_picture_name: CollectionObjectName,
    show_chart_dialog: bool = False,
    plot_additional_xy_value: bool = False,
    x_value: float = 0.000000,
    y_value: float = 0.000000,
) -> bool: ...
```

```python
await briosa.make_utility_chart(ascii_file_path=..., output_picture_name=...)
```

Returns the MP output `Is Point Inside?` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Notify User Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Notify User Double](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC contract](/api/grpc/reporting-operations#notify-user-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leading_text` | `str` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reported_value` | `float` | `Reported Value` | 0.000000 |
| `decimal_precision` | `int` | `Decimal Precision` | 0 |
| `display_timeout` | `int` | `Display Timeout` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def notify_user_double(
    self,
    *,
    leading_text: str = '',
    font: Font = Font.DEFAULT,
    reported_value: float = 0.000000,
    decimal_precision: int = 0,
    display_timeout: int = 0,
) -> None: ...
```

```python
await briosa.notify_user_double()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Notify User HTML

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Notify User HTML](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC contract](/api/grpc/reporting-operations#notify-user-html)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `html_file` | `FileReference` | `HTML File` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def notify_user_html(
    self,
    html_file: FileReference,
) -> None: ...
```

```python
await briosa.notify_user_html(html_file=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Notify User Integer

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Notify User Integer](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC contract](/api/grpc/reporting-operations#notify-user-integer)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leading_text` | `str` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reported_value` | `int` | `Reported Value` | 0 |
| `display_timeout` | `int` | `Display Timeout` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def notify_user_integer(
    self,
    *,
    leading_text: str = '',
    font: Font = Font.DEFAULT,
    reported_value: int = 0,
    display_timeout: int = 0,
) -> None: ...
```

```python
await briosa.notify_user_integer()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Notify User Text Array

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Notify User Text Array](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC contract](/api/grpc/reporting-operations#notify-user-text-array)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `notification_text` | `Iterable[str]` | `Notification Text` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `auto_expand_to_fit_text` | `bool` | `Auto expand to fit text?` | false |
| `display_timeout` | `int` | `Display Timeout` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.notify_user_text_array(notification_text=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Output SA Report to Excel

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Output SA Report to Excel](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |
| `file_name` | `FileReference` | `File Name` | Required |
| `show_file` | `bool` | `Show File?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def output_sa_report_to_excel(
    self,
    report_name: CollectionObjectName,
    file_name: FileReference,
    *,
    show_file: bool = False,
) -> None: ...
```

```python
await briosa.output_sa_report_to_excel(report_name=..., file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Output SA Report to PDF

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Output SA Report to PDF](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |
| `file_name` | `FileReference` | `File Name` | Required |
| `show_pdf` | `bool` | `Show PDF?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def output_sa_report_to_pdf(
    self,
    report_name: CollectionObjectName,
    file_name: FileReference,
    *,
    show_pdf: bool = False,
) -> None: ...
```

```python
await briosa.output_sa_report_to_pdf(report_name=..., file_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Quick Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Quick Report](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC contract](/api/grpc/reporting-operations#quick-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `item_name` | `CollectionObjectName` | `Item Name` | Required |
| `report_name_optional` | `str` | `Report Name (optional)` | Empty |
| `open_report` | `bool` | `Open Report?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def quick_report(
    self,
    item_name: CollectionObjectName,
    *,
    report_name_optional: str = '',
    open_report: bool = False,
) -> None: ...
```

```python
await briosa.quick_report(item_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Refresh Callout Views in SA Report

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Refresh Callout Views in SA Report](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `report_name` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def refresh_callout_views_in_sa_report(
    self,
    report_name: CollectionObjectName,
) -> None: ...
```

```python
await briosa.refresh_callout_views_in_sa_report(report_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Refresh Report Bar

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Refresh Report Bar](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC contract](/api/grpc/reporting-operations#refresh-report-bar)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def refresh_report_bar(self) -> None: ...
```

```python
await briosa.refresh_report_bar()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Remove Report Tag

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Remove Report Tag](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC contract](/api/grpc/reporting-operations#remove-report-tag)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tag_name` | `str` | `Tag Name` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def remove_report_tag(
    self,
    *,
    tag_name: str = '',
) -> None: ...
```

```python
await briosa.remove_report_tag()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Rename Picture

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Rename Picture](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC contract](/api/grpc/reporting-operations#rename-picture)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `original_picture_name` | `CollectionObjectName` | `Original Picture Name` | Required |
| `new_picture_name` | `CollectionObjectName` | `New Picture Name` | Required |
| `overwrite_if_exists` | `bool` | `Overwrite if exists?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def rename_picture(
    self,
    original_picture_name: CollectionObjectName,
    new_picture_name: CollectionObjectName,
    *,
    overwrite_if_exists: bool = False,
) -> None: ...
```

```python
await briosa.rename_picture(original_picture_name=..., new_picture_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save Chart to JPeg file

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save Chart to JPeg file](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chart_to_save` | `ChartName` | `Chart to Save` | Required |
| `file_to_save_to` | `FileReference` | `File to save to` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save_chart_to_j_peg_file(
    self,
    chart_to_save: ChartName,
    file_to_save_to: FileReference,
) -> None: ...
```

```python
await briosa.save_chart_to_j_peg_file(chart_to_save=..., file_to_save_to=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Save Current View (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Save Current View (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `file_to_save_to` | `FileReference` | `File to save to` | Required |
| `render_scale_factor_1_0_uses_window_size` | `float` | `Render Scale Factor (1.0 uses window size)` | 1.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def save_current_view_bmp_jpg_png_gif_tiff(
    self,
    file_to_save_to: FileReference,
    *,
    render_scale_factor_1_0_uses_window_size: float = 1.000000,
) -> None: ...
```

```python
await briosa.save_current_view_bmp_jpg_png_gif_tiff(file_to_save_to=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Cell Color

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Cell Color](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `foreground_color_name` | `Color` | `Foreground Color Name` | RGB 255, 0, 0 |
| `background_color_name` | `Color` | `Background Color Name` | RGB 255, 0, 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.set_custom_table_cell_color(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Cell Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `value` | `float` | `Value` | 0.000000 |
| `span` | `int` | `Span` | 1 |
| `decimal_precision` | `int` | `Decimal Precision` | -1 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.set_custom_table_cell_double(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Cell Font

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Cell Font](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

```python
await briosa.set_custom_table_cell_font(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Cell String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `value` | `str` | `Value` | Empty |
| `span` | `int` | `Span` | 1 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_custom_table_cell_string(
    self,
    table_name: CollectionObjectName,
    *,
    row: int = 0,
    column: int = 0,
    value: str = '',
    span: int = 1,
) -> None: ...
```

```python
await briosa.set_custom_table_cell_string(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Header Cell

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Header Cell](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `column` | `int` | `Column` | 0 |
| `header_text` | `str` | `Header Text` | Empty |
| `span` | `int` | `Span` | 1 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_custom_table_header_cell(
    self,
    table_name: CollectionObjectName,
    *,
    row: int = 0,
    column: int = 0,
    header_text: str = '',
    span: int = 1,
) -> None: ...
```

```python
await briosa.set_custom_table_header_cell(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Header Row

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Header Row](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-row)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `int` | `Row` | 0 |
| `value` | `str` | `Value` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_custom_table_header_row(
    self,
    table_name: CollectionObjectName,
    *,
    row: int = 0,
    value: str = '',
) -> None: ...
```

```python
await briosa.set_custom_table_header_row(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Custom Table Title

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Custom Table Title](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-title)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `table_name` | `CollectionObjectName` | `Table Name` | Required |
| `title_line_1` | `str` | `Title Line 1` | Empty |
| `title_line_2` | `str` | `Title Line 2` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_custom_table_title(
    self,
    table_name: CollectionObjectName,
    *,
    title_line_1: str = '',
    title_line_2: str = '',
) -> None: ...
```

```python
await briosa.set_custom_table_title(table_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Point Group Report Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Point Group Report Options](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-point-group-report-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `point_group` | `CollectionObjectName` | `Point Group` | Required |
| `coordinate_system` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `show_x_component` | `bool` | `Show X Component` | true |
| `show_y_component` | `bool` | `Show Y Component` | true |
| `show_z_component` | `bool` | `Show Z Component` | true |
| `show_offsets` | `bool` | `Show Offsets` | false |
| `show_uncertainty` | `bool` | `Show Uncertainty` | true |
| `show_notes` | `bool` | `Show Notes` | false |
| `show_measurements` | `bool` | `Show Measurements` | false |
| `show_measurement_details` | `bool` | `Show Measurement Details` | false |
| `show_pointing_error_worst_angle` | `bool` | `Show PointingError/Worst Angle` | false |
| `sort_by_point_names` | `bool` | `Sort by Point Names` | true |
| `make_default` | `bool` | `Make Default` | false |
| `apply_to_all` | `bool` | `Apply to All` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_point_group_report_options(
    self,
    point_group: CollectionObjectName,
    *,
    coordinate_system: CoordinateSystemType = CoordinateSystemType.DEFAULT,
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

```python
await briosa.set_point_group_report_options(point_group=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Relationship Report Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Relationship Report Options](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-relationship-report-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationship_name` | `CollectionObjectName` | `Relationship Name` | Required |
| `report_options` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_relationship_report_options(
    self,
    relationship_name: CollectionObjectName,
    *,
    report_options: PointDeltaReportOptions = PointDeltaReportOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_relationship_report_options(relationship_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Bar Visibility

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Report Bar Visibility](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC contract](/api/grpc/reporting-operations#set-report-bar-visibility)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `show_report_bar` | `bool` | `Show Report Bar?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_bar_visibility(
    self,
    *,
    show_report_bar: bool = False,
) -> None: ...
```

```python
await briosa.set_report_bar_visibility()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Options for Object

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Report Options for Object](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC contract](/api/grpc/reporting-operations#set-report-options-for-object)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_options_for_object(
    self,
    object: CollectionObjectName,
) -> None: ...
```

```python
await briosa.set_report_options_for_object(object=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Tag Value From Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Report Tag Value From Double](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tag_name` | `str` | `Tag Name` | Empty |
| `tag_value` | `float` | `Tag Value` | 0.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_tag_value_from_double(
    self,
    *,
    tag_name: str = '',
    tag_value: float = 0.000000,
) -> None: ...
```

```python
await briosa.set_report_tag_value_from_double()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Tag Value From Integer

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Report Tag Value From Integer](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tag_name` | `str` | `Tag Name` | Empty |
| `tag_value` | `int` | `Tag Value` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_tag_value_from_integer(
    self,
    *,
    tag_name: str = '',
    tag_value: int = 0,
) -> None: ...
```

```python
await briosa.set_report_tag_value_from_integer()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Report Tag Value From String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Report Tag Value From String](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tag_name` | `str` | `Tag Name` | Empty |
| `tag_value` | `str` | `Tag Value` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_report_tag_value_from_string(
    self,
    *,
    tag_name: str = '',
    tag_value: str = '',
) -> None: ...
```

```python
await briosa.set_report_tag_value_from_string()
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Scale for Picture

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Scale for Picture](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC contract](/api/grpc/reporting-operations#set-scale-for-picture)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `picture_name` | `CollectionObjectName` | `Picture Name` | Required |
| `scale` | `float` | `Scale` | 100.000000 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_scale_for_picture(
    self,
    picture_name: CollectionObjectName,
    *,
    scale: float = 100.000000,
) -> None: ...
```

```python
await briosa.set_scale_for_picture(picture_name=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Set Vector Group Report Options

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Set Vector Group Report Options](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-vector-group-report-options)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vector_group` | `CollectionObjectName` | `Vector Group` | Required |
| `report_options` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def set_vector_group_report_options(
    self,
    vector_group: CollectionObjectName,
    *,
    report_options: PointDeltaReportOptions = PointDeltaReportOptions.DEFAULT,
) -> None: ...
```

```python
await briosa.set_vector_group_report_options(vector_group=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
