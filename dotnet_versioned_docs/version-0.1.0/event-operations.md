---
title: Event Operations
description: Briosa 0.1.0 .NET APIs for supported Event Operations MP commands.
toc_max_heading_level: 2
---

# Event Operations

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Delete Event

[Delete Event](/mp-command-catalog/commands/event-operations#delete-event) · [gRPC contract](/api/grpc/0.5.1/event-operations#delete-event)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventName` | `CollectionObjectName` | `Event Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task DeleteEventAsync(
    CollectionObjectName eventName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.DeleteEventAsync(eventName: eventName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Export Event Ref List

[Export Event Ref List](/mp-command-catalog/commands/event-operations#export-event-ref-list) · [gRPC contract](/api/grpc/0.5.1/event-operations#export-event-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `IEnumerable<CollectionItemName>` | `Event List` | Required |
| `filePath` | `FileReference` | `File Path` | Required |
| `decimalPrecision` | `int` | `Decimal Precision` | 6 |
| `overwriteExistingFile` | `bool` | `Overwrite existing file?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task ExportEventRefListAsync(
    IEnumerable<CollectionItemName> eventList,
    FileReference filePath,
    int decimalPrecision = 6,
    bool overwriteExistingFile = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ExportEventRefListAsync(eventList: eventList, filePath: filePath);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get i-th Event From Event Ref List

[Get i-th Event From Event Ref List](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) · [gRPC contract](/api/grpc/0.5.1/event-operations#get-i-th-event-from-event-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `IEnumerable<CollectionItemName>` | `Event List` | Required |
| `eventIndex` | `int` | `Event Index` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `ResultantItem` | `CollectionItemName` | `Resultant Item` |

```csharp
public Task<CollectionItemName> GetIthEventFromEventRefListAsync(
    IEnumerable<CollectionItemName> eventList,
    int eventIndex = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetIthEventFromEventRefListAsync(eventList: eventList);
```

Returns the MP output `Resultant Item` directly as `CollectionItemName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Get Number of Events in Event Ref List

[Get Number of Events in Event Ref List](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) · [gRPC contract](/api/grpc/0.5.1/event-operations#get-number-of-events-in-event-ref-list)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `eventList` | `IEnumerable<CollectionItemName>` | `Event List` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `TotalCount` | `int` | `Total Count` |

```csharp
public Task<int> GetNumberOfEventsInEventRefListAsync(
    IEnumerable<CollectionItemName> eventList,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.GetNumberOfEventsInEventRefListAsync(eventList: eventList);
```

Returns the MP output `Total Count` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Rename Event

[Rename Event](/mp-command-catalog/commands/event-operations#rename-event) · [gRPC contract](/api/grpc/0.5.1/event-operations#rename-event)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `originalEventName` | `CollectionObjectName` | `Original Event Name` | Required |
| `newEventName` | `CollectionObjectName` | `New Event Name` | Required |
| `overwriteIfExists` | `bool` | `Overwrite if exists?` | false |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```csharp
public Task RenameEventAsync(
    CollectionObjectName originalEventName,
    CollectionObjectName newEventName,
    bool overwriteIfExists = false,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.RenameEventAsync(originalEventName: originalEventName, newEventName: newEventName);
```

Completes without a command value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
