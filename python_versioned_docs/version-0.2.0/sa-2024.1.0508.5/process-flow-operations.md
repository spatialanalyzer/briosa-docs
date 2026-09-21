---
title: Process Flow Operations
description: Released python 0.2.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Process Flow Operations

[SA 2026.1.0529.7](/api/python/process-flow-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/process-flow-operations)

This reference covers **SA 2024.1.0508.5**, client **0.2.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Ask for Double {/* #ask-for-double */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-double)

```python
async def ask_for_double(
        self,
        *,
        question_to_ask: str = "",
        initial_value: float = 0.000000,
        enforce_min_max_values: bool = False,
        min_value: float = 0.000000,
        max_value: float = 0.000000,
        font: Font = Font.DEFAULT,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Integer {/* #ask-for-integer */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-integer)

```python
async def ask_for_integer(
        self,
        *,
        question_to_ask: str = "",
        initial_value: int = 0,
        enforce_min_max_values: bool = False,
        min_value: int = 0,
        max_value: int = 0,
        font: Font = Font.DEFAULT,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for Point Name {/* #ask-for-point-name */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-point-name)

```python
async def ask_for_point_name(
        self,
        *,
        question_to_ask: str = "",
        initial_value: PointName,
        font: Font = Font.DEFAULT,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String {/* #ask-for-string */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-string)

```python
async def ask_for_string(
        self,
        *,
        question_to_ask: str = "",
        password_entry: bool = False,
        initial_answer: str = "",
        font: Font = Font.DEFAULT,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for String (Pull-Down Version) {/* #ask-for-string-pull-down-version */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-string-pull-down-version)

```python
async def ask_for_string_pull_down_version(
        self,
        question_or_statement: Iterable[str],
        possible_answers: Iterable[str],
        *,
        font: Font = Font.DEFAULT,
    ) -> AskForStringPullDownVersionResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for User Decision from Image {/* #ask-for-user-decision-from-image */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-user-decision-from-image)

```python
async def ask_for_user_decision_from_image(
        self,
        image_file: FileReference,
        image_map_xml_file: FileReference,
        *,
        window_caption: str = "",
        window_width_0_default: int = 0,
        window_height_0_default: int = 0,
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Ask for User Decision from Strings {/* #ask-for-user-decision-from-strings */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#ask-for-user-decision-from-strings)

```python
async def ask_for_user_decision_from_strings(
        self,
        question_or_statement: Iterable[str],
        *,
        font: Font = Font.DEFAULT,
        button1_text_empty_to_hide_button: str = "",
        button2_text_empty_to_hide_button: str = "",
        button3_text_empty_to_hide_button: str = "",
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Object Existence Test (Check Only) {/* #object-existence-test-check-only */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/process-flow-operations#object-existence-test-check-only)

```python
async def object_existence_test_check_only(
        self,
        object_name: CollectionObjectName,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.2.0/targets/2024.1.0508.5)
