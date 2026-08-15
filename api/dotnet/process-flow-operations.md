---
title: Process Flow Operations
description: Next Briosa .NET APIs for supported Process Flow Operations MP commands.
toc_max_heading_level: 2
---

# Process Flow Operations

:::note[Next .NET Contract]

These signatures define the next handwritten `BriosaClient` surface. They are
not generated-request wrappers and are not released support until the version
selector names a published package.

:::

Methods preserve the MP command words, use normal .NET casing, append `Async`,
and expose one final optional `CancellationToken`.

## Ask for Double

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for Double](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-double)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `double` | `Initial Value` | 0.000000 |
| `enforceMinMaxValues` | `bool` | `Enforce Min/Max Values?` | false |
| `minValue` | `double` | `Min Value` | 0.000000 |
| `maxValue` | `double` | `Max Value` | 0.000000 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `double` | `Answer` |

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

```csharp
await briosa.AskForDoubleAsync(questionToAsk: questionToAsk, initialValue: initialValue, enforceMinMaxValues: enforceMinMaxValues, minValue: minValue, maxValue: maxValue, font: font);
```

Returns the MP output `Answer` directly as `double`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for Integer

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for Integer](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-integer)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `int` | `Initial Value` | 0 |
| `enforceMinMaxValues` | `bool` | `Enforce Min/Max Values?` | false |
| `minValue` | `int` | `Min Value` | 0 |
| `maxValue` | `int` | `Max Value` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `int` | `Answer` |

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

```csharp
await briosa.AskForIntegerAsync(questionToAsk: questionToAsk, initialValue: initialValue, enforceMinMaxValues: enforceMinMaxValues, minValue: minValue, maxValue: maxValue, font: font);
```

Returns the MP output `Answer` directly as `int`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for Point Name

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for Point Name](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-point-name)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `PointName` | `Initial Value` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `PointName` | `Answer` |

```csharp
public Task<PointName> AskForPointNameAsync(
    string questionToAsk,
    PointName initialValue,
    Font font,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AskForPointNameAsync(questionToAsk: questionToAsk, initialValue: initialValue, font: font);
```

Returns the MP output `Answer` directly as `PointName`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for String

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for String](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `passwordEntry` | `bool` | `Password Entry?` | false |
| `initialAnswer` | `string` | `Initial Answer` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `string` | `Answer` |

```csharp
public Task<string> AskForStringAsync(
    string questionToAsk,
    bool passwordEntry,
    string initialAnswer,
    Font font,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AskForStringAsync(questionToAsk: questionToAsk, passwordEntry: passwordEntry, initialAnswer: initialAnswer, font: font);
```

Returns the MP output `Answer` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for String (Pull-Down Version)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for String (Pull-Down Version)](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string-pull-down-version)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionOrStatement` | `IEnumerable<string>` | `Question or Statement` | Required |
| `possibleAnswers` | `IEnumerable<string>` | `Possible Answers` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `string` | `Answer` |
| `AnswerIndex` | `int` | `Answer Index` |

```csharp
public sealed record AskForStringPullDownVersionResult
{
    public required string Answer { get; init; }

    public required int AnswerIndex { get; init; }
}

public Task<AskForStringPullDownVersionResult> AskForStringPullDownVersionAsync(
    IEnumerable<string> questionOrStatement,
    IEnumerable<string> possibleAnswers,
    Font font,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AskForStringPullDownVersionAsync(questionOrStatement: questionOrStatement, possibleAnswers: possibleAnswers, font: font);
```

Returns the 2 MP outputs in the named `AskForStringPullDownVersionResult` value. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for User Decision from Image

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for User Decision from Image](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-image)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `imageFile` | `FileReference` | `Image File` | Required |
| `imageMapXmlFile` | `FileReference` | `Image Map XML File` | Required |
| `windowCaption` | `string` | `Window Caption` | Empty |
| `windowWidth0Default` | `int` | `Window Width (0 = default)` | 0 |
| `windowHeight0Default` | `int` | `Window Height (0 = default)` | 0 |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `UserChoice` | `string` | `User Choice` |

```csharp
public Task<string> AskForUserDecisionFromImageAsync(
    FileReference imageFile,
    FileReference imageMapXmlFile,
    string windowCaption = "",
    int windowWidth0Default = 0,
    int windowHeight0Default = 0,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AskForUserDecisionFromImageAsync(imageFile: imageFile, imageMapXmlFile: imageMapXmlFile);
```

Returns the MP output `User Choice` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Ask for User Decision from Strings

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Ask for User Decision from Strings](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-strings)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionOrStatement` | `IEnumerable<string>` | `Question or Statement` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `button1TextEmptyToHideButton` | `string` | `Button1 Text (Empty to hide button)` | Empty |
| `button2TextEmptyToHideButton` | `string` | `Button2 Text (Empty to hide button)` | Empty |
| `button3TextEmptyToHideButton` | `string` | `Button3 Text (Empty to hide button)` | Empty |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Answer` | `string` | `Answer` |

```csharp
public Task<string> AskForUserDecisionFromStringsAsync(
    IEnumerable<string> questionOrStatement,
    Font font,
    string button1TextEmptyToHideButton = "",
    string button2TextEmptyToHideButton = "",
    string button3TextEmptyToHideButton = "",
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.AskForUserDecisionFromStringsAsync(questionOrStatement: questionOrStatement, font: font);
```

Returns the MP output `Answer` directly as `string`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.

## Object Existence Test (Check Only)

:::note[Status: Next]
This client API is planned, including when the underlying gRPC operation is already **Current**.
:::

[Object Existence Test (Check Only)](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC contract](/api/grpc/process-flow-operations#object-existence-test-check-only)

| Parameter | .NET Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | .NET Type | Exact MP Output |
| --- | --- | --- |
| `Exists` | `bool` | `Exists?` |

```csharp
public Task<bool> ObjectExistenceTestCheckOnlyAsync(
    CollectionObjectName objectName,
    CancellationToken cancellationToken = default);
```

```csharp
await briosa.ObjectExistenceTestCheckOnlyAsync(objectName: objectName);
```

Returns the MP output `Exists?` directly as `bool`. Caller cancellation does not prove that
in-flight SA work stopped and never causes automatic replay.
