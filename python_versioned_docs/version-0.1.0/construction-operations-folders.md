---
title: Construction Operations / Folders
description: Briosa 0.1.0 Python APIs for selected folder-management MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Folders

## Construct Folder(s)

```python
async def construct_folders(
    self,
    folder_path: str,
) -> None: ...
```

`folder_path` is passed through unchanged and can describe a nested hierarchy.

## Delete Folders by Wildcard

```python
@dataclass(frozen=True)
class DeleteFoldersByWildcardResult:
    num_deleted: int
    num_failed: int

async def delete_folders_by_wildcard(
    self,
    search_string: str,
    *,
    case_sensitive_search: bool = True,
    allow_deleting_all_folders: bool = False,
) -> DeleteFoldersByWildcardResult: ...
```

The result preserves both exact MP outputs. The client does not validate the
search value and never automatically replays this destructive operation.

[Catalog](/mp-command-catalog/commands/construction-operations-folders#delete-folders-by-wildcard) · [gRPC](/api/grpc/0.5.1/construction-operations-folders#delete-folders-by-wildcard)
