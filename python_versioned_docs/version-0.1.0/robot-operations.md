---
title: Robot Operations
description: Briosa 0.1.0 Python APIs for reviewed Robot Operations MP commands.
toc_max_heading_level: 2
---

# Robot Operations

## Shared Types

```python
class RobotModelLinkType(StrEnum):
    DH = "DH"
    SIX_DOF = "6DOF"

class RobotActiveJointComponent(StrEnum):
    NONE = "NONE"
    X = "X"
    Y = "Y"
    Z = "Z"
    RX = "Rx"
    RY = "Ry"
    RZ = "Rz"
    ALPHA = "Alpha"
    A = "A"
    D = "D"
    THETA = "THETA"

@dataclass(frozen=True, slots=True, kw_only=True)
class RobotModelLinkConfiguration:
    link_type: RobotModelLinkType = RobotModelLinkType.DH
    dh_alpha_component: float = 0.0
    dh_a_component: float = 0.0
    dh_d_component: float = 0.0
    dh_theta_component: float = 0.0
    dh_x_axis_deflection_factor: float = 0.0
    dh_y_axis_deflection_factor: float = 0.0
    dh_z_axis_deflection_factor: float = 0.0
    six_dof_x_component: float = 0.0
    six_dof_y_component: float = 0.0
    six_dof_z_component: float = 0.0
    six_dof_rx_component: float = 0.0
    six_dof_ry_component: float = 0.0
    six_dof_rz_component: float = 0.0
    active_joint_component: RobotActiveJointComponent = RobotActiveJointComponent.NONE
    encoder_offset_value: float = 0.0
    minimum_encoder_limit: float = 0.0
    maximum_encoder_limit: float = 0.0
    encoder_sense_negative: bool = False
    include_additional_encoder: bool = False
    additional_encoder_index_offset: int = 0
    additional_encoder_sense_negative: bool = False
    segment_origin_mass_kg: float = 0.0
    segment_cg_mass_kg: float = 0.0
    segment_cg_in_segment: Vector = Vector(0.0, 0.0, 0.0)

@dataclass(frozen=True, slots=True, kw_only=True)
class RobotModelLinkParameters:
    configuration: RobotModelLinkConfiguration
    encoder_value: float

@dataclass(frozen=True, slots=True, kw_only=True)
class RobotCalibrationMetrics:
    xyz_max: float
    xyz_average: float
    xyz_rms: float
    orient_max: float
    orient_average: float
    orient_rms: float
    robustness: float
```

The client maps the enums to the exact MP choices. `six_dof_z_component` maps
internally to the exact SDK literal `6DPF Z Component`.

## add_robot_machine_sa_machine

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-samachine)

```python
async def add_robot_machine_sa_machine(
    self,
    sa_machine_file: FileReference,
) -> None: ...
```

## add_robot_machine_manip_kin

[MP command](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC contract](/api/grpc/robot-operations#add-robotmachine-manipkin)

```python
async def add_robot_machine_manip_kin(
    self,
    manip_kin_file: FileReference,
) -> None: ...
```

Both coroutines accept the shared local-SA path or embedded-file
representation.

## delete_robot_machine

[MP command](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC contract](/api/grpc/robot-operations#delete-robotmachine)

```python
async def delete_robot_machine(
    self,
    machine_id: CollectionMachineId,
) -> None: ...
```

## move_robot_machine_to_frame

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-frame)

```python
async def move_robot_machine_to_frame(
    self,
    machine_id: CollectionMachineId,
    destination_frame: CollectionObjectName,
    *,
    use_sa_kinematics: bool = False,
    acknowledge_arrival: bool = False,
) -> Transform: ...
```

Returns `Actual Transform In Working (result)`.

## move_robot_machine_through_path

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-through-path)

```python
async def move_robot_machine_through_path(
    self,
    machine_id: CollectionMachineId,
    path_frames: Iterable[CollectionObjectName],
    *,
    use_sa_kinematics: bool = True,
    linear_segments: bool = False,
    acknowledge_arrival: bool = True,
) -> None: ...
```

## move_robot_machine_to_named_destination

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-named-destination)

```python
async def move_robot_machine_to_named_destination(
    self,
    machine_id: CollectionMachineId,
    destination_name: str = "",
    *,
    acknowledge_arrival: bool = False,
) -> Transform: ...
```

Returns `Actual Transform In Working (result)`.

## set_robot_machine_parameter

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-parameter)

```python
async def set_robot_machine_parameter(
    self,
    machine_id: CollectionMachineId,
    parameter_name: str = "",
    parameter_value: float = 0.0,
) -> None: ...
```

## get_robot_machine_parameter

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-parameter)

```python
async def get_robot_machine_parameter(
    self,
    machine_id: CollectionMachineId,
    parameter_name: str = "",
) -> float: ...
```

