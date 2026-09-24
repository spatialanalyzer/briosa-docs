---
title: Process Flow Operations
description: Released dotnet 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Process Flow Operations

[SA 2026.1.0529.7](/api/dotnet/process-flow-operations) · [SA 2024.1.0508.5](/api/dotnet/sa-2024.1.0508.5/process-flow-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Ask for Double {/* #ask-for-double */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-double)

```csharp
public Task<double> AskForDoubleAsync(
        string questionToAsk,
        double initialValue,
        bool enforceMinMaxValues,
        double minValue,
        double maxValue,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Integer {/* #ask-for-integer */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-integer)

```csharp
public Task<int> AskForIntegerAsync(
        string questionToAsk,
        int initialValue,
        bool enforceMinMaxValues,
        int minValue,
        int maxValue,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Point Name {/* #ask-for-point-name */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-point-name)

```csharp
public Task<PointName> AskForPointNameAsync(
        string questionToAsk,
        PointName initialValue,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String {/* #ask-for-string */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-string)

```csharp
public Task<string> AskForStringAsync(
        string questionToAsk,
        bool passwordEntry,
        string initialAnswer,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String (Pull-Down Version) {/* #ask-for-string-pull-down-version */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-string-pull-down-version)

```csharp
public Task<AskForStringPullDownVersionResult> AskForStringPullDownVersionAsync(
        IEnumerable<string> questionOrStatement,
        IEnumerable<string> possibleAnswers,
        Font font,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for User Decision from Image {/* #ask-for-user-decision-from-image */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-image)

```csharp
public Task<string> AskForUserDecisionFromImageAsync(
        FileReference imageFile,
        FileReference imageMapXmlFile,
        string windowCaption = "",
        int windowWidth = 0,
        int windowHeight = 0,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `windowWidth` | 0 uses the default window dimension. |
| `windowHeight` | 0 uses the default window dimension. |

## Ask for User Decision from Strings {/* #ask-for-user-decision-from-strings */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC Contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-strings)

```csharp
public Task<string> AskForUserDecisionFromStringsAsync(
        IEnumerable<string> questionOrStatement,
        Font font,
        string button1Text = "",
        string button2Text = "",
        string button3Text = "",
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `button1Text` | An empty string hides the button. |
| `button2Text` | An empty string hides the button. |
| `button3Text` | An empty string hides the button. |

## Object Existence Test (Check Only) {/* #object-existence-test-check-only */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC Contract](/api/grpc/process-flow-operations#object-existence-test-check-only)

```csharp
public Task<bool> ObjectExistenceTestCheckOnlyAsync(
        CollectionObjectName objectName,
        CancellationToken cancellationToken = default);
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-dotnet/tree/v0.3.0/targets/2026.1.0529.7)
