---
title: Single-tenant runtime model
---

# Single-tenant runtime model

The baseline worker/SpatialAnalyzer target is single-tenant. Treat one mutually
trusting application, or one tightly coordinated application group, as the
owner of that target.

One worker-owned STA serializes every MP sequence:

```text
SetStep → argument setters → ExecuteStep → result retrieval → output getters
```

This prevents COM call interleaving. It does **not** isolate
application-global state across several RPCs from different callers.

Do not interpret queue serialization as a transaction, session, or exclusive
multi-call lease. Coordinate dependent calls within the single owning
application and re-check active state where the contract permits it. An
exclusive multi-RPC workflow remains out of scope until Briosa defines a
generation-bound lease/session contract.
