---
title: Process Flow Operations
description: Current and next gRPC contracts for supported Process Flow Operations MP commands.
toc_max_heading_level: 2
---

# Process Flow Operations

:::note[Current and Next Contracts]

Entries marked **Next** define the protocol that the coordinated server and
clients must implement. They are not callable until released. **Current**
entries already exist in the target server.

:::

All services remain in protobuf package `briosa`. Every result reserves field
`1000` for `MpExecutionDetails execution`; generated transport types are not
the public surface of the handwritten client libraries.

## Ask for Double

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for Double](/mp-command-catalog/commands/process-flow-operations#ask-for-double) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForDouble` |
| Operation ID | `process_flow_operations.ask_for_double` |
| Route | `/briosa.ProcessFlowOperations/AskForDouble` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `string` | `Question to ask` | Empty |
| Request | 2 | `initial_value` | `double` | `Initial Value` | 0.000000 |
| Request | 3 | `enforce_min_max_values` | `bool` | `Enforce Min/Max Values?` | false |
| Request | 4 | `min_value` | `double` | `Min Value` | 0.000000 |
| Request | 5 | `max_value` | `double` | `Max Value` | 0.000000 |
| Request | 6 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1 | `answer` | `double` | `Answer` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForDouble(AskForDoubleRequest) returns (AskForDoubleResult);

message AskForDoubleRequest {
  optional string question_to_ask = 1;
  optional double initial_value = 2;
  optional bool enforce_min_max_values = 3;
  optional double min_value = 4;
  optional double max_value = 5;
  optional Font font = 6;
}

message AskForDoubleResult {
  optional double answer = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for Integer

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for Integer](/mp-command-catalog/commands/process-flow-operations#ask-for-integer) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForInteger` |
| Operation ID | `process_flow_operations.ask_for_integer` |
| Route | `/briosa.ProcessFlowOperations/AskForInteger` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `string` | `Question to ask` | Empty |
| Request | 2 | `initial_value` | `int32` | `Initial Value` | 0 |
| Request | 3 | `enforce_min_max_values` | `bool` | `Enforce Min/Max Values?` | false |
| Request | 4 | `min_value` | `int32` | `Min Value` | 0 |
| Request | 5 | `max_value` | `int32` | `Max Value` | 0 |
| Request | 6 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1 | `answer` | `int32` | `Answer` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForInteger(AskForIntegerRequest) returns (AskForIntegerResult);

message AskForIntegerRequest {
  optional string question_to_ask = 1;
  optional int32 initial_value = 2;
  optional bool enforce_min_max_values = 3;
  optional int32 min_value = 4;
  optional int32 max_value = 5;
  optional Font font = 6;
}

message AskForIntegerResult {
  optional int32 answer = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for Point Name

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for Point Name](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForPointName` |
| Operation ID | `process_flow_operations.ask_for_point_name` |
| Route | `/briosa.ProcessFlowOperations/AskForPointName` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `string` | `Question to ask` | Empty |
| Request | 2 | `initial_value` | `PointName` | `Initial Value` | Required |
| Request | 3 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1 | `answer` | `PointName` | `Answer` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForPointName(AskForPointNameRequest) returns (AskForPointNameResult);

message AskForPointNameRequest {
  optional string question_to_ask = 1;
  optional PointName initial_value = 2;
  optional Font font = 3;
}

message AskForPointNameResult {
  optional PointName answer = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for String

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for String](/mp-command-catalog/commands/process-flow-operations#ask-for-string) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForString` |
| Operation ID | `process_flow_operations.ask_for_string` |
| Route | `/briosa.ProcessFlowOperations/AskForString` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `string` | `Question to ask` | Empty |
| Request | 2 | `password_entry` | `bool` | `Password Entry?` | false |
| Request | 3 | `initial_answer` | `string` | `Initial Answer` | Empty |
| Request | 4 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1 | `answer` | `string` | `Answer` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForString(AskForStringRequest) returns (AskForStringResult);

message AskForStringRequest {
  optional string question_to_ask = 1;
  optional bool password_entry = 2;
  optional string initial_answer = 3;
  optional Font font = 4;
}

message AskForStringResult {
  optional string answer = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for String (Pull-Down Version)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for String (Pull-Down Version)](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForStringPullDownVersion` |
| Operation ID | `process_flow_operations.ask_for_string_pull_down_version` |
| Route | `/briosa.ProcessFlowOperations/AskForStringPullDownVersion` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_or_statement` | `repeated string` | `Question or Statement` | Required |
| Request | 2 | `possible_answers` | `repeated string` | `Possible Answers` | Required |
| Request | 3 | `font` | `Font` | `Font` | MS Shell Dlg |
| Result | 1 | `answer` | `string` | `Answer` | — |
| Result | 2 | `answer_index` | `int32` | `Answer Index` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForStringPullDownVersion(AskForStringPullDownVersionRequest) returns (AskForStringPullDownVersionResult);

message AskForStringPullDownVersionRequest {
  repeated string question_or_statement = 1;
  repeated string possible_answers = 2;
  optional Font font = 3;
}

message AskForStringPullDownVersionResult {
  optional string answer = 1;
  optional int32 answer_index = 2;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for User Decision from Image

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for User Decision from Image](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForUserDecisionFromImage` |
| Operation ID | `process_flow_operations.ask_for_user_decision_from_image` |
| Route | `/briosa.ProcessFlowOperations/AskForUserDecisionFromImage` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `image_file` | `FileReference` | `Image File` | Required |
| Request | 2 | `image_map_xml_file` | `FileReference` | `Image Map XML File` | Required |
| Request | 3 | `window_caption` | `string` | `Window Caption` | Empty |
| Request | 4 | `window_width_0_default` | `int32` | `Window Width (0 = default)` | 0 |
| Request | 5 | `window_height_0_default` | `int32` | `Window Height (0 = default)` | 0 |
| Result | 1 | `user_choice` | `string` | `User Choice` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForUserDecisionFromImage(AskForUserDecisionFromImageRequest) returns (AskForUserDecisionFromImageResult);

message AskForUserDecisionFromImageRequest {
  optional FileReference image_file = 1;
  optional FileReference image_map_xml_file = 2;
  optional string window_caption = 3;
  optional int32 window_width_0_default = 4;
  optional int32 window_height_0_default = 5;
}

message AskForUserDecisionFromImageResult {
  optional string user_choice = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Ask for User Decision from Strings

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Ask for User Decision from Strings](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `AskForUserDecisionFromStrings` |
| Operation ID | `process_flow_operations.ask_for_user_decision_from_strings` |
| Route | `/briosa.ProcessFlowOperations/AskForUserDecisionFromStrings` |
| Validation | Licensed validation completed |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_or_statement` | `repeated string` | `Question or Statement` | Required |
| Request | 2 | `font` | `Font` | `Font` | MS Shell Dlg |
| Request | 3 | `button1_text_empty_to_hide_button` | `string` | `Button1 Text (Empty to hide button)` | Empty |
| Request | 4 | `button2_text_empty_to_hide_button` | `string` | `Button2 Text (Empty to hide button)` | Empty |
| Request | 5 | `button3_text_empty_to_hide_button` | `string` | `Button3 Text (Empty to hide button)` | Empty |
| Result | 1 | `answer` | `string` | `Answer` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AskForUserDecisionFromStrings(AskForUserDecisionFromStringsRequest) returns (AskForUserDecisionFromStringsResult);

message AskForUserDecisionFromStringsRequest {
  repeated string question_or_statement = 1;
  optional Font font = 2;
  optional string button1_text_empty_to_hide_button = 3;
  optional string button2_text_empty_to_hide_button = 4;
  optional string button3_text_empty_to_hide_button = 5;
}

message AskForUserDecisionFromStringsResult {
  optional string answer = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.

## Object Existence Test (Check Only)

<span className="catalog-status catalog-status--next">Next</span>

| Contract Item | Value |
| --- | --- |
| MP Command | [Object Existence Test (Check Only)](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only) |
| Service | `briosa.ProcessFlowOperations` |
| RPC | `ObjectExistenceTestCheckOnly` |
| Operation ID | `process_flow_operations.object_existence_test_check_only` |
| Route | `/briosa.ProcessFlowOperations/ObjectExistenceTestCheckOnly` |
| Validation | Portable contract review |
| Automatic Replay | Prohibited; no operation-specific replay proof is committed |

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `CollectionObjectName` | `Object Name` | Required |
| Result | 1 | `exists` | `bool` | `Exists?` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ObjectExistenceTestCheckOnly(ObjectExistenceTestCheckOnlyRequest) returns (ObjectExistenceTestCheckOnlyResult);

message ObjectExistenceTestCheckOnlyRequest {
  optional CollectionObjectName object_name = 1;
}

message ObjectExistenceTestCheckOnlyResult {
  optional bool exists = 1;
  MpExecutionDetails execution = 1000;
}
```

The request preserves MP input order and the result preserves MP output order.
Unsupported MP-only branch targets or UI selectors listed in the catalog are
intentionally absent. The server validates required presence before enqueue.
