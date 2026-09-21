---
title: File Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# File Operations

[SA 2026.1.0529.7](/api/javascript/file-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/file-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Backup Now {/* #backup-now */}

[MP Catalog](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#backup-now)

```ts
export declare function backupNow(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Copy General File {/* #copy-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#copy-general-file)

```ts
export interface CopyGeneralFileInput {
  readonly sourceFileName: FileReference;
  readonly destinationFileName: FileReference;
  readonly overwrite?: boolean;
}

export declare function copyGeneralFile(
  briosa: BriosaClient,
  input: CopyGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete General File {/* #delete-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#delete-general-file)

```ts
export interface DeleteGeneralFileInput {
  readonly fileName: FileReference;
}

export declare function deleteGeneralFile(
  briosa: BriosaClient,
  input: DeleteGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Direct CAD Access {/* #direct-cad-access */}

[MP Catalog](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#direct-cad-access)

```ts
export interface DirectCadAccessInput {
  readonly cadFileName: FileReference;
  readonly importSolids?: boolean;
  readonly importSurfaces?: boolean;
  readonly importPolygonizedSurfaces?: boolean;
  readonly importAnnotations?: boolean;
  readonly importVectors?: boolean;
  readonly importPoints?: boolean;
  readonly pointGroupName?: string;
  readonly importAttributesMetadata?: boolean;
  readonly importCooordinateFrames?: boolean;
  readonly importPlanes?: boolean;
  readonly import3DCurvesLines?: boolean;
  readonly import3DCurvesCircles?: boolean;
  readonly import3DCurvesGeneralCurves?: boolean;
  readonly importConstructionGeometry?: boolean;
  readonly importHiddenEntities?: boolean;
  readonly importAllSurfacesAsMeshGraphicalEntities?: boolean;
  readonly doNotImportFillets?: boolean;
  readonly doNotImportDittos?: boolean;
  readonly dittoThreshold?: number;
  readonly centerViewOnImportedObjects?: boolean;
  readonly importIntoFoldersMatchingCadFileHierarchy?: boolean;
  readonly removeEmptyFolders?: boolean;
  readonly surfaceNormalsMode1Or2?: number;
  readonly promptOnMissingComponents?: boolean;
  readonly selectiveImport?: boolean;
  readonly surfaceCompatibilityMode: boolean;
  readonly explodeSurfaces?: boolean;
  readonly cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile?: string;
  readonly buildCalloutViews?: boolean;
}

export declare function directCadAccess(
  briosa: BriosaClient,
  input: DirectCadAccessInput,
  options?: BriosaCallOptions,
): Promise<DirectCadAccessResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frame Set {/* #export-ascii-frame-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ascii-frame-set)

```ts
export interface ExportAsciiFrameSetInput {
  readonly asciiFilePath: FileReference;
  readonly frameSetContainer: CollectionObjectName;
  readonly dataDelimiter: ExportDataDelimeterType;
  readonly fileFormat: AsciiFileFormat;
  readonly includeExportFormatInfo?: boolean;
  readonly decimalPrecision?: number;
  readonly append?: boolean;
}

export declare function exportAsciiFrameSet(
  briosa: BriosaClient,
  input: ExportAsciiFrameSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Frames {/* #export-ascii-frames */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ascii-frames)

```ts
export interface ExportAsciiFramesInput {
  readonly asciiFilePath: FileReference;
  readonly objectList: Iterable<CollectionObjectName>;
  readonly exportFrameMode?: string;
  readonly overwriteExistingFile?: boolean;
}

export declare function exportAsciiFrames(
  briosa: BriosaClient,
  input: ExportAsciiFramesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Clouds {/* #export-ascii-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ascii-point-clouds)

```ts
export interface ExportAsciiPointCloudsInput {
  readonly asciiFilePath: FileReference;
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly dataDelimiter: ExportDataDelimeterType;
  readonly overwriteExistingFile?: boolean;
  readonly showProgressDialog?: boolean;
}

export declare function exportAsciiPointClouds(
  briosa: BriosaClient,
  input: ExportAsciiPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Point Set {/* #export-ascii-point-set */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ascii-point-set)

```ts
export interface ExportAsciiPointSetInput {
  readonly asciiFilePath: FileReference;
  readonly pointSetContainer: CollectionObjectName;
  readonly dataDelimiter: ExportDataDelimeterType;
  readonly targetNameFormat: ExportTargetNameFormat;
  readonly desiredCoordinateSystem: CoordinateSystemType;
  readonly includeTargetOffsets?: boolean;
  readonly includeTimestamps?: boolean;
  readonly includeSaVersionAndFrameComments?: boolean;
  readonly includeAxisComments?: boolean;
  readonly includeExportFormatInfo?: boolean;
  readonly maximumPrecisionScientificNotation?: boolean;
  readonly decimalPrecision?: number;
  readonly append?: boolean;
}

export declare function exportAsciiPointSet(
  briosa: BriosaClient,
  input: ExportAsciiPointSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export ASCII Points {/* #export-ascii-points */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ascii-points)

```ts
export interface ExportAsciiPointsInput {
  readonly asciiFilePath: FileReference;
  readonly groupNamesToExport: Iterable<CollectionGroupName>;
  readonly dataDelimiter: ExportDataDelimeterType;
  readonly targetNameFormat: ExportTargetNameFormat;
  readonly desiredCoordinateSystem: CoordinateSystemType;
  readonly includeTargetOffsets?: boolean;
  readonly includeTargetComments?: boolean;
  readonly includeTimestamps?: boolean;
  readonly includeTolerances?: boolean;
  readonly includeCoordinateUncertainties?: boolean;
  readonly includeSaVersionAndFrameComments?: boolean;
  readonly includeAxisComments?: boolean;
  readonly includeExportFormatInfo?: boolean;
  readonly includeWeights?: boolean;
  readonly includeMeasurementDetails?: boolean;
  readonly maximumPrecisionScientificNotation?: boolean;
  readonly decimalPrecision?: number;
  readonly append?: boolean;
}

export declare function exportAsciiPoints(
  briosa: BriosaClient,
  input: ExportAsciiPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export DXF {/* #export-dxf */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-dxf)

```ts
export interface ExportDxfInput {
  readonly dxfFilePath: FileReference;
  readonly pointNames: Iterable<PointName>;
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly includePointLabels?: boolean;
}

export declare function exportDxf(
  briosa: BriosaClient,
  input: ExportDxfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Embedded File {/* #export-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-embedded-file)

```ts
export interface ExportEmbeddedFileInput {
  readonly embeddedFileCollectionName: CollectionName;
  readonly embeddedFileName?: string;
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

export declare function exportEmbeddedFile(
  briosa: BriosaClient,
  input: ExportEmbeddedFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Hidden Point Bar XML File {/* #export-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-hidden-point-bar-xml-file)

```ts
export interface ExportHiddenPointBarXmlFileInput {
  readonly xmlFilePath: FileReference;
}

export declare function exportHiddenPointBarXmlFile(
  briosa: BriosaClient,
  input: ExportHiddenPointBarXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File  - Entire Model {/* #export-iges-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-iges-file----entire-model)

```ts
export interface ExportIgesFileEntireModelInput {
  readonly igesFilePath: FileReference;
}

export declare function exportIgesFileEntireModel(
  briosa: BriosaClient,
  input: ExportIgesFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export IGES File - Partial Model {/* #export-iges-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-iges-file---partial-model)

```ts
export interface ExportIgesFilePartialModelInput {
  readonly igesFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

export declare function exportIgesFilePartialModel(
  briosa: BriosaClient,
  input: ExportIgesFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export PTX Point Clouds {/* #export-ptx-point-clouds */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-ptx-point-clouds)

```ts
export interface ExportPtxPointCloudsInput {
  readonly ptxFilePath: FileReference;
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly overwriteExistingFile?: boolean;
  readonly showProgressDialog?: boolean;
}

export declare function exportPtxPointClouds(
  briosa: BriosaClient,
  input: ExportPtxPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Characteristics {/* #export-qdas-characteristics */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-qdas-characteristics)

```ts
export interface ExportQdasCharacteristicsInput {
  readonly qdasExportFilePath: FileReference;
  readonly k1001PartNumber?: string;
  readonly k1002PartDescription?: string;
  readonly k1071SupplierNumber?: string;
  readonly k1072SupplierDescription?: string;
  readonly k1203ReasonForTest?: string;
  readonly k1303Plant?: string;
  readonly k1900PartRemark?: string;
  readonly k0006BatchNumber?: string;
  readonly k0014PartId?: string;
  readonly k0053OrderNumber?: string;
  readonly k0004DateTimeStamp: string;
  readonly k0008OperatorIdentifier?: number;
  readonly k0010MachineIdentifier?: number;
  readonly k0012GageIdentifier?: number;
  readonly relationshipList: Iterable<CollectionItemName>;
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly vectorGroupList: Iterable<CollectionObjectName>;
}

export declare function exportQdasCharacteristics(
  briosa: BriosaClient,
  input: ExportQdasCharacteristicsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export QDAS Data List {/* #export-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-qdas-data-list)

```ts
export interface ExportQdasDataListInput {
  readonly qdasExportFilePath: FileReference;
}

export declare function exportQdasDataList(
  briosa: BriosaClient,
  input: ExportQdasDataListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Scan Stripe Mesh to STL File {/* #export-scan-stripe-mesh-to-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-scan-stripe-mesh-to-stl-file)

```ts
export interface ExportScanStripeMeshToStlFileInput {
  readonly stlFilePath: FileReference;
  readonly mesh: CollectionObjectName;
}

export declare function exportScanStripeMeshToStlFile(
  briosa: BriosaClient,
  input: ExportScanStripeMeshToStlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Entire Model {/* #export-step-file---entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-step-file---entire-model)

```ts
export interface ExportStepFileEntireModelInput {
  readonly stepFilePath: FileReference;
}

export declare function exportStepFileEntireModel(
  briosa: BriosaClient,
  input: ExportStepFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export STEP File - Partial Model {/* #export-step-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-step-file---partial-model)

```ts
export interface ExportStepFilePartialModelInput {
  readonly stepFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

export declare function exportStepFilePartialModel(
  briosa: BriosaClient,
  input: ExportStepFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File  - Entire Model {/* #export-vdafs-file----entire-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-vdafs-file----entire-model)

```ts
export interface ExportVdaFsFileEntireModelInput {
  readonly vdaFsFilePath: FileReference;
}

export declare function exportVdaFsFileEntireModel(
  briosa: BriosaClient,
  input: ExportVdaFsFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export VDA/FS File - Partial Model {/* #export-vdafs-file---partial-model */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-vdafs-file---partial-model)

```ts
export interface ExportVdaFsFilePartialModelInput {
  readonly vdaFsFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

export declare function exportVdaFsFilePartialModel(
  briosa: BriosaClient,
  input: ExportVdaFsFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Vector Container to ASCII File {/* #export-vector-container-to-ascii-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#export-vector-container-to-ascii-file)

```ts
export interface ExportVectorContainerToAsciiFileInput {
  readonly asciiFilePath: FileReference;
  readonly vectorGroupsToExport: Iterable<CollectionVectorGroupName>;
  readonly overwriteExistingFileFalseAppend?: boolean;
  readonly useFullPrecisionScientificNotation?: boolean;
  readonly vectorNameFormat: ExportVectorNameFormat;
  readonly includeVectorLength?: boolean;
}

export declare function exportVectorContainerToAsciiFile(
  briosa: BriosaClient,
  input: ExportVectorContainerToAsciiFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Files in Directory {/* #find-files-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#find-files-in-directory)

```ts
export interface FindFilesInDirectoryInput {
  readonly directory?: string;
  readonly fileNamePattern?: string;
  readonly recursive?: boolean;
}

export declare function findFilesInDirectory(
  briosa: BriosaClient,
  input: FindFilesInDirectoryInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Find Sub-Directories in Directory {/* #find-sub-directories-in-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#find-sub-directories-in-directory)

```ts
export interface FindSubDirectoriesInDirectoryInput {
  readonly directory?: string;
  readonly recursive?: boolean;
}

export declare function findSubDirectoriesInDirectory(
  briosa: BriosaClient,
  input: FindSubDirectoriesInDirectoryInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Boolean From DataShare File {/* #get-boolean-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-boolean-from-datashare-file)

```ts
export interface GetBooleanFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly booleanName?: string;
}

export declare function getBooleanFromDataShareFile(
  briosa: BriosaClient,
  input: GetBooleanFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Double From DataShare File {/* #get-double-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-double-from-datashare-file)

```ts
export interface GetDoubleFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly doubleName?: string;
}

export declare function getDoubleFromDataShareFile(
  briosa: BriosaClient,
  input: GetDoubleFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Integer From DataShare File {/* #get-integer-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-integer-from-datashare-file)

```ts
export interface GetIntegerFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly integerName?: string;
}

export declare function getIntegerFromDataShareFile(
  briosa: BriosaClient,
  input: GetIntegerFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get QDAS Catalog Entries {/* #get-qdas-catalog-entries */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-qdas-catalog-entries)

```ts
export interface GetQdasCatalogEntriesInput {
  readonly kFieldTarget?: string;
}

export declare function getQdasCatalogEntries(
  briosa: BriosaClient,
  input: GetQdasCatalogEntriesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get String From DataShare File {/* #get-string-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-string-from-datashare-file)

```ts
export interface GetStringFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly stringName?: string;
}

export declare function getStringFromDataShareFile(
  briosa: BriosaClient,
  input: GetStringFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Transform From DataShare File {/* #get-transform-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-transform-from-datashare-file)

```ts
export interface GetTransformFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly transformName?: string;
}

export declare function getTransformFromDataShareFile(
  briosa: BriosaClient,
  input: GetTransformFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Vector From DataShare File {/* #get-vector-from-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-vector-from-datashare-file)

```ts
export interface GetVectorFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly vectorName?: string;
}

export declare function getVectorFromDataShareFile(
  briosa: BriosaClient,
  input: GetVectorFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<Vector>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Working Directory {/* #get-working-directory */}

[MP Catalog](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#get-working-directory)

```ts
// Member of BriosaClient
interface BriosaClient {
  getWorkingDirectory(
    timeoutMs: number | null,
    signal?: AbortSignal,
  ): Promise<string>;
}
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Formats {/* #import-ascii-predefined-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-ascii-predefined-formats)

```ts
export interface ImportAsciiPredefinedFormatsInput {
  readonly asciiFilePath: FileReference;
  readonly fileFormat: AsciiFileFormat;
  readonly units?: DistanceUnits;
  readonly angularUnits?: AngularUnits;
  readonly groupName: CollectionObjectName;
  readonly importAsCloud?: boolean;
  readonly ensureNewPointGroup?: boolean;
  readonly ensureUniqueNames?: boolean;
}

export declare function importAsciiPredefinedFormats(
  briosa: BriosaClient,
  input: ImportAsciiPredefinedFormatsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import ASCII: Predefined Frame Set Formats {/* #import-ascii-predefined-frame-set-formats */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-ascii-predefined-frame-set-formats)

```ts
export interface ImportAsciiPredefinedFrameSetFormatsInput {
  readonly asciiFilePath: FileReference;
  readonly fileFormat: AsciiFileFormat;
  readonly units?: DistanceUnits;
  readonly angularUnits?: AngularUnits;
  readonly frameSetContainerName: CollectionObjectName;
  readonly ensureUniqueName?: boolean;
}

export declare function importAsciiPredefinedFrameSetFormats(
  briosa: BriosaClient,
  input: ImportAsciiPredefinedFrameSetFormatsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import E57 File {/* #import-e57-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-e57-file)

```ts
export interface ImportE57FileInput {
  readonly e57FilePath: FileReference;
  readonly saveConvertedFile?: boolean;
  readonly useSquareRootOfIntensity?: boolean;
  readonly automaticallyCloseConverter?: boolean;
  readonly prioritizeColorOverIntensity?: boolean;
  readonly importScanBlocksAsSeparateClouds?: boolean;
  readonly units?: DistanceUnits;
}

export declare function importE57File(
  briosa: BriosaClient,
  input: ImportE57FileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Embedded File {/* #import-file-as-embedded-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-file-as-embedded-file)

```ts
export interface ImportFileAsEmbeddedFileInput {
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

export declare function importFileAsEmbeddedFile(
  briosa: BriosaClient,
  input: ImportFileAsEmbeddedFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import File as Picture {/* #import-file-as-picture */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-file-as-picture)

```ts
export interface ImportFileAsPictureInput {
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

export declare function importFileAsPicture(
  briosa: BriosaClient,
  input: ImportFileAsPictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Hidden Point Bar XML File {/* #import-hidden-point-bar-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-hidden-point-bar-xml-file)

```ts
export interface ImportHiddenPointBarXmlFileInput {
  readonly xmlFilePath: FileReference;
  readonly replaceExistingEntries?: boolean;
}

export declare function importHiddenPointBarXmlFile(
  briosa: BriosaClient,
  input: ImportHiddenPointBarXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import IGES File {/* #import-iges-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-iges-file)

```ts
export interface ImportIgesFileInput {
  readonly igesFilePath: FileReference;
}

export declare function importIgesFile(
  briosa: BriosaClient,
  input: ImportIgesFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica GSI File {/* #import-leica-gsi-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-leica-gsi-file)

```ts
export interface ImportLeicaGsiFileInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly groupName: CollectionObjectName;
  readonly filePath: FileReference;
}

export declare function importLeicaGsiFile(
  briosa: BriosaClient,
  input: ImportLeicaGsiFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Leica SDB File {/* #import-leica-sdb-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-leica-sdb-file)

```ts
export interface ImportLeicaSdbFileInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly scanCloudName: CollectionObjectName;
  readonly filePath: FileReference;
}

export declare function importLeicaSdbFile(
  briosa: BriosaClient,
  input: ImportLeicaSdbFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import MP File as Embedded MP {/* #import-mp-file-as-embedded-mp */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-mp-file-as-embedded-mp)

```ts
export interface ImportMpFileAsEmbeddedMpInput {
  readonly externalMpFileName: FileReference;
  readonly replaceExisting?: boolean;
}

export declare function importMpFileAsEmbeddedMp(
  briosa: BriosaClient,
  input: ImportMpFileAsEmbeddedMpInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Nominals from XML File {/* #import-nominals-from-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-nominals-from-xml-file)

```ts
export interface ImportNominalsFromXmlFileInput {
  readonly filePath: FileReference;
}

export declare function importNominalsFromXmlFile(
  briosa: BriosaClient,
  input: ImportNominalsFromXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Polyworks File {/* #import-polyworks-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-polyworks-file)

```ts
export interface ImportPolyworksFileInput {
  readonly cloudName: CollectionObjectName;
  readonly filePath: FileReference;
}

export declare function importPolyworksFile(
  briosa: BriosaClient,
  input: ImportPolyworksFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import QDAS Catalog File {/* #import-qdas-catalog-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-qdas-catalog-file)

```ts
export interface ImportQdasCatalogFileInput {
  readonly qdasDfdFilePath: FileReference;
}

export declare function importQdasCatalogFile(
  briosa: BriosaClient,
  input: ImportQdasCatalogFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA File {/* #import-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-sa-file)

```ts
export interface ImportSaFileInput {
  readonly saFileName: FileReference;
  readonly allowOperatorSelections?: boolean;
  readonly selectedCollectionsOptional: Iterable<string>;
}

export declare function importSaFile(
  briosa: BriosaClient,
  input: ImportSaFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SA Windows Placement {/* #import-sa-windows-placement */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-sa-windows-placement)

```ts
export interface ImportSaWindowsPlacementInput {
  readonly filePath: FileReference;
}

export declare function importSaWindowsPlacement(
  briosa: BriosaClient,
  input: ImportSaWindowsPlacementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import SAT File {/* #import-sat-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-sat-file)

```ts
export interface ImportSatFileInput {
  readonly satFilePath: FileReference;
}

export declare function importSatFile(
  briosa: BriosaClient,
  input: ImportSatFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STEP File {/* #import-step-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-step-file)

```ts
export interface ImportStepFileInput {
  readonly stepFilePath: FileReference;
  readonly displayEntityFilters?: boolean;
  readonly displayResiduals?: boolean;
}

export declare function importStepFile(
  briosa: BriosaClient,
  input: ImportStepFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import STL File {/* #import-stl-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-stl-file)

```ts
export interface ImportStlFileInput {
  readonly stlFilePath: FileReference;
  readonly units?: DistanceUnits;
  readonly importMesh?: boolean;
  readonly importPointCloud?: boolean;
}

export declare function importStlFile(
  briosa: BriosaClient,
  input: ImportStlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VDA/FS File {/* #import-vdafs-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-vdafs-file)

```ts
export interface ImportVdaFsFileInput {
  readonly vdaFsFilePath: FileReference;
}

export declare function importVdaFsFile(
  briosa: BriosaClient,
  input: ImportVdaFsFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS .xyz File {/* #import-vstars-xyz-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-vstars-xyz-file)

```ts
export interface ImportVstarsXyzFileInput {
  readonly filePath: FileReference;
}

export declare function importVstarsXyzFile(
  briosa: BriosaClient,
  input: ImportVstarsXyzFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import VSTARS Cameras {/* #import-vstars-cameras */}

[MP Catalog](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#import-vstars-cameras)

```ts
export interface ImportVstarsCamerasInput {
  readonly filePath: FileReference;
}

export declare function importVstarsCameras(
  briosa: BriosaClient,
  input: ImportVstarsCamerasInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form {/* #load-html-form */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#load-html-form)

```ts
export interface LoadHtmlFormInput {
  readonly inputHtmlFormPath: FileReference;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
  readonly inputDataShareFilePath: FileReference;
  readonly outputDataShareFilePath: FileReference;
  readonly saveInBinaryFormat?: boolean;
  readonly saveButtonText?: string;
  readonly cancelButtonText?: string;
  readonly hideSaveAndCancelButtons?: boolean;
}

export declare function loadHtmlForm(
  briosa: BriosaClient,
  input: LoadHtmlFormInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load HTML Form in Edge Browser {/* #load-html-form-in-edge-browser */}

[MP Catalog](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#load-html-form-in-edge-browser)

```ts
export interface LoadHtmlFormInEdgeBrowserInput {
  readonly inputHtmlFormPath: FileReference;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
  readonly inputDataShareFilePath: FileReference;
  readonly outputDataShareFilePath: FileReference;
  readonly saveInBinaryFormat?: boolean;
}

export declare function loadHtmlFormInEdgeBrowser(
  briosa: BriosaClient,
  input: LoadHtmlFormInEdgeBrowserInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Embedded File Name List {/* #make-embedded-file-name-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#make-embedded-file-name-list)

```ts
export interface MakeEmbeddedFileNameListInput {
  readonly collectionWildcardCriteria?: string;
  readonly fileNamePattern?: string;
}

export declare function makeEmbeddedFileNameList(
  briosa: BriosaClient,
  input: MakeEmbeddedFileNameListInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Merge Measurements into XML File {/* #merge-measurements-into-xml-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#merge-measurements-into-xml-file)

```ts
export interface MergeMeasurementsIntoXmlFileInput {
  readonly filePath: FileReference;
  readonly groupName: CollectionObjectName;
}

export declare function mergeMeasurementsIntoXmlFile(
  briosa: BriosaClient,
  input: MergeMeasurementsIntoXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## New SA File {/* #new-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#new-sa-file)

```ts
export declare function newSaFile(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open SA File {/* #open-sa-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#open-sa-file)

```ts
export interface OpenSaFileInput {
  readonly saFileName: FileReference;
}

export declare function openSaFile(
  briosa: BriosaClient,
  input: OpenSaFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Open Template File {/* #open-template-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#open-template-file)

```ts
export interface OpenTemplateFileInput {
  readonly templateFileName: FileReference;
}

export declare function openTemplateFile(
  briosa: BriosaClient,
  input: OpenTemplateFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Pop PolyBay Analysis Window {/* #pop-polybay-analysis-window */}

[MP Catalog](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#pop-polybay-analysis-window)

```ts
export interface PopPolyBayAnalysisWindowInput {
  readonly materialsFilePath?: string;
  readonly bayFilePath?: string;
}

export declare function popPolyBayAnalysisWindow(
  briosa: BriosaClient,
  input: PopPolyBayAnalysisWindowInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Prepare QDAS Data List {/* #prepare-qdas-data-list */}

[MP Catalog](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#prepare-qdas-data-list)

```ts
export interface PrepareQdasDataListInput {
  readonly k1001PartNumber?: string;
  readonly k1002PartDescription?: string;
  readonly k1071SupplierNumber?: string;
  readonly k1072SupplierDescription?: string;
  readonly k1203ReasonForTest?: string;
  readonly k1303Plant?: string;
  readonly k1900PartRemark?: string;
  readonly k0006BatchNumber?: string;
  readonly k0014PartId?: string;
  readonly k0053OrderNumber?: string;
  readonly k0004DateTimeStamp: string;
  readonly k0008OperatorIdentifier?: number;
  readonly k0010MachineIdentifier?: number;
  readonly k0012GageIdentifier?: number;
  readonly relationshipList: Iterable<CollectionItemName>;
  readonly featureCheckList: Iterable<CollectionItemName>;
  readonly vectorGroupList: Iterable<CollectionObjectName>;
}

export declare function prepareQdasDataList(
  briosa: BriosaClient,
  input: PrepareQdasDataListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename General File {/* #rename-general-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#rename-general-file)

```ts
export interface RenameGeneralFileInput {
  readonly sourceFileName: FileReference;
  readonly destinationFileName: FileReference;
  readonly overwrite?: boolean;
}

export declare function renameGeneralFile(
  briosa: BriosaClient,
  input: RenameGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save {/* #save */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#save)

```ts
export declare function save(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As Read-Only Template {/* #save-as-read-only-template */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#save-as-read-only-template)

```ts
export interface SaveAsReadOnlyTemplateInput {
  readonly templateFileName: FileReference;
}

export declare function saveAsReadOnlyTemplate(
  briosa: BriosaClient,
  input: SaveAsReadOnlyTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save As... {/* #save-as */}

[MP Catalog](/mp-command-catalog/commands/file-operations#save-as) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#save-as)

```ts
export interface SaveAsInput {
  readonly fileName: FileReference;
  readonly addSerialNumber?: boolean;
  readonly optionalNumber?: number;
}

export declare function saveAs(
  briosa: BriosaClient,
  input: SaveAsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Boolean In DataShare File {/* #set-boolean-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-boolean-in-datashare-file)

```ts
export interface SetBooleanInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly booleanName?: string;
  readonly booleanValue?: boolean;
}

export declare function setBooleanInDataShareFile(
  briosa: BriosaClient,
  input: SetBooleanInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Double In DataShare File {/* #set-double-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-double-in-datashare-file)

```ts
export interface SetDoubleInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly doubleName?: string;
  readonly doubleValue?: number;
}

export declare function setDoubleInDataShareFile(
  briosa: BriosaClient,
  input: SetDoubleInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Integer In DataShare File {/* #set-integer-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-integer-in-datashare-file)

```ts
export interface SetIntegerInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly integerName?: string;
  readonly integerValue?: number;
}

export declare function setIntegerInDataShareFile(
  briosa: BriosaClient,
  input: SetIntegerInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set String In DataShare File {/* #set-string-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-string-in-datashare-file)

```ts
export interface SetStringInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly stringName?: string;
  readonly stringValue?: string;
}

export declare function setStringInDataShareFile(
  briosa: BriosaClient,
  input: SetStringInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Transform In DataShare File {/* #set-transform-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-transform-in-datashare-file)

```ts
export interface SetTransformInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly transformName?: string;
  readonly transformValue: Transform;
}

export declare function setTransformInDataShareFile(
  briosa: BriosaClient,
  input: SetTransformInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Vector In DataShare File {/* #set-vector-in-datashare-file */}

[MP Catalog](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#set-vector-in-datashare-file)

```ts
export interface SetVectorInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly vectorName?: string;
  readonly vectorValue: Vector;
}

export declare function setVectorInDataShareFile(
  briosa: BriosaClient,
  input: SetVectorInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Terminate All Running MPs {/* #terminate-all-running-mps */}

[MP Catalog](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#terminate-all-running-mps)

```ts
export declare function terminateAllRunningMPs(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify General File Exists {/* #verify-general-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#verify-general-file-exists)

```ts
export interface VerifyGeneralFileExistsInput {
  readonly fileName: FileReference;
}

export declare function verifyGeneralFileExists(
  briosa: BriosaClient,
  input: VerifyGeneralFileExistsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify MP File Exists {/* #verify-mp-file-exists */}

[MP Catalog](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/file-operations#verify-mp-file-exists)

```ts
export interface VerifyMpFileExistsInput {
  readonly mpFileName: FileReference;
}

export declare function verifyMpFileExists(
  briosa: BriosaClient,
  input: VerifyMpFileExistsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Use NRKXML Library {/* #use-nrkxml-library */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
