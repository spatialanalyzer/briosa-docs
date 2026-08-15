---
title: Process Flow Operations
description: Next Briosa Python APIs for supported Process Flow Operations MP commands.
toc_max_heading_level: 2
---

# Process Flow Operations

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Ask for Double

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for Double](/mp-command-catalog/commands/process-flow-operations#ask-for-double) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-double)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_to_ask` | `str` | `Question to ask` | Empty |
| `initial_value` | `float` | `Initial Value` | 0.000000 |
| `enforce_min_max_values` | `bool` | `Enforce Min/Max Values?` | false |
| `min_value` | `float` | `Min Value` | 0.000000 |
| `max_value` | `float` | `Max Value` | 0.000000 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `float` | `Answer` |

```python
async def ask_for_double(
    self,
    *,
    question_to_ask: str = '',
    initial_value: float = 0.000000,
    enforce_min_max_values: bool = False,
    min_value: float = 0.000000,
    max_value: float = 0.000000,
    font: Font = Font.DEFAULT,
) -> float: ...
```

```python
await briosa.ask_for_double()
```

Returns the MP output `Answer` directly as `float`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for Integer

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for Integer](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-integer)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_to_ask` | `str` | `Question to ask` | Empty |
| `initial_value` | `int` | `Initial Value` | 0 |
| `enforce_min_max_values` | `bool` | `Enforce Min/Max Values?` | false |
| `min_value` | `int` | `Min Value` | 0 |
| `max_value` | `int` | `Max Value` | 0 |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `int` | `Answer` |

```python
async def ask_for_integer(
    self,
    *,
    question_to_ask: str = '',
    initial_value: int = 0,
    enforce_min_max_values: bool = False,
    min_value: int = 0,
    max_value: int = 0,
    font: Font = Font.DEFAULT,
) -> int: ...
```

```python
await briosa.ask_for_integer()
```

Returns the MP output `Answer` directly as `int`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for Point Name

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for Point Name](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-point-name)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_to_ask` | `str` | `Question to ask` | Empty |
| `initial_value` | `PointName` | `Initial Value` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `PointName` | `Answer` |

```python
async def ask_for_point_name(
    self,
    *,
    question_to_ask: str = '',
    initial_value: PointName,
    font: Font = Font.DEFAULT,
) -> PointName: ...
```

```python
await briosa.ask_for_point_name(initial_value=...)
```

Returns the MP output `Answer` directly as `PointName`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for String

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for String](/mp-command-catalog/commands/process-flow-operations#ask-for-string) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_to_ask` | `str` | `Question to ask` | Empty |
| `password_entry` | `bool` | `Password Entry?` | false |
| `initial_answer` | `str` | `Initial Answer` | Empty |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `str` | `Answer` |

```python
async def ask_for_string(
    self,
    *,
    question_to_ask: str = '',
    password_entry: bool = False,
    initial_answer: str = '',
    font: Font = Font.DEFAULT,
) -> str: ...
```

```python
await briosa.ask_for_string()
```

Returns the MP output `Answer` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for String (Pull-Down Version)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for String (Pull-Down Version)](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-string-pull-down-version)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_or_statement` | `Iterable[str]` | `Question or Statement` | Required |
| `possible_answers` | `Iterable[str]` | `Possible Answers` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `str` | `Answer` |
| `answer_index` | `int` | `Answer Index` |

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class AskForStringPullDownVersionResult:
    answer: str
    answer_index: int

async def ask_for_string_pull_down_version(
    self,
    question_or_statement: Iterable[str],
    possible_answers: Iterable[str],
    *,
    font: Font = Font.DEFAULT,
) -> AskForStringPullDownVersionResult: ...
```

```python
await briosa.ask_for_string_pull_down_version(question_or_statement=..., possible_answers=...)
```

Returns the 2 MP outputs in the named `AskForStringPullDownVersionResult` value. Multiple outputs use a frozen, slotted,
keyword-only dataclass. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for User Decision from Image

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for User Decision from Image](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-image)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `image_file` | `FileReference` | `Image File` | Required |
| `image_map_xml_file` | `FileReference` | `Image Map XML File` | Required |
| `window_caption` | `str` | `Window Caption` | Empty |
| `window_width_0_default` | `int` | `Window Width (0 = default)` | 0 |
| `window_height_0_default` | `int` | `Window Height (0 = default)` | 0 |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `user_choice` | `str` | `User Choice` |

```python
async def ask_for_user_decision_from_image(
    self,
    image_file: FileReference,
    image_map_xml_file: FileReference,
    *,
    window_caption: str = '',
    window_width_0_default: int = 0,
    window_height_0_default: int = 0,
) -> str: ...
```

```python
await briosa.ask_for_user_decision_from_image(image_file=..., image_map_xml_file=...)
```

Returns the MP output `User Choice` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Ask for User Decision from Strings

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Ask for User Decision from Strings](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) · [gRPC contract](/api/grpc/process-flow-operations#ask-for-user-decision-from-strings)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `question_or_statement` | `Iterable[str]` | `Question or Statement` | Required |
| `font` | `Font` | `Font` | MS Shell Dlg |
| `button1_text_empty_to_hide_button` | `str` | `Button1 Text (Empty to hide button)` | Empty |
| `button2_text_empty_to_hide_button` | `str` | `Button2 Text (Empty to hide button)` | Empty |
| `button3_text_empty_to_hide_button` | `str` | `Button3 Text (Empty to hide button)` | Empty |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `answer` | `str` | `Answer` |

```python
async def ask_for_user_decision_from_strings(
    self,
    question_or_statement: Iterable[str],
    *,
    font: Font = Font.DEFAULT,
    button1_text_empty_to_hide_button: str = '',
    button2_text_empty_to_hide_button: str = '',
    button3_text_empty_to_hide_button: str = '',
) -> str: ...
```

```python
await briosa.ask_for_user_decision_from_strings(question_or_statement=...)
```

Returns the MP output `Answer` directly as `str`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.

## Object Existence Test (Check Only)

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Object Existence Test (Check Only)](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) · [gRPC contract](/api/grpc/process-flow-operations#object-existence-test-check-only)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `object_name` | `CollectionObjectName` | `Object Name` | Required |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| `exists` | `bool` | `Exists?` |

```python
async def object_existence_test_check_only(
    self,
    object_name: CollectionObjectName,
) -> bool: ...
```

```python
await briosa.object_existence_test_check_only(object_name=...)
```

Returns the MP output `Exists?` directly as `bool`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
