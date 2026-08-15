---
title: Process Flow Operations
description: Next Briosa JavaScript and TypeScript APIs for supported Process Flow Operations MP commands.
toc_max_heading_level: 2
---

# Process Flow Operations

:::note[Next JavaScript and TypeScript Contract]

These functions define the next package surface. They are not released support
until this Next documentation is versioned for a published package.

:::

Exact MP command words map mechanically to `lowerCamelCase`. Commands with MP
inputs use one readonly input object; call controls remain a separate final value.

## Ask for Double

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for Double](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-double)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `number` | `Initial Value` | 0.000000 |
| `enforceMinMaxValues` | `boolean` | `Enforce Min/Max Values?` | false |
| `minValue` | `number` | `Min Value` | 0.000000 |
| `maxValue` | `number` | `Max Value` | 0.000000 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `number` | `Answer` |

```ts
export interface AskForDoubleInput {
  readonly questionToAsk?: string;
  readonly initialValue?: number;
  readonly enforceMinMaxValues?: boolean;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly font?: Font;
}

function askForDouble(
  briosa: BriosaClient,
  input?: AskForDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await askForDouble(briosa);
```

Returns the MP output `Answer` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for Integer

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for Integer](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-integer)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `number` | `Initial Value` | 0 |
| `enforceMinMaxValues` | `boolean` | `Enforce Min/Max Values?` | false |
| `minValue` | `number` | `Min Value` | 0 |
| `maxValue` | `number` | `Max Value` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `number` | `Answer` |

```ts
export interface AskForIntegerInput {
  readonly questionToAsk?: string;
  readonly initialValue?: number;
  readonly enforceMinMaxValues?: boolean;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly font?: Font;
}

function askForInteger(
  briosa: BriosaClient,
  input?: AskForIntegerInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

```ts
await askForInteger(briosa);
```

Returns the MP output `Answer` directly as `number`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for Point Name

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for Point Name](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-point-name)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `initialValue` | `PointName` | `Initial Value` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `PointName` | `Answer` |

```ts
export interface AskForPointNameInput {
  readonly questionToAsk?: string;
  readonly initialValue: PointName;
  readonly font?: Font;
}

function askForPointName(
  briosa: BriosaClient,
  input: AskForPointNameInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

```ts
await askForPointName(briosa, { initialValue: ... });
```

Returns the MP output `Answer` directly as `PointName`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for String

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for String](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionToAsk` | `string` | `Question to ask` | Empty |
| `passwordEntry` | `boolean` | `Password Entry?` | false |
| `initialAnswer` | `string` | `Initial Answer` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `string` | `Answer` |

```ts
export interface AskForStringInput {
  readonly questionToAsk?: string;
  readonly passwordEntry?: boolean;
  readonly initialAnswer?: string;
  readonly font?: Font;
}

function askForString(
  briosa: BriosaClient,
  input?: AskForStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await askForString(briosa);
```

Returns the MP output `Answer` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for String (Pull-Down Version)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for String (Pull-Down Version)](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string-pull-down-version)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionOrStatement` | `Iterable<string>` | `Question or Statement` | Required |
| `possibleAnswers` | `Iterable<string>` | `Possible Answers` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `string` | `Answer` |
| `answerIndex` | `number` | `Answer Index` |

```ts
export interface AskForStringPullDownVersionResult {
  readonly answer: string;
  readonly answerIndex: number;
}

export interface AskForStringPullDownVersionInput {
  readonly questionOrStatement: Iterable<string>;
  readonly possibleAnswers: Iterable<string>;
  readonly font?: Font;
}

function askForStringPullDownVersion(
  briosa: BriosaClient,
  input: AskForStringPullDownVersionInput,
  options?: BriosaCallOptions,
): Promise<AskForStringPullDownVersionResult>;
```

```ts
await askForStringPullDownVersion(briosa, { questionOrStatement: ..., possibleAnswers: ... });
```

Returns the 2 MP outputs in the named `AskForStringPullDownVersionResult` value. Multiple outputs use a detached
readonly result object. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for User Decision from Image

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for User Decision from Image](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-image)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `imageFile` | `FileReference` | `Image File` | Required |
| `imageMapXmlFile` | `FileReference` | `Image Map XML File` | Required |
| `windowCaption` | `string` | `Window Caption` | Empty |
| `windowWidth0Default` | `number` | `Window Width (0 = default)` | 0 |
| `windowHeight0Default` | `number` | `Window Height (0 = default)` | 0 |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `userChoice` | `string` | `User Choice` |

```ts
export interface AskForUserDecisionFromImageInput {
  readonly imageFile: FileReference;
  readonly imageMapXmlFile: FileReference;
  readonly windowCaption?: string;
  readonly windowWidth0Default?: number;
  readonly windowHeight0Default?: number;
}

function askForUserDecisionFromImage(
  briosa: BriosaClient,
  input: AskForUserDecisionFromImageInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await askForUserDecisionFromImage(briosa, { imageFile: ..., imageMapXmlFile: ... });
```

Returns the MP output `User Choice` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Ask for User Decision from Strings

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Ask for User Decision from Strings](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-strings)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `questionOrStatement` | `Iterable<string>` | `Question or Statement` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `button1TextEmptyToHideButton` | `string` | `Button1 Text (Empty to hide button)` | Empty |
| `button2TextEmptyToHideButton` | `string` | `Button2 Text (Empty to hide button)` | Empty |
| `button3TextEmptyToHideButton` | `string` | `Button3 Text (Empty to hide button)` | Empty |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `string` | `Answer` |

```ts
export interface AskForUserDecisionFromStringsInput {
  readonly questionOrStatement: Iterable<string>;
  readonly font?: Font;
  readonly button1TextEmptyToHideButton?: string;
  readonly button2TextEmptyToHideButton?: string;
  readonly button3TextEmptyToHideButton?: string;
}

function askForUserDecisionFromStrings(
  briosa: BriosaClient,
  input: AskForUserDecisionFromStringsInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

```ts
await askForUserDecisionFromStrings(briosa, { questionOrStatement: ... });
```

Returns the MP output `Answer` directly as `string`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.

## Object Existence Test (Check Only)

:::note[Status: Next]
This function is part of the next JavaScript and TypeScript package contract.
:::

[Object Existence Test (Check Only)](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC contract](/api/grpc/process-flow-operations#object-existence-test-check-only)

| Input Property | TypeScript Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `objectName` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | TypeScript Type | Exact MP Output |
| --- | --- | --- |
| `exists` | `boolean` | `Exists?` |

```ts
export interface ObjectExistenceTestCheckOnlyInput {
  readonly objectName: CollectionObjectName;
}

function objectExistenceTestCheckOnly(
  briosa: BriosaClient,
  input: ObjectExistenceTestCheckOnlyInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

```ts
await objectExistenceTestCheckOnly(briosa, { objectName: ... });
```

Returns the MP output `Exists?` directly as `boolean`. `BriosaCallOptions` remains separate from MP input and
contains only caller controls such as an `AbortSignal`.
