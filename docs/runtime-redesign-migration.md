---
title: Runtime Redesign Migration
---

# Runtime Redesign Migration

Server [0.9.0](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.0)
and exact-target .NET, Python, and JavaScript client 0.4.0 packages are
published for both SA targets. The current API references document these
releases. Server [0.9.1](https://github.com/spatialanalyzer/briosa/releases/tag/v0.9.1)
is a compatible correction release with the same contract major 2, revision 0,
and the same 0.4.0 clients; upgrading from 0.9.0 to 0.9.1 needs no client or
binding change. See the [release table](./releases.md) for package links and
validation limits.

The redesign changes overload and lifecycle behavior while keeping each server
locked to its exact SpatialAnalyzer release. Compatibility major is a behavioral
contract identifier; it is separate from server versions, client package versions,
and SpatialAnalyzer versions.

## Upgrade the Client and Server Together

Major-1 clients cannot select a major-2 runtime. Installing a new server does not
update an application's .NET, Python, or JavaScript dependency. Keep the previous
server installed while validating the matching client and server releases for
the same exact SA target. Test each consuming application before switching it.

For direct gRPC use, regenerate from the matching protocol artifact with standard
protobuf/gRPC tools and verify the server's advertised compatibility before
issuing MP work. The public package remains `briosa`; SA release identifiers do
not enter RPC or message names. Host and worker binaries are a matched distribution
and must be upgraded together.

## Handle Overload Explicitly

When the server has exhausted its admission capacity, an MP request receives
gRPC `ResourceExhausted` with structured `OperationError` evidence:

| Field | Value | Meaning |
| --- | --- | --- |
| Failure kind | `Overloaded` | The server has no capacity to accept this request. |
| Execution disposition | `NotStarted` | This request did not begin executing in SA. |
| Replay guidance | `MayReplay` | A later deliberate attempt is permitted by the returned evidence. |

Reduce the application's request rate and decide when to try again. First-party
clients continue to make one MP attempt; they do not automatically repeat a call.
Cancellation, a deadline, or a lost response after dispatch can still mean that
completion is unknown. Follow the returned execution and replay evidence rather
than treating every transport failure as safe to repeat.

## Keep Requests Within the Transport Limit

Servers 0.9.0 and 0.9.1 limit each inbound gRPC message to **64 KiB (65,536 bytes)** for
both SA targets. This applies to the encoded request message, not separately to
each field. An oversized message is rejected by gRPC before operation mapping;
it is a transport limit, separate from the structured `Overloaded` admission
outcome above. Do not expect an `OperationError` payload for that rejection.
Raw gRPC clients and applications sending large lists should account for the
limit when constructing requests.

## Preserve Completed Work When Outputs Are Unavailable

A command can finish successfully in SA while its outputs cannot be retrieved or
delivered. The server preserves known completion, including the MP result code,
and reports output retrieval failure. Do not replay completed work merely to obtain
a missing response. Inspect SA state or use an appropriate read operation instead.

## Follow Lifecycle State During Cleanup

An accepted stop closes MP admission and finishes cleanup even if its caller stops
waiting. During teardown the SDK lifecycle can report `Stopping`. If worker exit
cannot be confirmed, it remains faulted and reports operator recovery required;
the server does not launch a replacement alongside the unresolved worker.

SDK recovery remains explicit and never replays an interrupted command. Restoring
availability does not resolve an earlier unknown outcome. Readiness still requires
matching activated-SDK and connected-SA identity followed by an execution-channel
proof for the current generation. A successful connection alone is insufficient.

## Installer and Examples

The installer manages complete server packages without executing the SDK. Its
schema-3 package contract represents compatibility major 2; package
verification does not establish an application's client compatibility or SA
readiness. The [tutorials](https://github.com/spatialanalyzer/briosa-examples)
use published 0.4.0 dependencies and the 0.9.0 protocol artifact.

Portable checks passed for both packaged server targets, the packaged installer,
and all six published client packages. Protected licensed validation for the
final release packages remains outstanding; candidate licensed observations
do not establish every operation or deployment environment.

The [shared client behavioral contract](https://github.com/spatialanalyzer/briosa/blob/v0.9.0/docs/architecture/client-library-behavioral-contract.md)
and [implementation migration record](https://github.com/spatialanalyzer/briosa/blob/v0.9.0/docs/development/runtime-redesign-migration.md)
in the server repository define the released behavior and validation status.
