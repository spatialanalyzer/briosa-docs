---
title: Execution outcomes and replay
---

# Execution outcomes and replay

A successful `ExecuteStep` return value does not prove that an MP command
succeeded. Briosa retrieves the MP result only after `ExecuteStep` succeeds
and preserves two distinct facts:

- whether the result was retrieved; and
- the raw MP result code, where `2` is the observed success state for the
  exact target.

Output getters run only after successful MP result retrieval and code
validation. A missing output is never replaced with a convincing empty value.

## Completion can be unknown

A timeout, caller cancellation, worker crash, or lost response after enqueue
may leave command completion unknown. Worker replacement can restore
availability, but it cannot prove what SpatialAnalyzer did before the response
was lost.

Briosa therefore separates:

- transport status;
- worker and connection availability;
- whether execution definitely did not start, may have started, or completed;
- MP result retrieval and result code; and
- replay safety.

Never automatically retry an ambiguously completed operation unless that exact
operation has reviewed replay evidence. Caller cancellation means the caller
stopped waiting; it does not claim to have cancelled synchronous COM work.
