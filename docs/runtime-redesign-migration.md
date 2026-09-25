---
title: Runtime Redesign Migration — Unreleased
---

# Runtime Redesign Migration — Unreleased

:::caution Unreleased Candidate

This page describes the committed compatibility-major-2 redesign under review.
It is not a release announcement. Use the [release table](./releases.md) for
published server and client packages. Existing API reference snapshots retain
their released behavior.

:::

The redesign changes overload and lifecycle behavior while keeping each server
locked to its exact SpatialAnalyzer release. Compatibility major is a behavioral
contract identifier; it is separate from server versions, client package versions,
and SpatialAnalyzer versions.

## Upgrade the Client and Server Together

Major-1 clients cannot select a major-2 runtime. Installing a new server does not
update an application's .NET, Python, or JavaScript dependency. Keep the previous
server installed while validating the matching client and server candidates for
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
schema-3 package contract already represents compatibility major 2; package
verification does not establish an application's client compatibility or SA
readiness. Tutorial dependencies remain pinned to published packages until the
coordinated release is available. Do not mix a released major-1 tutorial dependency
with a major-2 candidate runtime.

The [shared client behavioral contract](https://github.com/spatialanalyzer/briosa/blob/221-typed-runtime/docs/architecture/client-library-behavioral-contract.md)
and [implementation migration record](https://github.com/spatialanalyzer/briosa/blob/221-typed-runtime/docs/development/runtime-redesign-migration.md)
in the server repository define the candidate behavior and validation status.
