---
title: Robot Calibration Appliance Node Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Robot Calibration Appliance Node Operations

[SA 2026.1.0529.7](/api/python/robot-calibration-appliance-node-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/robot-calibration-appliance-node-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Add Calibration Appliance Node {/* #add-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#add-calibration-appliance-node) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#add-calibration-appliance-node)

```python
async def add_calibration_appliance_node(
        self,
        calibration_appliance_node_to_add: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Calibration Appliance Node {/* #delete-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#delete-calibration-appliance-node) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#delete-calibration-appliance-node)

```python
async def delete_calibration_appliance_node(
        self,
        calibration_appliance_node_to_delete: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Connect/Disconnect Calibration Appliance Node {/* #connectdisconnect-calibration-appliance-node */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#connectdisconnect-calibration-appliance-node)

```python
async def connect_disconnect_calibration_appliance_node(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        connect: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument {/* #set-calibration-appliance-node-instrument */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument)

```python
async def set_calibration_appliance_node_instrument(
        self,
        calibration_appliance_node: CollectionObjectName,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Profile {/* #set-calibration-appliance-node-measurement-profile */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-profile)

```python
async def set_calibration_appliance_node_measurement_profile(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        measurement_profile: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Target {/* #set-calibration-appliance-node-measurement-target */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-target)

```python
async def set_calibration_appliance_node_measurement_target(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        measurement_target: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Instrument Auto Point {/* #enabledisable-calibration-appliance-node-instrument-auto-point */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-instrument-auto-point)

```python
async def enable_disable_calibration_appliance_node_instrument_auto_point(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        enable_instrument_auto_point: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Instrument Dwell Time {/* #set-calibration-appliance-node-instrument-dwell-time */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-instrument-dwell-time)

```python
async def set_calibration_appliance_node_instrument_dwell_time(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        measurement_dwell_time: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `measurement_dwell_time` | Time in seconds. |

## Skip Calibration Appliance Node Measurement {/* #skip-calibration-appliance-node-measurement */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#skip-calibration-appliance-node-measurement)

```python
async def skip_calibration_appliance_node_measurement(
        self,
        calibration_appliance_node: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Frame {/* #set-calibration-appliance-node-measurement-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-frame)

```python
async def set_calibration_appliance_node_measurement_frame(
        self,
        calibration_appliance_node: CollectionObjectName,
        measurement_reference_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Offset Transform {/* #set-calibration-appliance-node-measurement-offset-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-offset-transform)

```python
async def set_calibration_appliance_node_measurement_offset_transform(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        measurement_offset_transform: Transform | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Measurement Point Group {/* #set-calibration-appliance-node-measurement-point-group */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-measurement-point-group)

```python
async def set_calibration_appliance_node_measurement_point_group(
        self,
        calibration_appliance_node: CollectionObjectName,
        point_group_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Calibration Appliance IP Address {/* #set-calibration-appliance-node-calibration-appliance-ip-address */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-calibration-appliance-ip-address)

```python
async def set_calibration_appliance_node_calibration_appliance_ip_address(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        calibration_appliance_ip_address: str = "0.0.0.0",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Trapping Node ID {/* #set-calibration-appliance-node-trapping-node-id */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-trapping-node-id)

```python
async def set_calibration_appliance_node_trapping_node_id(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        trapping_node_id: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Calibration Appliance Node Trap Manager {/* #enabledisable-calibration-appliance-node-trap-manager */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#enabledisable-calibration-appliance-node-trap-manager)

```python
async def enable_disable_calibration_appliance_node_trap_manager(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        enable: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Clear Calibration Appliance Node Trap Manager Requests {/* #clear-calibration-appliance-node-trap-manager-requests */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#clear-calibration-appliance-node-trap-manager-requests)

```python
async def clear_calibration_appliance_node_trap_manager_requests(
        self,
        calibration_appliance_node: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Integer Value {/* #set-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-integer-value)

```python
async def set_calibration_appliance_node_integer_value(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        index_offset: int = 0,
        integer_value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Integer Value {/* #get-calibration-appliance-node-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-integer-value)

```python
async def get_calibration_appliance_node_integer_value(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        index_offset: int = 0,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Real Value {/* #set-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-real-value)

```python
async def set_calibration_appliance_node_real_value(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        index_offset: int = 0,
        real_value: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Real Value {/* #get-calibration-appliance-node-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-real-value)

```python
async def get_calibration_appliance_node_real_value(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        index_offset: int = 0,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Data {/* #set-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-data)

```python
async def set_calibration_appliance_node_data(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        real_values: Iterable[float] = (),
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Data {/* #get-calibration-appliance-node-data */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-data)

```python
async def get_calibration_appliance_node_data(
        self,
        calibration_appliance_node: CollectionObjectName,
        real_value_count: int,
    ) -> list[float]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Node Display Robot {/* #set-calibration-appliance-node-display-robot */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#set-calibration-appliance-node-display-robot)

```python
async def set_calibration_appliance_node_display_robot(
        self,
        calibration_appliance_node: CollectionObjectName,
        machine_id: CollectionMachineId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Update Calibration Appliance Node Display Robot Joints {/* #update-calibration-appliance-node-display-robot-joints */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#update-calibration-appliance-node-display-robot-joints)

```python
async def update_calibration_appliance_node_display_robot_joints(
        self,
        calibration_appliance_node: CollectionObjectName,
        *,
        enable_display_robot_joint_updates: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Node Status {/* #get-calibration-appliance-node-status */}

[MP Catalog](/mp-command-catalog/commands/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status) · [gRPC Contract](/api/grpc/robot-calibration-appliance-node-operations#get-calibration-appliance-node-status)

```python
async def get_calibration_appliance_node_status(
        self,
        calibration_appliance_node: CollectionObjectName,
    ) -> CalibrationApplianceNodeStatus: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Type {/* #result-type */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## add_calibration_appliance_node {/* #add_calibration_appliance_node */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_calibration_appliance_node {/* #delete_calibration_appliance_node */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## connect_disconnect_calibration_appliance_node {/* #connect_disconnect_calibration_appliance_node */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_instrument {/* #set_calibration_appliance_node_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_measurement_profile {/* #set_calibration_appliance_node_measurement_profile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_measurement_target {/* #set_calibration_appliance_node_measurement_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enable_disable_calibration_appliance_node_instrument_auto_point {/* #enable_disable_calibration_appliance_node_instrument_auto_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_instrument_dwell_time {/* #set_calibration_appliance_node_instrument_dwell_time */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## skip_calibration_appliance_node_measurement {/* #skip_calibration_appliance_node_measurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_measurement_frame {/* #set_calibration_appliance_node_measurement_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_measurement_offset_transform {/* #set_calibration_appliance_node_measurement_offset_transform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_measurement_point_group {/* #set_calibration_appliance_node_measurement_point_group */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_calibration_appliance_ip_address {/* #set_calibration_appliance_node_calibration_appliance_ip_address */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_trapping_node_id {/* #set_calibration_appliance_node_trapping_node_id */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enable_disable_calibration_appliance_node_trap_manager {/* #enable_disable_calibration_appliance_node_trap_manager */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## clear_calibration_appliance_node_trap_manager_requests {/* #clear_calibration_appliance_node_trap_manager_requests */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_integer_value {/* #set_calibration_appliance_node_integer_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_node_integer_value {/* #get_calibration_appliance_node_integer_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_real_value {/* #set_calibration_appliance_node_real_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_node_real_value {/* #get_calibration_appliance_node_real_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_data {/* #set_calibration_appliance_node_data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_node_data {/* #get_calibration_appliance_node_data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_node_display_robot {/* #set_calibration_appliance_node_display_robot */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## update_calibration_appliance_node_display_robot_joints {/* #update_calibration_appliance_node_display_robot_joints */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_node_status {/* #get_calibration_appliance_node_status */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2026.1.0529.7)
