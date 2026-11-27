---
title: Server Discovery
description: Server 0.10.1 identity, compatibility, readiness, admission, and capability RPCs for SA 2026.1.0529.7.
---

# Server Discovery

[SA 2026.1.0529.7](/api/grpc/discovery) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/discovery)

`briosa.DiscoveryService` is available without starting the SDK or SA. `GetServerInfo` reports build coordinates, current runtime evidence, and, from Server 0.10.1, the server's lifecycle wait allowances and configured interaction mode. `ListCapabilities` lists the implemented operations that the active admission policy admits, each with its reviewed classification; membership alone does not mean a call is ready.

## Compatibility and Runtime Identity

Clients 0.5.0 and 0.5.1, and JavaScript client 0.5.2, work with Servers 0.10.0 and 0.10.1 for the exact target, and Client 0.4.0 works with Server 0.9.x; clients 0.4.x and earlier reject Server 0.10.x, and clients 0.5.x reject Server 0.9.x and earlier. Direct gRPC from the published protocol artifact is also supported. Introduced in Server 0.7.0, `GetServerInfoResponse.compatibility` reports the running server's declaration for its exact SA target, independently of its product version and source revision. Before launch, clients check the installation metadata. Matching server-client compatibility does not bypass exact SA/SDK identity, ownership, runtime admission, or readiness checks. An unavailable runtime identity must not be inferred from the configured target.

`version` uses `VersionCoordinates` for product/source and exact-target build coordinates. `ready_for_mp`, connection/readiness state, target isolation, and activated/connected identity evidence describe current runtime conditions. Capability entries identify the operation, fully qualified RPC, effect, replay safety, and execution scope. Never automatically replay an operation whose outcome is uncertain.

## Lifecycle Bounds and Interaction Mode

Server 0.10.1 adds two fields to `GetServerInfoResponse`. Both are available before the SDK starts and whether or not SpatialAnalyzer is connected. Server 0.10.0 leaves them unset, and a caller then keeps its own defaults. The 0.5.0 clients ignore both.

- `lifecycle_bounds` holds the lifecycle wait allowances, in milliseconds, that the server computes from its own effective configuration. Fields 1 to 6 cover individual lifecycle operations, fields 7 and 8 size a startup of several requests and are not server deadlines, and `host_graceful_shutdown` is the host's graceful shutdown window, either `finite_milliseconds` or `unbounded`. Each allowance covers only the server's own work, from the event named on its field, and excludes transport time. None promises that a response reaches the caller or that a process exits within it. Read an absent or zero allowance as unavailable, never as unbounded.
- `configured_spatial_analyzer_interaction_mode` reports the SpatialAnalyzer interaction mode the server is configured to set after each verified Connect: `UNCHANGED`, `SILENT`, `AUTOMATIC`, or `MANUAL`. It is server configuration only. SpatialAnalyzer has no getter for its live mode, and an operator or a `SetInteractionMode` call can change that mode at any time, so this value never describes the mode SpatialAnalyzer is using now.

Clients 0.5.1 and JavaScript/TypeScript client 0.5.2 size an unset startup timeout for the phases selected. When startup starts the SDK and connects, the client uses `startup_with_launch_milliseconds` or `startup_without_launch_milliseconds`. Without connection it uses the SDK start allowance, the application launch allowance, or their sum. It adds 20 seconds to the selected allowance and keeps a two-minute minimum. With no server phase selected or a required allowance missing, the default stays two minutes.

## Admission and Classification

`ListCapabilitiesResponse` reports the resolved `admission_profile` (`read-only`, `standard`, `device`, or `full`) and a `policy_fingerprint`. The fingerprint is a value-free `sha256:` digest over every admission input. Equal fingerprints mean equal static admission decisions; compare it only for equality, and never parse it.

Each `OperationCapability` also carries the operation's reviewed classification:

