---
title: Event Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Event Operations

[SA 2026.1.0529.7](/api/dotnet/event-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/event-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Delete Event {/* #delete-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#delete-event) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#delete-event)

```csharp
public Task DeleteEventAsync(
        CollectionObjectName eventName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Event Ref List {/* #export-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#export-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#export-event-ref-list)

```csharp
public Task ExportEventRefListAsync(
        IEnumerable<CollectionItemName> eventList,
        FileReference filePath,
        int decimalPrecision = 6,
        bool overwriteExistingFile = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get i-th Event From Event Ref List {/* #get-i-th-event-from-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-i-th-event-from-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#get-i-th-event-from-event-ref-list)

```csharp
public Task<CollectionItemName> GetIthEventFromEventRefListAsync(
        IEnumerable<CollectionItemName> eventList,
        int eventIndex = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Events in Event Ref List {/* #get-number-of-events-in-event-ref-list */}

[MP Catalog](/mp-command-catalog/commands/event-operations#get-number-of-events-in-event-ref-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#get-number-of-events-in-event-ref-list)

```csharp
public Task<int> GetNumberOfEventsInEventRefListAsync(
        IEnumerable<CollectionItemName> eventList,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Event {/* #rename-event */}

[MP Catalog](/mp-command-catalog/commands/event-operations#rename-event) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/event-operations#rename-event)

```csharp
public Task RenameEventAsync(
        CollectionObjectName originalEventName,
        CollectionObjectName newEventName,
        bool overwriteIfExists = false,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2024.1.0508.5)
