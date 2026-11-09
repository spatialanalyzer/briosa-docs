---
title: Reporting Operations
description: Released javascript 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Reporting Operations

[SA 2026.1.0529.7](/api/javascript/reporting-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/reporting-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. A method that takes `BriosaCallOptions` can pass `onMpCompletion` to observe how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Add Charts to Report Bar {/* #add-charts-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-charts-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-charts-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddChartsToReportBarInput {
  readonly charts: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addChartsToReportBar(
  briosa: BriosaClient,
  input: AddChartsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Table to SA Report {/* #add-custom-table-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-table-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-table-to-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface AddCustomTableToSaReportInput {
  readonly tableName: CollectionObjectName;
  readonly reportName: CollectionObjectName;
  readonly showReport?: boolean;
}

export declare function addCustomTableToSaReport(
  briosa: BriosaClient,
  input: AddCustomTableToSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Custom Tables to Report Bar {/* #add-custom-tables-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-custom-tables-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-custom-tables-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddCustomTablesToReportBarInput {
  readonly customTablesToReport: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addCustomTablesToReportBar(
  briosa: BriosaClient,
  input: AddCustomTablesToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Datums to Report Bar {/* #add-datums-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-datums-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-datums-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddDatumsToReportBarInput {
  readonly datums: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

export declare function addDatumsToReportBar(
  briosa: BriosaClient,
  input: AddDatumsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Events to Report Bar {/* #add-events-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-events-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-events-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddEventsToReportBarInput {
  readonly events: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addEventsToReportBar(
  briosa: BriosaClient,
  input: AddEventsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Feature Checks to Report Bar {/* #add-feature-checks-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-feature-checks-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-feature-checks-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddFeatureChecksToReportBarInput {
  readonly featureChecks: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addFeatureChecksToReportBar(
  briosa: BriosaClient,
  input: AddFeatureChecksToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Item to SA Report at Location {/* #add-item-to-sa-report-at-location */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-item-to-sa-report-at-location) · [gRPC Contract](/api/grpc/reporting-operations#add-item-to-sa-report-at-location)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface AddItemToSaReportAtLocationInput {
  readonly reportName: CollectionObjectName;
  readonly itemName: CollectionObjectName;
  readonly pageNumber?: number;
  readonly horizontalLocation?: number;
  readonly verticalLocation?: number;
  readonly showReport?: boolean;
}

export declare function addItemToSaReportAtLocation(
  briosa: BriosaClient,
  input: AddItemToSaReportAtLocationInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Objects to Report Bar {/* #add-objects-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-objects-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-objects-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddObjectsToReportBarInput {
  readonly objects: Iterable<CollectionObjectName>;
  readonly clearExisting?: boolean;
}

export declare function addObjectsToReportBar(
  briosa: BriosaClient,
  input: AddObjectsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Pictures to Report Bar {/* #add-pictures-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-pictures-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-pictures-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddPicturesToReportBarInput {
  readonly pictures: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addPicturesToReportBar(
  briosa: BriosaClient,
  input: AddPicturesToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Relationships to Report Bar {/* #add-relationships-to-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#add-relationships-to-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#add-relationships-to-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface AddRelationshipsToReportBarInput {
  readonly relationships: Iterable<CollectionItemName>;
  readonly clearExisting?: boolean;
}

export declare function addRelationshipsToReportBar(
  briosa: BriosaClient,
  input: AddRelationshipsToReportBarInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Append Items to SA Report {/* #append-items-to-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#append-items-to-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#append-items-to-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface AppendItemsToSaReportInput {
  readonly reportName: CollectionObjectName;
  readonly itemsToReport: Iterable<CollectionObjectName>;
  readonly showReport?: boolean;
  readonly beginOnNewPage?: boolean;
}

export declare function appendItemsToSaReport(
  briosa: BriosaClient,
  input: AppendItemsToSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Current View {/* #capture-current-view */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-current-view) · [gRPC Contract](/api/grpc/reporting-operations#capture-current-view)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface CaptureCurrentViewInput {
  readonly pictureName: CollectionItemName;
}

export declare function captureCurrentView(
  briosa: BriosaClient,
  input: CaptureCurrentViewInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Capture Screen to File (BMP/JPG/PNG/GIF/TIFF) {/* #capture-screen-to-file-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#capture-screen-to-file-bmpjpgpnggiftiff)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```ts
export interface CaptureScreenToFileBmpJpgPngGifTiffInput {
  readonly fileToSaveTo: FileReference;
}

export declare function captureScreenToFileBmpJpgPngGifTiff(
  briosa: BriosaClient,
  input: CaptureScreenToFileBmpJpgPngGifTiffInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Custom Table {/* #clear-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#clear-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#clear-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface ClearCustomTableInput {
  readonly tableName: CollectionObjectName;
}

export declare function clearCustomTable(
  briosa: BriosaClient,
  input: ClearCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close All Reports {/* #close-all-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-all-reports) · [gRPC Contract](/api/grpc/reporting-operations#close-all-reports)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export declare function closeAllReports(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close HTML Display Board {/* #close-html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#close-html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#close-html-display-board)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
export declare function closeHtmlDisplayBoard(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine SA Reports {/* #combine-sa-reports */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#combine-sa-reports) · [gRPC Contract](/api/grpc/reporting-operations#combine-sa-reports)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface CombineSaReportsInput {
  readonly saReportsToCombine: Iterable<CollectionItemName>;
  readonly outputSaReportName: CollectionObjectName;
  readonly showReport?: boolean;
}

export declare function combineSaReports(
  briosa: BriosaClient,
  input: CombineSaReportsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Chart from Vector Group {/* #create-chart-from-vector-group */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#create-chart-from-vector-group) · [gRPC Contract](/api/grpc/reporting-operations#create-chart-from-vector-group)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showInterface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface CreateChartFromVectorGroupInput {
  readonly newChartName: ChartName;
  readonly vectorGroupName: CollectionObjectName;
  readonly chartType: ChartType;
  readonly dataSetToChart: DatasetType;
  readonly auxDataSetToChart: DatasetType;
  readonly templateChartName?: ChartName;
  readonly showInterface?: boolean;
}

export declare function createChartFromVectorGroup(
  briosa: BriosaClient,
  input: CreateChartFromVectorGroupInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `templateChartName` | Optional (major 3): omitted when absent; an empty name is rejected. A name that matches no chart opens a blocking SpatialAnalyzer dialog. |

## Define Report Template {/* #define-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#define-report-template) · [gRPC Contract](/api/grpc/reporting-operations#define-report-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `showGeneratedReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface DefineReportTemplateInput {
  readonly reportTemplateName: CollectionObjectName;
  readonly title: Iterable<string>;
  readonly graphicalViewOptions: ReportViewOptions;
  readonly itemsToReport: Iterable<CollectionObjectName>;
  readonly relationshipsToReport: Iterable<CollectionItemName>;
  readonly eventsToReport: Iterable<CollectionItemName>;
  readonly reportOutputOptions?: ReportOutputOptions;
  readonly reportPageSettings?: ReportPageSettings;
  readonly generateNow?: boolean;
  readonly showGeneratedReport?: boolean;
}

export declare function defineReportTemplate(
  briosa: BriosaClient,
  input: DefineReportTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `reportPageSettings` | MP qualifier: SA Report only. |

## Delete Chart {/* #delete-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-chart) · [gRPC Contract](/api/grpc/reporting-operations#delete-chart)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteChartInput {
  readonly chartName: CollectionObjectName;
}

export declare function deleteChart(
  briosa: BriosaClient,
  input: DeleteChartInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Custom Table {/* #delete-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#delete-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteCustomTableInput {
  readonly tableName: CollectionObjectName;
}

export declare function deleteCustomTable(
  briosa: BriosaClient,
  input: DeleteCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Picture {/* #delete-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-picture) · [gRPC Contract](/api/grpc/reporting-operations#delete-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeletePictureInput {
  readonly pictureName: CollectionItemName;
}

export declare function deletePicture(
  briosa: BriosaClient,
  input: DeletePictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Doc {/* #delete-sa-doc */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-doc) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-doc)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteSaDocInput {
  readonly docName: CollectionObjectName;
}

export declare function deleteSaDoc(
  briosa: BriosaClient,
  input: DeleteSaDocInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report {/* #delete-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteSaReportInput {
  readonly reportName: CollectionObjectName;
}

export declare function deleteSaReport(
  briosa: BriosaClient,
  input: DeleteSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete SA Report Template {/* #delete-sa-report-template */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#delete-sa-report-template) · [gRPC Contract](/api/grpc/reporting-operations#delete-sa-report-template)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface DeleteSaReportTemplateInput {
  readonly reportTemplateName: CollectionObjectName;
}

export declare function deleteSaReportTemplate(
  briosa: BriosaClient,
  input: DeleteSaReportTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Quick Report from Tab Order {/* #generate-quick-report-from-tab-order */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-quick-report-from-tab-order) · [gRPC Contract](/api/grpc/reporting-operations#generate-quick-report-from-tab-order)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

A request that sets `openReport` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface GenerateQuickReportFromTabOrderInput {
  readonly reportOutputOptions?: ReportOutputOptions;
  readonly openReport?: boolean;
}

export declare function generateQuickReportFromTabOrder(
  briosa: BriosaClient,
  input: GenerateQuickReportFromTabOrderInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate Standard HTML Report {/* #generate-standard-html-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generate-standard-html-report) · [gRPC Contract](/api/grpc/reporting-operations#generate-standard-html-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```ts
export interface GenerateStandardHtmlReportInput {
  readonly htmlOutputFile: FileReference;
  readonly decimalPrecision?: number;
}

export declare function generateStandardHtmlReport(
  briosa: BriosaClient,
  input: GenerateStandardHtmlReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Generate/Update Templated Report {/* #generateupdate-templated-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#generateupdate-templated-report) · [gRPC Contract](/api/grpc/reporting-operations#generateupdate-templated-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GenerateUpdateTemplatedReportInput {
  readonly reportTemplate: CollectionObjectName;
}

export declare function generateUpdateTemplatedReport(
  briosa: BriosaClient,
  input: GenerateUpdateTemplatedReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell Double {/* #get-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetCustomTableCellDoubleInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
}

export declare function getCustomTableCellDouble(
  briosa: BriosaClient,
  input: GetCustomTableCellDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Custom Table Cell String {/* #get-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#get-custom-table-cell-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetCustomTableCellStringInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
}

export declare function getCustomTableCellString(
  briosa: BriosaClient,
  input: GetCustomTableCellStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Defined Report Tags {/* #get-defined-report-tags */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-defined-report-tags) · [gRPC Contract](/api/grpc/reporting-operations#get-defined-report-tags)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export declare function getDefinedReportTags(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Report Tag Value {/* #get-report-tag-value */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#get-report-tag-value) · [gRPC Contract](/api/grpc/reporting-operations#get-report-tag-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface GetReportTagValueInput {
  readonly tagName?: string;
}

export declare function getReportTagValue(
  briosa: BriosaClient,
  input: GetReportTagValueInput,
  options?: BriosaCallOptions,
): Promise<GetReportTagValueResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## HTML Display Board {/* #html-display-board */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#html-display-board) · [gRPC Contract](/api/grpc/reporting-operations#html-display-board)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface HtmlDisplayBoardInput {
  readonly inputHtmlFile: FileReference;
  readonly showBoard?: boolean;
}

export declare function htmlDisplayBoard(
  briosa: BriosaClient,
  input: HtmlDisplayBoardInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Custom Table {/* #make-custom-table */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-custom-table) · [gRPC Contract](/api/grpc/reporting-operations#make-custom-table)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface MakeCustomTableInput {
  readonly tableName: CollectionObjectName;
  readonly decimalPrecision?: number;
}

export declare function makeCustomTable(
  briosa: BriosaClient,
  input: MakeCustomTableInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make New SA Report {/* #make-new-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-new-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#make-new-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface MakeNewSaReportInput {
  readonly newSaReportName: CollectionObjectName;
  readonly saReportTemplate: CollectionObjectName;
}

export declare function makeNewSaReport(
  briosa: BriosaClient,
  input: MakeNewSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `saReportTemplate` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Make Utility Chart {/* #make-utility-chart */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#make-utility-chart) · [gRPC Contract](/api/grpc/reporting-operations#make-utility-chart)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

A request that sets `showChartDialog` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface MakeUtilityChartInput {
  readonly asciiFilePath: FileReference;
  readonly chartTitleOverride?: string;
  readonly outputPictureName: CollectionItemName;
  readonly showChartDialog?: boolean;
  readonly plotAdditionalXyValue?: boolean;
  readonly xValue?: number;
  readonly yValue?: number;
}

export declare function makeUtilityChart(
  briosa: BriosaClient,
  input: MakeUtilityChartInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Double {/* #notify-user-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-double) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface NotifyUserDoubleInput {
  readonly leadingText?: string;
  readonly font?: Font;
  readonly reportedValue?: number;
  readonly decimalPrecision?: number;
  readonly displayTimeout?: number;
}

export declare function notifyUserDouble(
  briosa: BriosaClient,
  input: NotifyUserDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User HTML {/* #notify-user-html */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-html) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-html)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `filesystem_read`, `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface NotifyUserHtmlInput {
  readonly htmlFile: FileReference;
}

export declare function notifyUserHtml(
  briosa: BriosaClient,
  input: NotifyUserHtmlInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Integer {/* #notify-user-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-integer) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface NotifyUserIntegerInput {
  readonly leadingText?: string;
  readonly font?: Font;
  readonly reportedValue?: number;
  readonly displayTimeout?: number;
}

export declare function notifyUserInteger(
  briosa: BriosaClient,
  input: NotifyUserIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Notify User Text Array {/* #notify-user-text-array */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#notify-user-text-array) · [gRPC Contract](/api/grpc/reporting-operations#notify-user-text-array)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface NotifyUserTextArrayInput {
  readonly notificationText: Iterable<string>;
  readonly font?: Font;
  readonly autoExpandToFitText?: boolean;
  readonly displayTimeout?: number;
}

export declare function notifyUserTextArray(
  briosa: BriosaClient,
  input: NotifyUserTextArrayInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to Excel {/* #output-sa-report-to-excel */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-excel) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-excel)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

A request that sets `showFile` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface OutputSaReportToExcelInput {
  readonly reportName: CollectionObjectName;
  readonly fileName: FileReference;
  readonly showFile?: boolean;
}

export declare function outputSaReportToExcel(
  briosa: BriosaClient,
  input: OutputSaReportToExcelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Output SA Report to PDF {/* #output-sa-report-to-pdf */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#output-sa-report-to-pdf) · [gRPC Contract](/api/grpc/reporting-operations#output-sa-report-to-pdf)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

A request that sets `showPdf` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

```ts
export interface OutputSaReportToPdfInput {
  readonly reportName: CollectionObjectName;
  readonly fileName: FileReference;
  readonly showPdf?: boolean;
}

export declare function outputSaReportToPdf(
  briosa: BriosaClient,
  input: OutputSaReportToPdfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Report {/* #quick-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#quick-report) · [gRPC Contract](/api/grpc/reporting-operations#quick-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface QuickReportInput {
  readonly itemName: CollectionObjectName;
  readonly reportName?: string;
  readonly openReport?: boolean;
}

export declare function quickReport(
  briosa: BriosaClient,
  input: QuickReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `reportName` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Refresh Callout Views in SA Report {/* #refresh-callout-views-in-sa-report */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-callout-views-in-sa-report) · [gRPC Contract](/api/grpc/reporting-operations#refresh-callout-views-in-sa-report)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface RefreshCalloutViewsInSaReportInput {
  readonly reportName: CollectionItemName;
}

export declare function refreshCalloutViewsInSaReport(
  briosa: BriosaClient,
  input: RefreshCalloutViewsInSaReportInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Refresh Report Bar {/* #refresh-report-bar */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#refresh-report-bar) · [gRPC Contract](/api/grpc/reporting-operations#refresh-report-bar)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export declare function refreshReportBar(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Remove Report Tag {/* #remove-report-tag */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#remove-report-tag) · [gRPC Contract](/api/grpc/reporting-operations#remove-report-tag)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface RemoveReportTagInput {
  readonly tagName: string;
}

export declare function removeReportTag(
  briosa: BriosaClient,
  input: RemoveReportTagInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `tagName` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Rename Picture {/* #rename-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#rename-picture) · [gRPC Contract](/api/grpc/reporting-operations#rename-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```ts
export interface RenamePictureInput {
  readonly originalPictureName: CollectionItemName;
  readonly newPictureName: CollectionItemName;
  readonly overwriteIfExists?: boolean;
}

export declare function renamePicture(
  briosa: BriosaClient,
  input: RenamePictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Chart to JPeg file {/* #save-chart-to-jpeg-file */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-chart-to-jpeg-file) · [gRPC Contract](/api/grpc/reporting-operations#save-chart-to-jpeg-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```ts
export interface SaveChartToJPegFileInput {
  readonly chartToSave: ChartName;
  readonly fileToSaveTo: FileReference;
}

export declare function saveChartToJPegFile(
  briosa: BriosaClient,
  input: SaveChartToJPegFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Current View (BMP/JPG/PNG/GIF/TIFF) {/* #save-current-view-bmpjpgpnggiftiff */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#save-current-view-bmpjpgpnggiftiff) · [gRPC Contract](/api/grpc/reporting-operations#save-current-view-bmpjpgpnggiftiff)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `quick`

```ts
export interface SaveCurrentViewBmpJpgPngGifTiffInput {
  readonly fileToSaveTo: FileReference;
  readonly renderScaleFactor?: number;
}

export declare function saveCurrentViewBmpJpgPngGifTiff(
  briosa: BriosaClient,
  input: SaveCurrentViewBmpJpgPngGifTiffInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `renderScaleFactor` | 1.0 uses the window size. |

## Set Custom Table Cell Color {/* #set-custom-table-cell-color */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-color) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-color)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableCellColorInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly foregroundColorName: Color;
  readonly backgroundColorName: Color;
}

export declare function setCustomTableCellColor(
  briosa: BriosaClient,
  input: SetCustomTableCellColorInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Double {/* #set-custom-table-cell-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-double) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableCellDoubleInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly value?: number;
  readonly span?: number;
  readonly decimalPrecision?: number;
}

export declare function setCustomTableCellDouble(
  briosa: BriosaClient,
  input: SetCustomTableCellDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell Font {/* #set-custom-table-cell-font */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-font) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-font)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableCellFontInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly font?: Font;
}

export declare function setCustomTableCellFont(
  briosa: BriosaClient,
  input: SetCustomTableCellFontInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Cell String {/* #set-custom-table-cell-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-cell-string) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-cell-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableCellStringInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly value?: string;
  readonly span?: number;
}

export declare function setCustomTableCellString(
  briosa: BriosaClient,
  input: SetCustomTableCellStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Cell {/* #set-custom-table-header-cell */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-cell) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-cell)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableHeaderCellInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly column?: number;
  readonly headerText?: string;
  readonly span?: number;
}

export declare function setCustomTableHeaderCell(
  briosa: BriosaClient,
  input: SetCustomTableHeaderCellInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Header Row {/* #set-custom-table-header-row */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-header-row) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-header-row)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableHeaderRowInput {
  readonly tableName: CollectionObjectName;
  readonly row?: number;
  readonly value?: string;
}

export declare function setCustomTableHeaderRow(
  briosa: BriosaClient,
  input: SetCustomTableHeaderRowInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Custom Table Title {/* #set-custom-table-title */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-custom-table-title) · [gRPC Contract](/api/grpc/reporting-operations#set-custom-table-title)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetCustomTableTitleInput {
  readonly tableName: CollectionObjectName;
  readonly titleLine1?: string;
  readonly titleLine2?: string;
}

export declare function setCustomTableTitle(
  briosa: BriosaClient,
  input: SetCustomTableTitleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Group Report Options {/* #set-point-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-point-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-point-group-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

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

export declare function setPointGroupReportOptions(
  briosa: BriosaClient,
  input: SetPointGroupReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Relationship Report Options {/* #set-relationship-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-relationship-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-relationship-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetRelationshipReportOptionsInput {
  readonly relationshipName: CollectionObjectName;
  readonly reportOptions?: PointDeltaReportOptions;
}

export declare function setRelationshipReportOptions(
  briosa: BriosaClient,
  input: SetRelationshipReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Bar Visibility {/* #set-report-bar-visibility */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-bar-visibility) · [gRPC Contract](/api/grpc/reporting-operations#set-report-bar-visibility)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetReportBarVisibilityInput {
  readonly showReportBar?: boolean;
}

export declare function setReportBarVisibility(
  briosa: BriosaClient,
  input: SetReportBarVisibilityInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Options for Object {/* #set-report-options-for-object */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-options-for-object) · [gRPC Contract](/api/grpc/reporting-operations#set-report-options-for-object)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full`, each only with the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations) · **Risk Flags:** `interactive_ui` · **Duration Class:** `interactive`

```ts
export interface SetReportOptionsForObjectInput {
  readonly object: CollectionObjectName;
}

export declare function setReportOptionsForObject(
  briosa: BriosaClient,
  input: SetReportOptionsForObjectInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Double {/* #set-report-tag-value-from-double */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-double) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-double)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetReportTagValueFromDoubleInput {
  readonly tagName?: string;
  readonly tagValue?: number;
}

export declare function setReportTagValueFromDouble(
  briosa: BriosaClient,
  input: SetReportTagValueFromDoubleInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From Integer {/* #set-report-tag-value-from-integer */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-integer) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-integer)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetReportTagValueFromIntegerInput {
  readonly tagName?: string;
  readonly tagValue?: number;
}

export declare function setReportTagValueFromInteger(
  briosa: BriosaClient,
  input: SetReportTagValueFromIntegerInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Report Tag Value From String {/* #set-report-tag-value-from-string */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-report-tag-value-from-string) · [gRPC Contract](/api/grpc/reporting-operations#set-report-tag-value-from-string)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetReportTagValueFromStringInput {
  readonly tagName?: string;
  readonly tagValue?: string;
}

export declare function setReportTagValueFromString(
  briosa: BriosaClient,
  input: SetReportTagValueFromStringInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Scale for Picture {/* #set-scale-for-picture */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-scale-for-picture) · [gRPC Contract](/api/grpc/reporting-operations#set-scale-for-picture)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetScaleForPictureInput {
  readonly pictureName: CollectionItemName;
  readonly scale?: number;
}

export declare function setScaleForPicture(
  briosa: BriosaClient,
  input: SetScaleForPictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector Group Report Options {/* #set-vector-group-report-options */}

[MP Catalog](/mp-command-catalog/commands/reporting-operations#set-vector-group-report-options) · [gRPC Contract](/api/grpc/reporting-operations#set-vector-group-report-options)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```ts
export interface SetVectorGroupReportOptionsInput {
  readonly vectorGroup: CollectionObjectName;
  readonly reportOptions?: PointDeltaReportOptions;
}

export declare function setVectorGroupReportOptions(
  briosa: BriosaClient,
  input: SetVectorGroupReportOptionsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-js/tree/feda30f3bd0bdae8cf9b02ae307146de259e2167/targets/2026.1.0529.7)