| Field | Meaning |
| --- | --- |
| `risk_flags` | The reviewed risk flags, in `OperationRiskFlag` declaration order. Empty when no risk applies. |
| `duration_class` | `QUICK`, `LONG_RUNNING`, or `INTERACTIVE`; it selects the server's execution budget. |
| `validation_status` | The recorded validation gap. It is informational and never affects admission. |
| `admission` | `ADMITTED`, or the precedence step that denied the operation. |
| `policy_denial` | From Server 0.10.1, set exactly when `admission` is a denied value: which policy step denied the operation's reviewed row. See [Policy Denial Details](#policy-denial-details). |
| `request_options` | From Server 0.10.1, always set: the operation's reviewed request options, with an empty list when none applies. Server 0.10.0 leaves it absent. |

By default the response lists only admitted operations. Set `include_denied` to also list every registered operation the policy denies, each with its denial reason in `admission`. A denied entry never becomes callable. A request option can still deny an admitted operation at call time, for example one that opens operator UI without the interactive opt-in; `admission` reports the reviewed row only.

Each `OperationRequestOption` in `request_options` names a request field that turns on operator UI (`INTERACTIVE_UI`) or leaves work running after the call returns (`BACKGROUND_WORK`), the `condition` and `enabling_enum_values` that turn it on, and what `omission` does. Its `admission` and `policy_denial` describe what the active policy decides for a request that turns on that option alone, with every other option inactive; the server decides an actual request with all of its options together. The description never permits anything, and a client must not pre-validate a request from it. Each operation page in this reference shows the profiles that admit it, its risk flags, and its duration class, and [Operation Admission](/docs/deployment/operation-admission) explains the profiles and the interactive opt-in.

## Policy Denial Details

From Server 0.10.1, `PolicyDenialDetails` in `briosa/operation_outcomes.proto` describes a policy denial without request values. Discovery sets it on a denied capability and a denied request option, and the server sets `OperationError.policy_denial` in the `briosa-operation-error-bin` trailer on every `POLICY_DENIED` failure and on no other kind. Status codes, failure kinds, dispositions, guidance, diagnostic codes, and `policy_fingerprint` are unchanged. Server 0.10.0 does not send it, and clients built for Server 0.10.0 ignore it.

```proto
// The step of the active admission policy that denied a call or an operation.
// Each value names the same step as one denied value of OperationAdmission in
// discovery: PROFILE and DENIED_PROFILE, FLAG and DENIED_FLAG, OVERRIDE and
// DENIED_OVERRIDE, EXCLUSIVE and DENIED_EXCLUSIVE, UNREVIEWED and
// DENIED_UNREVIEWED. The numbers differ, so match the two enums by name.
enum PolicyDenialRule {
  POLICY_DENIAL_RULE_UNSPECIFIED = 0;
  // The profile, widened by flags set to allow, does not admit every risk flag,
  // or the read-only effect filter excludes the operation.
  POLICY_DENIAL_RULE_PROFILE = 1;
  // A risk flag is set to deny.
  POLICY_DENIAL_RULE_FLAG = 2;
  // A per-operation override is set to deny.
  POLICY_DENIAL_RULE_OVERRIDE = 3;
  // An exclusive workflow, which no setting admits in the current isolation
  // mode. A request whose options leave work running after the call returns is one.
  POLICY_DENIAL_RULE_EXCLUSIVE = 4;
  // The operation's classification metadata is not reviewed, or the request
  // cannot be read against the operation's reviewed request options.
  POLICY_DENIAL_RULE_UNREVIEWED = 5;
}

// Value-free detail of a policy denial, shared by a denied call and by
// discovery. Server 0.10.1 and later send it. Server 0.10.0 does not, and
// clients built for Server 0.10.0, such as the 0.5.0 clients, ignore it.
message PolicyDenialDetails {
  PolicyDenialRule rule = 1;
  // The risk flag set to deny that decided, as the lowercase suffix of its
  // OperationRiskFlag value name: for example "physical_motion" for
  // OPERATION_RISK_FLAG_PHYSICAL_MOTION. Present exactly when rule is FLAG, and
  // never "unspecified". When several of the request's flags are set to deny,
  // it names the first in OperationRiskFlag declaration order. A newer server
  // can name a flag that an older client does not know.
  optional string denied_flag = 2;
  // The protobuf field name of the request option the server attributed the
  // denial to, for example "show_results_dialog"; never a request value. When a
  // request turns on several options with the deciding effect, it names the
  // first in the server's reviewed order, which need not be the only cause.
  // Absent when the operation's reviewed row decided, and when the request could
  // not be read against its reviewed options.
  optional string request_option_field = 3;
  // The active admission profile: read-only, standard, device, or full.
  // Present exactly when rule is PROFILE.
  optional string admission_profile = 4;
}

// In OperationError, field 11:
optional PolicyDenialDetails policy_denial = 11;
```

