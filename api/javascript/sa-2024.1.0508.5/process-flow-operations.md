---
title: Process Flow Operations
description: Released javascript 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Process Flow Operations

[SA 2026.1.0529.7](/api/javascript/process-flow-operations) · [SA 2024.1.0508.5](/api/javascript/sa-2024.1.0508.5/process-flow-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Ask for Double {/* #ask-for-double */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-double)

```ts
export interface AskForDoubleInput {
  readonly questionToAsk?: string;
  readonly initialValue?: number;
  readonly enforceMinMaxValues?: boolean;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly font?: Font;
}

export declare function askForDouble(
  briosa: BriosaClient,
  input: AskForDoubleInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Integer {/* #ask-for-integer */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-integer)

```ts
export interface AskForIntegerInput {
  readonly questionToAsk?: string;
  readonly initialValue?: number;
  readonly enforceMinMaxValues?: boolean;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly font?: Font;
}

export declare function askForInteger(
  briosa: BriosaClient,
  input: AskForIntegerInput,
  options?: BriosaCallOptions,
): Promise<number>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Point Name {/* #ask-for-point-name */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-point-name)

```ts
export interface AskForPointNameInput {
  readonly questionToAsk?: string;
  readonly initialValue: PointName;
  readonly font?: Font;
}

export declare function askForPointName(
  briosa: BriosaClient,
  input: AskForPointNameInput,
  options?: BriosaCallOptions,
): Promise<PointName>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String {/* #ask-for-string */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-string)

```ts
export interface AskForStringInput {
  readonly questionToAsk?: string;
  readonly passwordEntry?: boolean;
  readonly initialAnswer?: string;
  readonly font?: Font;
}

export declare function askForString(
  briosa: BriosaClient,
  input: AskForStringInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String (Pull-Down Version) {/* #ask-for-string-pull-down-version */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-string-pull-down-version)

```ts
export interface AskForStringPullDownVersionInput {
  readonly questionOrStatement: Iterable<string>;
  readonly possibleAnswers: Iterable<string>;
  readonly font?: Font;
}

export declare function askForStringPullDownVersion(
  briosa: BriosaClient,
  input: AskForStringPullDownVersionInput,
  options?: BriosaCallOptions,
): Promise<AskForStringPullDownVersionResult>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for User Decision from Image {/* #ask-for-user-decision-from-image */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-user-decision-from-image)

```ts
export interface AskForUserDecisionFromImageInput {
  readonly imageFile: FileReference;
  readonly imageMapXmlFile: FileReference;
  readonly windowCaption?: string;
  readonly windowWidth0Default?: number;
  readonly windowHeight0Default?: number;
}

export declare function askForUserDecisionFromImage(
  briosa: BriosaClient,
  input: AskForUserDecisionFromImageInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for User Decision from Strings {/* #ask-for-user-decision-from-strings */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-user-decision-from-strings)

```ts
export interface AskForUserDecisionFromStringsInput {
  readonly questionOrStatement: Iterable<string>;
  readonly font?: Font;
  readonly button1TextEmptyToHideButton?: string;
  readonly button2TextEmptyToHideButton?: string;
  readonly button3TextEmptyToHideButton?: string;
}

export declare function askForUserDecisionFromStrings(
  briosa: BriosaClient,
  input: AskForUserDecisionFromStringsInput,
  options?: BriosaCallOptions,
): Promise<string>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Object Existence Test (Check Only) {/* #object-existence-test-check-only */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#object-existence-test-check-only)

```ts
export interface ObjectExistenceTestCheckOnlyInput {
  readonly objectName: CollectionObjectName;
}

export declare function objectExistenceTestCheckOnly(
  briosa: BriosaClient,
  input: ObjectExistenceTestCheckOnlyInput,
  options?: BriosaCallOptions,
): Promise<boolean>;
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-js/tree/v0.2.0/targets/2024.1.0508.5)
