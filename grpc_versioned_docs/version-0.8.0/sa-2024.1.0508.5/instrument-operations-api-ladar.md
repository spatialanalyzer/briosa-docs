---
title: Instrument Operations / API - LADAR
description: Released gRPC contracts for API - LADAR MP commands.
toc_max_heading_level: 2
---

# Instrument Operations / API - LADAR

[SA 2026.1.0529.7](/api/grpc/instrument-operations-api-ladar) · [SA 2024.1.0508.5](/api/grpc/sa-2024.1.0508.5/instrument-operations-api-ladar)

:::note[Released Server API]

These operations are included in Briosa Server **0.8.0** for SpatialAnalyzer
**2024.1.0508.5**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Set LADAR AutoMeas Point | `SetLadarAutoMeasPoint` | `instrument_operations.set_ladar_auto_meas_point` |
| Set LADAR AutoMeas Sphere | `SetLadarAutoMeasSphere` | `instrument_operations.set_ladar_auto_meas_sphere` |
| Set LADAR FeatureMeas Sphere | `SetLadarFeatureMeasSphere` | `instrument_operations.set_ladar_feature_meas_sphere` |
| Set LADAR FeatureMeas Circle | `SetLadarFeatureMeasCircle` | `instrument_operations.set_ladar_feature_meas_circle` |
| Set LADAR FeatureMeas Slot | `SetLadarFeatureMeasSlot` | `instrument_operations.set_ladar_feature_meas_slot` |
| Set LADAR FeatureMeas Cylinder | `SetLadarFeatureMeasCylinder` | `instrument_operations.set_ladar_feature_meas_cylinder` |

## Set LADAR AutoMeas Point

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-point) for that target’s contract.

## Set LADAR AutoMeas Sphere

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-automeas-sphere) for that target’s contract.

## Set LADAR FeatureMeas Sphere

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-sphere) for that target’s contract.

## Set LADAR FeatureMeas Circle

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-circle) for that target’s contract.

## Set LADAR FeatureMeas Slot

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-slot) for that target’s contract.

## Set LADAR FeatureMeas Cylinder

This operation is absent from the released SA 2024.1.0508.5 API. See the [SA 2026 reference](/api/grpc/instrument-operations-api-ladar#set-ladar-featuremeas-cylinder) for that target’s contract.
