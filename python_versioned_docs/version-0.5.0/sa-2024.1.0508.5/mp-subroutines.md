---
title: MP Subroutines
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# MP Subroutines

[SA 2026.1.0529.7](/api/python/mp-subroutines) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/mp-subroutines)

This reference covers **SA 2024.1.0508.5**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Run Subroutine {/* #run-subroutine */}

[MP Catalog](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/mp-subroutines#run-subroutine)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `filesystem_read`, `code_execution` · **Duration Class:** `long_running`

```python
async def run_subroutine(
        self,
        mp_subroutine_file_path: FileReference,
        *,
        share_parent_variables: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2024.1.0508.5)
