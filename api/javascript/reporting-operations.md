---
title: Reporting Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Reporting Operations MP commands.
toc_max_heading_level: 2
---

# Reporting Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Add Charts to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Charts to Report Bar](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `charts` | `Iterable<CollectionObjectName>` | `Chart(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddChartsToReportBarInput {
  readonly charts: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addChartsToReportBar(
  briosa: BriosaClient,
  input: AddChartsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addChartsToReportBar(briosa, { charts: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Custom Table to SA Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Custom Table to SA Report](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `showReport` | `boolean` | `Show Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddCustomTableToSaReportInput {
  readonly tableName: CollectionObjectName;
  readonly reportName: CollectionObjectName;
  readonly showReport?: boolean;
}

function addCustomTableToSaReport(
  briosa: BriosaClient,
  input: AddCustomTableToSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addCustomTableToSaReport(briosa, { tableName: ..., reportName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Custom Tables to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Custom Tables to Report Bar](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `customTablesToReport` | `Iterable<CollectionObjectName>` | `Custom Table(s) To Report` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddCustomTablesToReportBarInput {
  readonly customTablesToReport: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addCustomTablesToReportBar(
  briosa: BriosaClient,
  input: AddCustomTablesToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addCustomTablesToReportBar(briosa, { customTablesToReport: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Datums to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Datums to Report Bar](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `datums` | `Iterable<CollectionObjectName>` | `Datum(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddDatumsToReportBarInput {
  readonly datums: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addDatumsToReportBar(
  briosa: BriosaClient,
  input: AddDatumsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addDatumsToReportBar(briosa, { datums: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Events to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Events to Report Bar](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-events-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `events` | `Iterable<CollectionObjectName>` | `Event(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddEventsToReportBarInput {
  readonly events: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addEventsToReportBar(
  briosa: BriosaClient,
  input: AddEventsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addEventsToReportBar(briosa, { events: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Feature Checks to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Feature Checks to Report Bar](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `featureChecks` | `Iterable<CollectionObjectName>` | `Feature Check(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddFeatureChecksToReportBarInput {
  readonly featureChecks: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addFeatureChecksToReportBar(
  briosa: BriosaClient,
  input: AddFeatureChecksToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addFeatureChecksToReportBar(briosa, { featureChecks: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Item to SA Report at Location

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Item to SA Report at Location](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `itemName` | `CollectionObjectName` | `Item Name` | Required |
| `pageNumber` | `number` | `Page Number` | 0 |
| `horizontalLocation` | `number` | `Horizontal Location` | 1.000000 |
| `verticalLocation` | `number` | `Vertical Location` | 1.000000 |
| `showReport` | `boolean` | `Show Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddItemToSaReportAtLocationInput {
  readonly reportName: CollectionObjectName;
  readonly itemName: CollectionObjectName;
  readonly pageNumber?: number;
  readonly horizontalLocation?: number;
  readonly verticalLocation?: number;
  readonly showReport?: boolean;
}

function addItemToSaReportAtLocation(
  briosa: BriosaClient,
  input: AddItemToSaReportAtLocationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addItemToSaReportAtLocation(briosa, { reportName: ..., itemName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Objects to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Objects to Report Bar](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objects` | `Iterable<CollectionObjectName>` | `Object(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddObjectsToReportBarInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addObjectsToReportBar(
  briosa: BriosaClient,
  input: AddObjectsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addObjectsToReportBar(briosa, { objects: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Pictures to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Pictures to Report Bar](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictures` | `Iterable<CollectionObjectName>` | `Picture(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddPicturesToReportBarInput {
  readonly pictures: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addPicturesToReportBar(
  briosa: BriosaClient,
  input: AddPicturesToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addPicturesToReportBar(briosa, { pictures: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Add Relationships to Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Add Relationships to Report Bar](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationships` | `Iterable<CollectionObjectName>` | `Relationship(s)` | Required |
| `clearExisting` | `boolean` | `Clear Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AddRelationshipsToReportBarInput {
  readonly relationships: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

function addRelationshipsToReportBar(
  briosa: BriosaClient,
  input: AddRelationshipsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await addRelationshipsToReportBar(briosa, { relationships: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Append Items to SA Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Append Items to SA Report](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC contract](/api/grpc/reporting-operations#append-items-to-sa-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `itemsToReport` | `Iterable<CollectionObjectName>` | `Items To Report` | Required |
| `showReport` | `boolean` | `Show Report?` | false |
| `beginOnNewPage` | `boolean` | `Begin On New Page?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface AppendItemsToSaReportInput {
  readonly reportName: CollectionObjectName;
  readonly itemsToReport: Iterable<CollectionObjectName>;
  readonly showReport?: boolean;
  readonly beginOnNewPage?: boolean;
}

function appendItemsToSaReport(
  briosa: BriosaClient,
  input: AppendItemsToSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await appendItemsToSaReport(briosa, { reportName: ..., itemsToReport: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Capture Current View

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Capture Current View](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC contract](/api/grpc/reporting-operations#capture-current-view)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CaptureCurrentViewInput {
  readonly pictureName: CollectionObjectName;
}

function captureCurrentView(
  briosa: BriosaClient,
  input: CaptureCurrentViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await captureCurrentView(briosa, { pictureName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Capture Screen to File (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CaptureScreenToFileBmpJpgPngGifTiffInput {
  readonly fileToSaveTo: FileReference;
}

function captureScreenToFileBmpJpgPngGifTiff(
  briosa: BriosaClient,
  input: CaptureScreenToFileBmpJpgPngGifTiffInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await captureScreenToFileBmpJpgPngGifTiff(briosa, { fileToSaveTo: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Clear Custom Table

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Clear Custom Table](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC contract](/api/grpc/reporting-operations#clear-custom-table)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ClearCustomTableInput {
  readonly tableName: CollectionObjectName;
}

function clearCustomTable(
  briosa: BriosaClient,
  input: ClearCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await clearCustomTable(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Close All Reports

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Close All Reports](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC contract](/api/grpc/reporting-operations#close-all-reports)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function closeAllReports(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await closeAllReports(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Close HTML Display Board

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Close HTML Display Board](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC contract](/api/grpc/reporting-operations#close-html-display-board)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function closeHtmlDisplayBoard(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await closeHtmlDisplayBoard(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Combine SA Reports

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Combine SA Reports](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC contract](/api/grpc/reporting-operations#combine-sa-reports)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saReportsToCombine` | `Iterable<CollectionObjectName>` | `SA Reports to Combine` | Required |
| `outputSaReportName` | `CollectionObjectName` | `Output SA Report Name` | Required |
| `showReport` | `boolean` | `Show Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CombineSaReportsInput {
  readonly saReportsToCombine: Iterable<CollectionObjectName>;
  readonly outputSaReportName: CollectionObjectName;
  readonly showReport?: boolean;
}

function combineSaReports(
  briosa: BriosaClient,
  input: CombineSaReportsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await combineSaReports(briosa, { saReportsToCombine: ..., outputSaReportName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Create Chart from Vector Group

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Create Chart from Vector Group](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newChartName` | `ChartName` | `New Chart Name` | Required |
| `vectorGroupName` | `CollectionObjectName` | `Vector Group Name` | Required |
| `chartType` | `ChartType` | `Chart Type` | Required |
| `dataSetToChart` | `DatasetType` | `Data Set to Chart` | Required |
| `auxDataSetToChart` | `DatasetType` | `Aux Data Set to Chart` | Required |
| `templateChartNameOptional` | `ChartName` | `Template Chart Name (optional)` | Required |
| `showInterface` | `boolean` | `Show Interface?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CreateChartFromVectorGroupInput {
  readonly newChartName: ChartName;
  readonly vectorGroupName: CollectionObjectName;
  readonly chartType: ChartType;
  readonly dataSetToChart: DatasetType;
  readonly auxDataSetToChart: DatasetType;
  readonly templateChartNameOptional: ChartName;
  readonly showInterface?: boolean;
}

function createChartFromVectorGroup(
  briosa: BriosaClient,
  input: CreateChartFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await createChartFromVectorGroup(briosa, { newChartName: ..., vectorGroupName: ..., chartType: ..., dataSetToChart: ..., auxDataSetToChart: ..., templateChartNameOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Define Report Template

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Define Report Template](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC contract](/api/grpc/reporting-operations#define-report-template)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplateName` | `CollectionObjectName` | `Report Template Name` | Required |
| `title` | `Iterable<string>` | `Title` | Required |
| `graphicalViewOptions` | `ReportViewOptions` | `Graphical View Options` | Required |
| `itemsToReport` | `Iterable<CollectionObjectName>` | `Items To Report` | Required |
| `relationshipsToReport` | `Iterable<CollectionObjectName>` | `Relationships To Report` | Required |
| `eventsToReport` | `Iterable<CollectionObjectName>` | `Events To Report` | Required |
| `reportOutputOptions` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `reportPageSettingsSaReportOnly` | `ReportPageSettings` | `Report Page Settings ( SA Report only )` | Portrait |
| `generateNow` | `boolean` | `Generate Now?` | false |
| `showGeneratedReport` | `boolean` | `Show Generated Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DefineReportTemplateInput {
  readonly reportTemplateName: CollectionObjectName;
  readonly title: Iterable<string>;
  readonly graphicalViewOptions: ReportViewOptions;
  readonly itemsToReport: Iterable<CollectionObjectName>;
  readonly relationshipsToReport: Iterable<CollectionObjectName>;
  readonly eventsToReport: Iterable<CollectionObjectName>;
  readonly reportOutputOptions?: ReportOutputOptions;
  readonly reportPageSettingsSaReportOnly?: ReportPageSettings;
  readonly generateNow?: boolean;
  readonly showGeneratedReport?: boolean;
}

function defineReportTemplate(
  briosa: BriosaClient,
  input: DefineReportTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await defineReportTemplate(briosa, { reportTemplateName: ..., title: ..., graphicalViewOptions: ..., itemsToReport: ..., relationshipsToReport: ..., eventsToReport: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Chart

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Chart](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC contract](/api/grpc/reporting-operations#delete-chart)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chartName` | `CollectionObjectName` | `Chart Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteChartInput {
  readonly chartName: CollectionObjectName;
}

function deleteChart(
  briosa: BriosaClient,
  input: DeleteChartInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteChart(briosa, { chartName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Custom Table

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Custom Table](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC contract](/api/grpc/reporting-operations#delete-custom-table)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteCustomTableInput {
  readonly tableName: CollectionObjectName;
}

function deleteCustomTable(
  briosa: BriosaClient,
  input: DeleteCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteCustomTable(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete Picture

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Picture](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC contract](/api/grpc/reporting-operations#delete-picture)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeletePictureInput {
  readonly pictureName: CollectionObjectName;
}

function deletePicture(
  briosa: BriosaClient,
  input: DeletePictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deletePicture(briosa, { pictureName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete SA Doc

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete SA Doc](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-doc)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `docName` | `CollectionObjectName` | `Doc Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteSaDocInput {
  readonly docName: CollectionObjectName;
}

function deleteSaDoc(
  briosa: BriosaClient,
  input: DeleteSaDocInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteSaDoc(briosa, { docName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete SA Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete SA Report](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteSaReportInput {
  readonly reportName: CollectionObjectName;
}

function deleteSaReport(
  briosa: BriosaClient,
  input: DeleteSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteSaReport(briosa, { reportName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete SA Report Template

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete SA Report Template](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC contract](/api/grpc/reporting-operations#delete-sa-report-template)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplateName` | `CollectionObjectName` | `Report Template Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteSaReportTemplateInput {
  readonly reportTemplateName: CollectionObjectName;
}

function deleteSaReportTemplate(
  briosa: BriosaClient,
  input: DeleteSaReportTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteSaReportTemplate(briosa, { reportTemplateName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Generate Quick Report from Tab Order

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Generate Quick Report from Tab Order](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportOutputOptions` | `ReportOutputOptions` | `Report Output Options` | ::My Report |
| `openReport` | `boolean` | `Open Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GenerateQuickReportFromTabOrderInput {
  readonly reportOutputOptions?: ReportOutputOptions;
  readonly openReport?: boolean;
}

function generateQuickReportFromTabOrder(
  briosa: BriosaClient,
  input?: GenerateQuickReportFromTabOrderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await generateQuickReportFromTabOrder(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Generate Standard HTML Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Generate Standard HTML Report](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC contract](/api/grpc/reporting-operations#generate-standard-html-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `htmlOutputFile` | `FileReference` | `HTML Output File` | Required |
| `decimalPrecision` | `number` | `Decimal Precision` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GenerateStandardHtmlReportInput {
  readonly htmlOutputFile: FileReference;
  readonly decimalPrecision?: number;
}

function generateStandardHtmlReport(
  briosa: BriosaClient,
  input: GenerateStandardHtmlReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await generateStandardHtmlReport(briosa, { htmlOutputFile: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Generate/Update Templated Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Generate/Update Templated Report](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC contract](/api/grpc/reporting-operations#generateupdate-templated-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportTemplate` | `CollectionObjectName` | `Report Template` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface GenerateUpdateTemplatedReportInput {
  readonly reportTemplate: CollectionObjectName;
}

function generateUpdateTemplatedReport(
  briosa: BriosaClient,
  input: GenerateUpdateTemplatedReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await generateUpdateTemplatedReport(briosa, { reportTemplate: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Custom Table Cell Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `number` | `Value` |

```ts
export interface GetCustomTableCellDoubleInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
}

function getCustomTableCellDouble(
  briosa: BriosaClient,
  input: GetCustomTableCellDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getCustomTableCellDouble(briosa, { tableName: ... });
```

Returns the MP output `Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Custom Table Cell String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `value` | `string` | `Value` |

```ts
export interface GetCustomTableCellStringInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
}

function getCustomTableCellString(
  briosa: BriosaClient,
  input: GetCustomTableCellStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getCustomTableCellString(briosa, { tableName: ... });
```

Returns the MP output `Value` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Defined Report Tags

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Defined Report Tags](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC contract](/api/grpc/reporting-operations#get-defined-report-tags)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `definedTags` | `readonly string[]` | `Defined Tags` |

```ts
function getDefinedReportTags(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getDefinedReportTags(briosa);
```

Returns the MP output `Defined Tags` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Report Tag Value

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Report Tag Value](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC contract](/api/grpc/reporting-operations#get-report-tag-value)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `tagValueAsString` | `string` | `Tag Value As String` |
| `tagValueAsInteger` | `number` | `Tag Value As Integer` |
| `tagValueAsDouble` | `number` | `Tag Value As Double` |

```ts
export interface GetReportTagValueResult {
  readonly tagValueAsString: string;
  readonly tagValueAsInteger: number;
  readonly tagValueAsDouble: number;
}

export interface GetReportTagValueInput {
  readonly tagName?: string;
}

function getReportTagValue(
  briosa: BriosaClient,
  input?: GetReportTagValueInput,
  options?: BriosaCallOptions,
): Promise<GetReportTagValueResult>;
```

```ts
await getReportTagValue(briosa);
```

Returns the 3 MP outputs in the named `GetReportTagValueResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## HTML Display Board

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[HTML Display Board](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC contract](/api/grpc/reporting-operations#html-display-board)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFile` | `FileReference` | `Input HTML File` | Required |
| `showBoard` | `boolean` | `Show Board?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface HtmlDisplayBoardInput {
  readonly inputHtmlFile: FileReference;
  readonly showBoard?: boolean;
}

function htmlDisplayBoard(
  briosa: BriosaClient,
  input: HtmlDisplayBoardInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await htmlDisplayBoard(briosa, { inputHtmlFile: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Custom Table

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Custom Table](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC contract](/api/grpc/reporting-operations#make-custom-table)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `decimalPrecision` | `number` | `Decimal Precision` | 6 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeCustomTableInput {
  readonly tableName: CollectionObjectName;
  readonly decimalPrecision?: number;
}

function makeCustomTable(
  briosa: BriosaClient,
  input: MakeCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeCustomTable(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make New SA Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make New SA Report](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC contract](/api/grpc/reporting-operations#make-new-sa-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `newSaReportName` | `CollectionObjectName` | `New SA Report Name` | Required |
| `saReportTemplateOptional` | `CollectionObjectName` | `SA Report Template (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MakeNewSaReportInput {
  readonly newSaReportName: CollectionObjectName;
  readonly saReportTemplateOptional: CollectionObjectName;
}

function makeNewSaReport(
  briosa: BriosaClient,
  input: MakeNewSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await makeNewSaReport(briosa, { newSaReportName: ..., saReportTemplateOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Utility Chart

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Utility Chart](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC contract](/api/grpc/reporting-operations#make-utility-chart)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `chartTitleOverride` | `string` | `Chart Title Override` | Empty |
| `outputPictureName` | `CollectionObjectName` | `Output Picture Name` | Required |
| `showChartDialog` | `boolean` | `Show Chart Dialog?` | false |
| `plotAdditionalXyValue` | `boolean` | `Plot Additional XY Value?` | false |
| `xValue` | `number` | `X Value` | 0.000000 |
| `yValue` | `number` | `Y Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `isPointInside` | `boolean` | `Is Point Inside?` |

```ts
export interface MakeUtilityChartInput {
  readonly asciiFilePath: FileReference;
  readonly chartTitleOverride?: string;
  readonly outputPictureName: CollectionObjectName;
  readonly showChartDialog?: boolean;
  readonly plotAdditionalXyValue?: boolean;
  readonly xValue?: number;
  readonly yValue?: number;
}

function makeUtilityChart(
  briosa: BriosaClient,
  input: MakeUtilityChartInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await makeUtilityChart(briosa, { asciiFilePath: ..., outputPictureName: ... });
```

Returns the MP output `Is Point Inside?` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Notify User Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Notify User Double](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC contract](/api/grpc/reporting-operations#notify-user-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leadingText` | `string` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reportedValue` | `number` | `Reported Value` | 0.000000 |
| `decimalPrecision` | `number` | `Decimal Precision` | 0 |
| `displayTimeout` | `number` | `Display Timeout` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface NotifyUserDoubleInput {
  readonly leadingText?: string;
  readonly font?: Font;
  readonly reportedValue?: number;
  readonly decimalPrecision?: number;
  readonly displayTimeout?: number;
}

function notifyUserDouble(
  briosa: BriosaClient,
  input?: NotifyUserDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await notifyUserDouble(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Notify User HTML

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Notify User HTML](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC contract](/api/grpc/reporting-operations#notify-user-html)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `htmlFile` | `FileReference` | `HTML File` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface NotifyUserHtmlInput {
  readonly htmlFile: FileReference;
}

function notifyUserHtml(
  briosa: BriosaClient,
  input: NotifyUserHtmlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await notifyUserHtml(briosa, { htmlFile: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Notify User Integer

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Notify User Integer](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC contract](/api/grpc/reporting-operations#notify-user-integer)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `leadingText` | `string` | `Leading Text` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `reportedValue` | `number` | `Reported Value` | 0 |
| `displayTimeout` | `number` | `Display Timeout` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface NotifyUserIntegerInput {
  readonly leadingText?: string;
  readonly font?: Font;
  readonly reportedValue?: number;
  readonly displayTimeout?: number;
}

function notifyUserInteger(
  briosa: BriosaClient,
  input?: NotifyUserIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await notifyUserInteger(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Notify User Text Array

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Notify User Text Array](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC contract](/api/grpc/reporting-operations#notify-user-text-array)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `notificationText` | `Iterable<string>` | `Notification Text` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `autoExpandToFitText` | `boolean` | `Auto expand to fit text?` | false |
| `displayTimeout` | `number` | `Display Timeout` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface NotifyUserTextArrayInput {
  readonly notificationText: Iterable<string>;
  readonly font?: Font;
  readonly autoExpandToFitText?: boolean;
  readonly displayTimeout?: number;
}

function notifyUserTextArray(
  briosa: BriosaClient,
  input: NotifyUserTextArrayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await notifyUserTextArray(briosa, { notificationText: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Output SA Report to Excel

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Output SA Report to Excel](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `fileName` | `FileReference` | `File Name` | Required |
| `showFile` | `boolean` | `Show File?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface OutputSaReportToExcelInput {
  readonly reportName: CollectionObjectName;
  readonly fileName: FileReference;
  readonly showFile?: boolean;
}

function outputSaReportToExcel(
  briosa: BriosaClient,
  input: OutputSaReportToExcelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await outputSaReportToExcel(briosa, { reportName: ..., fileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Output SA Report to PDF

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Output SA Report to PDF](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |
| `fileName` | `FileReference` | `File Name` | Required |
| `showPdf` | `boolean` | `Show PDF?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface OutputSaReportToPdfInput {
  readonly reportName: CollectionObjectName;
  readonly fileName: FileReference;
  readonly showPdf?: boolean;
}

function outputSaReportToPdf(
  briosa: BriosaClient,
  input: OutputSaReportToPdfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await outputSaReportToPdf(briosa, { reportName: ..., fileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Quick Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Quick Report](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC contract](/api/grpc/reporting-operations#quick-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `itemName` | `CollectionObjectName` | `Item Name` | Required |
| `reportNameOptional` | `string` | `Report Name (optional)` | Empty |
| `openReport` | `boolean` | `Open Report?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface QuickReportInput {
  readonly itemName: CollectionObjectName;
  readonly reportNameOptional?: string;
  readonly openReport?: boolean;
}

function quickReport(
  briosa: BriosaClient,
  input: QuickReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await quickReport(briosa, { itemName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Refresh Callout Views in SA Report

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Refresh Callout Views in SA Report](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `reportName` | `CollectionObjectName` | `Report Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RefreshCalloutViewsInSaReportInput {
  readonly reportName: CollectionObjectName;
}

function refreshCalloutViewsInSaReport(
  briosa: BriosaClient,
  input: RefreshCalloutViewsInSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await refreshCalloutViewsInSaReport(briosa, { reportName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Refresh Report Bar

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Refresh Report Bar](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC contract](/api/grpc/reporting-operations#refresh-report-bar)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function refreshReportBar(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await refreshReportBar(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Remove Report Tag

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Remove Report Tag](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC contract](/api/grpc/reporting-operations#remove-report-tag)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RemoveReportTagInput {
  readonly tagName?: string;
}

function removeReportTag(
  briosa: BriosaClient,
  input?: RemoveReportTagInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await removeReportTag(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Rename Picture

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Rename Picture](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC contract](/api/grpc/reporting-operations#rename-picture)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalPictureName` | `CollectionObjectName` | `Original Picture Name` | Required |
| `newPictureName` | `CollectionObjectName` | `New Picture Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RenamePictureInput {
  readonly originalPictureName: CollectionObjectName;
  readonly newPictureName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

function renamePicture(
  briosa: BriosaClient,
  input: RenamePictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renamePicture(briosa, { originalPictureName: ..., newPictureName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save Chart to JPeg file

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save Chart to JPeg file](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `chartToSave` | `ChartName` | `Chart to Save` | Required |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SaveChartToJPegFileInput {
  readonly chartToSave: ChartName;
  readonly fileToSaveTo: FileReference;
}

function saveChartToJPegFile(
  briosa: BriosaClient,
  input: SaveChartToJPegFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await saveChartToJPegFile(briosa, { chartToSave: ..., fileToSaveTo: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save Current View (BMP/JPG/PNG/GIF/TIFF)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save Current View (BMP/JPG/PNG/GIF/TIFF)](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileToSaveTo` | `FileReference` | `File to save to` | Required |
| `renderScaleFactor10UsesWindowSize` | `number` | `Render Scale Factor (1.0 uses window size)` | 1.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SaveCurrentViewBmpJpgPngGifTiffInput {
  readonly fileToSaveTo: FileReference;
  readonly renderScaleFactor10UsesWindowSize?: number;
}

function saveCurrentViewBmpJpgPngGifTiff(
  briosa: BriosaClient,
  input: SaveCurrentViewBmpJpgPngGifTiffInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await saveCurrentViewBmpJpgPngGifTiff(briosa, { fileToSaveTo: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Cell Color

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Cell Color](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |
| `foregroundColorName` | `Color` | `Foreground Color Name` | RGB 255, 0, 0 |
| `backgroundColorName` | `Color` | `Background Color Name` | RGB 255, 0, 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableCellColorInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly foregroundColorName?: Color;
  readonly backgroundColorName?: Color;
}

function setCustomTableCellColor(
  briosa: BriosaClient,
  input: SetCustomTableCellColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableCellColor(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Cell Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Cell Double](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |
| `value` | `number` | `Value` | 0.000000 |
| `span` | `number` | `Span` | 1 |
| `decimalPrecision` | `number` | `Decimal Precision` | -1 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableCellDoubleInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly value?: number;
  readonly span?: number;
  readonly decimalPrecision?: number;
}

function setCustomTableCellDouble(
  briosa: BriosaClient,
  input: SetCustomTableCellDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableCellDouble(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Cell Font

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Cell Font](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableCellFontInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly font?: Font;
}

function setCustomTableCellFont(
  briosa: BriosaClient,
  input: SetCustomTableCellFontInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableCellFont(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Cell String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Cell String](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |
| `value` | `string` | `Value` | Empty |
| `span` | `number` | `Span` | 1 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableCellStringInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly value?: string;
  readonly span?: number;
}

function setCustomTableCellString(
  briosa: BriosaClient,
  input: SetCustomTableCellStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableCellString(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Header Cell

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Header Cell](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `column` | `number` | `Column` | 0 |
| `headerText` | `string` | `Header Text` | Empty |
| `span` | `number` | `Span` | 1 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableHeaderCellInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly headerText?: string;
  readonly span?: number;
}

function setCustomTableHeaderCell(
  briosa: BriosaClient,
  input: SetCustomTableHeaderCellInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableHeaderCell(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Header Row

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Header Row](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-header-row)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `row` | `number` | `Row` | 0 |
| `value` | `string` | `Value` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableHeaderRowInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly value?: string;
}

function setCustomTableHeaderRow(
  briosa: BriosaClient,
  input: SetCustomTableHeaderRowInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableHeaderRow(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Custom Table Title

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Custom Table Title](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC contract](/api/grpc/reporting-operations#set-custom-table-title)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tableName` | `CollectionObjectName` | `Table Name` | Required |
| `titleLine1` | `string` | `Title Line 1` | Empty |
| `titleLine2` | `string` | `Title Line 2` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetCustomTableTitleInput {
  readonly tableName: CollectionObjectName;
  readonly titleLine1?: string;
  readonly titleLine2?: string;
}

function setCustomTableTitle(
  briosa: BriosaClient,
  input: SetCustomTableTitleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setCustomTableTitle(briosa, { tableName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Point Group Report Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Point Group Report Options](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-point-group-report-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pointGroup` | `CollectionObjectName` | `Point Group` | Required |
| `coordinateSystem` | `CoordinateSystemType` | `Coordinate System` | Cartesian |
| `showXComponent` | `boolean` | `Show X Component` | true |
| `showYComponent` | `boolean` | `Show Y Component` | true |
| `showZComponent` | `boolean` | `Show Z Component` | true |
| `showOffsets` | `boolean` | `Show Offsets` | false |
| `showUncertainty` | `boolean` | `Show Uncertainty` | true |
| `showNotes` | `boolean` | `Show Notes` | false |
| `showMeasurements` | `boolean` | `Show Measurements` | false |
| `showMeasurementDetails` | `boolean` | `Show Measurement Details` | false |
| `showPointingErrorWorstAngle` | `boolean` | `Show PointingError/Worst Angle` | false |
| `sortByPointNames` | `boolean` | `Sort by Point Names` | true |
| `makeDefault` | `boolean` | `Make Default` | false |
| `applyToAll` | `boolean` | `Apply to All` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetPointGroupReportOptionsInput {
  readonly pointGroup: CollectionObjectName;
  readonly coordinateSystem?: CoordinateSystemType;
  readonly showXComponent?: boolean;
  readonly showYComponent?: boolean;
  readonly showZComponent?: boolean;
  readonly showOffsets?: boolean;
  readonly showUncertainty?: boolean;
  readonly showNotes?: boolean;
  readonly showMeasurements?: boolean;
  readonly showMeasurementDetails?: boolean;
  readonly showPointingErrorWorstAngle?: boolean;
  readonly sortByPointNames?: boolean;
  readonly makeDefault?: boolean;
  readonly applyToAll?: boolean;
}

function setPointGroupReportOptions(
  briosa: BriosaClient,
  input: SetPointGroupReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setPointGroupReportOptions(briosa, { pointGroup: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Relationship Report Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Relationship Report Options](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-relationship-report-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `relationshipName` | `CollectionObjectName` | `Relationship Name` | Required |
| `reportOptions` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetRelationshipReportOptionsInput {
  readonly relationshipName: CollectionObjectName;
  readonly reportOptions?: PointDeltaReportOptions;
}

function setRelationshipReportOptions(
  briosa: BriosaClient,
  input: SetRelationshipReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setRelationshipReportOptions(briosa, { relationshipName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Bar Visibility

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Bar Visibility](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC contract](/api/grpc/reporting-operations#set-report-bar-visibility)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `showReportBar` | `boolean` | `Show Report Bar?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportBarVisibilityInput {
  readonly showReportBar?: boolean;
}

function setReportBarVisibility(
  briosa: BriosaClient,
  input?: SetReportBarVisibilityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportBarVisibility(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Options for Object

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Options for Object](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC contract](/api/grpc/reporting-operations#set-report-options-for-object)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object` | `CollectionObjectName` | `Object` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportOptionsForObjectInput {
  readonly object: CollectionObjectName;
}

function setReportOptionsForObject(
  briosa: BriosaClient,
  input: SetReportOptionsForObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportOptionsForObject(briosa, { object: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Tag Value From Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Tag Value From Double](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `number` | `Tag Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportTagValueFromDoubleInput {
  readonly tagName?: string;
  readonly tagValue?: number;
}

function setReportTagValueFromDouble(
  briosa: BriosaClient,
  input?: SetReportTagValueFromDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportTagValueFromDouble(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Tag Value From Integer

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Tag Value From Integer](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `number` | `Tag Value` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportTagValueFromIntegerInput {
  readonly tagName?: string;
  readonly tagValue?: number;
}

function setReportTagValueFromInteger(
  briosa: BriosaClient,
  input?: SetReportTagValueFromIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportTagValueFromInteger(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Report Tag Value From String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Report Tag Value From String](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `tagName` | `string` | `Tag Name` | Empty |
| `tagValue` | `string` | `Tag Value` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetReportTagValueFromStringInput {
  readonly tagName?: string;
  readonly tagValue?: string;
}

function setReportTagValueFromString(
  briosa: BriosaClient,
  input?: SetReportTagValueFromStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setReportTagValueFromString(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Scale for Picture

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Scale for Picture](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC contract](/api/grpc/reporting-operations#set-scale-for-picture)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `pictureName` | `CollectionObjectName` | `Picture Name` | Required |
| `scale` | `number` | `Scale` | 100.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetScaleForPictureInput {
  readonly pictureName: CollectionObjectName;
  readonly scale?: number;
}

function setScaleForPicture(
  briosa: BriosaClient,
  input: SetScaleForPictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setScaleForPicture(briosa, { pictureName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector Group Report Options

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector Group Report Options](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC contract](/api/grpc/reporting-operations#set-vector-group-report-options)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vectorGroup` | `CollectionObjectName` | `Vector Group` | Required |
| `reportOptions` | `PointDeltaReportOptions` | `Report Options` | Single |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorGroupReportOptionsInput {
  readonly vectorGroup: CollectionObjectName;
  readonly reportOptions?: PointDeltaReportOptions;
}

function setVectorGroupReportOptions(
  briosa: BriosaClient,
  input: SetVectorGroupReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorGroupReportOptions(briosa, { vectorGroup: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
