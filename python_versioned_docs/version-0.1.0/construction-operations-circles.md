---
title: Construction Operations / Circles
description: Briosa 0.1.0 Python APIs for selected circle-construction MP commands.
toc_max_heading_level: 2
---

# Construction Operations / Circles

## Construct Circle

```python
async def construct_circle(
    self,
    circle_name: CollectionObjectName,
    circle_center: Vector,
    circle_normal: Vector,
    circle_radius: float,
) -> None: ...
```

Values are passed through without client-side geometry-range validation.

## Construct Circles From Surface Faces - Runtime Select

```python
async def construct_circles_from_surface_faces_runtime_select(self) -> None: ...
```

The operator selects faces in SpatialAnalyzer. Cancellation does not prove the
interaction stopped.

## Construct Circles (Lines) From Surfaces

```python
class CircleLineMode(StrEnum):
    CIRCLE = "circle"
    LINE = "line"

async def construct_circles_lines_from_surfaces(
    self,
    surfaces: Iterable[CollectionObjectName],
    circle_line_mode: CircleLineMode,
    *,
    minimum_diameter: float = 0.0,
    maximum_diameter: float = 0.0,
    tolerance: float = 0.02,
    single_surface: bool = False,
    destination_collection_name: CollectionName | None = None,
    base_name: str = "Geometry Object",
) -> list[CollectionObjectName]: ...
```

Returns the complete `Geometry Objects` output list.
