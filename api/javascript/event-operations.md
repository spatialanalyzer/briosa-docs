---
title: Event Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Event Operations MP commands.
toc_max_heading_level: 2
---

# Event Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Delete Event

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Delete Event](/mp-command-catalog/commands/event-operations#delete-event) · [gRPC contract](/api/grpc/event-operations#delete-event)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventName` | `CollectionObjectName` | `Event Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface DeleteEventInput {
  readonly eventName: CollectionObjectName;
}

function deleteEvent(
  briosa: BriosaClient,
  input: DeleteEventInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await deleteEvent(briosa, { eventName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Export Event Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Export Event Ref List](/mp-command-catalog/commands/event-operations#export-event-ref-list) · [gRPC contract](/api/grpc/event-operations#export-event-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `Iterable<CollectionItemName>` | `Event List` | Required |
| `filePath` | `FileReference` | `File Path` | Required |
| `decimalPrecision` | `number` | `Decimal Precision` | 6 |
| `overwriteExistingFile` | `boolean` | `Overwrite existing file?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface ExportEventRefListInput {
  readonly eventList: Iterable<CollectionItemName>;
  readonly filePath: FileReference;
  readonly decimalPrecision?: number;
  readonly overwriteExistingFile?: boolean;
}

function exportEventRefList(
  briosa: BriosaClient,
  input: ExportEventRefListInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await exportEventRefList(briosa, { eventList: ..., filePath: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get i-th Event From Event Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get i-th Event From Event Ref List](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) · [gRPC contract](/api/grpc/event-operations#get-i-th-event-from-event-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `Iterable<CollectionItemName>` | `Event List` | Required |
| `eventIndex` | `number` | `Event Index` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `resultantItem` | `CollectionItemName` | `Resultant Item` |

```ts
export interface GetIthEventFromEventRefListInput {
  readonly eventList: Iterable<CollectionItemName>;
  readonly eventIndex?: number;
}

function getIthEventFromEventRefList(
  briosa: BriosaClient,
  input: GetIthEventFromEventRefListInput,
  options?: BriosaCallOptions,
): Promise<CollectionItemName>;
```

```ts
await getIthEventFromEventRefList(briosa, { eventList: ... });
```

Returns the MP output `Resultant Item` directly as `CollectionItemName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Get Number of Events in Event Ref List

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Get Number of Events in Event Ref List](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) · [gRPC contract](/api/grpc/event-operations#get-number-of-events-in-event-ref-list)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `Iterable<CollectionItemName>` | `Event List` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `totalCount` | `number` | `Total Count` |

```ts
export interface GetNumberOfEventsInEventRefListInput {
  readonly eventList: Iterable<CollectionItemName>;
}

function getNumberOfEventsInEventRefList(
  briosa: BriosaClient,
  input: GetNumberOfEventsInEventRefListInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await getNumberOfEventsInEventRefList(briosa, { eventList: ... });
```

Returns the MP output `Total Count` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Rename Event

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Rename Event](/mp-command-catalog/commands/event-operations#rename-event) · [gRPC contract](/api/grpc/event-operations#rename-event)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalEventName` | `CollectionObjectName` | `Original Event Name` | Required |
| `newEventName` | `CollectionObjectName` | `New Event Name` | Required |
| `overwriteIfExists` | `boolean` | `Overwrite if exists?` | false |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```ts
export interface RenameEventInput {
  readonly originalEventName: CollectionObjectName;
  readonly newEventName: CollectionObjectName;
  readonly overwriteIfExists?: boolean;
}

function renameEvent(
  briosa: BriosaClient,
  input: RenameEventInput,
  options?: BriosaCallOptions,
): Promise<void>;
```

```ts
await renameEvent(briosa, { originalEventName: ..., newEventName: ... });
```

Resolves without a command value. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
