---
title: Robot Operations
description: Released python 0.5.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Robot Operations

[SA 2026.1.0529.7](/api/python/robot-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/robot-operations)

This reference covers **SA 2026.1.0529.7**, client **0.5.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation. The keyword-only `on_mp_completion` observer reports how a successful call's MP command completed; see [MP Completion](./lifecycle.md#mp-completion).

## Add Robot/Machine (.SAMachine) {/* #add-robotmachine-samachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-samachine) · [gRPC Contract](/api/grpc/robot-operations#add-robotmachine-samachine)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```python
async def add_robot_machine_sa_machine(
        self,
        sa_machine_file: FileReference,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Robot/Machine (.ManipKin) {/* #add-robotmachine-manipkin */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#add-robotmachine-manipkin) · [gRPC Contract](/api/grpc/robot-operations#add-robotmachine-manipkin)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```python
async def add_robot_machine_manip_kin(
        self,
        manip_kin_file: FileReference,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot/Machine {/* #delete-robotmachine */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robotmachine) · [gRPC Contract](/api/grpc/robot-operations#delete-robotmachine)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def delete_robot_machine(
        self,
        machine_id: CollectionMachineId,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Frame {/* #move-robotmachine-to-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-frame) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledge_arrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```python
async def move_robot_machine_to_frame(
        self,
        machine_id: CollectionMachineId,
        destination_frame: CollectionObjectName,
        *,
        use_sa_kinematics: bool = False,
        acknowledge_arrival: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine through Path {/* #move-robotmachine-through-path */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-through-path) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-through-path)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledge_arrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```python
async def move_robot_machine_through_path(
        self,
        machine_id: CollectionMachineId,
        path_frames: Iterable[CollectionObjectName],
        *,
        use_sa_kinematics: bool = True,
        linear_segments: bool = False,
        acknowledge_arrival: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Named Destination {/* #move-robotmachine-to-named-destination */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-named-destination) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-named-destination)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `acknowledge_arrival` to false is denied under every setting, because the call would return before the work it starts has finished.

```python
async def move_robot_machine_to_named_destination(
        self,
        machine_id: CollectionMachineId,
        *,
        destination_name: str = "",
        acknowledge_arrival: bool = True,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Parameter {/* #set-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-parameter) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-parameter)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session`, `device_config` · **Duration Class:** `long_running`

```python
async def set_robot_machine_parameter(
        self,
        machine_id: CollectionMachineId,
        parameter_name: str,
        *,
        parameter_value: float,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `parameter_value` | Required (major 3): an omitted value is rejected before dispatch instead of being sent as 0. |

## Get Robot/Machine Parameter {/* #get-robotmachine-parameter */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-parameter) · [gRPC Contract](/api/grpc/robot-operations#get-robotmachine-parameter)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def get_robot_machine_parameter(
        self,
        machine_id: CollectionInstrumentId,
        *,
        parameter_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Model Link Parameters {/* #set-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-model-link-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_robot_machine_model_link_parameters(
        self,
        machine_id: CollectionMachineId,
        *,
        link_name: str = "",
        configuration: RobotModelLinkConfiguration,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `configuration` | The scalar parameters from `dh_alpha_component` through `segment_cg_mass_kg` are required (major 3): a request that omits one is rejected before dispatch instead of overwriting it with 0 or false. |

## Get Robot/Machine Model Link Parameters {/* #get-robotmachine-model-link-parameters */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robotmachine-model-link-parameters) · [gRPC Contract](/api/grpc/robot-operations#get-robotmachine-model-link-parameters)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_robot_machine_model_link_parameters(
        self,
        machine_id: CollectionMachineId,
        *,
        link_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> RobotModelLinkParameters: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot/Machine Base Transform {/* #set-robotmachine-base-transform */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robotmachine-base-transform) · [gRPC Contract](/api/grpc/robot-operations#set-robotmachine-base-transform)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def set_robot_machine_base_transform(
        self,
        machine_id: CollectionMachineId,
        reference_frame: CollectionObjectName,
        *,
        destination_transform: Transform,
        number_of_steps: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Robot/Machine Interface {/* #start-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#start-robotmachine-interface) · [gRPC Contract](/api/grpc/robot-operations#start-robotmachine-interface)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def start_robot_machine_interface(
        self,
        machine_id: CollectionInstrumentId,
        *,
        interface_type: int = 0,
        run_in_simulation: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Robot/Machine Interface {/* #stop-robotmachine-interface */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#stop-robotmachine-interface) · [gRPC Contract](/api/grpc/robot-operations#stop-robotmachine-interface)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def stop_robot_machine_interface(
        self,
        machine_id: CollectionInstrumentId,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Compute Robot/Machine Adjusted Goal Frame {/* #compute-robotmachine-adjusted-goal-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#compute-robotmachine-adjusted-goal-frame) · [gRPC Contract](/api/grpc/robot-operations#compute-robotmachine-adjusted-goal-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def compute_robot_machine_adjusted_goal_frame(
        self,
        original_goal_frame: CollectionObjectName,
        last_adjusted_goal_frame: CollectionObjectName,
        actual_measured_frame: CollectionObjectName,
        modified_goal_frame: CollectionObjectName,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Robot/Machine to Joint Pose (6DOF) {/* #move-robotmachine-to-joint-pose-6dof */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#move-robotmachine-to-joint-pose-6dof) · [gRPC Contract](/api/grpc/robot-operations#move-robotmachine-to-joint-pose-6dof)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

```python
async def move_robot_machine_to_joint_pose_six_dof(
        self,
        machine_id: CollectionMachineId,
        joint_1: float,
        joint_2: float,
        joint_3: float,
        joint_4: float,
        joint_5: float,
        joint_6: float,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `joint_1` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint_2` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint_3` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint_4` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint_5` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |
| `joint_6` | Required (major 3): an omitted joint is rejected before dispatch instead of being sent as 0. |

## Simulate Robot/Machine Path, Output CSV File {/* #simulate-robotmachine-path-output-csv-file */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#simulate-robotmachine-path-output-csv-file) · [gRPC Contract](/api/grpc/robot-operations#simulate-robotmachine-path-output-csv-file)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_write` · **Duration Class:** `long_running`

```python
async def simulate_robot_machine_path_output_csv_file(
        self,
        machine_id: CollectionMachineId,
        path_frames: Iterable[CollectionObjectName],
        output_csv_file: FileReference,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create Robot Calibration {/* #create-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#create-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#create-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def create_robot_calibration(
        self,
        machine_id: CollectionMachineId,
        *,
        calibration_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Robot Calibration {/* #delete-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#delete-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#delete-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `destructive` · **Duration Class:** `quick`

```python
async def delete_robot_calibration(
        self,
        machine_id: CollectionMachineId,
        calibration_name: str,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `calibration_name` | Required and not empty (major 3): an omitted, empty or whitespace-only value is rejected before dispatch. |

## Import Poses Match to Measurements {/* #import-poses-match-to-measurements */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-measurements) · [gRPC Contract](/api/grpc/robot-operations#import-poses-match-to-measurements)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```python
async def import_poses_match_to_measurements(
        self,
        machine_id: CollectionMachineId,
        point_names: Iterable[PointName],
        csv_joint_set_file: FileReference,
        *,
        calibration_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Import Poses Match to Frames {/* #import-poses-match-to-frames */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#import-poses-match-to-frames) · [gRPC Contract](/api/grpc/robot-operations#import-poses-match-to-frames)

**[Admission Profiles](/docs/deployment/operation-admission):** `standard`, `device`, `full` · **Risk Flags:** `filesystem_read` · **Duration Class:** `quick`

```python
async def import_poses_match_to_frames(
        self,
        machine_id: CollectionMachineId,
        frame_names: Iterable[CollectionObjectName],
        csv_joint_set_file: FileReference,
        *,
        calibration_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration {/* #perform-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#perform-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `show_interface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> RobotCalibrationMetrics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Perform Robot Calibration (Alternate) {/* #perform-robot-calibration-alternate */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#perform-robot-calibration-alternate) · [gRPC Contract](/api/grpc/robot-operations#perform-robot-calibration-alternate)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `physical_motion`, `device_session` · **Duration Class:** `long_running`

A request that sets `show_interface` to true also needs the [interactive opt-in](/docs/deployment/operation-admission#interactive-operations), because SpatialAnalyzer then opens operator UI.

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
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> RobotCalibrationMetrics: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start/Stop Robot Calibration Trapping {/* #startstop-robot-calibration-trapping */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#startstop-robot-calibration-trapping) · [gRPC Contract](/api/grpc/robot-operations#startstop-robot-calibration-trapping)

**[Admission Profiles](/docs/deployment/operation-admission):** none; an exclusive workflow, which no profile, flag, or override admits · **Risk Flags:** `device_session` · **Duration Class:** `long_running`

```python
async def start_stop_robot_calibration_trapping(
        self,
        machine_id: CollectionMachineId,
        instrument_id: CollectionInstrumentId,
        *,
        calibration_name: str = "",
        start_trapping: bool = False,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Robot Calibration {/* #set-active-robot-calibration */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-active-robot-calibration) · [gRPC Contract](/api/grpc/robot-operations#set-active-robot-calibration)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_active_robot_calibration(
        self,
        machine_id: CollectionMachineId,
        *,
        calibration_name: str = "",
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Robot Calibration Tool Frame {/* #set-robot-calibration-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-tool-frame) · [gRPC Contract](/api/grpc/robot-operations#set-robot-calibration-tool-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_robot_calibration_tool_frame(
        self,
        machine_id: CollectionMachineId,
        *,
        calibration_name: str = "",
        tool_frame: Transform,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `tool_frame` | MP qualifier: relative to flange. |

## Set Robot Calibration Measurement Offset In Tool Frame {/* #set-robot-calibration-measurement-offset-in-tool-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame) · [gRPC Contract](/api/grpc/robot-operations#set-robot-calibration-measurement-offset-in-tool-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `device`, `full` · **Risk Flags:** `device_config` · **Duration Class:** `quick`

```python
async def set_robot_calibration_measurement_offset_in_tool_frame(
        self,
        machine_id: CollectionMachineId,
        *,
        calibration_name: str = "",
        measurement_frame: Transform,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes:

| Member | Meaning |
| --- | --- |
| `measurement_frame` | MP qualifier: relative to tool. |

## Get Robot Pose for a Frame {/* #get-robot-pose-for-a-frame */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-robot-pose-for-a-frame) · [gRPC Contract](/api/grpc/robot-operations#get-robot-pose-for-a-frame)

**[Admission Profiles](/docs/deployment/operation-admission):** `read-only`, `standard`, `device`, `full` · **Risk Flags:** none · **Duration Class:** `quick`

```python
async def get_robot_pose_for_a_frame(
        self,
        machine_id: CollectionMachineId,
        goal_frame: CollectionObjectName,
        goal_pose_count: int,
        *,
        reference_pose: Iterable[float] = (),
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[float]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Integer Value {/* #get-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-integer-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def get_calibration_appliance_integer_value(
        self,
        *,
        index_offset: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Integer Value {/* #set-calibration-appliance-integer-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-integer-value) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-integer-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def set_calibration_appliance_integer_value(
        self,
        *,
        index_offset: int = 0,
        integer_value: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Real Value {/* #get-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-real-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def get_calibration_appliance_real_value(
        self,
        *,
        index_offset: int = 0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Real Value {/* #set-calibration-appliance-real-value */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-real-value) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-real-value)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def set_calibration_appliance_real_value(
        self,
        *,
        index_offset: int = 0,
        real_value: float = 0.0,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Calibration Appliance Data {/* #get-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#get-calibration-appliance-data) · [gRPC Contract](/api/grpc/robot-operations#get-calibration-appliance-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def get_calibration_appliance_data(
        self,
        real_value_count: int,
        *,
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> list[float]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Calibration Appliance Data {/* #set-calibration-appliance-data */}

[MP Catalog](/mp-command-catalog/commands/robot-operations#set-calibration-appliance-data) · [gRPC Contract](/api/grpc/robot-operations#set-calibration-appliance-data)

**[Admission Profiles](/docs/deployment/operation-admission):** `full` · **Risk Flags:** `device_session`, `device_config`, `external_io` · **Duration Class:** `long_running`

```python
async def set_calibration_appliance_data(
        self,
        *,
        real_values: Iterable[float] = (),
        on_mp_completion: MpCompletionObserver | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Shared Types {/* #shared-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## add_robot_machine_sa_machine {/* #add_robot_machine_sa_machine */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## add_robot_machine_manip_kin {/* #add_robot_machine_manip_kin */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_robot_machine {/* #delete_robot_machine */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_robot_machine_to_frame {/* #move_robot_machine_to_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_robot_machine_through_path {/* #move_robot_machine_through_path */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_robot_machine_to_named_destination {/* #move_robot_machine_to_named_destination */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_robot_machine_parameter {/* #set_robot_machine_parameter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_robot_machine_parameter {/* #get_robot_machine_parameter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_robot_machine_model_link_parameters {/* #set_robot_machine_model_link_parameters */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_robot_machine_model_link_parameters {/* #get_robot_machine_model_link_parameters */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_robot_machine_base_transform {/* #set_robot_machine_base_transform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_robot_machine_interface {/* #start_robot_machine_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stop_robot_machine_interface {/* #stop_robot_machine_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## compute_robot_machine_adjusted_goal_frame {/* #compute_robot_machine_adjusted_goal_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_robot_machine_to_joint_pose_six_dof {/* #move_robot_machine_to_joint_pose_six_dof */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## simulate_robot_machine_path_output_csv_file {/* #simulate_robot_machine_path_output_csv_file */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## create_robot_calibration {/* #create_robot_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_robot_calibration {/* #delete_robot_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## import_poses_match_to_measurements {/* #import_poses_match_to_measurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## import_poses_match_to_frames {/* #import_poses_match_to_frames */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## perform_robot_calibration {/* #perform_robot_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## perform_robot_calibration_alternate {/* #perform_robot_calibration_alternate */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_stop_robot_calibration_trapping {/* #start_stop_robot_calibration_trapping */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_active_robot_calibration {/* #set_active_robot_calibration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_robot_calibration_tool_frame {/* #set_robot_calibration_tool_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_robot_calibration_measurement_offset_in_tool_frame {/* #set_robot_calibration_measurement_offset_in_tool_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_robot_pose_for_a_frame {/* #get_robot_pose_for_a_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_integer_value {/* #get_calibration_appliance_integer_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_integer_value {/* #set_calibration_appliance_integer_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_real_value {/* #get_calibration_appliance_real_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_real_value {/* #set_calibration_appliance_real_value */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_calibration_appliance_data {/* #get_calibration_appliance_data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_calibration_appliance_data {/* #set_calibration_appliance_data */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/6a04ff934d554be0767bea997f9517676674b8a4/targets/2026.1.0529.7)
