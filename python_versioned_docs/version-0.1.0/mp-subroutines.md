---
title: MP Subroutines
description: Briosa 0.1.0 Python APIs for supported MP Subroutines MP commands.
toc_max_heading_level: 2
---

# MP Subroutines

Exact MP command words map mechanically to `snake_case`. Defaulted inputs are
keyword-only, and generated gRPC request or result objects never escape.

## Run Subroutine

[Run Subroutine](/mp-command-catalog/commands/mp-subroutines#run-subroutine) · [gRPC contract](/api/grpc/0.5.1/mp-subroutines#run-subroutine)

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
