---
title: Instrument Operations
description: Released python 0.3.0 operations, exact signatures, and defaults for SA 2024.1.0508.5.
toc_max_heading_level: 2
---

# Instrument Operations

[SA 2026.1.0529.7](/api/python/instrument-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/instrument-operations)

This reference covers **SA 2024.1.0508.5**, client **0.3.0**. Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Get Last Instrument Index {/* #get-last-instrument-index */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-last-instrument-index)

```python
async def get_last_instrument_index(
        self,
    ) -> LastInstrumentIndexResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Rename Instrument {/* #rename-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#rename-instrument)

```python
async def rename_instrument(
        self,
        instrument: CollectionInstrumentId,
        new_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument ID from Name {/* #get-instrument-id-from-name */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-id-from-name)

```python
async def get_instrument_id_from_name(
        self,
        name: str,
    ) -> CollectionInstrumentId: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Model {/* #get-instrument-model */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-model)

```python
async def get_instrument_model(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentModelResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instrument to Another Collection {/* #move-instrument-to-another-collection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-instrument-to-another-collection)

```python
async def move_instrument_to_another_collection(
        self,
        instrument: CollectionInstrumentId,
        collection_name: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Save Instrument Configuration {/* #save-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#save-instrument-configuration)

```python
async def save_instrument_configuration(
        self,
        instrument: CollectionInstrumentId,
        configuration_file: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Load Instrument Configuration {/* #load-instrument-configuration */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#load-instrument-configuration)

```python
async def load_instrument_configuration(
        self,
        instrument: CollectionInstrumentId,
        configuration_file: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Export Instrument History to XML File {/* #export-instrument-history-to-xml-file */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#export-instrument-history-to-xml-file)

```python
async def export_instrument_history_to_xml_file(
        self,
        instrument: CollectionInstrumentId,
        file_path: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Point At Target {/* #point-at-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#point-at-target)

```python
async def point_at_target(
        self,
        instrument: CollectionInstrumentId,
        target_id: PointName,
        *,
        html_prompt_file: FileReference | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Single Point Here {/* #measure-single-point-here */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-single-point-here)

```python
async def measure_single_point_here(
        self,
        instrument: CollectionInstrumentId,
        target_id: PointName,
        *,
        measure_immediately: bool = False,
        html_prompt_file: FileReference | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Current Instrument Position Update {/* #get-current-instrument-position-update */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-current-instrument-position-update)

```python
async def get_current_instrument_position_update(
        self,
        instrument: CollectionInstrumentId,
        *,
        reporting_frame: InstrumentPositionReportingFrame = InstrumentPositionReportingFrame.INSTRUMENT_BASE,
        polar_coordinates: bool = False,
    ) -> InstrumentPositionUpdate: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `y_or_theta` | Angle in degrees. |
| `z_or_phi` | Angle in degrees. |
| `time_since_update` | Time in seconds. |
| `timestamp` | MP qualifier: Approximate. |

## 'Build' Target {/* #build-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#build-target)

```python
async def build_target(
        self,
        instrument: CollectionInstrumentId,
        output_target_name: PointName,
        nominal_point: PointName,
        *,
        tolerance: ToleranceVectorOptions | None = None,
        html_prompt_file: FileReference | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point {/* #measure-existing-single-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point)

```python
async def measure_existing_single_point(
        self,
        instrument: CollectionInstrumentId,
        existing_target_id: PointName,
        group_name_for_new_point: CollectionObjectName,
        *,
        measure_immediately: bool = False,
        html_prompt_file: FileReference | None = None,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point (Manual Guide) {/* #measure-existing-single-point-manual-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point-manual-guide)

```python
async def measure_existing_single_point_manual_guide(
        self,
        instrument: CollectionInstrumentId,
        existing_target_id: PointName,
        group_name_for_new_point: CollectionObjectName,
        *,
        measure_immediately: bool = False,
        html_prompt_file: FileReference | None = None,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Existing Single Point and Compare {/* #measure-existing-single-point-and-compare */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-existing-single-point-and-compare)

```python
async def measure_existing_single_point_and_compare(
        self,
        instrument: CollectionInstrumentId,
        existing_target_id: PointName,
        group_name_for_new_point: CollectionObjectName,
        *,
        measure_immediately: bool = False,
        html_prompt_file: FileReference | None = None,
        tolerance: float = 0.0,
    ) -> PointComparisonResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Online (Measure Raw Frame) {/* #set-probe-offset-frame-online-measure-raw-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

```python
async def set_probe_offset_frame_online(
        self,
        instrument: CollectionInstrumentId,
        probe_name: str,
        offset_frame: CollectionObjectName,
        *,
        face_id: int = 0,
        measure_profile_name: str = "",
        timeout_seconds: float = 15.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Probe Offset Frame Offline (Select Previously Measured Frame) {/* #set-probe-offset-frame-offline-select-previously-measured-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

```python
async def set_probe_offset_frame_offline(
        self,
        instrument: CollectionInstrumentId,
        probe_name: str,
        raw_measured_frame: CollectionObjectName,
        offset_frame: CollectionObjectName,
        *,
        face_id: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Active Measurement Mode {/* #stop-active-measurement-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#stop-active-measurement-mode)

```python
async def stop_active_measurement_mode(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (All Instruments) {/* #enabledisable-frame-set-scan-mode-all-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```python
async def enable_disable_frame_set_scan_mode_all_instruments(
        self,
        *,
        enable_frame_set_scan_mode: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Frame Set Scan Mode (By Instrument) {/* #enabledisable-frame-set-scan-mode-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```python
async def enable_disable_frame_set_scan_mode_by_instrument(
        self,
        instrument: CollectionInstrumentId,
        *,
        enable_frame_set_scan_mode: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Enable/Disable Point Set Scan Mode {/* #enabledisable-point-set-scan-mode */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#enabledisable-point-set-scan-mode)

```python
async def enable_disable_point_set_scan_mode(
        self,
        instrument: CollectionInstrumentId,
        *,
        enable_point_set_scan_mode: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add New Instrument {/* #add-new-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#add-new-instrument)

```python
async def add_new_instrument(
        self,
        instrument_type: InstrumentTypeName,
    ) -> CollectionInstrumentId: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Instrument {/* #delete-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-instrument)

```python
async def delete_instrument(
        self,
        instrument: CollectionInstrumentId,
        *,
        prompt_user_to_confirm: bool = False,
        keep_resulting_points: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurements {/* #delete-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-measurements)

```python
async def delete_measurements(
        self,
        instrument: CollectionInstrumentId,
        point_name: PointName,
        *,
        delete_point_if_no_measurements_remain: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Measurement Observation {/* #delete-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#delete-measurement-observation)

```python
async def delete_measurement_observation(
        self,
        point_name: PointName,
        *,
        observation_index: int = 0,
        delete_point_if_no_measurements_remain: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Measurement Observation {/* #move-measurement-observation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-measurement-observation)

```python
async def move_measurement_observation(
        self,
        source_point_name: PointName,
        destination_point_name: PointName,
        *,
        observation_index: int = 0,
        delete_point_if_no_measurements_remain: bool = False,
        force_observation_active: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Initiate Servo-Guide {/* #initiate-servo-guide */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#initiate-servo-guide)

```python
async def initiate_servo_guide(
        self,
        instrument: CollectionInstrumentId,
        nominal_points: Sequence[PointName],
        *,
        group_name_suffix: str = "",
        target_name_suffix: str = "",
        tolerance: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Theodolite Interface {/* #start-theodolite-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-theodolite-interface)

```python
async def start_theodolite_interface(
        self,
        instrument: CollectionInstrumentId,
        theodolite_type: str,
        *,
        comm_port: int = 0,
        device_ip_address: str | None = None,
        simulation: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start Instrument Interface {/* #start-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-instrument-interface)

```python
async def start_instrument_interface(
        self,
        instrument: CollectionInstrumentId,
        *,
        initialize_at_startup: bool = False,
        device_ip_address: str | None = None,
        interface_type: int = 0,
        run_in_simulation: bool = False,
        allow_start_without_initialization_requirements: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Stop Instrument Interface {/* #stop-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#stop-instrument-interface)

```python
async def stop_instrument_interface(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Activate/Deactivate Instrument Toolbar {/* #activatedeactivate-instrument-toolbar */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#activatedeactivate-instrument-toolbar)

```python
async def activate_deactivate_instrument_toolbar(
        self,
        instrument: CollectionInstrumentId,
        *,
        deactivate_toolbar: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Verify Instrument Connection {/* #verify-instrument-connection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#verify-instrument-connection)

```python
async def verify_instrument_connection(
        self,
        instrument: CollectionInstrumentId,
    ) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Configure and Measure {/* #configure-and-measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#configure-and-measure)

```python
async def configure_and_measure(
        self,
        instrument: CollectionInstrumentId,
        target: PointName,
        measurement_mode: str,
        *,
        measure_immediately: bool = False,
        wait_for_completion: bool = True,
        timeout_seconds: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure {/* #measure */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure)

```python
async def measure(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Reference Frame Instrument Base Anchor Frame {/* #set-xyz-reference-frame-instrument-base-anchor-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```python
async def set_xyz_reference_frame_instrument_base_anchor_frame(
        self,
        instrument: CollectionInstrumentId,
        anchor_frame: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dock Instrument Interface {/* #dock-instrument-interface */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#dock-instrument-interface)

```python
async def dock_instrument_interface(
        self,
        instrument: CollectionInstrumentId,
        *,
        dock_interface: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Ref. Tie-In) {/* #locate-instrument-ref-tie-in */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-ref-tie-in)

```python
async def locate_instrument_ref_tie_in(
        self,
        instrument: CollectionInstrumentId,
        reference_group: CollectionObjectName,
        actuals_group: CollectionObjectName,
        *,
        tolerance: float = 0.0,
        auto_survey: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Group to Surface Quick Fit) {/* #locate-instrument-group-to-surface-quick-fit */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-group-to-surface-quick-fit)

```python
async def locate_instrument_group_to_surface_quick_fit(
        self,
        instrument: CollectionInstrumentId,
        measured_group: CollectionObjectName,
        surface_points_group: CollectionObjectName,
        surface_to_fit: CollectionObjectName,
        *,
        other_objects_to_transform: Sequence[CollectionObjectName] = (),
        rms_tolerance: float = 0.0,
        maximum_absolute_tolerance: float = 0.0,
    ) -> FitErrorResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Initiate {/* #multi-measurement-initiate */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#multi-measurement-initiate)

```python
async def multi_measurement_initiate(
        self,
        instruments: Sequence[CollectionInstrumentId],
        measurement_mode: str,
        *,
        wait_for_completion: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Multi Measurement Stop {/* #multi-measurement-stop */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#multi-measurement-stop)

```python
async def multi_measurement_stop(
        self,
        instruments: Sequence[CollectionInstrumentId],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Laser Projector {/* #align-laser-projector */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-laser-projector)

```python
async def align_laser_projector(
        self,
        instrument: CollectionInstrumentId,
        group: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instruments (USMN) {/* #locate-instruments-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instruments-usmn)

```python
async def locate_instruments_usmn(
        self,
        instruments: Sequence[CollectionInstrumentId],
        output_group: CollectionObjectName,
        *,
        nominals_group: CollectionObjectName | None = None,
        move_in_working_frame: bool = False,
        auto_reject_outliers_and_resolve: bool = False,
        show_usmn_dialog: ShowUsmnDialog = ShowUsmnDialog.NO,
        maximum_acceptable_rms_error: float = 0.0,
        maximum_acceptable_error: float = 0.0,
        excluded_groups: Sequence[CollectionObjectName] = (),
        exclude_single_instrument_points: bool = False,
        run_uncertainty_field_analysis: bool = False,
        analysis_samples: int = 300,
        analysis_time_limit: float = 4.0,
    ) -> FitErrorResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `analysis_time_limit` | Time in minutes; 0 disables the time limit. |

## Create Templated Instrument (USMN) {/* #create-templated-instrument-usmn */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#create-templated-instrument-usmn)

```python
async def create_templated_instrument_usmn(
        self,
        instrument_template_name: CollectionObjectName,
        instrument: CollectionInstrumentId,
        *,
        overall_instrument_weight: float = 1.0,
        moving: bool = True,
        enable_x: bool = True,
        enable_y: bool = True,
        enable_z: bool = True,
        enable_rx: bool = True,
        enable_ry: bool = True,
        enable_rz: bool = True,
        enable_scale: bool = False,
        enable_component_weights: bool = True,
        component_1_weight: float = 1.0,
        component_2_weight: float = 1.0,
        component_3_weight: float = 1.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `component_1_weight` | MP qualifier: Azimuth. |
| `component_2_weight` | MP qualifier: Elevation. |
| `component_3_weight` | MP qualifier: Distance. |

## Locate Instrument (Best Fit - Group to Group) {/* #locate-instrument-best-fit---group-to-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-best-fit---group-to-group)

```python
async def locate_instrument_best_fit_group_to_group(
        self,
        reference_group: CollectionObjectName,
        corresponding_group: CollectionObjectName,
        *,
        show_interface: bool = False,
        rms_tolerance: float = 0.0,
        maximum_absolute_tolerance: float = 0.0,
        allow_scale: bool = False,
        allow_x: bool = True,
        allow_y: bool = True,
        allow_z: bool = True,
        allow_rx: bool = True,
        allow_ry: bool = True,
        allow_rz: bool = True,
        lock_degrees_of_freedom: bool = False,
        generate_event: bool = False,
        csv_report: FileReference | None = None,
    ) -> InstrumentBestFitResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Locate Instrument (Best Fit - Nominal Geometry) {/* #locate-instrument-best-fit---nominal-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#locate-instrument-best-fit---nominal-geometry)

```python
async def locate_instrument_best_fit_nominal_geometry(
        self,
        instrument: CollectionInstrumentId,
        geometry_relationships: Sequence[CollectionObjectName],
        *,
        show_interface: bool = False,
        rms_tolerance: float = 0.0,
        maximum_absolute_tolerance: float = 0.0,
        allow_scale: bool = False,
        allow_x: bool = True,
        allow_y: bool = True,
        allow_z: bool = True,
        allow_rx: bool = True,
        allow_ry: bool = True,
        allow_rz: bool = True,
        lock_degrees_of_freedom: bool = False,
        generate_event: bool = False,
        csv_report: FileReference | None = None,
    ) -> InstrumentBestFitResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Transform {/* #get-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-transform)

```python
async def get_instrument_transform(
        self,
        instrument: CollectionInstrumentId,
        reference_frame: CollectionObjectName,
    ) -> Transform: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Transform {/* #set-instrument-transform */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-transform)

```python
async def set_instrument_transform(
        self,
        instrument: CollectionInstrumentId,
        destination_transform: Transform,
        reference_frame: CollectionObjectName,
        *,
        number_of_steps: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Tracker/EDM Theodolite Uncertainties {/* #get-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-trackeredm-theodolite-uncertainties)

```python
async def get_tracker_edm_theodolite_uncertainties(
        self,
        instrument: CollectionInstrumentId,
    ) -> TrackerEdmTheodoliteUncertainties: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `theta_dispersion` | Angle in arcseconds. |
| `phi_dispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Set Tracker/EDM Theodolite Uncertainties {/* #set-trackeredm-theodolite-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-trackeredm-theodolite-uncertainties)

```python
async def set_tracker_edm_theodolite_uncertainties(
        self,
        instrument: CollectionInstrumentId,
        *,
        theta_dispersion: float = 1.0,
        theta_threshold: float = 0.001,
        phi_dispersion: float = 1.0,
        phi_threshold: float = 0.001,
        distance: float = 2.5,
        distance_threshold: float = 0.0003,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `theta_dispersion` | Angle in arcseconds. |
| `phi_dispersion` | Angle in arcseconds. |
| `distance` | Value in parts per million. |

## Get PCMM Instrument XYZ Uncertainties {/* #get-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```python
async def get_pcmm_instrument_xyz_uncertainties(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentXyzUncertainties: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set PCMM Instrument XYZ Uncertainties {/* #set-pcmm-instrument-xyz-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```python
async def set_pcmm_instrument_xyz_uncertainties(
        self,
        instrument: CollectionInstrumentId,
        *,
        x_uncertainty: float = 0.001,
        y_uncertainty: float = 0.001,
        z_uncertainty: float = 0.001,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get XYZ Instrument Uncertainties {/* #get-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-xyz-instrument-uncertainties)

```python
async def get_xyz_instrument_uncertainties(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentXyzUncertainties: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set XYZ Instrument Uncertainties {/* #set-xyz-instrument-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-xyz-instrument-uncertainties)

```python
async def set_xyz_instrument_uncertainties(
        self,
        instrument: CollectionInstrumentId,
        *,
        x_uncertainty: float = 0.0005,
        y_uncertainty: float = 0.0005,
        z_uncertainty: float = 0.0005,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Weather Setting {/* #get-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-weather-setting)

```python
async def get_instrument_weather_setting(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentWeatherSetting: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Set Instrument Weather Setting {/* #set-instrument-weather-setting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-weather-setting)

```python
async def set_instrument_weather_setting(
        self,
        instrument: CollectionInstrumentId,
        *,
        temperature: float = 0.0,
        pressure: float = 0.0,
        relative_humidity: float = 0.0,
        set_automatically: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in millimeters of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Get Instrument Part Temperature {/* #get-instrument-part-temperature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-part-temperature)

```python
async def get_instrument_part_temperature(
        self,
        instrument: CollectionInstrumentId,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `part_temperature` | Temperature in degrees Fahrenheit. |

## Compute CTE Scale Factor {/* #compute-cte-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#compute-cte-scale-factor)

```python
async def compute_cte_scale_factor(
        self,
        *,
        material_cte: float = 0.0,
        initial_temperature: float = 0.0,
        final_temperature: float = 0.0,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `material_cte` | Coefficient per degree Fahrenheit. |
| `initial_temperature` | Temperature in degrees Fahrenheit. |
| `final_temperature` | Temperature in degrees Fahrenheit. |

## Set (multiply) Instrument Scale Factor (CAUTION!) {/* #set-multiply-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-multiply-instrument-scale-factor-caution)

```python
async def set_multiply_instrument_scale_factor(
        self,
        instrument: CollectionInstrumentId,
        *,
        scale_factor: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set (absolute) Instrument Scale Factor (CAUTION!) {/* #set-absolute-instrument-scale-factor-caution */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-absolute-instrument-scale-factor-caution)

```python
async def set_absolute_instrument_scale_factor(
        self,
        instrument: CollectionInstrumentId,
        *,
        scale_factor: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Scale Factor {/* #get-instrument-scale-factor */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-scale-factor)

```python
async def get_instrument_scale_factor(
        self,
        instrument: CollectionInstrumentId,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument - Frame To Frame {/* #transform-instrument---frame-to-frame */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-instrument---frame-to-frame)

```python
async def transform_instrument_frame_to_frame(
        self,
        instrument: CollectionInstrumentId,
        initial_frame: CollectionObjectName,
        destination_frame: CollectionObjectName,
        *,
        number_of_steps: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Instrument by Delta {/* #transform-instrument-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-instrument-by-delta)

```python
async def transform_instrument_by_delta(
        self,
        instrument: CollectionInstrumentId,
        delta_transform: WorldTransform,
        *,
        apply_scale_to_instrument: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Transform Multiple Instruments By Delta {/* #transform-multiple-instruments-by-delta */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#transform-multiple-instruments-by-delta)

```python
async def transform_multiple_instruments_by_delta(
        self,
        instruments: Sequence[CollectionInstrumentId],
        delta_transform: WorldTransform,
        *,
        apply_scale_to_instruments: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Instrument Operational Check {/* #instrument-operational-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#instrument-operational-check)

```python
async def instrument_operational_check(
        self,
        instrument: CollectionInstrumentId,
        check_type: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Number of Observations on Target {/* #get-number-of-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-number-of-observations-on-target)

```python
async def get_number_of_observations_on_target(
        self,
        point: PointName,
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instruments with Observations on Target {/* #get-instruments-with-observations-on-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instruments-with-observations-on-target)

```python
async def get_instruments_with_observations_on_target(
        self,
        point: PointName,
    ) -> list[CollectionInstrumentId]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Targets Measured by Instrument {/* #get-targets-measured-by-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-targets-measured-by-instrument)

```python
async def get_targets_measured_by_instrument(
        self,
        instrument: CollectionInstrumentId,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Status {/* #set-observation-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-status)

```python
async def set_observation_status(
        self,
        point: PointName,
        *,
        observation_index: int = 0,
        active: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Observation Info {/* #get-observation-info */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-observation-info)

```python
async def get_observation_info(
        self,
        point: PointName,
        *,
        observation_index: int = 0,
    ) -> ObservationInfo: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `temperature` | Temperature in degrees Fahrenheit. |
| `pressure` | Pressure in inches of mercury. |
| `relative_humidity` | Relative humidity in percent. |

## Fabricate Observations {/* #fabricate-observations */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#fabricate-observations)

```python
async def fabricate_observations(
        self,
        instrument: CollectionInstrumentId,
        point_group: CollectionObjectName,
        *,
        introduce_instrument_error: bool = False,
        limit_distance: bool = False,
        minimum_distance: float = 0.0,
        maximum_distance: float = 1000000.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Obscured Points from Instrument {/* #get-obscured-points-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-obscured-points-from-instrument)

```python
async def get_obscured_points_from_instrument(
        self,
        instrument: CollectionInstrumentId,
        candidate_points: Sequence[PointName],
        *,
        show_obscured_shots: bool = False,
    ) -> list[PointName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Targets and Mode/Profiles {/* #get-instrument-targets-and-modeprofiles */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-targets-and-modeprofiles)

```python
async def get_instrument_targets_and_mode_profiles(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentTargetsAndModeProfiles: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Measurement Mode/Profile {/* #set-instrument-measurement-modeprofile */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-measurement-modeprofile)

```python
async def set_instrument_measurement_mode_profile(
        self,
        instrument: CollectionInstrumentId,
        mode_profile: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Group and Target {/* #set-instrument-group-and-target */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-group-and-target)

```python
async def set_instrument_group_and_target(
        self,
        instrument: CollectionInstrumentId,
        point: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Targeting {/* #set-instrument-targeting */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-targeting)

```python
async def set_instrument_targeting(
        self,
        instrument: CollectionInstrumentId,
        targeting_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Target Computation Options {/* #set-target-computation-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-target-computation-options)

```python
async def set_target_computation_options(
        self,
        *,
        computation_method: TargetComputationMethod = TargetComputationMethod.USE_MOST_RECENT_SHOT_FROM_EACH_FACE,
        ignore_distance_measurements: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Mirror Cube Shot Face {/* #set-observation-mirror-cube-shot-face */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-mirror-cube-shot-face)

```python
async def set_observation_mirror_cube_shot_face(
        self,
        point: PointName,
        *,
        observation_index: int = 0,
        is_mirror_cube_shot: bool = False,
        mirror_cube_shot_face: int = 1,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Observation Collimation Shot Options {/* #set-observation-collimation-shot-options */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-observation-collimation-shot-options)

```python
async def set_observation_collimation_shot_options(
        self,
        point: PointName,
        *,
        observation_index: int = 0,
        is_collimation_shot: bool = False,
        targeted_instrument: CollectionInstrumentId | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Collimation {/* #collimation */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#collimation)

```python
async def collimation(
        self,
        stationary_instrument: CollectionInstrumentId,
        moving_instrument: CollectionInstrumentId,
        collimation_point: PointName,
        *,
        zero_moving_instrument: bool = False,
        tilt_mode: CollimationTiltMode = CollimationTiltMode.FULL_COLLIMATION,
        baseline_method: CollimationBaselineMethod = CollimationBaselineMethod.DETERMINED_BY_VALUE,
        baseline_distance: float = 0.0,
        scale_point_1: PointName | None = None,
        scale_point_2: PointName | None = None,
        not_measured_by_moving_instrument: PointName | None = None,
        as_measured_by_moving_instrument: PointName | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Target Status {/* #get-instrument-target-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-target-status)

```python
async def get_instrument_target_status(
        self,
        instrument: CollectionInstrumentId,
    ) -> InstrumentTargetStatus: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Surface Face List from Point Proximity {/* #make-surface-face-list-from-point-proximity */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#make-surface-face-list-from-point-proximity)

```python
async def make_surface_face_list_from_point_proximity(
        self,
        measured_points: Sequence[PointName],
    ) -> SurfaceFaceList: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Estimated Scan Time {/* #get-estimated-scan-time */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-estimated-scan-time)

```python
async def get_estimated_scan_time(
        self,
        instrument: CollectionInstrumentId,
        profile_name: str,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Perimeters from Surface Face List {/* #construct-perimeters-from-surface-face-list */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-perimeters-from-surface-face-list)

```python
async def construct_perimeters_from_surface_face_list(
        self,
        surface_faces: SurfaceFaceList,
    ) -> PerimeterLists: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Edge Scan Measurement {/* #edge-scan-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#edge-scan-measurement)

```python
async def edge_scan_measurement(
        self,
        instrument: CollectionInstrumentId,
        point_near_edge: PointName,
        edge_search_direction_point: PointName,
        parameter_set_name: str,
        point_group: CollectionObjectName,
        target_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Track Tape Measurement {/* #track-tape-measurement */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#track-tape-measurement)

```python
async def track_tape_measurement(
        self,
        instrument: CollectionInstrumentId,
        point_on_tape: PointName,
        point_on_part: PointName,
        direction_point: PointName,
        termination_point: PointName,
        parameter_set_name: str,
        point_group: CollectionObjectName,
        initial_target_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto Measure Points {/* #auto-measure-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-points)

```python
async def auto_measure_points(
        self,
        instrument: CollectionInstrumentId,
        reference_group: CollectionObjectName,
        actuals_group: CollectionObjectName,
        *,
        force_existing_group: bool = False,
        show_complete_dialog: bool = False,
        wait_for_completion: bool = True,
        auto_start: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Vectors {/* #auto-measure-vectors */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-vectors)

```python
async def auto_measure_vectors(
        self,
        instrument: CollectionInstrumentId,
        vector_group: CollectionObjectName,
        actuals_group: CollectionObjectName,
        *,
        project_point_to_vector: bool = False,
        angle_tolerance: float = 0.0,
        high_tolerance: float = 0.0,
        low_tolerance: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Surface Vector Intersections {/* #auto-measure-surface-vector-intersections */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-surface-vector-intersections)

```python
async def auto_measure_surface_vector_intersections(
        self,
        instrument: CollectionInstrumentId,
        vector_group: CollectionObjectName,
        resultant_group: CollectionObjectName,
        *,
        wait_for_complete: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Specified Geometry {/* #auto-measure-specified-geometry */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-specified-geometry)

```python
async def auto_measure_specified_geometry(
        self,
        instrument: CollectionInstrumentId,
        geometry: CollectionObjectName,
        mode_profile: str,
        *,
        wait_for_complete: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Measure Batch of Features {/* #auto-measure-batch-of-features */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-measure-batch-of-features)

```python
async def auto_measure_batch_of_features(
        self,
        instrument: CollectionInstrumentId,
        features: Iterable[CollectionItemName],
        *,
        wait_for_complete: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond Closest Point {/* #auto-correspond-closest-point */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-correspond-closest-point)

```python
async def auto_correspond_closest_point(
        self,
        instrument: CollectionInstrumentId,
        reference_group: CollectionObjectName,
        actuals_group: CollectionObjectName,
        *,
        wait_for_completion: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Close Auto-Correspond Closest Point Dialog {/* #close-auto-correspond-closest-point-dialog */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#close-auto-correspond-closest-point-dialog)

```python
async def close_auto_correspond_closest_point_dialog(
        self,
        instrument: CollectionInstrumentId,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Auto-Correspond with Proximity Trigger {/* #auto-correspond-with-proximity-trigger */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#auto-correspond-with-proximity-trigger)

```python
async def auto_correspond_with_proximity_trigger(
        self,
        instrument: CollectionInstrumentId,
        nominal_group: CollectionObjectName,
        results_group: CollectionObjectName,
        *,
        point_distance_threshold: float = 0.5,
        vector_axis_threshold: float = 0.25,
        project_results_to_nominal_vector: bool = False,
        warbler_ramp_start_distance: float = 12.0,
        show_watch_window: bool = False,
        deviation_vector_group_name: str | None = None,
        make_unmeasured_group: bool = False,
        measure_each_point_only_once: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Plane {/* #construct-mirror-from-plane */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-mirror-from-plane)

```python
async def construct_mirror_from_plane(
        self,
        instrument: CollectionInstrumentId,
        mirror_name: str,
        plane: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Mirror from Two Points {/* #construct-mirror-from-two-points */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-mirror-from-two-points)

```python
async def construct_mirror_from_two_points(
        self,
        instrument: CollectionInstrumentId,
        mirror_name: str,
        point_measured_directly: PointName,
        point_measured_through_mirror: PointName,
        *,
        send_mirror_to_instrument: bool = True,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Drift Check {/* #drift-check */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#drift-check)

```python
async def drift_check(
        self,
        instrument: CollectionInstrumentId,
        reference_group: CollectionObjectName,
        actuals_group: CollectionObjectName,
        *,
        tolerance: float = 0.0,
        minimum_point_count: int = 0,
        use_closest_reference_point: bool = True,
    ) -> DriftCheckResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Measure Nominal Feature {/* #measure-nominal-feature */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#measure-nominal-feature)

```python
async def measure_nominal_feature(
        self,
        instrument: CollectionInstrumentId,
        feature: CollectionObjectName,
        resulting_point: PointName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Guide Objects in 6D based on Point Measurements {/* #guide-objects-in-6d-based-on-point-measurements */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

```python
async def guide_objects_in_6d_based_on_point_measurements(
        self,
        instrument: CollectionInstrumentId,
        destination_group: CollectionObjectName,
        moving_reference_group: CollectionObjectName,
        objects_to_move: Iterable[CollectionObjectName],
        *,
        initial_survey_group: CollectionObjectName | None = None,
        positional_tolerance: ToleranceVectorOptions | None = None,
        rotational_tolerance: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects in 6D using Instrument Updates {/* #move-objects-in-6d-using-instrument-updates */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#move-objects-in-6d-using-instrument-updates)

```python
async def move_objects_in_6d_using_instrument_updates(
        self,
        instrument: CollectionInstrumentId,
        objects_to_move: Iterable[CollectionObjectName],
        measurement_mode: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Two Targets with Axis (WCF - X) {/* #align-two-targets-with-axis-wcf---x */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-two-targets-with-axis-wcf---x)

```python
async def align_two_targets_with_axis_wcf_x(
        self,
        instrument: CollectionInstrumentId,
        first_point_on_axis: PointName,
        second_point_on_axis: PointName,
        initial_measured_group: CollectionObjectName,
        *,
        rotational_tolerance: ToleranceVectorOptions | None = None,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Interface Response Timeout {/* #get-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-interface-response-timeout)

```python
async def get_instrument_interface_response_timeout(
        self,
        instrument: CollectionInstrumentId,
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Set Instrument Interface Response Timeout {/* #set-instrument-interface-response-timeout */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-interface-response-timeout)

```python
async def set_instrument_interface_response_timeout(
        self,
        instrument: CollectionInstrumentId,
        *,
        timeout: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `timeout` | Time in seconds. |

## Get Current Trapping Status {/* #get-current-trapping-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-current-trapping-status)

```python
async def get_current_trapping_status(
        self,
    ) -> CurrentTrappingStatus: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Wait For Trapping To Complete {/* #wait-for-trapping-to-complete */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#wait-for-trapping-to-complete)

```python
async def wait_for_trapping_to_complete(
        self,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Jump Instrument To New Location {/* #jump-instrument-to-new-location */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#jump-instrument-to-new-location)

```python
async def jump_instrument_to_new_location(
        self,
        live_instrument: CollectionInstrumentId,
        *,
        hide_previous_instrument: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Quick Align {/* #quick-align */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#quick-align)

```python
async def quick_align(
        self,
        instruments: Iterable[CollectionInstrumentId],
        objects: Iterable[CollectionObjectName],
        *,
        nominal_points: Iterable[PointName] | None = None,
        nominal_point_of_view_names: Iterable[str] | None = None,
        align_to_individual_faces_only: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Align Cloud to CAD {/* #align-cloud-to-cad */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#align-cloud-to-cad)

```python
async def align_cloud_to_cad(
        self,
        cloud: CollectionObjectName,
        surfaces: Iterable[CollectionObjectName],
        *,
        maximum_coarse_cad_mesh_edge_length: float = 0.0,
        use_fine_cad_mesh: bool = False,
        execute_alignment: bool = True,
    ) -> CloudToCadAlignmentResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Design {/* #start-gdt-inspection-design */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection-design)

```python
async def start_gdt_inspection_design(
        self,
        collection: CollectionName,
        *,
        filter: InspectionFilter = InspectionFilter.ALL,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection Rehearse {/* #start-gdt-inspection-rehearse */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection-rehearse)

```python
async def start_gdt_inspection_rehearse(
        self,
        collection: CollectionName,
        *,
        filter: InspectionFilter = InspectionFilter.ALL,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Start GD&amp;T Inspection {/* #start-gdt-inspection */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#start-gdt-inspection)

```python
async def start_gdt_inspection(
        self,
        instrument: CollectionInstrumentId,
        collection: CollectionName,
        *,
        filter: InspectionFilter = InspectionFilter.ALL,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Remeasure Failed Checks Only {/* #set-remeasure-failed-checks-only */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-remeasure-failed-checks-only)

```python
async def set_remeasure_failed_checks_only(
        self,
        collection: CollectionName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Associate Objects with Instrument {/* #associate-objects-with-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#associate-objects-with-instrument)

```python
async def associate_objects_with_instrument(
        self,
        instrument: CollectionInstrumentId,
        objects: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Disassociate Objects from Instrument {/* #disassociate-objects-from-instrument */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#disassociate-objects-from-instrument)

```python
async def disassociate_objects_from_instrument(
        self,
        objects: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Make Collection Object Name Ref List from Objects associated with Instruments {/* #make-collection-object-name-ref-list-from-objects-associated-with-instruments */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```python
async def make_collection_object_name_ref_list_from_objects_associated_with_instruments(
        self,
        instruments: Iterable[CollectionInstrumentId],
    ) -> list[CollectionObjectName]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Combine Point Groups {/* #combine-point-groups */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#combine-point-groups)

```python
async def combine_point_groups(
        self,
        groups_to_combine: Iterable[CollectionObjectName],
        combined_point_group: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Dissect Point Group {/* #dissect-point-group */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#dissect-point-group)

```python
async def dissect_point_group(
        self,
        group_to_dissect: CollectionObjectName,
        base_name_for_dissected_groups: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Synchronized Measurement (Master/Slave) {/* #synchronized-measurement-masterslave */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#synchronized-measurement-masterslave)

```python
async def synchronized_measurement_master_slave(
        self,
        master_instrument: CollectionInstrumentId,
        slave_instrument: CollectionInstrumentId,
        *,
        slave_group_suffix: str = "_Slave",
        locate_one_of_the_instruments: bool = True,
        locate_master: bool = False,
        wait_for_completion: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Create New Dynamic Reference {/* #create-new-dynamic-reference */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#create-new-dynamic-reference)

```python
async def create_new_dynamic_reference(
        self,
        instrument: CollectionInstrumentId,
        points_defining_dynamic_reference: Iterable[PointName],
        dynamic_reference_name: str,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Calculate TCP Fixture Uncertainties {/* #calculate-tcp-fixture-uncertainties */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#calculate-tcp-fixture-uncertainties)

```python
async def calculate_tcp_fixture_uncertainties(
        self,
        tcp_fixture: CollectionObjectName,
        tcp_measurements: Iterable[PointName],
        *,
        tcp_in_working: Transform | None = None,
    ) -> TcpFixtureUncertainties: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct TCP Fixture {/* #construct-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-tcp-fixture)

```python
async def construct_tcp_fixture(
        self,
        requested_tcp_fixture: CollectionObjectName,
        *,
        point_match_threshold: float = 0.0,
        replace_existing_tcp_fixture: bool = False,
    ) -> CollectionObjectName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Add Nominal Point to TCP Fixture {/* #add-nominal-point-to-tcp-fixture */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#add-nominal-point-to-tcp-fixture)

```python
async def add_nominal_point_to_tcp_fixture(
        self,
        tcp_fixture: CollectionObjectName,
        nominal_point_name: str,
        nominal_point_location: Vector,
        *,
        var_xx: float = 0.0,
        var_yy: float = 0.0,
        var_zz: float = 0.0,
        covar_xy: float = 0.0,
        covar_xz: float = 0.0,
        covar_yz: float = 0.0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Last Solved TCP Fixture Uncertainty Covariance Matrix {/* #get-last-solved-tcp-fixture-uncertainty-covariance-matrix */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```python
async def get_last_solved_tcp_fixture_uncertainty_covariance_matrix(
        self,
        tcp_fixture: CollectionObjectName,
    ) -> UncertaintyCovarianceMatrix: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT Base {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-base */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```python
async def set_instrument_base_uncertainty_covariance_matrix_wrt_base(
        self,
        instrument: CollectionInstrumentId,
        covariance_matrix: UncertaintyCovarianceMatrix,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #set-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```python
async def set_instrument_base_uncertainty_covariance_matrix_wrt_world(
        self,
        instrument: CollectionInstrumentId,
        covariance_matrix: UncertaintyCovarianceMatrix,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Instrument Base Uncertainty Covariance Matrix WRT WORLD {/* #get-instrument-base-uncertainty-covariance-matrix-wrt-world */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```python
async def get_instrument_base_uncertainty_covariance_matrix_wrt_world(
        self,
        instrument: CollectionInstrumentId,
    ) -> UncertaintyCovarianceMatrix: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Construct Measured Point Uncertainty Ellipsoids {/* #construct-measured-point-uncertainty-ellipsoids */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```python
async def construct_measured_point_uncertainty_ellipsoids(
        self,
        measurements: Iterable[PointName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get WRTL Channel and Status {/* #get-wrtl-channel-and-status */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#get-wrtl-channel-and-status)

```python
async def get_wrtl_channel_and_status(
        self,
        instrument: CollectionInstrumentId,
    ) -> WrtlChannelStatus: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WRTL Channel {/* #set-wrtl-channel */}

[MP Catalog](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC Contract](/api/grpc/sa-2024.1.0508.5/instrument-operations#set-wrtl-channel)

```python
async def set_wrtl_channel(
        self,
        instrument: CollectionInstrumentId,
        *,
        channel: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Result Types {/* #result-types */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_last_instrument_index {/* #get_last_instrument_index */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## rename_instrument {/* #rename_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_id_from_name {/* #get_instrument_id_from_name */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_model {/* #get_instrument_model */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_instrument_to_another_collection {/* #move_instrument_to_another_collection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## save_instrument_configuration {/* #save_instrument_configuration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## load_instrument_configuration {/* #load_instrument_configuration */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## export_instrument_history_to_xml_file {/* #export_instrument_history_to_xml_file */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## point_at_target {/* #point_at_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measure_single_point_here {/* #measure_single_point_here */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_current_instrument_position_update {/* #get_current_instrument_position_update */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## build_target {/* #build_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measure_existing_single_point {/* #measure_existing_single_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measure_existing_single_point_manual_guide {/* #measure_existing_single_point_manual_guide */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measure_existing_single_point_and_compare {/* #measure_existing_single_point_and_compare */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_probe_offset_frame_online {/* #set_probe_offset_frame_online */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_probe_offset_frame_offline {/* #set_probe_offset_frame_offline */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stop_active_measurement_mode {/* #stop_active_measurement_mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enable_disable_frame_set_scan_mode_all_instruments {/* #enable_disable_frame_set_scan_mode_all_instruments */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enable_disable_frame_set_scan_mode_by_instrument {/* #enable_disable_frame_set_scan_mode_by_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## enable_disable_point_set_scan_mode {/* #enable_disable_point_set_scan_mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## add_new_instrument {/* #add_new_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_instrument {/* #delete_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_measurements {/* #delete_measurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## delete_measurement_observation {/* #delete_measurement_observation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_measurement_observation {/* #move_measurement_observation */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## initiate_servo_guide {/* #initiate_servo_guide */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_theodolite_interface {/* #start_theodolite_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_instrument_interface {/* #start_instrument_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## stop_instrument_interface {/* #stop_instrument_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## activate_deactivate_instrument_toolbar {/* #activate_deactivate_instrument_toolbar */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## verify_instrument_connection {/* #verify_instrument_connection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## configure_and_measure {/* #configure_and_measure */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_xyz_reference_frame_instrument_base_anchor_frame {/* #set_xyz_reference_frame_instrument_base_anchor_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## dock_instrument_interface {/* #dock_instrument_interface */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locate_instrument_ref_tie_in {/* #locate_instrument_ref_tie_in */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locate_instrument_group_to_surface_quick_fit {/* #locate_instrument_group_to_surface_quick_fit */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## multi_measurement_initiate {/* #multi_measurement_initiate */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## multi_measurement_stop {/* #multi_measurement_stop */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## align_laser_projector {/* #align_laser_projector */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locate_instruments_usmn {/* #locate_instruments_usmn */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## create_templated_instrument_usmn {/* #create_templated_instrument_usmn */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locate_instrument_best_fit_group_to_group {/* #locate_instrument_best_fit_group_to_group */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## locate_instrument_best_fit_nominal_geometry {/* #locate_instrument_best_fit_nominal_geometry */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_transform {/* #get_instrument_transform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_transform {/* #set_instrument_transform */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_tracker_edm_theodolite_uncertainties {/* #get_tracker_edm_theodolite_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_tracker_edm_theodolite_uncertainties {/* #set_tracker_edm_theodolite_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_pcmm_instrument_xyz_uncertainties {/* #get_pcmm_instrument_xyz_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_pcmm_instrument_xyz_uncertainties {/* #set_pcmm_instrument_xyz_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_xyz_instrument_uncertainties {/* #get_xyz_instrument_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_xyz_instrument_uncertainties {/* #set_xyz_instrument_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_weather_setting {/* #get_instrument_weather_setting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_weather_setting {/* #set_instrument_weather_setting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_part_temperature {/* #get_instrument_part_temperature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## compute_cte_scale_factor {/* #compute_cte_scale_factor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_multiply_instrument_scale_factor {/* #set_multiply_instrument_scale_factor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_absolute_instrument_scale_factor {/* #set_absolute_instrument_scale_factor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_scale_factor {/* #get_instrument_scale_factor */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transform_instrument_frame_to_frame {/* #transform_instrument_frame_to_frame */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transform_instrument_by_delta {/* #transform_instrument_by_delta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## transform_multiple_instruments_by_delta {/* #transform_multiple_instruments_by_delta */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## instrument_operational_check {/* #instrument_operational_check */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_number_of_observations_on_target {/* #get_number_of_observations_on_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instruments_with_observations_on_target {/* #get_instruments_with_observations_on_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_targets_measured_by_instrument {/* #get_targets_measured_by_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_observation_status {/* #set_observation_status */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_observation_info {/* #get_observation_info */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## fabricate_observations {/* #fabricate_observations */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_obscured_points_from_instrument {/* #get_obscured_points_from_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_targets_and_mode_profiles {/* #get_instrument_targets_and_mode_profiles */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_measurement_mode_profile {/* #set_instrument_measurement_mode_profile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_group_and_target {/* #set_instrument_group_and_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_targeting {/* #set_instrument_targeting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_measurement_mode_profile {/* #get_instrument_measurement_mode_profile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_group_and_target {/* #get_instrument_group_and_target */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_targeting {/* #get_instrument_targeting */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_target_computation_options {/* #set_target_computation_options */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_observation_mirror_cube_shot_face {/* #set_observation_mirror_cube_shot_face */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_observation_collimation_shot_options {/* #set_observation_collimation_shot_options */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_target_status {/* #get_instrument_target_status */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_surface_face_list_from_point_proximity {/* #make_surface_face_list_from_point_proximity */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## scan_within_perimeter {/* #scan_within_perimeter */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## edit_scan_perimeter_profile {/* #edit_scan_perimeter_profile */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_estimated_scan_time {/* #get_estimated_scan_time */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_perimeters_from_surface_face_list {/* #construct_perimeters_from_surface_face_list */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## scan_cad_faces {/* #scan_cad_faces */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## edge_scan_measurement {/* #edge_scan_measurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## track_tape_measurement {/* #track_tape_measurement */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_measure_points {/* #auto_measure_points */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_measure_vectors {/* #auto_measure_vectors */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_measure_surface_vector_intersections {/* #auto_measure_surface_vector_intersections */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_measure_specified_geometry {/* #auto_measure_specified_geometry */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_measure_batch_of_features {/* #auto_measure_batch_of_features */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_correspond_closest_point {/* #auto_correspond_closest_point */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## close_auto_correspond_closest_point_dialog {/* #close_auto_correspond_closest_point_dialog */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## auto_correspond_with_proximity_trigger {/* #auto_correspond_with_proximity_trigger */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_mirror_from_plane {/* #construct_mirror_from_plane */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_mirror_from_two_points {/* #construct_mirror_from_two_points */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## drift_check {/* #drift_check */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## measure_nominal_feature {/* #measure_nominal_feature */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## guide_objects_in_6d_based_on_point_measurements {/* #guide_objects_in_6d_based_on_point_measurements */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## move_objects_in_6d_using_instrument_updates {/* #move_objects_in_6d_using_instrument_updates */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## align_two_targets_with_axis_wcf_x {/* #align_two_targets_with_axis_wcf_x */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_interface_response_timeout {/* #get_instrument_interface_response_timeout */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_interface_response_timeout {/* #set_instrument_interface_response_timeout */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_current_trapping_status {/* #get_current_trapping_status */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## wait_for_trapping_to_complete {/* #wait_for_trapping_to_complete */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## jump_instrument_to_new_location {/* #jump_instrument_to_new_location */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## quick_align {/* #quick_align */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## align_cloud_to_cad {/* #align_cloud_to_cad */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_gdt_inspection_design {/* #start_gdt_inspection_design */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_gdt_inspection_rehearse {/* #start_gdt_inspection_rehearse */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## start_gdt_inspection {/* #start_gdt_inspection */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_inspection_verification_mode {/* #get_inspection_verification_mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_inspection_verification_mode {/* #set_inspection_verification_mode */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_remeasure_failed_checks_only {/* #set_remeasure_failed_checks_only */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## associate_objects_with_instrument {/* #associate_objects_with_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## disassociate_objects_from_instrument {/* #disassociate_objects_from_instrument */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## make_collection_object_name_ref_list_from_objects_associated_with_instruments {/* #make_collection_object_name_ref_list_from_objects_associated_with_instruments */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## combine_point_groups {/* #combine_point_groups */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## dissect_point_group {/* #dissect_point_group */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## synchronized_measurement_master_slave {/* #synchronized_measurement_master_slave */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## create_new_dynamic_reference {/* #create_new_dynamic_reference */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## calculate_tcp_fixture_uncertainties {/* #calculate_tcp_fixture_uncertainties */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_tcp_fixture {/* #construct_tcp_fixture */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## add_nominal_point_to_tcp_fixture {/* #add_nominal_point_to_tcp_fixture */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_last_solved_tcp_fixture_uncertainty_covariance_matrix {/* #get_last_solved_tcp_fixture_uncertainty_covariance_matrix */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_base_uncertainty_covariance_matrix_wrt_base {/* #set_instrument_base_uncertainty_covariance_matrix_wrt_base */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_instrument_base_uncertainty_covariance_matrix_wrt_world {/* #set_instrument_base_uncertainty_covariance_matrix_wrt_world */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_instrument_base_uncertainty_covariance_matrix_wrt_world {/* #get_instrument_base_uncertainty_covariance_matrix_wrt_world */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## construct_measured_point_uncertainty_ellipsoids {/* #construct_measured_point_uncertainty_ellipsoids */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## get_wrtl_channel_and_status {/* #get_wrtl_channel_and_status */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

## set_wrtl_channel {/* #set_wrtl_channel */}

Use the exact operation entries above and [MP Value Types](./value-types.md). This retained grouping anchor preserves existing bookmarks.

[Released Source](https://github.com/spatialanalyzer/briosa-py/tree/v0.3.0/targets/2024.1.0508.5)
