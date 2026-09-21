---
title: Instrument Operations / API - LADAR
description: Briosa 0.2.0 Python APIs for API - LADAR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/python/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-api-ladar)

## set_ladar_auto_meas_point

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-automeas-point)

```python
async def set_ladar_auto_meas_point(
    self,
    instrument: CollectionInstrumentId,
    *,
    sample_time_milliseconds: int = 0,
) -> None: ...
```

The exact MP default is `0` despite the MP label documenting `1–2000`.

## set_ladar_auto_meas_sphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-automeas-sphere)

```python
async def set_ladar_auto_meas_sphere(
    self,
    instrument: CollectionInstrumentId,
    *,
    sphere_radius: float = 1.1875,
    scan_line_spacing: float = 0.05,
    send_center_point: bool = True,
    send_sphere: bool = False,
    send_measured_cloud: bool = False,
) -> None: ...
```

## set_ladar_feature_meas_sphere

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

```python
async def set_ladar_feature_meas_sphere(
    self,
    instrument: CollectionInstrumentId,
    *,
    scan_line_spacing: float = 0.05,
) -> None: ...
```

## set_ladar_feature_meas_circle

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

```python
async def set_ladar_feature_meas_circle(
    self,
    instrument: CollectionInstrumentId,
    *,
    scan_line_spacing: float = 0.05,
    width_of_extra_area_around_scan: float = 0.0,
) -> None: ...
```

## set_ladar_feature_meas_slot

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

```python
async def set_ladar_feature_meas_slot(
    self,
    instrument: CollectionInstrumentId,
    *,
    scan_line_spacing: float = 0.05,
    width_of_extra_area_around_scan: float = 0.0,
) -> None: ...
```

## set_ladar_feature_meas_cylinder

[MP command](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC contract](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

```python
async def set_ladar_feature_meas_cylinder(
    self,
    instrument: CollectionInstrumentId,
    *,
    scan_line_spacing: float = 0.05,
    width_of_extra_area_around_scan: float = 0.0,
) -> None: ...
```

Briosa does not convert units or add ranges to these instrument-specific
settings. The calls are never automatically replayed.
