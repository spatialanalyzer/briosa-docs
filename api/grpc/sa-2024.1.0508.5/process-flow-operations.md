---
title: Process Flow Operations
description: Released grpc 0.7.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Process Flow Operations

[SA 2026.1.0529.7](/api/grpc/process-flow-operations) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/process-flow-operations)

This reference covers **SA 2024.1.0508.5**, Server **0.7.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Ask for Double {/* #ask-for-double */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-double)

`/briosa.ProcessFlowOperations/AskForDouble` · Operation ID: `process_flow_operations.ask_for_double`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `optional string` | Question to ask | Empty |
| Request | 2 | `initial_value` | `optional double` | Initial Value | 0.000000 |
| Request | 3 | `enforce_min_max_values` | `optional bool` | Enforce Min/Max Values? | false |
| Request | 4 | `min_value` | `optional double` | Min Value | 0.000000 |
| Request | 5 | `max_value` | `optional double` | Max Value | 0.000000 |
| Request | 6 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1 | `answer` | `optional double` | Answer | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for Integer {/* #ask-for-integer */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-integer)

`/briosa.ProcessFlowOperations/AskForInteger` · Operation ID: `process_flow_operations.ask_for_integer`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `optional string` | Question to ask | Empty |
| Request | 2 | `initial_value` | `optional int32` | Initial Value | 0 |
| Request | 3 | `enforce_min_max_values` | `optional bool` | Enforce Min/Max Values? | false |
| Request | 4 | `min_value` | `optional int32` | Min Value | 0 |
| Request | 5 | `max_value` | `optional int32` | Max Value | 0 |
| Request | 6 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1 | `answer` | `optional int32` | Answer | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for Point Name {/* #ask-for-point-name */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-point-name)

`/briosa.ProcessFlowOperations/AskForPointName` · Operation ID: `process_flow_operations.ask_for_point_name`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `optional string` | Question to ask | Empty |
| Request | 2 | `initial_value` | `optional PointName` | Initial Value | Required |
| Request | 3 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1 | `answer` | `optional PointName` | Answer | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for String {/* #ask-for-string */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string)

`/briosa.ProcessFlowOperations/AskForString` · Operation ID: `process_flow_operations.ask_for_string`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_to_ask` | `optional string` | Question to ask | Empty |
| Request | 2 | `password_entry` | `optional bool` | Password Entry? | false |
| Request | 3 | `initial_answer` | `optional string` | Initial Answer | Empty |
| Request | 4 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1 | `answer` | `optional string` | Answer | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for String (Pull-Down Version) {/* #ask-for-string-pull-down-version */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-string-pull-down-version)

`/briosa.ProcessFlowOperations/AskForStringPullDownVersion` · Operation ID: `process_flow_operations.ask_for_string_pull_down_version`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_or_statement` | `repeated string` | Question or Statement | Required |
| Request | 2 | `possible_answers` | `repeated string` | Possible Answers | Required |
| Request | 3 | `font` | `optional Font` | Font | MS Shell Dlg |
| Result | 1 | `answer` | `optional string` | Answer | — |
| Result | 2 | `answer_index` | `optional int32` | Answer Index | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for User Decision from Image {/* #ask-for-user-decision-from-image */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-image)

`/briosa.ProcessFlowOperations/AskForUserDecisionFromImage` · Operation ID: `process_flow_operations.ask_for_user_decision_from_image`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `image_file` | `optional FileReference` | Image File | Required |
| Request | 2 | `image_map_xml_file` | `optional FileReference` | Image Map XML File | Required |
| Request | 3 | `window_caption` | `optional string` | Window Caption | Empty |
| Request | 4 | `window_width_0_default` | `optional int32` | Window Width (0 = default) | 0 |
| Request | 5 | `window_height_0_default` | `optional int32` | Window Height (0 = default) | 0 |
| Result | 1 | `user_choice` | `optional string` | User Choice | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Ask for User Decision from Strings {/* #ask-for-user-decision-from-strings */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#ask-for-user-decision-from-strings)

`/briosa.ProcessFlowOperations/AskForUserDecisionFromStrings` · Operation ID: `process_flow_operations.ask_for_user_decision_from_strings`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `question_or_statement` | `repeated string` | Question or Statement | Required |
| Request | 2 | `font` | `optional Font` | Font | MS Shell Dlg |
| Request | 3 | `button1_text_empty_to_hide_button` | `optional string` | Button1 Text (Empty to hide button) | Empty |
| Request | 4 | `button2_text_empty_to_hide_button` | `optional string` | Button2 Text (Empty to hide button) | Empty |
| Request | 5 | `button3_text_empty_to_hide_button` | `optional string` | Button3 Text (Empty to hide button) | Empty |
| Result | 1 | `answer` | `optional string` | Answer | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

## Object Existence Test (Check Only) {/* #object-existence-test-check-only */}

[MP Catalog](/mp-command-catalog/commands/process-flow-operations#object-existence-test-check-only)

`/briosa.ProcessFlowOperations/ObjectExistenceTestCheckOnly` · Operation ID: `process_flow_operations.object_existence_test_check_only`

| Message | Field | Name | Type | MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `object_name` | `optional CollectionObjectName` | Object Name | Required |
| Result | 1 | `exists` | `optional bool` | Exists? | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Execution Details | — |

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

[Released Source](https://github.com/spatialanalyzer/briosa/tree/v0.7.0/targets/2024.1.0508.5)
