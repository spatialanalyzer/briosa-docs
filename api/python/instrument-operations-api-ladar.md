---
title: Instrument Operations / API - LADAR
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/python/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations-api-ladar)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Released implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Set LADAR AutoMeas Point {/* #set-ladar-automeas-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-point) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_ladar_auto_meas_point(
        self,
        instrument: CollectionInstrumentId,
        *,
        sample_time_milliseconds: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR AutoMeas Sphere {/* #set-ladar-automeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-automeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Sphere {/* #set-ladar-featuremeas-sphere */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_ladar_feature_meas_sphere(
        self,
        instrument: CollectionInstrumentId,
        *,
        scan_line_spacing: float = 0.05,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Circle {/* #set-ladar-featuremeas-circle */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-circle) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_ladar_feature_meas_circle(
        self,
        instrument: CollectionInstrumentId,
        *,
        scan_line_spacing: float = 0.05,
        width_of_extra_area_around_scan: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Slot {/* #set-ladar-featuremeas-slot */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-slot) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_ladar_feature_meas_slot(
        self,
        instrument: CollectionInstrumentId,
        *,
        scan_line_spacing: float = 0.05,
        width_of_extra_area_around_scan: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set LADAR FeatureMeas Cylinder {/* #set-ladar-featuremeas-cylinder */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) · [gRPC Contract](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_ladar_feature_meas_cylinder(
        self,
        instrument: CollectionInstrumentId,
        *,
        scan_line_spacing: float = 0.05,
        width_of_extra_area_around_scan: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## set_ladar_auto_meas_point {/* #set_ladar_auto_meas_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_ladar_auto_meas_sphere {/* #set_ladar_auto_meas_sphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_ladar_feature_meas_sphere {/* #set_ladar_feature_meas_sphere */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_ladar_feature_meas_circle {/* #set_ladar_feature_meas_circle */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_ladar_feature_meas_slot {/* #set_ladar_feature_meas_slot */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_ladar_feature_meas_cylinder {/* #set_ladar_feature_meas_cylinder */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2026.1.0529.7)
