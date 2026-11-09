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
| .NET | `BriosaOperationException` | `Kind`, `ExecutionDisposition`, `ReplayGuidance`, `MpExecution` |
| Python | `BriosaOperationError` | `completion_unknown`, `reconciliation_required`, `failure` (with `mp_execution`) |
| JavaScript/TypeScript | `BriosaOperationError` | `completionUnknown`, `reconciliationRequired`, `mpExecution` |

The MP execution details carry the MP state, the MP result code, and the
retrieval of each output when the failure relates to the MP command.

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
MP result code `2` indicates success, and code `4` a partial success.

Briosa retrieves command outputs only after it confirms MP success. If an output
cannot be retrieved, Briosa reports that problem instead of substituting an
empty string, zero, or another value that could be mistaken for a real result.

## When a Command Partly Succeeds

SpatialAnalyzer reports MP code `4` (`PARTIAL SUCCESS`) when a command did its
work but not its full intended effect, for example a fit that exceeded its
tolerance or a command that processed some, but not all, of the named objects.
Server 0.10.0 reports it as a success: the call returns its outputs, the MP
execution state is `PartialSuccess` with code `4`, and the command is
**completed**. Do not repeat the call to change its outcome.

Four operations are the exception, because their documentation says code `4`
leaves the requested work undone: `construct_point_from_survey_target_center`,
`open_sa_file`, `open_template_file`, and `set_report_options_for_object`. For
these, code `4` is an ordinary MP failure.

A partial success does not change a method's return type. To see whether a call
fully or partly succeeded, pass the per-call completion observer:

| Client | Observer |
| --- | --- |
| .NET | The `onMpCompletion` parameter, an `Action<MpCompletion>`, before the `CancellationToken` |
| Python | The keyword-only `on_mp_completion` argument |
| JavaScript/TypeScript | `onMpCompletion` in `BriosaCallOptions` |

The client calls the observer once, after it checks the completion and before it
maps the outputs. Every client checks each MP success, whether or not you pass
an observer: a success must report `Succeeded` with code `2` or
`PartialSuccess` with code `4`, and anything else is a protocol error. If an
output then fails, the failure keeps `PartialSuccess` and code `4` in its MP
execution details.

## When the SDK Raises an Exception

An exception from the SA SDK during an MP sequence does not stop the Briosa
worker. Server 0.10.0 reports it with the dedicated failure kind
`SdkCallFaulted`, the phase it can prove, and a diagnostic code, without the
exception text:

- **Before `ExecuteStep`**, for example while setting the step or an input, the
  command is **not started** (`sdk-call-faulted-before-execute`). The error
  says **do not replay**, because the SDK just threw; refresh SDK state and
  retry deliberately.
- **During `ExecuteStep` or `GetMPStepResult`**, the **outcome is unknown**
  (`sdk-execute-step-faulted` or `sdk-mp-result-retrieval-faulted`), and the
  error asks you to reconcile before replay.
- **In an output getter after MP success or partial success**, the command is
  **completed** (`sdk-output-getter-faulted`). That output is reported as
  unavailable rather than replaced with a default value, and the other outputs
  are still retrieved.

Server 0.9.2 reported these faults through interim kinds, such as `Internal`
for a fault before `ExecuteStep`; `SdkCallFaulted` replaces them.

The worker stays in service for later commands. An exception that leaves the
worker's SDK thread in an untrustworthy state still stops the worker, and the
command's outcome is then unknown.

## The Three Outcomes That Matter

Briosa reports what it can prove about each command:

- **Not started** means the command did not begin executing in SpatialAnalyzer
- **Completed** means SpatialAnalyzer returned a final MP result, whether that
  result was success or failure
- **Outcome unknown** means the command may have started, but Briosa could not
  confirm what ultimately happened

An unknown outcome can occur when a request times out, the caller stops waiting,
the Briosa worker exits, or a response is lost after execution begins. A request
that is still queued when its caller cancels or its deadline passes is
abandoned instead: it never reaches SpatialAnalyzer, and the server records it
as not started with diagnostic `queued-request-abandoned`. A gRPC caller that
cancelled does not receive that detail, so it still treats the outcome as
unknown.

## When a SpatialAnalyzer Dialog Blocks a Command

Job state or an argument value can make SpatialAnalyzer open a modal dialog,
which holds the command until someone dismisses it. When the command's
execution budget then expires, Briosa reports a watchdog timeout whose outcome
is unknown, with diagnostic `sa-modal-dialog-open` and guidance that operator
intervention is required. Read and dismiss the dialog in SpatialAnalyzer before
recovering the SDK; the clients never retry such a command. The
`Briosa:SpatialAnalyzer:InteractionMode` server setting can make SpatialAnalyzer
show fewer dialogs on an unattended station; see
[Windows Deployment](/docs/deployment/windows#spatialanalyzer-interaction-mode).

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