## Released Contract

```proto
syntax = "proto3";

package briosa;

import "briosa/operation_outcomes.proto";
import "briosa/version_coordinates.proto";

option csharp_namespace = "Briosa";

// Provides low-sensitivity server identity and capability metadata.
service DiscoveryService {
  // Returns build coordinates and a safe current runtime summary.
  rpc GetServerInfo(GetServerInfoRequest) returns (GetServerInfoResponse);

  // Lists implemented operations enabled by the active runtime policy, with
  // their reviewed classification. include_denied also lists denied operations.
  rpc ListCapabilities(ListCapabilitiesRequest) returns (ListCapabilitiesResponse);
}

message GetServerInfoRequest {}

message GetServerInfoResponse {
  VersionCoordinates version = 1;
  WorkerRuntimeState worker_state = 2;
  SpatialAnalyzerConnectionState spatial_analyzer_connection_state = 3;
  bool ready_for_mp = 4;

  // Present only when a reviewed runtime probe established the connected release.
  optional string connected_spatial_analyzer_version = 5;
  ConnectedSpatialAnalyzerVersionState connected_spatial_analyzer_version_state = 6;
  SpatialAnalyzerExecutionReadinessState spatial_analyzer_execution_readiness_state = 7;
  TargetIsolationMode target_isolation_mode = 8;
  RuntimeIdentityEvidence activated_sdk_identity = 9;
  RuntimeIdentityEvidence connected_spatial_analyzer_identity = 10;
  // Behavioral promise, independent of release and source identity.
  CompatibilityContract compatibility = 11;
  // The lifecycle wait allowances that this server computes from its own
  // effective configuration. Available before the SDK starts and whether or not
  // SpatialAnalyzer is connected. Server 0.10.1 and later set it; Server 0.10.0
  // leaves it absent, and a client then keeps its own fixed waits. The 0.5.0
  // clients ignore this field and work with Server 0.10.1 unchanged; clients
  // from 0.5.1 read it.
  optional LifecycleBounds lifecycle_bounds = 12;
  // The SpatialAnalyzer interaction mode that this server is configured to set
  // after each verified Connect. It reports server configuration only and is
  // published whether or not SpatialAnalyzer is connected; it is never read back
  // from SpatialAnalyzer. Server 0.10.1 and later set a known value; Server
  // 0.10.0 leaves it UNSPECIFIED. The 0.5.0 clients ignore this field and work
  // with Server 0.10.1 unchanged.
  ConfiguredSpatialAnalyzerInteractionMode configured_spatial_analyzer_interaction_mode = 13;
}

// Lifecycle wait allowances in milliseconds, each computed by the server from
// the bounds it enforces and rounded up to a whole millisecond. Fields 1 to 6
// cover individual lifecycle operations; fields 7 and 8 size a startup of
// several requests and are not server deadlines; field 9 describes the host's
// graceful shutdown cancellation window. Each covers only the server's own
// work, from the event named on its field. None includes transport or network
// time, and none promises that a response reaches the caller or that any
// process exits within it.
//
// Server 0.10.1 and later set every finite allowance (fields 1 to 8) to a
// positive value. Server 0.10.0 does not send this message. A reader treats an
// absent or zero allowance as unavailable and keeps its own default for that
// purpose; it never reads an absent allowance as unbounded.
message LifecycleBounds {
  // StartSpatialAnalyzerSdk, from the server's acceptance of the request to its
  // typed outcome. Includes the readiness check when the new worker reports an
  // already attached SDK, and forced worker cleanup after a failure. Excludes a
  // request rejected for its state.
  optional uint32 start_sdk_milliseconds = 1;
  // LaunchSpatialAnalyzer, from the moment the server has started the
  // application process until its main window is ready, the process is seen to
  // exit, or this allowance expires. Expiry does not close the application,
  // which may still finish starting. Excludes the checks before the process
  // starts.
  optional uint32 launch_spatial_analyzer_milliseconds = 2;
  // ConnectToSpatialAnalyzer and ReconnectToSpatialAnalyzer, from the server's
  // acceptance of the request to its typed outcome. Includes ConnectEx, the
  // readiness probe with the configured interaction mode, the application
  // association, a liveness check when one falls due, and forced worker
  // cleanup after a failure. Excludes waiting behind a launch in progress.
  optional uint32 connect_spatial_analyzer_milliseconds = 3;
  // RecoverSpatialAnalyzerSdk, from the server's acceptance of the request to
  // the typed outcome of the replacement: the old worker's drain and cleanup,
  // then the replacement's start. Excludes any later Connect; recovery never
  // replays a command.
  optional uint32 recover_sdk_milliseconds = 4;
  // StopSpatialAnalyzerSdk, from the start of the worker stop, after any MP
  // command in flight has finished, to the typed stop or cleanup outcome, which
  // can report that cleanup did not complete. Excludes that command's own
  // execution budget and any wait before the stop is accepted.
  optional uint32 stop_sdk_milliseconds = 5;
  // CloseOwnedSpatialAnalyzer, from the moment the application accepts the
  // server's close request until the process is seen to exit, this allowance
  // expires, or the caller cancels. The server never forces the application to
  // end. Excludes the checks before the close request.
  optional uint32 close_owned_spatial_analyzer_milliseconds = 6;
  // A sizing rule, not a deadline the server enforces: the ordinary Start of a
  // disconnected SDK, then LaunchSpatialAnalyzer, then Connect, each from its
  // own acceptance. Excludes the client's own server startup, discovery, and
  // round trips, which a client adds as its margin.
  optional uint32 startup_with_launch_milliseconds = 7;
  // The same sizing rule without the launch: the ordinary Start of a
  // disconnected SDK, then Connect.
  optional uint32 startup_without_launch_milliseconds = 8;
  // The most a graceful stop of the server host may wait, from the moment the
  // host stop begins, before the host cancels the remaining shutdown work. A
  // stop can finish sooner or be cancelled sooner. An MP command still in
  // flight counts against it. Expiry does not prove that the worker was
  // released or that any process exited. Absent when the configured value is
  // finite and its ceiling exceeds 4,294,967,294 milliseconds.
  optional GracefulShutdownBound host_graceful_shutdown = 9;
}

// A graceful shutdown allowance that is either finite or explicitly unbounded.
// A reader that finds neither case it recognizes treats the allowance as
// unavailable, never as unbounded.
message GracefulShutdownBound {
  oneof limit {
    // Positive finite allowance, in milliseconds. Zero is invalid.
    uint64 finite_milliseconds = 1;
    // The server host is configured with no graceful shutdown time limit.
    UnboundedShutdownWait unbounded = 2;
  }
}

// Marks an explicitly unbounded wait. It has no fields.
message UnboundedShutdownWait {}

// The SpatialAnalyzer interaction mode that the server is configured to set
// after each verified Connect. It reports server configuration only.
// SpatialAnalyzer has no getter for its live mode, and an operator or a
// SetInteractionMode call can change that mode at any time, so this value never
// describes the mode SpatialAnalyzer is using now. It is distinct from the MP
// and MP dialog interaction modes. SILENT, AUTOMATIC, and MANUAL correspond by
// name to the SaInteractionMode values of the same name; their numbers differ.
// A reader treats an unrecognized value as unknown.
enum ConfiguredSpatialAnalyzerInteractionMode {
  // Not reported. Server 0.10.0 leaves the field at this value.
  CONFIGURED_SPATIAL_ANALYZER_INTERACTION_MODE_UNSPECIFIED = 0;
  // The server never sets the mode and leaves SpatialAnalyzer's mode untouched.
  CONFIGURED_SPATIAL_ANALYZER_INTERACTION_MODE_UNCHANGED = 1;
  // The server sets Silent after each verified Connect.
  CONFIGURED_SPATIAL_ANALYZER_INTERACTION_MODE_SILENT = 2;
  // The server sets Automatic after each verified Connect.
  CONFIGURED_SPATIAL_ANALYZER_INTERACTION_MODE_AUTOMATIC = 3;
  // The server sets Manual after each verified Connect.
  CONFIGURED_SPATIAL_ANALYZER_INTERACTION_MODE_MANUAL = 4;
}

// Scoped to the exact SA target. Revisions preserve earlier behavior.
message CompatibilityContract {
  uint32 major = 1;
  uint32 revision = 2;
}

message RuntimeIdentityEvidence {
  // Present only when runtime verification or an explicit operator attestation
  // supplied a version. It is never copied from the configured target.
  optional string version = 1;
  RuntimeIdentityEvidenceSource source = 2;
  RuntimeIdentityMatchState match_state = 3;
}

enum RuntimeIdentityEvidenceSource {
  RUNTIME_IDENTITY_EVIDENCE_SOURCE_UNSPECIFIED = 0;
  RUNTIME_IDENTITY_EVIDENCE_SOURCE_UNAVAILABLE = 1;
  RUNTIME_IDENTITY_EVIDENCE_SOURCE_RUNTIME_VERIFICATION = 2;
  RUNTIME_IDENTITY_EVIDENCE_SOURCE_OPERATOR_ATTESTATION = 3;
}

enum RuntimeIdentityMatchState {
  RUNTIME_IDENTITY_MATCH_STATE_UNSPECIFIED = 0;
  RUNTIME_IDENTITY_MATCH_STATE_UNAVAILABLE = 1;
  RUNTIME_IDENTITY_MATCH_STATE_EXACT_MATCH = 2;
  RUNTIME_IDENTITY_MATCH_STATE_MISMATCH = 3;
}

// Describes how callers may share one worker/SpatialAnalyzer target.
enum TargetIsolationMode {
  TARGET_ISOLATION_MODE_UNSPECIFIED = 0;
  // One mutually trusting application or coordinated application group owns the target.
  TARGET_ISOLATION_MODE_SINGLE_TENANT = 1;
  // Exclusive multi-RPC workflows are isolated by generation-bound leases.
  TARGET_ISOLATION_MODE_LEASE_ISOLATED = 2;
}

enum WorkerRuntimeState {
  WORKER_RUNTIME_STATE_UNSPECIFIED = 0;
  WORKER_RUNTIME_STATE_STOPPED = 1;
  WORKER_RUNTIME_STATE_STARTING = 2;
  WORKER_RUNTIME_STATE_READY = 3;
  WORKER_RUNTIME_STATE_DEGRADED = 4;
  WORKER_RUNTIME_STATE_STOPPING = 5;
}

enum SpatialAnalyzerConnectionState {
  SPATIAL_ANALYZER_CONNECTION_STATE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_CONNECTION_STATE_DISCONNECTED = 1;
  SPATIAL_ANALYZER_CONNECTION_STATE_CONNECTING = 2;
  SPATIAL_ANALYZER_CONNECTION_STATE_CONNECTED = 3;
  SPATIAL_ANALYZER_CONNECTION_STATE_FAULTED = 4;
  SPATIAL_ANALYZER_CONNECTION_STATE_STOPPING = 5;
}

enum SpatialAnalyzerExecutionReadinessState {
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNSPECIFIED = 0;
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_UNVERIFIED = 1;
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_VERIFYING = 2;
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_EXECUTION_READY = 3;
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_COMPETING_CLIENT_SUSPECTED = 4;
  SPATIAL_ANALYZER_EXECUTION_READINESS_STATE_OPERATOR_RECOVERY_REQUIRED = 5;
}

enum ConnectedSpatialAnalyzerVersionState {
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_UNSPECIFIED = 0;
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_UNAVAILABLE = 1;
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_VERIFIED_MATCH = 2;
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_VERIFIED_MISMATCH = 3;
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_OPERATOR_ATTESTED_MATCH = 4;
  CONNECTED_SPATIAL_ANALYZER_VERSION_STATE_OPERATOR_ATTESTED_MISMATCH = 5;
}

message ListCapabilitiesRequest {
  // False, the default, lists only the operations the active policy admits.
  // True also lists every registered operation the policy denies, each with
  // its denial reason in OperationCapability.admission.
  bool include_denied = 1;
}

message ListCapabilitiesResponse {
  reserved 1, 2;
  reserved "catalog_id", "catalog_revision", "target_protocol_package";
  string spatial_analyzer_target = 3;
  string protocol_package = 4;
  // Ordered by operation_id.
  repeated OperationCapability operations = 5;
  // The resolved named admission profile: read-only, standard, device, or full.
  string admission_profile = 6;
  // A value-free "sha256:<hex>" digest over every admission input: the policy
  // semantics version, the resolved profile and its definition, the isolation
  // mode, flag settings, per-operation overrides, and for every registered
  // operation its descriptor metadata (MP step, effect, replay safety, execution
  // scope, author risk flags), reviewed classification, and request options. It
  // changes whenever an admission input changes, equal values mean equal static
  // admission decisions, and it never reveals a configured value.
  string policy_fingerprint = 7;
}

message OperationCapability {
  string operation_id = 1;
  string grpc_service = 2;
  string rpc = 3;
  string fully_qualified_method = 4;
  OperationEffect effect = 5;
  ReplaySafety replay_safety = 6;
  OperationExecutionScope execution_scope = 7;
  // The reviewed risk flags of the operation's classification row, in the
  // declaration order of OperationRiskFlag. Empty when no risk applies. A
  // request option can add interactive_ui at call time; discovery reports the
  // reviewed row only.
  repeated OperationRiskFlag risk_flags = 8;
  // The reviewed duration class, which selects the server execution budget.
  OperationDurationClass duration_class = 9;
  // The recorded validation gap. It is informational and never affects admission.
  OperationValidationStatus validation_status = 10;
  // Whether the active policy admits the operation's reviewed row, and if not,
  // which precedence step denied it. Denied values appear only when the request
  // set include_denied.
  OperationAdmission admission = 11;
  // Which policy step denied the operation's reviewed row. Server 0.10.1 and
  // later set it exactly when admission is a denied value. Server 0.10.0 does
  // not set it, and clients built for Server 0.10.0 ignore it.
  optional PolicyDenialDetails policy_denial = 12;
  // The operation's reviewed request options. Server 0.10.1 and later always
  // set it, with an empty list when no option applies, including on an admitted
  // operation listed without include_denied. Server 0.10.0 does not describe
  // request options and leaves it absent; clients built for Server 0.10.0
  // ignore it.
  optional OperationRequestOptions request_options = 13;
}

// The reviewed request options of one operation. A present message with an
// empty list means that no request option applies (Server 0.10.1 and later); an
// absent message means that the server did not describe options (Server 0.10.0).
message OperationRequestOptions {
  // The order of the list carries no meaning.
  repeated OperationRequestOption options = 1;
}

// One reviewed request option that turns on operator UI or leaves work running
// after the call returns. Discovery describes it. The server still decides
// every actual request, so a client does not pre-validate a request from it.
message OperationRequestOption {
  // The protobuf field name of the option in the operation's request message.
  string field_name = 1;
  OperationRequestOptionEffect effect = 2;
  // Which values of the field turn the effect on.
  OperationRequestOptionCondition condition = 3;
  // For WHEN_ONE_OF, the protobuf enum value names that turn the effect on; any
  // enum number the server does not recognize also turns it on. Empty for every
  // other condition.
  repeated string enabling_enum_values = 4;
  // What omitting the field does.
  OperationRequestOptionOmission omission = 5;
  // What the active policy decides for a request that turns on this option
  // alone, with every other request option inactive. The server decides an
  // actual request that turns on several options with all of them together.
  OperationAdmission admission = 6;
  // Which policy step denies such a request. Present exactly when admission is
  // a denied value.
  optional PolicyDenialDetails policy_denial = 7;
}

// What a request option turns on.
enum OperationRequestOptionEffect {
  OPERATION_REQUEST_OPTION_EFFECT_UNSPECIFIED = 0;
  // The request opens or blocks on operator UI. It gains the interactive_ui
  // risk flag and the INTERACTIVE duration class.
  OPERATION_REQUEST_OPTION_EFFECT_INTERACTIVE_UI = 1;
  // The call returns while device or operator work keeps running. The request
  // is an exclusive workflow, which no setting admits in the current isolation
  // mode.
  OPERATION_REQUEST_OPTION_EFFECT_BACKGROUND_WORK = 2;
}

// Which values of a request option's field turn its effect on.
enum OperationRequestOptionCondition {
  OPERATION_REQUEST_OPTION_CONDITION_UNSPECIFIED = 0;
  // A Boolean field set to true.
  OPERATION_REQUEST_OPTION_CONDITION_WHEN_TRUE = 1;
  // A Boolean field set to false.
  OPERATION_REQUEST_OPTION_CONDITION_WHEN_FALSE = 2;
  // A message field that is present.
  OPERATION_REQUEST_OPTION_CONDITION_WHEN_PRESENT = 3;
  // A string field that is present and not empty.
  OPERATION_REQUEST_OPTION_CONDITION_WHEN_NON_EMPTY = 4;
  // An enum field set to one of enabling_enum_values, or to any number the
  // server does not recognize, which fails closed.
  OPERATION_REQUEST_OPTION_CONDITION_WHEN_ONE_OF = 5;
}

// What omitting a request option's field does.
enum OperationRequestOptionOmission {
  OPERATION_REQUEST_OPTION_OMISSION_UNSPECIFIED = 0;
  // Omitting the field does not turn the effect on.
  OPERATION_REQUEST_OPTION_OMISSION_DOES_NOT_ACTIVATE = 1;
  // Omitting the field turns the effect on.
  OPERATION_REQUEST_OPTION_OMISSION_ACTIVATES = 2;
  // Required by request mapping: if mapping is reached, omission fails
  // validation before worker dispatch.
  OPERATION_REQUEST_OPTION_OMISSION_REQUIRED = 3;
}

// The closed risk vocabulary decided on #242. A profile admits an operation
// when it admits every flag on the operation's reviewed row.
enum OperationRiskFlag {
  OPERATION_RISK_FLAG_UNSPECIFIED = 0;
  // Reads paths or existence, never file content.
  OPERATION_RISK_FLAG_FILESYSTEM_METADATA = 1;
  // Reads caller-named file content.
  OPERATION_RISK_FLAG_FILESYSTEM_READ = 2;
  // Creates or overwrites caller-named files.
  OPERATION_RISK_FLAG_FILESYSTEM_WRITE = 3;
  // Deletes files.
  OPERATION_RISK_FLAG_FILESYSTEM_DELETE = 4;
  // Removes SA objects, or discards or replaces unsaved job state.
  OPERATION_RISK_FLAG_DESTRUCTIVE = 5;
  // Runs or stops MP code.
  OPERATION_RISK_FLAG_CODE_EXECUTION = 6;
  // Can move hardware such as a tracker head, robot, or projector.
  OPERATION_RISK_FLAG_PHYSICAL_MOTION = 7;
  // Requires or controls a live instrument, robot, or appliance session.
  OPERATION_RISK_FLAG_DEVICE_SESSION = 8;
  // Changes configuration that a live device session consumes.
  OPERATION_RISK_FLAG_DEVICE_CONFIG = 9;
  // Blocks on operator input or opens operator UI.
  OPERATION_RISK_FLAG_INTERACTIVE_UI = 10;
  // Talks to systems other than SpatialAnalyzer, such as OPC DA or an appliance IP address.
  OPERATION_RISK_FLAG_EXTERNAL_IO = 11;
}

// The reviewed execution-duration class of an operation. Unspecified means unreviewed.
enum OperationDurationClass {
  OPERATION_DURATION_CLASS_UNSPECIFIED = 0;
  // Completes within the default execution watchdog.
  OPERATION_DURATION_CLASS_QUICK = 1;
  // Device actions, sessions, motion, and heavy document operations.
  OPERATION_DURATION_CLASS_LONG_RUNNING = 2;
  // Waits for an unbounded amount of operator time.
  OPERATION_DURATION_CLASS_INTERACTIVE = 3;
}

// The recorded validation gap of an operation. Unspecified means unreviewed.
enum OperationValidationStatus {
  OPERATION_VALIDATION_STATUS_UNSPECIFIED = 0;
  // No validation gap is recorded.
  OPERATION_VALIDATION_STATUS_NO_RECORDED_GAP = 1;
  // A licensed fixture is still needed to validate the operation.
  OPERATION_VALIDATION_STATUS_FIXTURE_PENDING = 2;
  // At risk: no runtime validation exists for the exact target.
  OPERATION_VALIDATION_STATUS_AT_RISK_UNVALIDATED = 3;
}

// The active policy's static decision for an operation's reviewed row.
enum OperationAdmission {
  OPERATION_ADMISSION_UNSPECIFIED = 0;
  OPERATION_ADMISSION_ADMITTED = 1;
  // The profile, widened by flags set to allow, does not admit every risk flag,
  // or the read-only effect filter excludes the operation.
  OPERATION_ADMISSION_DENIED_PROFILE = 2;
  // A risk flag of the operation is set to deny.
  OPERATION_ADMISSION_DENIED_FLAG = 3;
  // A per-operation override is set to deny.
  OPERATION_ADMISSION_DENIED_OVERRIDE = 4;
  // An exclusive workflow, which no setting admits in the current isolation mode.
  OPERATION_ADMISSION_DENIED_EXCLUSIVE = 5;
  // The operation's classification metadata is not reviewed.
  OPERATION_ADMISSION_DENIED_UNREVIEWED = 6;
}

// Classifies an operation's dependency on SpatialAnalyzer application-global state.
enum OperationExecutionScope {
  OPERATION_EXECUTION_SCOPE_UNSPECIFIED = 0;
  OPERATION_EXECUTION_SCOPE_SELF_CONTAINED = 1;
  OPERATION_EXECUTION_SCOPE_GLOBAL_STATE_READ = 2;
  OPERATION_EXECUTION_SCOPE_GLOBAL_STATE_MUTATION = 3;
  OPERATION_EXECUTION_SCOPE_EXCLUSIVE_WORKFLOW = 4;
  OPERATION_EXECUTION_SCOPE_UNKNOWN = 5;
}

enum OperationEffect {
  OPERATION_EFFECT_UNSPECIFIED = 0;
  OPERATION_EFFECT_READ_ONLY = 1;
  OPERATION_EFFECT_MUTATING = 2;
  OPERATION_EFFECT_UNKNOWN = 3;
}

```

[Released Discovery Source](https://github.com/spatialanalyzer/briosa/blob/v0.10.1/targets/2026.1.0529.7/proto/briosa/discovery.proto) · [Version Coordinates](https://github.com/spatialanalyzer/briosa/blob/v0.10.1/targets/2026.1.0529.7/proto/briosa/version_coordinates.proto) · [Operation Outcomes](https://github.com/spatialanalyzer/briosa/blob/v0.10.1/targets/2026.1.0529.7/proto/briosa/operation_outcomes.proto)
