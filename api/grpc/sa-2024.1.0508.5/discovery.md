---
title: Server Discovery
description: Server 0.7.0 identity, compatibility, readiness, and capability RPCs for SA 2024.1.0508.5.
---

# Server Discovery

[SA 2026.1.0529.7](/api/grpc/discovery) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/discovery)

`briosa.DiscoveryService` is available without starting the SDK or SA. `GetServerInfo` reports build coordinates and current runtime evidence. `ListCapabilities` lists implemented operations enabled by the active policy and isolation rules; membership alone does not mean a call is ready.

## Compatibility and Runtime Identity

Server 0.7.0 declares behavioral contract **major 1, revision 0** for its exact target. `GetServerInfoResponse.compatibility` (field 11) is independent of product version and source revision. Matching these coordinates does not bypass exact SA/SDK identity, ownership, runtime admission, or readiness checks. An unavailable runtime identity must not be inferred from the configured target.

`version` uses `VersionCoordinates` for product/source and exact-target build coordinates. `ready_for_mp`, connection/readiness state, target isolation, and activated/connected identity evidence describe current runtime conditions. Capability entries identify the operation, fully qualified RPC, effect, replay safety, and execution scope. Never automatically replay an operation whose outcome is uncertain.

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

  // Lists only implemented operations enabled by the active runtime policy.
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

message ListCapabilitiesRequest {}

message ListCapabilitiesResponse {
  reserved 1, 2;
  reserved "catalog_id", "catalog_revision", "target_protocol_package";
  string spatial_analyzer_target = 3;
  string protocol_package = 4;
  repeated OperationCapability operations = 5;
}

message OperationCapability {
  string operation_id = 1;
  string grpc_service = 2;
  string rpc = 3;
  string fully_qualified_method = 4;
  OperationEffect effect = 5;
  ReplaySafety replay_safety = 6;
  OperationExecutionScope execution_scope = 7;
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

[Released Discovery Source](https://github.com/spatialanalyzer/briosa/blob/v0.7.0/targets/2024.1.0508.5/proto/briosa/discovery.proto) · [Version Coordinates](https://github.com/spatialanalyzer/briosa/blob/v0.7.0/targets/2024.1.0508.5/proto/briosa/version_coordinates.proto)
