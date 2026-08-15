---
title: File Operations
description: Next Briosa JavaScript and TypeScript APIs for supported File Operations MP commands.
toc_max_heading_level: 2
---

# File Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Backup Now

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Backup Now](/mp-command-catalog/commands/file-operations#backup-now) · [gRPC contract](/api/grpc/file-operations#backup-now)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function backupNow(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await backupNow(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Copy General File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Copy General File](/mp-command-catalog/commands/file-operations#copy-general-file) · [gRPC contract](/api/grpc/file-operations#copy-general-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFileName` | `FileReference` | `Source File Name` | Required |
| `destinationFileName` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `boolean` | `Overwrite?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface CopyGeneralFileInput {
  readonly sourceFileName: FileReference;
  readonly destinationFileName: FileReference;
  readonly overwrite?: boolean;
}

function copyGeneralFile(
  briosa: BriosaClient,
  input: CopyGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await copyGeneralFile(briosa, { sourceFileName: ..., destinationFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Delete General File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete General File](/mp-command-catalog/commands/file-operations#delete-general-file) · [gRPC contract](/api/grpc/file-operations#delete-general-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteGeneralFileInput {
  readonly fileName: FileReference;
}

function deleteGeneralFile(
  briosa: BriosaClient,
  input: DeleteGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteGeneralFile(briosa, { fileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Direct CAD Access

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Direct CAD Access](/mp-command-catalog/commands/file-operations#direct-cad-access) · [gRPC contract](/api/grpc/file-operations#direct-cad-access)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cadFileName` | `FileReference` | `CAD File Name` | Required |
| `importSolids` | `boolean` | `Import Solids` | true |
| `importSurfaces` | `boolean` | `Import Surfaces` | true |
| `importPolygonizedSurfaces` | `boolean` | `Import Polygonized Surfaces` | true |
| `importAnnotations` | `boolean` | `Import Annotations` | true |
| `importVectors` | `boolean` | `Import Vectors` | true |
| `importPoints` | `boolean` | `Import Points` | true |
| `pointGroupName` | `string` | `Point Group Name` | CAD pts |
| `importAttributesMetadata` | `boolean` | `Import Attributes/Metadata` | true |
| `importCooordinateFrames` | `boolean` | `Import Cooordinate Frames` | true |
| `importPlanes` | `boolean` | `Import Planes` | true |
| `import3DCurvesLines` | `boolean` | `Import 3D Curves - Lines` | true |
| `import3DCurvesCircles` | `boolean` | `Import 3D Curves - Circles` | true |
| `import3DCurvesGeneralCurves` | `boolean` | `Import 3D Curves - General Curves` | true |
| `importConstructionGeometry` | `boolean` | `Import Construction Geometry` | false |
| `importHiddenEntities` | `boolean` | `Import Hidden Entities` | false |
| `importAllSurfacesAsMeshGraphicalEntities` | `boolean` | `Import all Surfaces as Mesh Graphical Entities` | false |
| `doNotImportFillets` | `boolean` | `Do Not Import Fillets` | false |
| `doNotImportDittos` | `boolean` | `Do Not Import Dittos` | false |
| `dittoThreshold` | `number` | `Ditto Threshold` | 1 |
| `centerViewOnImportedObjects` | `boolean` | `Center View on Imported Objects` | true |
| `importIntoFoldersMatchingCadFileHierarchy` | `boolean` | `Import into Folders matching CAD file hierarchy` | false |
| `removeEmptyFolders` | `boolean` | `Remove Empty Folders` | true |
| `surfaceNormalsMode1Or2` | `number` | `Surface Normals Mode (1 or 2)` | 1 |
| `promptOnMissingComponents` | `boolean` | `Prompt on Missing Components` | true |
| `selectiveImport` | `boolean` | `Selective Import` | false |
| `surfaceCompatibilityMode` | `boolean` | `Surface Compatibility Mode` | true |
| `explodeSurfaces` | `boolean` | `Explode Surfaces` | false |
| `cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile` | `string` | `CAD File Units (leave blank to use the units specified in the file)` | Empty |
| `buildCalloutViews` | `boolean` | `Build Callout Views` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `importWarnings` | `boolean` | `Import Warnings` |
| `importWarningMessages` | `string` | `Import Warning Messages` |
| `extentsMin` | `Vector` | `Extents Min` |
| `extentsMax` | `Vector` | `Extents Max` |

```ts
export interface DirectCadAccessResult {
  readonly importWarnings: boolean;
  readonly importWarningMessages: string;
  readonly extentsMin: Vector;
  readonly extentsMax: Vector;
}

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
  readonly surfaceCompatibilityMode?: boolean;
  readonly explodeSurfaces?: boolean;
  readonly cadFileUnitsLeaveBlankToUseTheUnitsSpecifiedInTheFile?: string;
  readonly buildCalloutViews?: boolean;
}

function directCadAccess(
  briosa: BriosaClient,
  input: DirectCadAccessInput,
  options?: BriosaCallOptions,
): Promise<DirectCadAccessResult>;
```

```ts
await directCadAccess(briosa, { cadFileName: ... });
```

Returns the 4 MP outputs in the named `DirectCadAccessResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export ASCII Frame Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export ASCII Frame Set](/mp-command-catalog/commands/file-operations#export-ascii-frame-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-frame-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `frameSetContainer` | `CollectionObjectName` | `Frame Set Container` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `includeExportFormatInfo` | `boolean` | `Include Export Format Info?` | false |
| `decimalPrecision` | `number` | `Decimal Precision` | 6 |
| `append` | `boolean` | `Append?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function exportAsciiFrameSet(
  briosa: BriosaClient,
  input: ExportAsciiFrameSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportAsciiFrameSet(briosa, { asciiFilePath: ..., frameSetContainer: ..., dataDelimiter: ..., fileFormat: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export ASCII Frames

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export ASCII Frames](/mp-command-catalog/commands/file-operations#export-ascii-frames) · [gRPC contract](/api/grpc/file-operations#export-ascii-frames)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `objectList` | `Iterable<CollectionObjectName>` | `Object List` | Required |
| `exportFrameMode` | `string` | `Export Frame Mode` | Fixed XYZ |
| `overwriteExistingFile` | `boolean` | `Overwrite existing file?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportAsciiFramesInput {
  readonly asciiFilePath: FileReference;
  readonly objectList: Iterable<CollectionObjectName>;
  readonly exportFrameMode?: string;
  readonly overwriteExistingFile?: boolean;
}

function exportAsciiFrames(
  briosa: BriosaClient,
  input: ExportAsciiFramesInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportAsciiFrames(briosa, { asciiFilePath: ..., objectList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export ASCII Point Clouds

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export ASCII Point Clouds](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-clouds)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `pointCloudList` | `Iterable<CollectionObjectName>` | `Point Cloud List` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `overwriteExistingFile` | `boolean` | `Overwrite existing file?` | false |
| `showProgressDialog` | `boolean` | `Show Progress Dialog?` | false |
| `includeCloudPointLabeling` | `boolean` | `Include Cloud Point Labeling?` | false |
| `includeScanDirectionVector` | `boolean` | `Include Scan Direction Vector?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportAsciiPointCloudsInput {
  readonly asciiFilePath: FileReference;
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly dataDelimiter: ExportDataDelimeterType;
  readonly overwriteExistingFile?: boolean;
  readonly showProgressDialog?: boolean;
  readonly includeCloudPointLabeling?: boolean;
  readonly includeScanDirectionVector?: boolean;
}

function exportAsciiPointClouds(
  briosa: BriosaClient,
  input: ExportAsciiPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportAsciiPointClouds(briosa, { asciiFilePath: ..., pointCloudList: ..., dataDelimiter: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export ASCII Point Set

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export ASCII Point Set](/mp-command-catalog/commands/file-operations#export-ascii-point-set) · [gRPC contract](/api/grpc/file-operations#export-ascii-point-set)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `pointSetContainer` | `CollectionObjectName` | `Point Set Container` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `targetNameFormat` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desiredCoordinateSystem` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `includeTargetOffsets` | `boolean` | `Include Target Offsets?` | false |
| `includeTimestamps` | `boolean` | `Include Timestamps?` | false |
| `includeSaVersionAndFrameComments` | `boolean` | `Include SA version and frame comments?` | false |
| `includeAxisComments` | `boolean` | `Include Axis Comments?` | false |
| `includeExportFormatInfo` | `boolean` | `Include Export Format Info?` | false |
| `maximumPrecisionScientificNotation` | `boolean` | `Maximum Precision (Scientific Notation)?` | false |
| `decimalPrecision` | `number` | `Decimal Precision` | 6 |
| `append` | `boolean` | `Append?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function exportAsciiPointSet(
  briosa: BriosaClient,
  input: ExportAsciiPointSetInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportAsciiPointSet(briosa, { asciiFilePath: ..., pointSetContainer: ..., dataDelimiter: ..., targetNameFormat: ..., desiredCoordinateSystem: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export ASCII Points

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export ASCII Points](/mp-command-catalog/commands/file-operations#export-ascii-points) · [gRPC contract](/api/grpc/file-operations#export-ascii-points)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `groupNamesToExport` | `Iterable<CollectionGroupName>` | `Group Names to export` | Required |
| `dataDelimiter` | `ExportDataDelimeterType` | `Data Delimiter` | Required |
| `targetNameFormat` | `ExportTargetNameFormat` | `Target Name Format` | Required |
| `desiredCoordinateSystem` | `CoordinateSystemType` | `Desired Coordinate System` | Required |
| `includeTargetOffsets` | `boolean` | `Include Target Offsets?` | false |
| `includeTargetComments` | `boolean` | `Include Target Comments?` | false |
| `includeTimestamps` | `boolean` | `Include Timestamps?` | false |
| `includeTolerances` | `boolean` | `Include Tolerances?` | false |
| `includeCoordinateUncertainties` | `boolean` | `Include Coordinate Uncertainties?` | false |
| `includeSaVersionAndFrameComments` | `boolean` | `Include SA version and frame comments?` | false |
| `includeAxisComments` | `boolean` | `Include Axis Comments?` | false |
| `includeExportFormatInfo` | `boolean` | `Include Export Format Info?` | false |
| `includeWeights` | `boolean` | `Include Weights?` | false |
| `includeMeasurementDetails` | `boolean` | `Include Measurement Details?` | false |
| `maximumPrecisionScientificNotation` | `boolean` | `Maximum Precision (Scientific Notation)?` | false |
| `decimalPrecision` | `number` | `Decimal Precision` | 6 |
| `append` | `boolean` | `Append?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function exportAsciiPoints(
  briosa: BriosaClient,
  input: ExportAsciiPointsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportAsciiPoints(briosa, { asciiFilePath: ..., groupNamesToExport: ..., dataDelimiter: ..., targetNameFormat: ..., desiredCoordinateSystem: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export DXF

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export DXF](/mp-command-catalog/commands/file-operations#export-dxf) · [gRPC contract](/api/grpc/file-operations#export-dxf)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dxfFilePath` | `FileReference` | `DXF File Path` | Required |
| `pointNames` | `Iterable<PointName>` | `Point Names` | Required |
| `cloudNames` | `Iterable<CollectionObjectName>` | `Cloud Names` | Required |
| `includePointLabels` | `boolean` | `Include Point Labels?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportDxfInput {
  readonly dxfFilePath: FileReference;
  readonly pointNames: Iterable<PointName>;
  readonly cloudNames: Iterable<CollectionObjectName>;
  readonly includePointLabels?: boolean;
}

function exportDxf(
  briosa: BriosaClient,
  input: ExportDxfInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportDxf(briosa, { dxfFilePath: ..., pointNames: ..., cloudNames: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export Embedded File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export Embedded File](/mp-command-catalog/commands/file-operations#export-embedded-file) · [gRPC contract](/api/grpc/file-operations#export-embedded-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `embeddedFileCollectionName` | `CollectionName` | `Embedded File Collection Name` | Required |
| `embeddedFileName` | `string` | `Embedded File Name` | Empty |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `boolean` | `Replace Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportEmbeddedFileInput {
  readonly embeddedFileCollectionName: CollectionName;
  readonly embeddedFileName?: string;
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

function exportEmbeddedFile(
  briosa: BriosaClient,
  input: ExportEmbeddedFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportEmbeddedFile(briosa, { embeddedFileCollectionName: ..., externalFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export Hidden Point Bar XML File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#export-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#export-hidden-point-bar-xml-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xmlFilePath` | `FileReference` | `XML File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportHiddenPointBarXmlFileInput {
  readonly xmlFilePath: FileReference;
}

function exportHiddenPointBarXmlFile(
  briosa: BriosaClient,
  input: ExportHiddenPointBarXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportHiddenPointBarXmlFile(briosa, { xmlFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export IGES File  - Entire Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export IGES File  - Entire Model](/mp-command-catalog/commands/file-operations#export-iges-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file----entire-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportIgesFileEntireModelInput {
  readonly igesFilePath: FileReference;
}

function exportIgesFileEntireModel(
  briosa: BriosaClient,
  input: ExportIgesFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportIgesFileEntireModel(briosa, { igesFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export IGES File - Partial Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export IGES File - Partial Model](/mp-command-catalog/commands/file-operations#export-iges-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-iges-file---partial-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |
| `objectNameList` | `Iterable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportIgesFilePartialModelInput {
  readonly igesFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

function exportIgesFilePartialModel(
  briosa: BriosaClient,
  input: ExportIgesFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportIgesFilePartialModel(briosa, { igesFilePath: ..., objectNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export PTX Point Clouds

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export PTX Point Clouds](/mp-command-catalog/commands/file-operations#export-ptx-point-clouds) · [gRPC contract](/api/grpc/file-operations#export-ptx-point-clouds)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `ptxFilePath` | `FileReference` | `PTX File Path` | Required |
| `pointCloudList` | `Iterable<CollectionObjectName>` | `Point Cloud List` | Required |
| `overwriteExistingFile` | `boolean` | `Overwrite existing file?` | false |
| `showProgressDialog` | `boolean` | `Show Progress Dialog?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportPtxPointCloudsInput {
  readonly ptxFilePath: FileReference;
  readonly pointCloudList: Iterable<CollectionObjectName>;
  readonly overwriteExistingFile?: boolean;
  readonly showProgressDialog?: boolean;
}

function exportPtxPointClouds(
  briosa: BriosaClient,
  input: ExportPtxPointCloudsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportPtxPointClouds(briosa, { ptxFilePath: ..., pointCloudList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export QDAS Characteristics

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export QDAS Characteristics](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) · [gRPC contract](/api/grpc/file-operations#export-qdas-characteristics)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasExportFilePath` | `FileReference` | `QDAS Export File Path` | Required |
| `k1001PartNumber` | `string` | `K1001: Part Number` | Empty |
| `k1002PartDescription` | `string` | `K1002: Part Description` | Empty |
| `k1071SupplierNumber` | `string` | `K1071: Supplier Number` | Empty |
| `k1072SupplierDescription` | `string` | `K1072: Supplier Description` | Empty |
| `k1203ReasonForTest` | `string` | `K1203: Reason for Test` | Empty |
| `k1303Plant` | `string` | `K1303: Plant` | Empty |
| `k1900PartRemark` | `string` | `K1900: Part Remark` | Empty |
| `k0006BatchNumber` | `string` | `K0006: Batch Number` | Empty |
| `k0014PartId` | `string` | `K0014: Part ID` | Empty |
| `k0053OrderNumber` | `string` | `K0053: Order Number` | Empty |
| `k0004DateTimeStamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008OperatorIdentifier` | `number` | `K0008: Operator Identifier` | -1 |
| `k0010MachineIdentifier` | `number` | `K0010: Machine Identifier` | -1 |
| `k0012GageIdentifier` | `number` | `K0012: Gage Identifier` | -1 |
| `relationshipList` | `Iterable<CollectionObjectName>` | `Relationship List` | Required |
| `featureCheckList` | `Iterable<CollectionObjectName>` | `Feature Check List` | Required |
| `vectorGroupList` | `Iterable<CollectionObjectName>` | `Vector Group List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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
  readonly k0004DateTimeStamp?: string;
  readonly k0008OperatorIdentifier?: number;
  readonly k0010MachineIdentifier?: number;
  readonly k0012GageIdentifier?: number;
  readonly relationshipList: Iterable<CollectionObjectName>;
  readonly featureCheckList: Iterable<CollectionObjectName>;
  readonly vectorGroupList: Iterable<CollectionObjectName>;
}

function exportQdasCharacteristics(
  briosa: BriosaClient,
  input: ExportQdasCharacteristicsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportQdasCharacteristics(briosa, { qdasExportFilePath: ..., relationshipList: ..., featureCheckList: ..., vectorGroupList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export QDAS Data List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export QDAS Data List](/mp-command-catalog/commands/file-operations#export-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#export-qdas-data-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasExportFilePath` | `FileReference` | `QDAS Export File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportQdasDataListInput {
  readonly qdasExportFilePath: FileReference;
}

function exportQdasDataList(
  briosa: BriosaClient,
  input: ExportQdasDataListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportQdasDataList(briosa, { qdasExportFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export Scan Stripe Mesh to STL File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export Scan Stripe Mesh to STL File](/mp-command-catalog/commands/file-operations#export-scan-stripe-mesh-to-stl-file) · [gRPC contract](/api/grpc/file-operations#export-scan-stripe-mesh-to-stl-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stlFilePath` | `FileReference` | `STL File Path` | Required |
| `mesh` | `CollectionObjectName` | `Mesh` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportScanStripeMeshToStlFileInput {
  readonly stlFilePath: FileReference;
  readonly mesh: CollectionObjectName;
}

function exportScanStripeMeshToStlFile(
  briosa: BriosaClient,
  input: ExportScanStripeMeshToStlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportScanStripeMeshToStlFile(briosa, { stlFilePath: ..., mesh: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export STEP File - Entire Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export STEP File - Entire Model](/mp-command-catalog/commands/file-operations#export-step-file---entire-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---entire-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportStepFileEntireModelInput {
  readonly stepFilePath: FileReference;
}

function exportStepFileEntireModel(
  briosa: BriosaClient,
  input: ExportStepFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportStepFileEntireModel(briosa, { stepFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export STEP File - Partial Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export STEP File - Partial Model](/mp-command-catalog/commands/file-operations#export-step-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-step-file---partial-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |
| `objectNameList` | `Iterable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportStepFilePartialModelInput {
  readonly stepFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

function exportStepFilePartialModel(
  briosa: BriosaClient,
  input: ExportStepFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportStepFilePartialModel(briosa, { stepFilePath: ..., objectNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export VDA/FS File  - Entire Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export VDA/FS File  - Entire Model](/mp-command-catalog/commands/file-operations#export-vdafs-file----entire-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file----entire-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportVdaFsFileEntireModelInput {
  readonly vdaFsFilePath: FileReference;
}

function exportVdaFsFileEntireModel(
  briosa: BriosaClient,
  input: ExportVdaFsFileEntireModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportVdaFsFileEntireModel(briosa, { vdaFsFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export VDA/FS File - Partial Model

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export VDA/FS File - Partial Model](/mp-command-catalog/commands/file-operations#export-vdafs-file---partial-model) · [gRPC contract](/api/grpc/file-operations#export-vdafs-file---partial-model)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |
| `objectNameList` | `Iterable<CollectionObjectName>` | `Object Name List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportVdaFsFilePartialModelInput {
  readonly vdaFsFilePath: FileReference;
  readonly objectNameList: Iterable<CollectionObjectName>;
}

function exportVdaFsFilePartialModel(
  briosa: BriosaClient,
  input: ExportVdaFsFilePartialModelInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportVdaFsFilePartialModel(briosa, { vdaFsFilePath: ..., objectNameList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export Vector Container to ASCII File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export Vector Container to ASCII File](/mp-command-catalog/commands/file-operations#export-vector-container-to-ascii-file) · [gRPC contract](/api/grpc/file-operations#export-vector-container-to-ascii-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `Ascii File Path` | Required |
| `vectorGroupsToExport` | `Iterable<CollectionVectorGroupName>` | `Vector group(s) to export` | Required |
| `overwriteExistingFileFalseAppend` | `boolean` | `Overwrite existing file? (FALSE = Append)` | true |
| `useFullPrecisionScientificNotation` | `boolean` | `Use Full Precision (Scientific Notation)?` | false |
| `vectorNameFormat` | `Vector` | `Vector Name Format` | Required |
| `includeVectorLength` | `boolean` | `Include Vector Length?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportVectorContainerToAsciiFileInput {
  readonly asciiFilePath: FileReference;
  readonly vectorGroupsToExport: Iterable<CollectionVectorGroupName>;
  readonly overwriteExistingFileFalseAppend?: boolean;
  readonly useFullPrecisionScientificNotation?: boolean;
  readonly vectorNameFormat: Vector;
  readonly includeVectorLength?: boolean;
}

function exportVectorContainerToAsciiFile(
  briosa: BriosaClient,
  input: ExportVectorContainerToAsciiFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportVectorContainerToAsciiFile(briosa, { asciiFilePath: ..., vectorGroupsToExport: ..., vectorNameFormat: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Find Files in Directory

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Find Files in Directory](/mp-command-catalog/commands/file-operations#find-files-in-directory) · [gRPC contract](/api/grpc/file-operations#find-files-in-directory)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `string` | `Directory` | Empty |
| `fileNamePattern` | `string` | `File Name Pattern` | *.* |
| `recursive` | `boolean` | `Recursive?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `files` | `readonly string[]` | `Files` |

```ts
export interface FindFilesInDirectoryInput {
  readonly directory?: string;
  readonly fileNamePattern?: string;
  readonly recursive?: boolean;
}

function findFilesInDirectory(
  briosa: BriosaClient,
  input?: FindFilesInDirectoryInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await findFilesInDirectory(briosa);
```

Returns the MP output `Files` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Find Sub-Directories in Directory

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Find Sub-Directories in Directory](/mp-command-catalog/commands/file-operations#find-sub-directories-in-directory) · [gRPC contract](/api/grpc/file-operations#find-sub-directories-in-directory)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `directory` | `string` | `Directory` | Empty |
| `recursive` | `boolean` | `Recursive?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `subDirectories` | `readonly string[]` | `Sub-Directories` |

```ts
export interface FindSubDirectoriesInDirectoryInput {
  readonly directory?: string;
  readonly recursive?: boolean;
}

function findSubDirectoriesInDirectory(
  briosa: BriosaClient,
  input?: FindSubDirectoriesInDirectoryInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await findSubDirectoriesInDirectory(briosa);
```

Returns the MP output `Sub-Directories` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Boolean From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Boolean From DataShare File](/mp-command-catalog/commands/file-operations#get-boolean-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-boolean-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `booleanName` | `string` | `Boolean Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `booleanValue` | `boolean` | `Boolean Value` |

```ts
export interface GetBooleanFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly booleanName?: string;
}

function getBooleanFromDataShareFile(
  briosa: BriosaClient,
  input: GetBooleanFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await getBooleanFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `Boolean Value` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Double From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Double From DataShare File](/mp-command-catalog/commands/file-operations#get-double-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-double-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `doubleName` | `string` | `Double Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `doubleValue` | `number` | `Double Value` |

```ts
export interface GetDoubleFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly doubleName?: string;
}

function getDoubleFromDataShareFile(
  briosa: BriosaClient,
  input: GetDoubleFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getDoubleFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `Double Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Integer From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Integer From DataShare File](/mp-command-catalog/commands/file-operations#get-integer-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-integer-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `integerName` | `string` | `Integer Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `integerValue` | `number` | `Integer Value` |

```ts
export interface GetIntegerFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly integerName?: string;
}

function getIntegerFromDataShareFile(
  briosa: BriosaClient,
  input: GetIntegerFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getIntegerFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `Integer Value` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get QDAS Catalog Entries

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get QDAS Catalog Entries](/mp-command-catalog/commands/file-operations#get-qdas-catalog-entries) · [gRPC contract](/api/grpc/file-operations#get-qdas-catalog-entries)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `kFieldTarget` | `string` | `K-Field Target` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `catalogEntries` | `readonly string[]` | `Catalog Entries` |

```ts
export interface GetQdasCatalogEntriesInput {
  readonly kFieldTarget?: string;
}

function getQdasCatalogEntries(
  briosa: BriosaClient,
  input?: GetQdasCatalogEntriesInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await getQdasCatalogEntries(briosa);
```

Returns the MP output `Catalog Entries` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get String From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get String From DataShare File](/mp-command-catalog/commands/file-operations#get-string-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-string-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `stringName` | `string` | `String Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `stringValue` | `string` | `String Value` |

```ts
export interface GetStringFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly stringName?: string;
}

function getStringFromDataShareFile(
  briosa: BriosaClient,
  input: GetStringFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getStringFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `String Value` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Transform From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Transform From DataShare File](/mp-command-catalog/commands/file-operations#get-transform-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-transform-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `transformName` | `string` | `Transform Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `transformValue` | `Transform` | `Transform Value` |

```ts
export interface GetTransformFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly transformName?: string;
}

function getTransformFromDataShareFile(
  briosa: BriosaClient,
  input: GetTransformFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<Transform>;
```

```ts
await getTransformFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `Transform Value` directly as `Transform`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Vector From DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Vector From DataShare File](/mp-command-catalog/commands/file-operations#get-vector-from-datashare-file) · [gRPC contract](/api/grpc/file-operations#get-vector-from-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `vectorValue` | `Vector` | `Vector Value` |

```ts
export interface GetVectorFromDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly vectorName?: string;
}

function getVectorFromDataShareFile(
  briosa: BriosaClient,
  input: GetVectorFromDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<Vector>;
```

```ts
await getVectorFromDataShareFile(briosa, { dataShareFilePath: ... });
```

Returns the MP output `Vector Value` directly as `Vector`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Working Directory

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Working Directory](/mp-command-catalog/commands/file-operations#get-working-directory) · [gRPC contract](/api/grpc/file-operations#get-working-directory)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `directory` | `string` | `Directory` |

```ts
function getWorkingDirectory(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await getWorkingDirectory(briosa);
```

Returns the MP output `Directory` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import ASCII: Predefined Formats

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import ASCII: Predefined Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-formats)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angularUnits` | `AngularUnits` | `Angular Units` | Degrees |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `importAsCloud` | `boolean` | `Import as Cloud` | false |
| `ensureNewPointGroup` | `boolean` | `Ensure New Point Group` | true |
| `ensureUniqueNames` | `boolean` | `Ensure Unique Names` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function importAsciiPredefinedFormats(
  briosa: BriosaClient,
  input: ImportAsciiPredefinedFormatsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importAsciiPredefinedFormats(briosa, { asciiFilePath: ..., fileFormat: ..., groupName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import ASCII: Predefined Frame Set Formats

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import ASCII: Predefined Frame Set Formats](/mp-command-catalog/commands/file-operations#import-ascii-predefined-frame-set-formats) · [gRPC contract](/api/grpc/file-operations#import-ascii-predefined-frame-set-formats)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `asciiFilePath` | `FileReference` | `ASCII File Path` | Required |
| `fileFormat` | `AsciiFileFormat` | `File Format` | Required |
| `units` | `DistanceUnits` | `Units` | Inches |
| `angularUnits` | `AngularUnits` | `Angular Units` | Degrees |
| `frameSetContainerName` | `CollectionObjectName` | `Frame Set Container Name` | Required |
| `ensureUniqueName` | `boolean` | `Ensure Unique Name` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportAsciiPredefinedFrameSetFormatsInput {
  readonly asciiFilePath: FileReference;
  readonly fileFormat: AsciiFileFormat;
  readonly units?: DistanceUnits;
  readonly angularUnits?: AngularUnits;
  readonly frameSetContainerName: CollectionObjectName;
  readonly ensureUniqueName?: boolean;
}

function importAsciiPredefinedFrameSetFormats(
  briosa: BriosaClient,
  input: ImportAsciiPredefinedFrameSetFormatsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importAsciiPredefinedFrameSetFormats(briosa, { asciiFilePath: ..., fileFormat: ..., frameSetContainerName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import E57 File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import E57 File](/mp-command-catalog/commands/file-operations#import-e57-file) · [gRPC contract](/api/grpc/file-operations#import-e57-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `e57FilePath` | `FileReference` | `E57 File Path` | Required |
| `saveConvertedFile` | `boolean` | `Save Converted File` | false |
| `useSquareRootOfIntensity` | `boolean` | `Use Square Root of Intensity` | true |
| `automaticallyCloseConverter` | `boolean` | `Automatically Close Converter` | true |
| `prioritizeColorOverIntensity` | `boolean` | `Prioritize Color Over Intensity` | true |
| `importScanBlocksAsSeparateClouds` | `boolean` | `Import Scan Blocks As Separate Clouds` | false |
| `units` | `DistanceUnits` | `Units` | Inches |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function importE57File(
  briosa: BriosaClient,
  input: ImportE57FileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importE57File(briosa, { e57FilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import File as Embedded File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import File as Embedded File](/mp-command-catalog/commands/file-operations#import-file-as-embedded-file) · [gRPC contract](/api/grpc/file-operations#import-file-as-embedded-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `boolean` | `Replace Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportFileAsEmbeddedFileInput {
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

function importFileAsEmbeddedFile(
  briosa: BriosaClient,
  input: ImportFileAsEmbeddedFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importFileAsEmbeddedFile(briosa, { externalFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import File as Picture

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import File as Picture](/mp-command-catalog/commands/file-operations#import-file-as-picture) · [gRPC contract](/api/grpc/file-operations#import-file-as-picture)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalFileName` | `FileReference` | `External File Name` | Required |
| `replaceExisting` | `boolean` | `Replace Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportFileAsPictureInput {
  readonly externalFileName: FileReference;
  readonly replaceExisting?: boolean;
}

function importFileAsPicture(
  briosa: BriosaClient,
  input: ImportFileAsPictureInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importFileAsPicture(briosa, { externalFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Hidden Point Bar XML File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Hidden Point Bar XML File](/mp-command-catalog/commands/file-operations#import-hidden-point-bar-xml-file) · [gRPC contract](/api/grpc/file-operations#import-hidden-point-bar-xml-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `xmlFilePath` | `FileReference` | `XML File Path` | Required |
| `replaceExistingEntries` | `boolean` | `Replace Existing Entries?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportHiddenPointBarXmlFileInput {
  readonly xmlFilePath: FileReference;
  readonly replaceExistingEntries?: boolean;
}

function importHiddenPointBarXmlFile(
  briosa: BriosaClient,
  input: ImportHiddenPointBarXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importHiddenPointBarXmlFile(briosa, { xmlFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import IGES File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import IGES File](/mp-command-catalog/commands/file-operations#import-iges-file) · [gRPC contract](/api/grpc/file-operations#import-iges-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `igesFilePath` | `FileReference` | `IGES File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportIgesFileInput {
  readonly igesFilePath: FileReference;
}

function importIgesFile(
  briosa: BriosaClient,
  input: ImportIgesFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importIgesFile(briosa, { igesFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Leica GSI File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Leica GSI File](/mp-command-catalog/commands/file-operations#import-leica-gsi-file) · [gRPC contract](/api/grpc/file-operations#import-leica-gsi-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportLeicaGsiFileInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly groupName: CollectionObjectName;
  readonly filePath: FileReference;
}

function importLeicaGsiFile(
  briosa: BriosaClient,
  input: ImportLeicaGsiFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importLeicaGsiFile(briosa, { instrumentId: ..., groupName: ..., filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Leica SDB File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Leica SDB File](/mp-command-catalog/commands/file-operations#import-leica-sdb-file) · [gRPC contract](/api/grpc/file-operations#import-leica-sdb-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrumentId` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `scanCloudName` | `CollectionObjectName` | `Scan Cloud Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportLeicaSdbFileInput {
  readonly instrumentId: CollectionInstrumentId;
  readonly scanCloudName: CollectionObjectName;
  readonly filePath: FileReference;
}

function importLeicaSdbFile(
  briosa: BriosaClient,
  input: ImportLeicaSdbFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importLeicaSdbFile(briosa, { instrumentId: ..., scanCloudName: ..., filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import MP File as Embedded MP

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import MP File as Embedded MP](/mp-command-catalog/commands/file-operations#import-mp-file-as-embedded-mp) · [gRPC contract](/api/grpc/file-operations#import-mp-file-as-embedded-mp)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `externalMpFileName` | `FileReference` | `External MP File Name` | Required |
| `replaceExisting` | `boolean` | `Replace Existing?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportMpFileAsEmbeddedMpInput {
  readonly externalMpFileName: FileReference;
  readonly replaceExisting?: boolean;
}

function importMpFileAsEmbeddedMp(
  briosa: BriosaClient,
  input: ImportMpFileAsEmbeddedMpInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importMpFileAsEmbeddedMp(briosa, { externalMpFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Nominals from XML File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Nominals from XML File](/mp-command-catalog/commands/file-operations#import-nominals-from-xml-file) · [gRPC contract](/api/grpc/file-operations#import-nominals-from-xml-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportNominalsFromXmlFileInput {
  readonly filePath: FileReference;
}

function importNominalsFromXmlFile(
  briosa: BriosaClient,
  input: ImportNominalsFromXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importNominalsFromXmlFile(briosa, { filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import Polyworks File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import Polyworks File](/mp-command-catalog/commands/file-operations#import-polyworks-file) · [gRPC contract](/api/grpc/file-operations#import-polyworks-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `cloudName` | `CollectionObjectName` | `Cloud Name` | Required |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportPolyworksFileInput {
  readonly cloudName: CollectionObjectName;
  readonly filePath: FileReference;
}

function importPolyworksFile(
  briosa: BriosaClient,
  input: ImportPolyworksFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importPolyworksFile(briosa, { cloudName: ..., filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import QDAS Catalog File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import QDAS Catalog File](/mp-command-catalog/commands/file-operations#import-qdas-catalog-file) · [gRPC contract](/api/grpc/file-operations#import-qdas-catalog-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `qdasDfdFilePath` | `FileReference` | `QDAS DFD File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportQdasCatalogFileInput {
  readonly qdasDfdFilePath: FileReference;
}

function importQdasCatalogFile(
  briosa: BriosaClient,
  input: ImportQdasCatalogFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importQdasCatalogFile(briosa, { qdasDfdFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import SA File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import SA File](/mp-command-catalog/commands/file-operations#import-sa-file) · [gRPC contract](/api/grpc/file-operations#import-sa-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saFileName` | `FileReference` | `SA File Name` | Required |
| `allowOperatorSelections` | `boolean` | `Allow Operator Selections` | false |
| `selectedCollectionsOptional` | `Iterable<string>` | `Selected Collections (optional)` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportSaFileInput {
  readonly saFileName: FileReference;
  readonly allowOperatorSelections?: boolean;
  readonly selectedCollectionsOptional: Iterable<string>;
}

function importSaFile(
  briosa: BriosaClient,
  input: ImportSaFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importSaFile(briosa, { saFileName: ..., selectedCollectionsOptional: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import SA Windows Placement

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import SA Windows Placement](/mp-command-catalog/commands/file-operations#import-sa-windows-placement) · [gRPC contract](/api/grpc/file-operations#import-sa-windows-placement)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportSaWindowsPlacementInput {
  readonly filePath: FileReference;
}

function importSaWindowsPlacement(
  briosa: BriosaClient,
  input: ImportSaWindowsPlacementInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importSaWindowsPlacement(briosa, { filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import SAT File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import SAT File](/mp-command-catalog/commands/file-operations#import-sat-file) · [gRPC contract](/api/grpc/file-operations#import-sat-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `satFilePath` | `FileReference` | `SAT File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportSatFileInput {
  readonly satFilePath: FileReference;
}

function importSatFile(
  briosa: BriosaClient,
  input: ImportSatFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importSatFile(briosa, { satFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import STEP File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import STEP File](/mp-command-catalog/commands/file-operations#import-step-file) · [gRPC contract](/api/grpc/file-operations#import-step-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stepFilePath` | `FileReference` | `STEP File Path` | Required |
| `displayEntityFilters` | `boolean` | `Display Entity Filters` | false |
| `displayResiduals` | `boolean` | `Display Residuals` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportStepFileInput {
  readonly stepFilePath: FileReference;
  readonly displayEntityFilters?: boolean;
  readonly displayResiduals?: boolean;
}

function importStepFile(
  briosa: BriosaClient,
  input: ImportStepFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importStepFile(briosa, { stepFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import STL File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import STL File](/mp-command-catalog/commands/file-operations#import-stl-file) · [gRPC contract](/api/grpc/file-operations#import-stl-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `stlFilePath` | `FileReference` | `STL File Path` | Required |
| `units` | `DistanceUnits` | `Units` | Millimeters |
| `importMesh` | `boolean` | `Import Mesh` | true |
| `importPointCloud` | `boolean` | `Import Point Cloud` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportStlFileInput {
  readonly stlFilePath: FileReference;
  readonly units?: DistanceUnits;
  readonly importMesh?: boolean;
  readonly importPointCloud?: boolean;
}

function importStlFile(
  briosa: BriosaClient,
  input: ImportStlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importStlFile(briosa, { stlFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import VDA/FS File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import VDA/FS File](/mp-command-catalog/commands/file-operations#import-vdafs-file) · [gRPC contract](/api/grpc/file-operations#import-vdafs-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `vdaFsFilePath` | `FileReference` | `VDA/FS File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportVdaFsFileInput {
  readonly vdaFsFilePath: FileReference;
}

function importVdaFsFile(
  briosa: BriosaClient,
  input: ImportVdaFsFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importVdaFsFile(briosa, { vdaFsFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import VSTARS .xyz File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import VSTARS .xyz File](/mp-command-catalog/commands/file-operations#import-vstars-xyz-file) · [gRPC contract](/api/grpc/file-operations#import-vstars-xyz-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportVstarsXyzFileInput {
  readonly filePath: FileReference;
}

function importVstarsXyzFile(
  briosa: BriosaClient,
  input: ImportVstarsXyzFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importVstarsXyzFile(briosa, { filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Import VSTARS Cameras

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Import VSTARS Cameras](/mp-command-catalog/commands/file-operations#import-vstars-cameras) · [gRPC contract](/api/grpc/file-operations#import-vstars-cameras)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ImportVstarsCamerasInput {
  readonly filePath: FileReference;
}

function importVstarsCameras(
  briosa: BriosaClient,
  input: ImportVstarsCamerasInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await importVstarsCameras(briosa, { filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Load HTML Form

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Load HTML Form](/mp-command-catalog/commands/file-operations#load-html-form) · [gRPC contract](/api/grpc/file-operations#load-html-form)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFormPath` | `FileReference` | `Input HTML Form Path` | Required |
| `windowWidth` | `number` | `Window Width` | 1000 |
| `windowHeight` | `number` | `Window Height` | 800 |
| `inputDataShareFilePath` | `FileReference` | `Input DataShare File Path` | Required |
| `outputDataShareFilePath` | `FileReference` | `Output DataShare File Path` | Required |
| `saveInBinaryFormat` | `boolean` | `Save in Binary Format?` | false |
| `saveButtonText` | `string` | `Save Button Text` | Save |
| `cancelButtonText` | `string` | `Cancel Button Text` | Cancel |
| `hideSaveAndCancelButtons` | `boolean` | `Hide Save and Cancel buttons?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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

function loadHtmlForm(
  briosa: BriosaClient,
  input: LoadHtmlFormInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await loadHtmlForm(briosa, { inputHtmlFormPath: ..., inputDataShareFilePath: ..., outputDataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Load HTML Form in Edge Browser

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Load HTML Form in Edge Browser](/mp-command-catalog/commands/file-operations#load-html-form-in-edge-browser) · [gRPC contract](/api/grpc/file-operations#load-html-form-in-edge-browser)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `inputHtmlFormPath` | `FileReference` | `Input HTML Form Path` | Required |
| `windowWidth` | `number` | `Window Width` | 1000 |
| `windowHeight` | `number` | `Window Height` | 800 |
| `inputDataShareFilePath` | `FileReference` | `Input DataShare File Path` | Required |
| `outputDataShareFilePath` | `FileReference` | `Output DataShare File Path` | Required |
| `saveInBinaryFormat` | `boolean` | `Save in Binary Format?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface LoadHtmlFormInEdgeBrowserInput {
  readonly inputHtmlFormPath: FileReference;
  readonly windowWidth?: number;
  readonly windowHeight?: number;
  readonly inputDataShareFilePath: FileReference;
  readonly outputDataShareFilePath: FileReference;
  readonly saveInBinaryFormat?: boolean;
}

function loadHtmlFormInEdgeBrowser(
  briosa: BriosaClient,
  input: LoadHtmlFormInEdgeBrowserInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await loadHtmlFormInEdgeBrowser(briosa, { inputHtmlFormPath: ..., inputDataShareFilePath: ..., outputDataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Make Embedded File Name List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Make Embedded File Name List](/mp-command-catalog/commands/file-operations#make-embedded-file-name-list) · [gRPC contract](/api/grpc/file-operations#make-embedded-file-name-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `collectionWildcardCriteria` | `string` | `Collection Wildcard Criteria` | * |
| `fileNamePattern` | `string` | `File Name Pattern` | *.* |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `embeddedFiles` | `readonly string[]` | `Embedded Files` |

```ts
export interface MakeEmbeddedFileNameListInput {
  readonly collectionWildcardCriteria?: string;
  readonly fileNamePattern?: string;
}

function makeEmbeddedFileNameList(
  briosa: BriosaClient,
  input?: MakeEmbeddedFileNameListInput,
  options?: BriosaCallOptions,
): Promise<readonly string[]>;
```

```ts
await makeEmbeddedFileNameList(briosa);
```

Returns the MP output `Embedded Files` directly as `readonly string[]`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Merge Measurements into XML File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Merge Measurements into XML File](/mp-command-catalog/commands/file-operations#merge-measurements-into-xml-file) · [gRPC contract](/api/grpc/file-operations#merge-measurements-into-xml-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `filePath` | `FileReference` | `File Path` | Required |
| `groupName` | `CollectionObjectName` | `Group Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface MergeMeasurementsIntoXmlFileInput {
  readonly filePath: FileReference;
  readonly groupName: CollectionObjectName;
}

function mergeMeasurementsIntoXmlFile(
  briosa: BriosaClient,
  input: MergeMeasurementsIntoXmlFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await mergeMeasurementsIntoXmlFile(briosa, { filePath: ..., groupName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## New SA File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[New SA File](/mp-command-catalog/commands/file-operations#new-sa-file) · [gRPC contract](/api/grpc/file-operations#new-sa-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function newSaFile(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await newSaFile(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Open SA File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Open SA File](/mp-command-catalog/commands/file-operations#open-sa-file) · [gRPC contract](/api/grpc/file-operations#open-sa-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `saFileName` | `FileReference` | `SA File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface OpenSaFileInput {
  readonly saFileName: FileReference;
}

function openSaFile(
  briosa: BriosaClient,
  input: OpenSaFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await openSaFile(briosa, { saFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Open Template File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Open Template File](/mp-command-catalog/commands/file-operations#open-template-file) · [gRPC contract](/api/grpc/file-operations#open-template-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `templateFileName` | `FileReference` | `Template File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface OpenTemplateFileInput {
  readonly templateFileName: FileReference;
}

function openTemplateFile(
  briosa: BriosaClient,
  input: OpenTemplateFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await openTemplateFile(briosa, { templateFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Pop PolyBay Analysis Window

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Pop PolyBay Analysis Window](/mp-command-catalog/commands/file-operations#pop-polybay-analysis-window) · [gRPC contract](/api/grpc/file-operations#pop-polybay-analysis-window)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `materialsFilePath` | `string` | `Materials File Path` | Empty |
| `bayFilePath` | `string` | `Bay File Path` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface PopPolyBayAnalysisWindowInput {
  readonly materialsFilePath?: string;
  readonly bayFilePath?: string;
}

function popPolyBayAnalysisWindow(
  briosa: BriosaClient,
  input?: PopPolyBayAnalysisWindowInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await popPolyBayAnalysisWindow(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Prepare QDAS Data List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Prepare QDAS Data List](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) · [gRPC contract](/api/grpc/file-operations#prepare-qdas-data-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `k1001PartNumber` | `string` | `K1001: Part Number` | Empty |
| `k1002PartDescription` | `string` | `K1002: Part Description` | Empty |
| `k1071SupplierNumber` | `string` | `K1071: Supplier Number` | Empty |
| `k1072SupplierDescription` | `string` | `K1072: Supplier Description` | Empty |
| `k1203ReasonForTest` | `string` | `K1203: Reason for Test` | Empty |
| `k1303Plant` | `string` | `K1303: Plant` | Empty |
| `k1900PartRemark` | `string` | `K1900: Part Remark` | Empty |
| `k0006BatchNumber` | `string` | `K0006: Batch Number` | Empty |
| `k0014PartId` | `string` | `K0014: Part ID` | Empty |
| `k0053OrderNumber` | `string` | `K0053: Order Number` | Empty |
| `k0004DateTimeStamp` | `string` | `K0004: Date Time Stamp` | 2026-07-20/16:32:22 |
| `k0008OperatorIdentifier` | `number` | `K0008: Operator Identifier` | -1 |
| `k0010MachineIdentifier` | `number` | `K0010: Machine Identifier` | -1 |
| `k0012GageIdentifier` | `number` | `K0012: Gage Identifier` | -1 |
| `relationshipList` | `Iterable<CollectionObjectName>` | `Relationship List` | Required |
| `featureCheckList` | `Iterable<CollectionObjectName>` | `Feature Check List` | Required |
| `vectorGroupList` | `Iterable<CollectionObjectName>` | `Vector Group List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

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
  readonly k0004DateTimeStamp?: string;
  readonly k0008OperatorIdentifier?: number;
  readonly k0010MachineIdentifier?: number;
  readonly k0012GageIdentifier?: number;
  readonly relationshipList: Iterable<CollectionObjectName>;
  readonly featureCheckList: Iterable<CollectionObjectName>;
  readonly vectorGroupList: Iterable<CollectionObjectName>;
}

function prepareQdasDataList(
  briosa: BriosaClient,
  input: PrepareQdasDataListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await prepareQdasDataList(briosa, { relationshipList: ..., featureCheckList: ..., vectorGroupList: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Rename General File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Rename General File](/mp-command-catalog/commands/file-operations#rename-general-file) · [gRPC contract](/api/grpc/file-operations#rename-general-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `sourceFileName` | `FileReference` | `Source File Name` | Required |
| `destinationFileName` | `FileReference` | `Destination File Name` | Required |
| `overwrite` | `boolean` | `Overwrite?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RenameGeneralFileInput {
  readonly sourceFileName: FileReference;
  readonly destinationFileName: FileReference;
  readonly overwrite?: boolean;
}

function renameGeneralFile(
  briosa: BriosaClient,
  input: RenameGeneralFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renameGeneralFile(briosa, { sourceFileName: ..., destinationFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save](/mp-command-catalog/commands/file-operations#save) · [gRPC contract](/api/grpc/file-operations#save)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function save(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await save(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save As Read-Only Template

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save As Read-Only Template](/mp-command-catalog/commands/file-operations#save-as-read-only-template) · [gRPC contract](/api/grpc/file-operations#save-as-read-only-template)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `templateFileName` | `FileReference` | `Template File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SaveAsReadOnlyTemplateInput {
  readonly templateFileName: FileReference;
}

function saveAsReadOnlyTemplate(
  briosa: BriosaClient,
  input: SaveAsReadOnlyTemplateInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await saveAsReadOnlyTemplate(briosa, { templateFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Save As...

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Save As...](/mp-command-catalog/commands/file-operations#save-as) · [gRPC contract](/api/grpc/file-operations#save-as)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |
| `addSerialNumber` | `boolean` | `Add Serial Number?` | false |
| `optionalNumber` | `number` | `Optional Number` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SaveAsInput {
  readonly fileName: FileReference;
  readonly addSerialNumber?: boolean;
  readonly optionalNumber?: number;
}

function saveAs(
  briosa: BriosaClient,
  input: SaveAsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await saveAs(briosa, { fileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Boolean In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Boolean In DataShare File](/mp-command-catalog/commands/file-operations#set-boolean-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-boolean-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `booleanName` | `string` | `Boolean Name` | Empty |
| `booleanValue` | `boolean` | `Boolean Value` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetBooleanInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly booleanName?: string;
  readonly booleanValue?: boolean;
}

function setBooleanInDataShareFile(
  briosa: BriosaClient,
  input: SetBooleanInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setBooleanInDataShareFile(briosa, { dataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Double In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Double In DataShare File](/mp-command-catalog/commands/file-operations#set-double-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-double-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `doubleName` | `string` | `Double Name` | Empty |
| `doubleValue` | `number` | `Double Value` | 0.000000 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetDoubleInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly doubleName?: string;
  readonly doubleValue?: number;
}

function setDoubleInDataShareFile(
  briosa: BriosaClient,
  input: SetDoubleInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setDoubleInDataShareFile(briosa, { dataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Integer In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Integer In DataShare File](/mp-command-catalog/commands/file-operations#set-integer-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-integer-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `integerName` | `string` | `Integer Name` | Empty |
| `integerValue` | `number` | `Integer Value` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetIntegerInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly integerName?: string;
  readonly integerValue?: number;
}

function setIntegerInDataShareFile(
  briosa: BriosaClient,
  input: SetIntegerInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setIntegerInDataShareFile(briosa, { dataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set String In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set String In DataShare File](/mp-command-catalog/commands/file-operations#set-string-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-string-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `stringName` | `string` | `String Name` | Empty |
| `stringValue` | `string` | `String Value` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetStringInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly stringName?: string;
  readonly stringValue?: string;
}

function setStringInDataShareFile(
  briosa: BriosaClient,
  input: SetStringInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setStringInDataShareFile(briosa, { dataShareFilePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Transform In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Transform In DataShare File](/mp-command-catalog/commands/file-operations#set-transform-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-transform-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `transformName` | `string` | `Transform Name` | Empty |
| `transformValue` | `Transform` | `Transform Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetTransformInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly transformName?: string;
  readonly transformValue: Transform;
}

function setTransformInDataShareFile(
  briosa: BriosaClient,
  input: SetTransformInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setTransformInDataShareFile(briosa, { dataShareFilePath: ..., transformValue: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Set Vector In DataShare File

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Set Vector In DataShare File](/mp-command-catalog/commands/file-operations#set-vector-in-datashare-file) · [gRPC contract](/api/grpc/file-operations#set-vector-in-datashare-file)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `dataShareFilePath` | `FileReference` | `DataShare File Path` | Required |
| `vectorName` | `string` | `Vector Name` | Empty |
| `vectorValue` | `Vector` | `Vector Value` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface SetVectorInDataShareFileInput {
  readonly dataShareFilePath: FileReference;
  readonly vectorName?: string;
  readonly vectorValue: Vector;
}

function setVectorInDataShareFile(
  briosa: BriosaClient,
  input: SetVectorInDataShareFileInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await setVectorInDataShareFile(briosa, { dataShareFilePath: ..., vectorValue: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Terminate All Running MPs

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Terminate All Running MPs](/mp-command-catalog/commands/file-operations#terminate-all-running-mps) · [gRPC contract](/api/grpc/file-operations#terminate-all-running-mps)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| — | None | — | — |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
function terminateAllRunningMPs(
  briosa: BriosaClient,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await terminateAllRunningMPs(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Use NRKXML Library

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Use NRKXML Library](/mp-command-catalog/commands/file-operations#use-nrkxml-library) · [gRPC contract](/api/grpc/file-operations#use-nrkxml-library)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `useLibrary` | `boolean` | `Use library?` | true |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface UseNrkxmlLibraryInput {
  readonly useLibrary?: boolean;
}

function useNrkxmlLibrary(
  briosa: BriosaClient,
  input?: UseNrkxmlLibraryInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await useNrkxmlLibrary(briosa);
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Verify General File Exists

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Verify General File Exists](/mp-command-catalog/commands/file-operations#verify-general-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-general-file-exists)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `fileName` | `FileReference` | `File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface VerifyGeneralFileExistsInput {
  readonly fileName: FileReference;
}

function verifyGeneralFileExists(
  briosa: BriosaClient,
  input: VerifyGeneralFileExistsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await verifyGeneralFileExists(briosa, { fileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Verify MP File Exists

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Verify MP File Exists](/mp-command-catalog/commands/file-operations#verify-mp-file-exists) · [gRPC contract](/api/grpc/file-operations#verify-mp-file-exists)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mpFileName` | `FileReference` | `MP File Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface VerifyMpFileExistsInput {
  readonly mpFileName: FileReference;
}

function verifyMpFileExists(
  briosa: BriosaClient,
  input: VerifyMpFileExistsInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await verifyMpFileExists(briosa, { mpFileName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
