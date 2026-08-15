---
title: MP Subroutines
description: Next Briosa Python APIs for supported MP Subroutines MP commands.
toc_max_heading_level: 2
---

# MP Subroutines

:::note[Next Python Contract]

These coroutines define the next flat `BriosaClient` command surface. They are
not callable from a released package until this Next documentation is versioned.

:::

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Run Subroutine

:::note[Status: Next]
This coroutine is part of the next Python package contract.
:::

[Run Subroutine](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC contract](/api/grpc/mp-subroutines#run-subroutine)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `mp_subroutine_file_path` | `FileReference` | `MP Subroutine File Path` | Required |
| `share_parent_variables` | `bool` | `Share Parent Variables?` | false |

| Result Value | Python Type | Exact MP Output |
| --- | --- | --- |
| — | None | — |

```python
async def run_subroutine(
    self,
    mp_subroutine_file_path: FileReference,
    *,
    share_parent_variables: bool = False,
) -> None: ...
```

```python
await briosa.run_subroutine(mp_subroutine_file_path=...)
```

Returns `None`. Normal asyncio cancellation and timeout tools remain
caller controls; the client does not replay uncertain work.
