---
title: Robot Calibration Appliance Node Operations
description: Unreleased Briosa Python APIs for reviewed Robot Calibration Appliance Node MP commands.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Result Type

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class CalibrationApplianceNodeStatus:
    instrument_connected: bool
    calibration_appliance_connected: bool
```

## add_calibration_appliance_node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```python
async def add_calibration_appliance_node(
    self,
    calibration_appliance_node_to_add: CollectionObjectName,
) -> None: ...
```

## delete_calibration_appliance_node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```python
async def delete_calibration_appliance_node(
    self,
    calibration_appliance_node_to_delete: CollectionObjectName,
) -> None: ...
```

## connect_disconnect_calibration_appliance_node

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```python
async def connect_disconnect_calibration_appliance_node(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    connect: bool = True,
) -> None: ...
```

## set_calibration_appliance_node_instrument

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```python
async def set_calibration_appliance_node_instrument(
    self,
    calibration_appliance_node: CollectionObjectName,
    instrument: CollectionInstrumentId,
) -> None: ...
```

## set_calibration_appliance_node_measurement_profile

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```python
async def set_calibration_appliance_node_measurement_profile(
    self,
    calibration_appliance_node: CollectionObjectName,
    measurement_profile: str = "",
) -> None: ...
```

## set_calibration_appliance_node_measurement_target

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```python
async def set_calibration_appliance_node_measurement_target(
    self,
    calibration_appliance_node: CollectionObjectName,
    measurement_target: str = "",
) -> None: ...
```

## enable_disable_calibration_appliance_node_instrument_auto_point

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```python
async def enable_disable_calibration_appliance_node_instrument_auto_point(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    enable_instrument_auto_point: bool = True,
) -> None: ...
```

## set_calibration_appliance_node_instrument_dwell_time

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```python
async def set_calibration_appliance_node_instrument_dwell_time(
    self,
    calibration_appliance_node: CollectionObjectName,
    measurement_dwell_time_seconds: float = 0.0,
) -> None: ...
```

## skip_calibration_appliance_node_measurement

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```python
async def skip_calibration_appliance_node_measurement(
    self,
    calibration_appliance_node: CollectionObjectName,
) -> None: ...
```

## set_calibration_appliance_node_measurement_frame

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```python
async def set_calibration_appliance_node_measurement_frame(
    self,
    calibration_appliance_node: CollectionObjectName,
    measurement_reference_frame: CollectionObjectName,
) -> None: ...
```

The reference must identify an SA Frame.

## set_calibration_appliance_node_measurement_offset_transform

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```python
async def set_calibration_appliance_node_measurement_offset_transform(
    self,
    calibration_appliance_node: CollectionObjectName,
    measurement_offset_transform: Transform | None = None,
) -> None: ...
```

`None` uses the exact MP identity-transform default.

## set_calibration_appliance_node_measurement_point_group

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```python
async def set_calibration_appliance_node_measurement_point_group(
    self,
    calibration_appliance_node: CollectionObjectName,
    point_group_name: CollectionObjectName,
) -> None: ...
```

The point-group reference must identify an SA Point Group.

## set_calibration_appliance_node_calibration_appliance_ip_address

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```python
async def set_calibration_appliance_node_calibration_appliance_ip_address(
    self,
    calibration_appliance_node: CollectionObjectName,
    calibration_appliance_ip_address: str = "0.0.0.0",
) -> None: ...
```

The default preserves the exact SA 2026.1 MP value. This configures the
appliance through local SA; it does not enable remote Briosa execution.

## set_calibration_appliance_node_trapping_node_id

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```python
async def set_calibration_appliance_node_trapping_node_id(
    self,
    calibration_appliance_node: CollectionObjectName,
    trapping_node_id: int = 0,
) -> None: ...
```

## enable_disable_calibration_appliance_node_trap_manager

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```python
async def enable_disable_calibration_appliance_node_trap_manager(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    enable: bool = True,
) -> None: ...
```

## clear_calibration_appliance_node_trap_manager_requests

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```python
async def clear_calibration_appliance_node_trap_manager_requests(
    self,
    calibration_appliance_node: CollectionObjectName,
) -> None: ...
```

## set_calibration_appliance_node_integer_value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```python
async def set_calibration_appliance_node_integer_value(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    index_offset: int = 0,
    integer_value: int = 0,
) -> None: ...
```

## get_calibration_appliance_node_integer_value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```python
async def get_calibration_appliance_node_integer_value(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    index_offset: int = 0,
) -> int: ...
```

## set_calibration_appliance_node_real_value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```python
async def set_calibration_appliance_node_real_value(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    index_offset: int = 0,
    real_value: float = 0.0,
) -> None: ...
```

## get_calibration_appliance_node_real_value

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```python
async def get_calibration_appliance_node_real_value(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    index_offset: int = 0,
) -> float: ...
```

## set_calibration_appliance_node_data

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```python
async def set_calibration_appliance_node_data(
    self,
    calibration_appliance_node: CollectionObjectName,
    real_values: Iterable[float] = (),
) -> None: ...
```

The empty iterable preserves the exact MP default. The SA 2026.1 SDK does not
expose the command's `Integer Values` input, so this is a documented
real-values-only contract.

## get_calibration_appliance_node_data

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```python
async def get_calibration_appliance_node_data(
    self,
    calibration_appliance_node: CollectionObjectName,
    real_value_count: int,
) -> list[float]: ...
```

`real_value_count` is required SDK retrieval metadata, not an MP input or
retained SA state. The result contains only the SDK-supported `Real Values`.

## set_calibration_appliance_node_display_robot

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```python
async def set_calibration_appliance_node_display_robot(
    self,
    calibration_appliance_node: CollectionObjectName,
    machine_id: CollectionMachineId,
) -> None: ...
```

## update_calibration_appliance_node_display_robot_joints

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```python
async def update_calibration_appliance_node_display_robot_joints(
    self,
    calibration_appliance_node: CollectionObjectName,
    *,
    enable_display_robot_joint_updates: bool = True,
) -> None: ...
```

## get_calibration_appliance_node_status

[MP command](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```python
async def get_calibration_appliance_node_status(
    self,
    calibration_appliance_node: CollectionObjectName,
) -> CalibrationApplianceNodeStatus: ...
```

The result is a point-in-time SA status snapshot and does not establish Briosa
execution readiness. The client does not retain it.

Index offsets are passed through without bounds preflight. These coroutines
retain no trap-manager or appliance workflow state.

The dwell time and trapping node ID are passed through without added Briosa
range restrictions. Skip retains no intermediate workflow state.

Node references must use SA type `Calibration Appliance Node`. These coroutines
retain no workflow state, add no dependency preflight, and are never
automatically replayed.
