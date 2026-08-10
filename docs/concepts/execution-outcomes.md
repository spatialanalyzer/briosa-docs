---
title: Understand MP Command Results
description: Learn how Briosa reports success, failure, uncertain outcomes, and whether a command can be tried again.
---

# Understand MP Command Results

Most applications call MP commands through one of the first-party Briosa client
libraries for .NET, Python, or JavaScript. The client returns the command result
when the operation succeeds and raises a language-appropriate exception when it
does not.

Behind that simple interface, Briosa distinguishes between a command that
succeeded, a command that failed, and a command whose final outcome cannot be
confirmed. That distinction helps your application decide what to show the user
and whether it is safe to try the command again.

## What the Client Libraries Provide

The client libraries handle the gRPC transport details for you. When an MP
command fails, they decode the structured information returned by the Briosa
server and expose it through these client exceptions:

| Client | Exception | Useful Members |
| --- | --- | --- |
| .NET | `BriosaCallException` | `CompletionUnknown`, `ReconciliationRequired`, `OperationError` |
| Python | `BriosaCallError` | `completion_unknown`, `reconciliation_required`, `operation_error` |
| JavaScript/TypeScript | `BriosaCallError` | `completionUnknown`, `reconciliationRequired`, `operationError` |

This means an application using a Briosa client does not need to call the
native SA SDK, interpret numeric MP result codes, inspect gRPC metadata, or
decode protocol messages itself.

The client libraries do not automatically repeat a failed command. They
preserve the server's outcome and replay guidance so your application can make
that decision safely.

## How Briosa Confirms MP Success

Behind the scenes, the Briosa worker communicates with SpatialAnalyzer through
the native SA SDK COM interface. As part of that internal process, it calls the
SA SDK methods `ExecuteStep` and `GetMPStepResult`. These are not methods that
you call through a Briosa client library.

A successful return from the SA SDK's `ExecuteStep` method means only that the
SDK accepted the execution request. Briosa then calls `GetMPStepResult` to learn
whether the MP command itself succeeded. For the current SpatialAnalyzer target,
MP result code `2` indicates success.

Briosa retrieves command outputs only after it confirms MP success. If an output
cannot be retrieved, Briosa reports that problem instead of substituting an
empty string, zero, or another value that could be mistaken for a real result.

## The Three Outcomes That Matter

Briosa reports what it can prove about each command:

- **Not started** means the command did not begin executing in SpatialAnalyzer
- **Completed** means SpatialAnalyzer returned a final MP result, whether that
  result was success or failure
- **Outcome unknown** means the command may have started, but Briosa could not
  confirm what ultimately happened

An unknown outcome can occur when a request times out, the caller stops waiting,
the Briosa worker exits, or a response is lost after execution begins.

Replacing the worker can restore Briosa's availability, but it cannot determine
what SpatialAnalyzer already did. Likewise, cancelling a Briosa request stops
the caller from waiting; it does not necessarily stop work already underway in
the native SA SDK.

## Before Trying a Command Again

A failed request does not always mean the command is safe to repeat. For example,
a command with an unknown outcome may already have changed the active collection,
written a file, or modified another part of the SpatialAnalyzer state.

Briosa provides replay guidance with operation errors:

- **May replay** means the available evidence supports issuing the command again
- **Reconcile before replay** means you should first inspect SpatialAnalyzer or
  the affected external resource to determine what happened
- **Do not replay** means the command should not be repeated automatically

The first-party client libraries expose this guidance as structured error
information. Applications should follow it instead of automatically retrying
every timeout or connection failure.

## If You Use gRPC Directly

Direct gRPC consumers receive the same command results and safety information,
but must handle the transport contract themselves. On a failed operation, that
means reading the canonical gRPC status and decoding the structured
`OperationError` included in the `briosa-operation-error-bin` response metadata.

Using a first-party client library is the recommended approach for .NET,
Python, and JavaScript applications because the library performs that mapping
and presents the result using familiar conventions for the language.