Parameter names and values are passed through without a machine-specific
allowlist.

## set_robot_machine_model_link_parameters

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-model-link-parameters)

```python
async def set_robot_machine_model_link_parameters(
    self,
    machine_id: CollectionMachineId,
    link_name: str = "",
    configuration: RobotModelLinkConfiguration | None = None,
) -> None: ...
```

`None` uses every exact MP default. Briosa adds no kinematic or encoder-range
validation.

## get_robot_machine_model_link_parameters

[MP command](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC contract](/api/grpc/robot-operations#get-robotmachine-model-link-parameters)

```python
async def get_robot_machine_model_link_parameters(
    self,
    machine_id: CollectionMachineId,
    link_name: str = "",
) -> RobotModelLinkParameters: ...
```

The result includes all exact-target outputs, including `encoder_value`.

## set_robot_machine_base_transform

[MP command](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC contract](/api/grpc/robot-operations#set-robotmachine-base-transform)

```python
async def set_robot_machine_base_transform(
    self,
    machine_id: CollectionMachineId,
    reference_frame: CollectionObjectName,
    *,
    destination_transform: Transform | None = None,
    number_of_steps: int = 0,
) -> None: ...
```

`None` uses the exact MP identity-transform default.

## start_robot_machine_interface

[MP command](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#start-robotmachine-interface)

```python
async def start_robot_machine_interface(
    self,
    machine_id: CollectionMachineId,
    *,
    interface_type: int = 0,
    run_in_simulation: bool = False,
) -> None: ...
```

Interface type `0` runs the SARobotDriver. Other values remain
machine-specific.

## stop_robot_machine_interface

[MP command](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC contract](/api/grpc/robot-operations#stop-robotmachine-interface)

```python
async def stop_robot_machine_interface(
    self,
    machine_id: CollectionMachineId,
) -> None: ...
```

## compute_robot_machine_adjusted_goal_frame

[MP command](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC contract](/api/grpc/robot-operations#compute-robotmachine-adjusted-goal-frame)

```python
async def compute_robot_machine_adjusted_goal_frame(
    self,
    original_goal_frame: CollectionObjectName,
    last_adjusted_goal_frame: CollectionObjectName,
    actual_measured_frame: CollectionObjectName,
    modified_goal_frame: CollectionObjectName,
) -> Transform: ...
```

The coroutine returns `Transform Value`. The caller owns every Frame and
iteration in the adjusted-goal workflow.

## move_robot_machine_to_joint_pose_six_dof

[MP command](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC contract](/api/grpc/robot-operations#move-robotmachine-to-joint-pose-6dof)

```python
async def move_robot_machine_to_joint_pose_six_dof(
    self,
    machine_id: CollectionMachineId,
    *,
    joint_1: float = 0.0,
    joint_2: float = 0.0,
    joint_3: float = 0.0,
    joint_4: float = 0.0,
    joint_5: float = 0.0,
    joint_6: float = 0.0,
) -> None: ...
```

## simulate_robot_machine_path_output_csv_file

[MP command](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC contract](/api/grpc/robot-operations#simulate-robotmachine-path-output-csv-file)

```python
async def simulate_robot_machine_path_output_csv_file(
    self,
    machine_id: CollectionMachineId,
    path_frames: Iterable[CollectionObjectName],
    output_csv_file: FileReference,
) -> None: ...
```

## create_robot_calibration

[MP command](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#create-robot-calibration)

```python
async def create_robot_calibration(
    self,
    machine_id: CollectionMachineId,
    calibration_name: str = "",
) -> None: ...
```

## delete_robot_calibration

[MP command](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#delete-robot-calibration)

```python
async def delete_robot_calibration(
    self,
    machine_id: CollectionMachineId,
    calibration_name: str = "",
) -> None: ...
```

## import_poses_match_to_measurements

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-measurements)

```python
async def import_poses_match_to_measurements(
    self,
    machine_id: CollectionMachineId,
    *,
    calibration_name: str = "",
    point_names: Iterable[PointName],
    csv_joint_set_file: FileReference,
) -> None: ...
```

## import_poses_match_to_frames

[MP command](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC contract](/api/grpc/robot-operations#import-poses-match-to-frames)

```python
async def import_poses_match_to_frames(
    self,
    machine_id: CollectionMachineId,
    *,
    calibration_name: str = "",
    frame_names: Iterable[CollectionObjectName],
    csv_joint_set_file: FileReference,
) -> None: ...
```

Both import coroutines use the shared local-SA path or embedded-file
representation.

## perform_robot_calibration

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration)

```python
async def perform_robot_calibration(
    self,
    machine_id: CollectionMachineId,
    *,
    calibration_name: str = "",
    set_current_base_as_nominal: bool = False,
    show_interface: bool = False,
    allowed_outlier_rejection_count: int = 0,
    allowable_maximum_error: float = 0.0,
    allowable_average_error: float = 0.0,
) -> RobotCalibrationMetrics: ...
```

The exact SDK contract cannot set the composite `Degrees of Freedom` MP input,
so this coroutine omits it. The result contains all seven exact-target metrics.

## perform_robot_calibration_alternate

[MP command](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC contract](/api/grpc/robot-operations#perform-robot-calibration-alternate)

```python
async def perform_robot_calibration_alternate(
    self,
    machine_id: CollectionMachineId,
    *,
    calibration_name: str = "",
    set_current_base_as_nominal: bool = False,
    base_degrees_of_freedom: str = "",
    robot_degrees_of_freedom: str = "",
    tool_degrees_of_freedom: str = "",
    show_interface: bool = False,
    allowed_outlier_rejection_count: int = 0,
    allowable_maximum_error: float = 0.0,
    allowable_average_error: float = 0.0,
) -> RobotCalibrationMetrics: ...
```

The three DOF strings are passed directly to SA without client interpretation.

## start_stop_robot_calibration_trapping

[MP command](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC contract](/api/grpc/robot-operations#startstop-robot-calibration-trapping)

```python
async def start_stop_robot_calibration_trapping(
    self,
    machine_id: CollectionMachineId,
    instrument_id: CollectionInstrumentId,
    *,
    calibration_name: str = "",
    start_trapping: bool = False,
) -> None: ...
```

`False` stops trapping. The client retains no trapping state.

## set_active_robot_calibration

[MP command](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC contract](/api/grpc/robot-operations#set-active-robot-calibration)

```python
async def set_active_robot_calibration(
    self,
    machine_id: CollectionMachineId,
    calibration_name: str = "",
) -> None: ...
```

## set_robot_calibration_tool_frame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-tool-frame)

```python
async def set_robot_calibration_tool_frame(
    self,
    machine_id: CollectionMachineId,
    calibration_name: str = "",
    *,
    tool_frame_relative_to_flange: Transform | None = None,
) -> None: ...
```

`None` uses the exact identity-transform default.

## set_robot_calibration_measurement_offset_in_tool_frame

[MP command](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC contract](/api/grpc/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

```python
async def set_robot_calibration_measurement_offset_in_tool_frame(
    self,
    machine_id: CollectionMachineId,
    calibration_name: str = "",
    *,
    measurement_frame_relative_to_tool: Transform | None = None,
) -> None: ...
```

`None` uses the exact identity-transform default.

## get_robot_pose_for_a_frame

[MP command](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC contract](/api/grpc/robot-operations#get-robot-pose-for-a-frame)

```python
async def get_robot_pose_for_a_frame(
    self,
    machine_id: CollectionMachineId,
    goal_frame: CollectionObjectName,
    *,
    reference_pose: Iterable[float] = (),
    goal_pose_count: int,
) -> list[float]: ...
```

An empty reference pose tells SA to use the current robot pose.
`goal_pose_count` is required SDK retrieval metadata.

## get_calibration_appliance_integer_value

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-integer-value)

```python
async def get_calibration_appliance_integer_value(
    self,
    index_offset: int = 0,
) -> int: ...
```

## set_calibration_appliance_integer_value

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-integer-value)

```python
async def set_calibration_appliance_integer_value(
    self,
    index_offset: int = 0,
    integer_value: int = 0,
) -> None: ...
```

## get_calibration_appliance_real_value

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-real-value)

```python
async def get_calibration_appliance_real_value(
    self,
    index_offset: int = 0,
) -> float: ...
```

## set_calibration_appliance_real_value

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-real-value)

```python
async def set_calibration_appliance_real_value(
    self,
    index_offset: int = 0,
    real_value: float = 0.0,
) -> None: ...
```

## get_calibration_appliance_data

[MP command](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#get-calibration-appliance-data)

```python
async def get_calibration_appliance_data(
    self,
    real_value_count: int,
) -> list[float]: ...
```

`real_value_count` is required SDK retrieval metadata. The SDK cannot retrieve
the MP `Integer Values` output, so the coroutine returns only `Real Values`.

## set_calibration_appliance_data

[MP command](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC contract](/api/grpc/robot-operations#set-calibration-appliance-data)

```python
async def set_calibration_appliance_data(
    self,
    real_values: Iterable[float] = (),
) -> None: ...
```

The SDK cannot set the MP `Integer Values` input, so this is a
real-values-only contract.

The calibration-appliance coroutines pass offsets through without client-side
bounds checks.

These coroutines retain no Robot/Machine workflow state, add no hardware safety
preflight, and are never automatically replayed.
