---
title: Instrument Operations
description: Unreleased Briosa Python APIs for the reviewed Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations

:::note[Unreleased Client Package]

This reference describes the client source API. No package has been published yet.

:::

## Result Types

```python
@dataclass(frozen=True, slots=True, kw_only=True)
class LastInstrumentIndexResult:
    instrument_index: int
    instrument: CollectionInstrumentId

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentModelResult:
    name: str
    model: str

@dataclass(frozen=True, slots=True)
class InstrumentTypeName:
    value: str

class InstrumentPositionReportingFrame(StrEnum):
    INSTRUMENT_BASE = "Instrument Base"
    WORLD = "World"
    WORKING = "Working"

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentPositionUpdate:
    x_or_r: float
    y_or_theta_degrees: float
    z_or_phi_degrees: float
    time_since_update_seconds: float
    timestamp_approximate: str

@dataclass(frozen=True, slots=True, kw_only=True)
class PointComparisonResult:
    vector_representation: Vector
    x_value: float
    y_value: float
    z_value: float
    magnitude: float
    resulting_point_name: PointName

@dataclass(frozen=True, slots=True, kw_only=True)
class FitErrorResult:
    rms_error: float
    maximum_error: float

class ShowUsmnDialog(StrEnum):
    NO = "No"
    YES = "Yes"
    ON_TOLERANCE_VIOLATION = "On Tolerance Violation"

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentBestFitResult:
    transform_in_working: Transform
    optimum_transform: WorldTransform
    rms_deviation: float
    maximum_absolute_deviation: float
    number_of_unknowns: int
    number_of_equations: int
    robustness: float

@dataclass(frozen=True, slots=True, kw_only=True)
class TrackerEdmTheodoliteUncertainties:
    theta_dispersion_arcseconds: float
    theta_threshold: float
    phi_dispersion_arcseconds: float
    phi_threshold: float
    distance_ppm: float
    distance_threshold: float

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentXyzUncertainties:
    x_uncertainty: float
    y_uncertainty: float
    z_uncertainty: float

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentWeatherSetting:
    temperature_fahrenheit: float
    pressure_mmhg: float
    relative_humidity_percent: float
    set_automatically: bool

@dataclass(frozen=True, slots=True, kw_only=True)
class ObservationSphericalValues:
    distance: float
    azimuth: float
    elevation: float

@dataclass(frozen=True, slots=True, kw_only=True)
class ObservationInfo:
    instrument: CollectionInstrumentId
    spherical_values: ObservationSphericalValues
    active: bool
    timestamp: str
    rms_error: float
    temperature_fahrenheit: float
    pressure_in_hg: float
    relative_humidity_percent: float
    info_data: str

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentTargetsAndModeProfiles:
    mode_profiles: list[str]
    target_names: list[str]

class TargetComputationMethod(StrEnum):
    USE_MOST_RECENT_SHOT_FROM_EACH_FACE = "Use most recent shot from each face"
    USE_ONLY_MOST_RECENT_SHOT = "Use only most recent shot"
    DO_NOT_CHANGE_PRIOR_MEASUREMENTS = "Do not change prior measurements at all"
    FORCE_NEW_POINT_FOR_EACH_MEASUREMENT = "Force a new point for each measurement"
    REMOVE_ALL_PRIOR_SHOTS = "Remove all prior shots"
    DEACTIVATE_ALL_PRIOR_SHOTS = "Deactivate all prior shots"

class CollimationTiltMode(StrEnum):
    FULL_COLLIMATION = "Full Collimation"
    NO_TILT_COLLIMATION = "No-Tilt Collimation"

class CollimationBaselineMethod(StrEnum):
    DETERMINED_BY_VALUE = "Determined By Value"
    DETERMINED_FROM_SCALE = "Determined From Scale"
    DETERMINED_FROM_KNOWN_POINT = "Determined From Known Point"

class InspectionFilter(StrEnum):
    ALL = "ALL"
    CHECKS = "CHECKS"
    DATUMS = "DATUMS"

@dataclass(frozen=True, slots=True, kw_only=True)
class InstrumentTargetStatus:
    is_locked: bool
    name: str
    number_of_faces: int
    locked_face: int

@dataclass(frozen=True, slots=True, kw_only=True)
class PerimeterLists:
    scan_perimeters: list[CollectionObjectName]
    exclusion_perimeters: list[CollectionObjectName]

@dataclass(frozen=True, slots=True, kw_only=True)
class DriftCheckResult:
    maximum_error: float
    rms_error: float
    instrument_added: bool
    new_instrument: CollectionInstrumentId | None

@dataclass(frozen=True, slots=True, kw_only=True)
class CurrentTrappingStatus:
    active: bool
    focused_item: CollectionItemName | None
    instrument: CollectionInstrumentId | None

@dataclass(frozen=True, slots=True, kw_only=True)
class CloudToCadAlignmentResult:
    rms_deviation: float
    average_deviation: float
    maximum_absolute_deviation: float
    resultant_transform_in_working: Transform

DoubleVector6 = tuple[float, float, float, float, float, float]

@dataclass(frozen=True, slots=True, kw_only=True)
class UncertaintyCovarianceMatrix:
    row_1: DoubleVector6
    row_2: DoubleVector6
    row_3: DoubleVector6
    row_4: DoubleVector6
    row_5: DoubleVector6
    row_6: DoubleVector6

@dataclass(frozen=True, slots=True, kw_only=True)
class TcpFixtureUncertainties:
    solution_valid: bool
    refined_tcp_in_working: Transform
    uncertainties_in_tcp_fixture_frame: DoubleVector6
    uncertainties_in_working_frame: DoubleVector6
    rms_error: float
    maximum_absolute_error: float
    goodness_of_fit: float
    robustness: float
    result_notes: list[str]

@dataclass(frozen=True, slots=True, kw_only=True)
class WrtlChannelStatus:
    connection_status: bool
    active_channel: int
```

## get_last_instrument_index

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index) · [gRPC contract](/api/grpc/instrument-operations#get-last-instrument-index)

```python
async def get_last_instrument_index(self) -> LastInstrumentIndexResult: ...

last = await briosa.instrument_operations.get_last_instrument_index()
```

The result preserves both MP outputs: the integer `instrument_index` and the
structured `instrument` identity.

## rename_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#rename-instrument) · [gRPC contract](/api/grpc/instrument-operations#rename-instrument)

| Parameter | Python Type | Exact MP Argument | Briosa Default |
| --- | --- | --- | --- |
| `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| `new_name` | `str` | `New Name` | Required |

```python
async def rename_instrument(
    self,
    instrument: CollectionInstrumentId,
    new_name: str,
) -> None: ...

await briosa.instrument_operations.rename_instrument(instrument, "Tracker 1")
```

## get_instrument_id_from_name

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-id-from-name)

```python
async def get_instrument_id_from_name(
    self,
    name: str,
) -> CollectionInstrumentId: ...

instrument = await briosa.instrument_operations.get_instrument_id_from_name("Tracker 1")
```

## get_instrument_model

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-model) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-model)

```python
async def get_instrument_model(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentModelResult: ...

details = await briosa.instrument_operations.get_instrument_model(instrument)
```

Returns the MP `Name` and `Model` strings.

## move_instrument_to_another_collection

[MP command](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection) · [gRPC contract](/api/grpc/instrument-operations#move-instrument-to-another-collection)

```python
async def move_instrument_to_another_collection(
    self,
    instrument: CollectionInstrumentId,
    collection_name: CollectionName,
) -> None: ...

await briosa.instrument_operations.move_instrument_to_another_collection(
    instrument,
    destination_collection,
)
```

## save_instrument_configuration

[MP command](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#save-instrument-configuration)

```python
async def save_instrument_configuration(
    self,
    instrument: CollectionInstrumentId,
    configuration_file: FileReference,
) -> None: ...

await briosa.instrument_operations.save_instrument_configuration(
    instrument,
    configuration_file,
)
```

## load_instrument_configuration

[MP command](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration) · [gRPC contract](/api/grpc/instrument-operations#load-instrument-configuration)

```python
async def load_instrument_configuration(
    self,
    instrument: CollectionInstrumentId,
    configuration_file: FileReference,
) -> None: ...

await briosa.instrument_operations.load_instrument_configuration(
    instrument,
    configuration_file,
)
```

## export_instrument_history_to_xml_file

[MP command](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file) · [gRPC contract](/api/grpc/instrument-operations#export-instrument-history-to-xml-file)

```python
async def export_instrument_history_to_xml_file(
    self,
    instrument: CollectionInstrumentId,
    file_path: FileReference,
) -> None: ...

await briosa.instrument_operations.export_instrument_history_to_xml_file(
    instrument,
    file_path,
)
```

Each `FileReference` identifies a path accessible to the local Briosa server.
Mutation coroutines return `None`. Normal asyncio cancellation and timeout
tools remain caller controls; the client does not replay uncertain work.

## point_at_target

[MP command](/mp-command-catalog/commands/instrument-operations#point-at-target) · [gRPC contract](/api/grpc/instrument-operations#point-at-target)

```python
async def point_at_target(
    self,
    instrument: CollectionInstrumentId,
    target_id: PointName,
    *,
    html_prompt_file: FileReference | None = None,
) -> None: ...

await briosa.instrument_operations.point_at_target(instrument, target)
```

## measure_single_point_here

[MP command](/mp-command-catalog/commands/instrument-operations#measure-single-point-here) · [gRPC contract](/api/grpc/instrument-operations#measure-single-point-here)

```python
async def measure_single_point_here(
    self,
    instrument: CollectionInstrumentId,
    target_id: PointName,
    *,
    measure_immediately: bool = False,
    html_prompt_file: FileReference | None = None,
) -> None: ...

await briosa.instrument_operations.measure_single_point_here(instrument, target)
```

## get_current_instrument_position_update

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update) · [gRPC contract](/api/grpc/instrument-operations#get-current-instrument-position-update)

```python
async def get_current_instrument_position_update(
    self,
    instrument: CollectionInstrumentId,
    *,
    reporting_frame: InstrumentPositionReportingFrame =
        InstrumentPositionReportingFrame.INSTRUMENT_BASE,
    polar_coordinates: bool = False,
) -> InstrumentPositionUpdate: ...

position = await briosa.instrument_operations.get_current_instrument_position_update(
    instrument
)
```

The client returns the selected coordinate representation without converting
it.

## build_target

[MP command](/mp-command-catalog/commands/instrument-operations#build-target) · [gRPC contract](/api/grpc/instrument-operations#build-target)

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

await briosa.instrument_operations.build_target(
    instrument,
    output_target,
    nominal_point,
)
```

An omitted tolerance uses the MP default with every component and magnitude
check disabled at zero.

## measure_existing_single_point

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point)

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

point = await briosa.instrument_operations.measure_existing_single_point(
    instrument,
    existing_target,
    destination_point_group,
)
```

## measure_existing_single_point_manual_guide

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-manual-guide)

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

point = await briosa.instrument_operations.measure_existing_single_point_manual_guide(
    instrument,
    existing_target,
    destination_point_group,
)
```

## measure_existing_single_point_and_compare

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare) · [gRPC contract](/api/grpc/instrument-operations#measure-existing-single-point-and-compare)

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

comparison = await briosa.instrument_operations.measure_existing_single_point_and_compare(
    instrument,
    existing_target,
    destination_point_group,
)
```

The result preserves the vector, separate X, Y, Z, and magnitude outputs, and
the resulting point identity.

## set_probe_offset_frame_online

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

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

await briosa.instrument_operations.set_probe_offset_frame_online(
    instrument,
    probe_name,
    offset_frame,
)
```

## set_probe_offset_frame_offline

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame) · [gRPC contract](/api/grpc/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

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

await briosa.instrument_operations.set_probe_offset_frame_offline(
    instrument,
    probe_name,
    raw_measured_frame,
    offset_frame,
)
```

## stop_active_measurement_mode

[MP command](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode) · [gRPC contract](/api/grpc/instrument-operations#stop-active-measurement-mode)

```python
async def stop_active_measurement_mode(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...

await briosa.instrument_operations.stop_active_measurement_mode(instrument)
```

The client does not track a parallel measurement-state model or limit this
operation to recovery. Normal asyncio cancellation does not prove that
physical or SA work stopped, and no uncertain operation is replayed.

## enable_disable_frame_set_scan_mode_all_instruments

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```python
async def enable_disable_frame_set_scan_mode_all_instruments(
    self,
    *,
    enable_frame_set_scan_mode: bool = True,
) -> None: ...

await briosa.instrument_operations.enable_disable_frame_set_scan_mode_all_instruments()
```

## enable_disable_frame_set_scan_mode_by_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

```python
async def enable_disable_frame_set_scan_mode_by_instrument(
    self,
    instrument: CollectionInstrumentId,
    *,
    enable_frame_set_scan_mode: bool = True,
) -> None: ...

await briosa.instrument_operations.enable_disable_frame_set_scan_mode_by_instrument(
    instrument
)
```

## enable_disable_point_set_scan_mode

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode) · [gRPC contract](/api/grpc/instrument-operations#enabledisable-point-set-scan-mode)

```python
async def enable_disable_point_set_scan_mode(
    self,
    instrument: CollectionInstrumentId,
    *,
    enable_point_set_scan_mode: bool = True,
) -> None: ...

await briosa.instrument_operations.enable_disable_point_set_scan_mode(instrument)
```

## add_new_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#add-new-instrument) · [gRPC contract](/api/grpc/instrument-operations#add-new-instrument)

```python
async def add_new_instrument(
    self,
    instrument_type: InstrumentTypeName,
) -> CollectionInstrumentId: ...

instrument = await briosa.instrument_operations.add_new_instrument(
    InstrumentTypeName("Leica AT960/930")
)
```

The exact name must be accepted by the connected SA target. No substitution is
performed.

## delete_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#delete-instrument) · [gRPC contract](/api/grpc/instrument-operations#delete-instrument)

```python
async def delete_instrument(
    self,
    instrument: CollectionInstrumentId,
    *,
    prompt_user_to_confirm: bool = False,
    keep_resulting_points: bool = True,
) -> None: ...

await briosa.instrument_operations.delete_instrument(instrument)
```

The no-prompt default intentionally differs from the MP Editor default.

## delete_measurements

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurements) · [gRPC contract](/api/grpc/instrument-operations#delete-measurements)

```python
async def delete_measurements(
    self,
    instrument: CollectionInstrumentId,
    point_name: PointName,
    *,
    delete_point_if_no_measurements_remain: bool = False,
) -> None: ...

await briosa.instrument_operations.delete_measurements(instrument, point)
```

## delete_measurement_observation

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#delete-measurement-observation)

```python
async def delete_measurement_observation(
    self,
    point_name: PointName,
    *,
    observation_index: int = 0,
    delete_point_if_no_measurements_remain: bool = False,
) -> None: ...

await briosa.instrument_operations.delete_measurement_observation(point)
```

## move_measurement_observation

[MP command](/mp-command-catalog/commands/instrument-operations#move-measurement-observation) · [gRPC contract](/api/grpc/instrument-operations#move-measurement-observation)

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

await briosa.instrument_operations.move_measurement_observation(
    source_point,
    destination_point,
)
```

Required identities precede keyword-only defaults in Python. Briosa adds no
preflight or transaction, and asyncio cancellation never causes an uncertain
mutation to be replayed.

## initiate_servo_guide

[MP command](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide) · [gRPC contract](/api/grpc/instrument-operations#initiate-servo-guide)

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

await briosa.instrument_operations.initiate_servo_guide(
    instrument,
    nominal_points,
)
```

The nominal-point sequence must contain at least one point. SA interprets the
suffixes and tolerance for the selected servo instrument.

## start_theodolite_interface

[MP command](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface) · [gRPC contract](/api/grpc/instrument-operations#start-theodolite-interface)

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

await briosa.instrument_operations.start_theodolite_interface(
    instrument,
    theodolite_type,
)
```

The type is passed to Theodolite Manager exactly as supplied. The device IP
configures communication from local SA to the instrument; it is not a remote
Briosa server address.

## start_instrument_interface

[MP command](/mp-command-catalog/commands/instrument-operations#start-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#start-instrument-interface)

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

await briosa.instrument_operations.start_instrument_interface(instrument)
```

Interface type `0` selects the instrument's default interface. The three
Boolean options all default to `False`, preserving the reviewed MP defaults.

## stop_instrument_interface

[MP command](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#stop-instrument-interface)

```python
async def stop_instrument_interface(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...

await briosa.instrument_operations.stop_instrument_interface(instrument)
```

## activate_deactivate_instrument_toolbar

[MP command](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar) · [gRPC contract](/api/grpc/instrument-operations#activatedeactivate-instrument-toolbar)

```python
async def activate_deactivate_instrument_toolbar(
    self,
    instrument: CollectionInstrumentId,
    *,
    deactivate_toolbar: bool = False,
) -> None: ...

await briosa.instrument_operations.activate_deactivate_instrument_toolbar(
    instrument
)
```

The default call activates the toolbar. Set `deactivate_toolbar=True` to
deactivate it.

## verify_instrument_connection

[MP command](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection) · [gRPC contract](/api/grpc/instrument-operations#verify-instrument-connection)

```python
async def verify_instrument_connection(
    self,
    instrument: CollectionInstrumentId,
) -> bool: ...

connected = await briosa.instrument_operations.verify_instrument_connection(
    instrument
)
```

The result describes the selected instrument interface. It is separate from
Briosa's SA SDK connection state.

## configure_and_measure

[MP command](/mp-command-catalog/commands/instrument-operations#configure-and-measure) · [gRPC contract](/api/grpc/instrument-operations#configure-and-measure)

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

await briosa.instrument_operations.configure_and_measure(
    instrument,
    target,
    measurement_mode,
)
```

SA interprets `measurement_mode` for the selected instrument. A
`timeout_seconds` value of `0.0` preserves the MP command's no-timeout setting;
it does not remove the call deadline or Briosa worker watchdog.

## measure

[MP command](/mp-command-catalog/commands/instrument-operations#measure) · [gRPC contract](/api/grpc/instrument-operations#measure)

```python
async def measure(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...

await briosa.instrument_operations.measure(instrument)
```

SA uses its current instrument configuration. The client does not track or
validate a parallel measurement-state model.

## set_xyz_reference_frame_instrument_base_anchor_frame

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```python
async def set_xyz_reference_frame_instrument_base_anchor_frame(
    self,
    instrument: CollectionInstrumentId,
    anchor_frame: CollectionObjectName,
) -> None: ...

await briosa.instrument_operations.set_xyz_reference_frame_instrument_base_anchor_frame(
    instrument,
    anchor_frame,
)
```

`anchor_frame` must identify an existing SA Frame.

## dock_instrument_interface

[MP command](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface) · [gRPC contract](/api/grpc/instrument-operations#dock-instrument-interface)

```python
async def dock_instrument_interface(
    self,
    instrument: CollectionInstrumentId,
    *,
    dock_interface: bool = False,
) -> None: ...

await briosa.instrument_operations.dock_instrument_interface(
    instrument,
    dock_interface=True,
)
```

The MP default is `False`. These methods use live SA and instrument state,
perform no additional preflight, and never automatically replay an operation
whose completion is unknown.

## locate_instrument_ref_tie_in

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-ref-tie-in)

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

await briosa.instrument_operations.locate_instrument_ref_tie_in(
    instrument,
    reference_group,
    actuals_group,
)
```

Both object identities must refer to Point Groups. SA owns the guided or
automatic measurement workflow and its intermediate state.

## locate_instrument_group_to_surface_quick_fit

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-group-to-surface-quick-fit)

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

errors = await briosa.instrument_operations.locate_instrument_group_to_surface_quick_fit(
    instrument,
    measured_group,
    surface_points_group,
    surface_to_fit,
)
```

The first two objects must be Point Groups and `surface_to_fit` must be a
Surface.

## multi_measurement_initiate

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-initiate)

```python
async def multi_measurement_initiate(
    self,
    instruments: Sequence[CollectionInstrumentId],
    measurement_mode: str,
    *,
    wait_for_completion: bool = False,
) -> None: ...

await briosa.instrument_operations.multi_measurement_initiate(
    instruments,
    measurement_mode,
)
```

`instruments` must be non-empty. SA interprets the measurement-mode value.

## multi_measurement_stop

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop) · [gRPC contract](/api/grpc/instrument-operations#multi-measurement-stop)

```python
async def multi_measurement_stop(
    self,
    instruments: Sequence[CollectionInstrumentId],
) -> None: ...

await briosa.instrument_operations.multi_measurement_stop(instruments)
```

The sequence must be non-empty. The client does not require or track a matching
initiation call.

## align_laser_projector

[MP command](/mp-command-catalog/commands/instrument-operations#align-laser-projector) · [gRPC contract](/api/grpc/instrument-operations#align-laser-projector)

```python
async def align_laser_projector(
    self,
    instrument: CollectionInstrumentId,
    group: CollectionObjectName,
) -> None: ...

await briosa.instrument_operations.align_laser_projector(instrument, group)
```

`group` must identify an existing Point Group.

## locate_instruments_usmn

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn) · [gRPC contract](/api/grpc/instrument-operations#locate-instruments-usmn)

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
    analysis_time_limit_minutes: float = 4.0,
) -> FitErrorResult: ...

errors = await briosa.instrument_operations.locate_instruments_usmn(
    instruments,
    output_group,
)
```

The instrument sequence must be non-empty. A `None` nominal group means none,
and the excluded-group sequence defaults empty. Briosa defaults the USMN dialog
to `NO`.

## create_templated_instrument_usmn

[MP command](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn) · [gRPC contract](/api/grpc/instrument-operations#create-templated-instrument-usmn)

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
    azimuth_weight: float = 1.0,
    elevation_weight: float = 1.0,
    distance_weight: float = 1.0,
) -> None: ...

await briosa.instrument_operations.create_templated_instrument_usmn(
    instrument_template_name,
    instrument,
)
```

The public `overall_instrument_weight` spelling corrects the MP argument's
`Overal Instrument Weight` typo. The server preserves that exact label in the
SDK binding. These operations use live SA state, add no workflow safeguards,
and are never automatically replayed after an unknown outcome.

## locate_instrument_best_fit_group_to_group

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---group-to-group)

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

fit = await briosa.instrument_operations.locate_instrument_best_fit_group_to_group(
    reference_group,
    corresponding_group,
)
```

Both identities must be Point Groups. The interface is hidden and the CSV
report omitted by default.

## locate_instrument_best_fit_nominal_geometry

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry) · [gRPC contract](/api/grpc/instrument-operations#locate-instrument-best-fit---nominal-geometry)

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

fit = await briosa.instrument_operations.locate_instrument_best_fit_nominal_geometry(
    instrument,
    geometry_relationships,
)
```

The relationship sequence must be non-empty. All other defaults and result
fields match the group-to-group operation.

## get_instrument_transform

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-transform)

```python
async def get_instrument_transform(
    self,
    instrument: CollectionInstrumentId,
    reference_frame: CollectionObjectName,
) -> Transform: ...

transform = await briosa.instrument_operations.get_instrument_transform(
    instrument,
    reference_frame,
)
```

`reference_frame` must identify an existing SA Frame.

## set_instrument_transform

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-transform) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-transform)

```python
async def set_instrument_transform(
    self,
    instrument: CollectionInstrumentId,
    destination_transform: Transform,
    reference_frame: CollectionObjectName,
    *,
    number_of_steps: int = 0,
) -> None: ...

await briosa.instrument_operations.set_instrument_transform(
    instrument,
    destination_transform,
    reference_frame,
)
```

Animation steps default to `0`.

## get_tracker_edm_theodolite_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-trackeredm-theodolite-uncertainties)

```python
async def get_tracker_edm_theodolite_uncertainties(
    self,
    instrument: CollectionInstrumentId,
) -> TrackerEdmTheodoliteUncertainties: ...

uncertainties = await briosa.instrument_operations.get_tracker_edm_theodolite_uncertainties(
    instrument
)
```

The exact-target result differs from the installed command-listing page. The
linear thresholds use current SA job units.

## set_tracker_edm_theodolite_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-trackeredm-theodolite-uncertainties)

```python
async def set_tracker_edm_theodolite_uncertainties(
    self,
    instrument: CollectionInstrumentId,
    *,
    theta_dispersion_arcseconds: float = 1.0,
    theta_threshold: float = 0.001,
    phi_dispersion_arcseconds: float = 1.0,
    phi_threshold: float = 0.001,
    distance_ppm: float = 2.5,
    distance_threshold: float = 0.0003,
) -> None: ...

await briosa.instrument_operations.set_tracker_edm_theodolite_uncertainties(
    instrument
)
```

The server preserves the spacing differences in the exact exported phi labels.

## get_pcmm_instrument_xyz_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```python
async def get_pcmm_instrument_xyz_uncertainties(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentXyzUncertainties: ...

uncertainties = await briosa.instrument_operations.get_pcmm_instrument_xyz_uncertainties(
    instrument
)
```

## set_pcmm_instrument_xyz_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```python
async def set_pcmm_instrument_xyz_uncertainties(
    self,
    instrument: CollectionInstrumentId,
    *,
    x_uncertainty: float = 0.001,
    y_uncertainty: float = 0.001,
    z_uncertainty: float = 0.001,
) -> None: ...

await briosa.instrument_operations.set_pcmm_instrument_xyz_uncertainties(
    instrument
)
```

The server binds `y_uncertainty` to the exported `Y Uncertainty)` label.

## get_xyz_instrument_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#get-xyz-instrument-uncertainties)

```python
async def get_xyz_instrument_uncertainties(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentXyzUncertainties: ...

uncertainties = await briosa.instrument_operations.get_xyz_instrument_uncertainties(
    instrument
)
```

## set_xyz_instrument_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#set-xyz-instrument-uncertainties)

```python
async def set_xyz_instrument_uncertainties(
    self,
    instrument: CollectionInstrumentId,
    *,
    x_uncertainty: float = 0.0005,
    y_uncertainty: float = 0.0005,
    z_uncertainty: float = 0.0005,
) -> None: ...

await briosa.instrument_operations.set_xyz_instrument_uncertainties(instrument)
```

The server binds `z_uncertainty` to the exported `Z Uncertainty)` label. These
operations add no preflight and are never automatically replayed after an
unknown outcome.

## get_instrument_weather_setting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-weather-setting)

```python
async def get_instrument_weather_setting(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentWeatherSetting: ...

weather = await briosa.instrument_operations.get_instrument_weather_setting(
    instrument
)
```

The result uses degrees Fahrenheit, mmHg, and relative-humidity percentage and
reports whether the values were set automatically.

## set_instrument_weather_setting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-weather-setting)

```python
async def set_instrument_weather_setting(
    self,
    instrument: CollectionInstrumentId,
    *,
    temperature_fahrenheit: float = 0.0,
    pressure_mmhg: float = 0.0,
    relative_humidity_percent: float = 0.0,
    set_automatically: bool = False,
) -> None: ...

await briosa.instrument_operations.set_instrument_weather_setting(
    instrument,
    temperature_fahrenheit=temperature_fahrenheit,
    pressure_mmhg=pressure_mmhg,
    relative_humidity_percent=relative_humidity_percent,
)
```

When `set_automatically` is true, SA ignores all three numeric values.

## get_instrument_part_temperature

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-part-temperature)

```python
async def get_instrument_part_temperature(
    self,
    instrument: CollectionInstrumentId,
) -> float: ...

part_temperature_fahrenheit = (
    await briosa.instrument_operations.get_instrument_part_temperature(instrument)
)
```

The returned temperature is in degrees Fahrenheit.

## compute_cte_scale_factor

[MP command](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#compute-cte-scale-factor)

```python
async def compute_cte_scale_factor(
    self,
    *,
    material_cte_per_degree_fahrenheit: float = 0.0,
    initial_temperature_fahrenheit: float = 0.0,
    final_temperature_fahrenheit: float = 0.0,
) -> float: ...

scale_factor = await briosa.instrument_operations.compute_cte_scale_factor(
    material_cte_per_degree_fahrenheit=material_cte_per_degree_fahrenheit,
    initial_temperature_fahrenheit=initial_temperature_fahrenheit,
    final_temperature_fahrenheit=final_temperature_fahrenheit,
)
```

This coroutine intentionally retains SA's familiar Fahrenheit-based MP
operation.

## set_multiply_instrument_scale_factor

[MP command](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-multiply-instrument-scale-factor-caution)

```python
async def set_multiply_instrument_scale_factor(
    self,
    instrument: CollectionInstrumentId,
    *,
    scale_factor: float = 0.0,
) -> None: ...

await briosa.instrument_operations.set_multiply_instrument_scale_factor(
    instrument,
    scale_factor=scale_factor,
)
```

:::warning

This multiplies the current instrument scale; it does not replace it. The MP
default is `0.0`, and Briosa adds no confirmation or range check.

:::

## set_absolute_instrument_scale_factor

[MP command](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution) · [gRPC contract](/api/grpc/instrument-operations#set-absolute-instrument-scale-factor-caution)

```python
async def set_absolute_instrument_scale_factor(
    self,
    instrument: CollectionInstrumentId,
    *,
    scale_factor: float = 0.0,
) -> None: ...

await briosa.instrument_operations.set_absolute_instrument_scale_factor(
    instrument,
    scale_factor=scale_factor,
)
```

:::warning

This replaces the current scale; it does not multiply it. The MP default is
`0.0`, and Briosa adds no safeguard.

:::

## get_instrument_scale_factor

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-scale-factor)

```python
async def get_instrument_scale_factor(
    self,
    instrument: CollectionInstrumentId,
) -> float: ...

scale_factor = await briosa.instrument_operations.get_instrument_scale_factor(
    instrument
)
```

## transform_instrument_frame_to_frame

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument---frame-to-frame)

```python
async def transform_instrument_frame_to_frame(
    self,
    instrument: CollectionInstrumentId,
    initial_frame: CollectionObjectName,
    destination_frame: CollectionObjectName,
    *,
    number_of_steps: int = 0,
) -> None: ...

await briosa.instrument_operations.transform_instrument_frame_to_frame(
    instrument,
    initial_frame,
    destination_frame,
)
```

Both object identities must be existing SA Frames.

## transform_instrument_by_delta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-instrument-by-delta)

```python
async def transform_instrument_by_delta(
    self,
    instrument: CollectionInstrumentId,
    delta_transform: WorldTransform,
    *,
    apply_scale_to_instrument: bool = False,
) -> None: ...

await briosa.instrument_operations.transform_instrument_by_delta(
    instrument,
    delta_transform,
)
```

## transform_multiple_instruments_by_delta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta) · [gRPC contract](/api/grpc/instrument-operations#transform-multiple-instruments-by-delta)

```python
async def transform_multiple_instruments_by_delta(
    self,
    instruments: Sequence[CollectionInstrumentId],
    delta_transform: WorldTransform,
    *,
    apply_scale_to_instruments: bool = False,
) -> None: ...

await briosa.instrument_operations.transform_multiple_instruments_by_delta(
    instruments,
    delta_transform,
)
```

The instrument sequence must be non-empty. Both delta methods default to not
applying the transform's scale. Briosa adds no transaction or rollback and
never automatically replays an unknown outcome.

## instrument_operational_check

[MP command](/mp-command-catalog/commands/instrument-operations#instrument-operational-check) · [gRPC contract](/api/grpc/instrument-operations#instrument-operational-check)

```python
async def instrument_operational_check(
    self,
    instrument: CollectionInstrumentId,
    check_type: str,
) -> None: ...

await briosa.instrument_operations.instrument_operational_check(
    instrument,
    check_type,
)
```

`check_type` is required and passed to SA as an opaque,
instrument-interface-specific command string.

## get_number_of_observations_on_target

[MP command](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-number-of-observations-on-target)

```python
async def get_number_of_observations_on_target(
    self,
    point: PointName,
) -> int: ...

observation_count = (
    await briosa.instrument_operations.get_number_of_observations_on_target(point)
)
```

## get_instruments_with_observations_on_target

[MP command](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target) · [gRPC contract](/api/grpc/instrument-operations#get-instruments-with-observations-on-target)

```python
async def get_instruments_with_observations_on_target(
    self,
    point: PointName,
) -> list[CollectionInstrumentId]: ...

instruments = await briosa.instrument_operations.get_instruments_with_observations_on_target(
    point
)
```

The result preserves SA's order.

## get_targets_measured_by_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-targets-measured-by-instrument)

```python
async def get_targets_measured_by_instrument(
    self,
    instrument: CollectionInstrumentId,
) -> list[PointName]: ...

targets = await briosa.instrument_operations.get_targets_measured_by_instrument(
    instrument
)
```

## set_observation_status

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-status) · [gRPC contract](/api/grpc/instrument-operations#set-observation-status)

```python
async def set_observation_status(
    self,
    point: PointName,
    *,
    observation_index: int = 0,
    active: bool = False,
) -> None: ...

await briosa.instrument_operations.set_observation_status(
    point,
    observation_index=observation_index,
    active=True,
)
```

Observation indexes are zero-based. The defaults match the MP command.

## get_observation_info

[MP command](/mp-command-catalog/commands/instrument-operations#get-observation-info) · [gRPC contract](/api/grpc/instrument-operations#get-observation-info)

```python
async def get_observation_info(
    self,
    point: PointName,
    *,
    observation_index: int = 0,
) -> ObservationInfo: ...

observation = await briosa.instrument_operations.get_observation_info(
    point,
    observation_index=observation_index,
)
```

`spherical_values` contains the raw MP vector in distance, azimuth, elevation
order. Briosa does not normalize instrument-specific angular direction or
parse `timestamp` and `info_data`. SA uses `0` for unavailable RMS error and
`-1` for unavailable temperature, pressure, or humidity.

## fabricate_observations

[MP command](/mp-command-catalog/commands/instrument-operations#fabricate-observations) · [gRPC contract](/api/grpc/instrument-operations#fabricate-observations)

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

await briosa.instrument_operations.fabricate_observations(
    instrument,
    point_group,
)
```

SA ignores the distance values unless `limit_distance` is true. Simulated
instrument error is available only for applicable polar instruments. Briosa
adds no preflight, transaction, or rollback.

## get_obscured_points_from_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#get-obscured-points-from-instrument)

```python
async def get_obscured_points_from_instrument(
    self,
    instrument: CollectionInstrumentId,
    candidate_points: Sequence[PointName],
    *,
    show_obscured_shots: bool = False,
) -> list[PointName]: ...

obscured_points = await briosa.instrument_operations.get_obscured_points_from_instrument(
    instrument,
    candidate_points,
)
```

The result preserves SA's order. Shot-line display defaults to disabled.

## get_instrument_targets_and_mode_profiles

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targets-and-modeprofiles)

```python
async def get_instrument_targets_and_mode_profiles(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentTargetsAndModeProfiles: ...

available = await briosa.instrument_operations.get_instrument_targets_and_mode_profiles(
    instrument
)
```

`mode_profiles` and `target_names` are independent ordered lists. The server
uses the exact SA 2026.1 `Instrument to get` binding and does not zip them.

## set_instrument_measurement_mode_profile

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-measurement-modeprofile)

```python
async def set_instrument_measurement_mode_profile(
    self,
    instrument: CollectionInstrumentId,
    mode_profile: str,
) -> None: ...

await briosa.instrument_operations.set_instrument_measurement_mode_profile(
    instrument,
    mode_profile,
)
```

`mode_profile` is required and passed directly to SA. These coroutines do not
create Briosa-owned workflow state and are never automatically replayed after
an unknown outcome.

## set_instrument_group_and_target

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-group-and-target)

```python
async def set_instrument_group_and_target(
    self,
    instrument: CollectionInstrumentId,
    point: PointName,
) -> None: ...

await briosa.instrument_operations.set_instrument_group_and_target(
    instrument,
    point,
)
```

This changes live instrument-interface naming state. Point-cloud instruments
may ignore the target portion; Briosa does not retain the setting.

## set_instrument_targeting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-targeting)

```python
async def set_instrument_targeting(
    self,
    instrument: CollectionInstrumentId,
    targeting_name: str,
) -> None: ...

await briosa.instrument_operations.set_instrument_targeting(
    instrument,
    targeting_name,
)
```

## get_instrument_measurement_mode_profile

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-measurement-modeprofile)

```python
async def get_instrument_measurement_mode_profile(
    self,
    instrument: CollectionInstrumentId,
) -> str: ...

mode_profile = await briosa.instrument_operations.get_instrument_measurement_mode_profile(
    instrument
)
```

This returns the active value, not the available lists returned by
`get_instrument_targets_and_mode_profiles`.

## get_instrument_group_and_target

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-group-and-target)

```python
async def get_instrument_group_and_target(
    self,
    instrument: CollectionInstrumentId,
) -> PointName: ...

point = await briosa.instrument_operations.get_instrument_group_and_target(
    instrument
)
```

## get_instrument_targeting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-targeting)

```python
async def get_instrument_targeting(
    self,
    instrument: CollectionInstrumentId,
) -> str: ...

targeting_name = await briosa.instrument_operations.get_instrument_targeting(
    instrument
)
```

## set_target_computation_options

[MP command](/mp-command-catalog/commands/instrument-operations#set-target-computation-options) · [gRPC contract](/api/grpc/instrument-operations#set-target-computation-options)

```python
async def set_target_computation_options(
    self,
    *,
    computation_method: TargetComputationMethod =
        TargetComputationMethod.USE_MOST_RECENT_SHOT_FROM_EACH_FACE,
    ignore_distance_measurements: bool = False,
) -> None: ...

await briosa.instrument_operations.set_target_computation_options()
```

This changes application-global SA state. Briosa does not cache, restore,
lease, or otherwise manage the option.

## set_observation_mirror_cube_shot_face

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face) · [gRPC contract](/api/grpc/instrument-operations#set-observation-mirror-cube-shot-face)

```python
async def set_observation_mirror_cube_shot_face(
    self,
    point: PointName,
    *,
    observation_index: int = 0,
    is_mirror_cube_shot: bool = False,
    mirror_cube_shot_face: int = 1,
) -> None: ...

await briosa.instrument_operations.set_observation_mirror_cube_shot_face(
    point,
    observation_index=observation_index,
    is_mirror_cube_shot=True,
    mirror_cube_shot_face=1,
)
```

SA documents faces 1 through 6; Briosa adds no range check.

## set_observation_collimation_shot_options

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options) · [gRPC contract](/api/grpc/instrument-operations#set-observation-collimation-shot-options)

```python
async def set_observation_collimation_shot_options(
    self,
    point: PointName,
    *,
    observation_index: int = 0,
    is_collimation_shot: bool = False,
    targeted_instrument: CollectionInstrumentId | None = None,
) -> None: ...

await briosa.instrument_operations.set_observation_collimation_shot_options(
    point,
    observation_index=observation_index,
    is_collimation_shot=True,
    targeted_instrument=targeted_instrument,
)
```

The target instrument may be omitted for a normal shot. The server preserves
the exact malformed SDK argument label internally.

## collimation

[MP command](/mp-command-catalog/commands/instrument-operations#collimation) · [gRPC contract](/api/grpc/instrument-operations#collimation)

```python
async def collimation(
    self,
    stationary_instrument: CollectionInstrumentId,
    moving_instrument: CollectionInstrumentId,
    collimation_point: PointName,
    *,
    zero_moving_instrument: bool = False,
    tilt_mode: CollimationTiltMode = CollimationTiltMode.FULL_COLLIMATION,
    baseline_method: CollimationBaselineMethod =
        CollimationBaselineMethod.DETERMINED_BY_VALUE,
    baseline_distance: float = 0.0,
    scale_point_1: PointName | None = None,
    scale_point_2: PointName | None = None,
    not_measured_by_moving_instrument: PointName | None = None,
    as_measured_by_moving_instrument: PointName | None = None,
) -> None: ...

await briosa.instrument_operations.collimation(
    stationary_instrument,
    moving_instrument,
    collimation_point,
)
```

The optional points apply according to `baseline_method`. Briosa passes omitted
values to SA as empty MP identities and adds no preflight workflow validation.

## get_instrument_target_status

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-target-status)

```python
async def get_instrument_target_status(
    self,
    instrument: CollectionInstrumentId,
) -> InstrumentTargetStatus: ...

status = await briosa.instrument_operations.get_instrument_target_status(
    instrument
)
```

SA documents this coroutine as laser-tracker-only. These coroutines remain
stateless from Briosa's perspective and are never automatically replayed after
an unknown outcome.

## make_surface_face_list_from_point_proximity

[MP command](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity) · [gRPC contract](/api/grpc/instrument-operations#make-surface-face-list-from-point-proximity)

```python
async def make_surface_face_list_from_point_proximity(
    self,
    measured_points: Sequence[PointName],
) -> SurfaceFaceList: ...

faces = await briosa.instrument_operations.make_surface_face_list_from_point_proximity(
    measured_points
)
```

The returned value is opaque and can be passed directly to other surface-face
operations.

## scan_within_perimeter

[MP command](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) · [gRPC contract](/api/grpc/instrument-operations#scan-within-perimeter)

```python
async def scan_within_perimeter(
    self,
    instrument: CollectionInstrumentId,
    scan_perimeters: Sequence[CollectionObjectName],
    exclusion_perimeters: Sequence[CollectionObjectName],
    parameter_set_name: str,
    point_group: CollectionObjectName,
    *,
    wait_for_completion: bool = True,
) -> None: ...

await briosa.instrument_operations.scan_within_perimeter(
    instrument,
    scan_perimeters,
    exclusion_perimeters,
    parameter_set_name,
    point_group,
)
```

The exclusion list is part of the exact SA 2026.1 contract.

## edit_scan_perimeter_profile

[MP command](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) · [gRPC contract](/api/grpc/instrument-operations#edit-scan-perimeter-profile)

```python
async def edit_scan_perimeter_profile(
    self,
    instrument: CollectionInstrumentId,
    scan_perimeters: Sequence[CollectionObjectName],
    exclusion_perimeters: Sequence[CollectionObjectName],
    parameter_set_name: str,
    profile_name: str,
    *,
    clear_profile: bool = True,
    create_new_profile: bool = False,
) -> None: ...
```

## get_estimated_scan_time

[MP command](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time) · [gRPC contract](/api/grpc/instrument-operations#get-estimated-scan-time)

```python
async def get_estimated_scan_time(
    self,
    instrument: CollectionInstrumentId,
    profile_name: str,
) -> float: ...

estimate = await briosa.instrument_operations.get_estimated_scan_time(
    instrument,
    profile_name,
)
```

This is SA's raw value; the available documentation does not identify its unit.

## construct_perimeters_from_surface_face_list

[MP command](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list) · [gRPC contract](/api/grpc/instrument-operations#construct-perimeters-from-surface-face-list)

```python
async def construct_perimeters_from_surface_face_list(
    self,
    surface_faces: SurfaceFaceList,
) -> PerimeterLists: ...

perimeters = await briosa.instrument_operations.construct_perimeters_from_surface_face_list(
    faces
)
```

The client passes `surface_faces.value` and returns the scan and exclusion
lists separately.

## scan_cad_faces

[MP command](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) · [gRPC contract](/api/grpc/instrument-operations#scan-cad-faces)

```python
async def scan_cad_faces(
    self,
    instrument: CollectionInstrumentId,
    surface_faces: SurfaceFaceList,
    parameter_set_name: str,
    *,
    enable_exclusions: bool = True,
    wait_for_completion: bool = True,
) -> None: ...

await briosa.instrument_operations.scan_cad_faces(
    instrument,
    faces,
    parameter_set_name,
)
```

## edge_scan_measurement

[MP command](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement) · [gRPC contract](/api/grpc/instrument-operations#edge-scan-measurement)

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

## track_tape_measurement

[MP command](/mp-command-catalog/commands/instrument-operations#track-tape-measurement) · [gRPC contract](/api/grpc/instrument-operations#track-tape-measurement)

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

## auto_measure_points

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-points) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-points)

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

await briosa.instrument_operations.auto_measure_points(
    instrument,
    reference_group,
    actuals_group,
)
```

`show_complete_dialog=False` selects SA's abbreviated interface, not guaranteed
headless execution. Callers can separately configure SA's global interactivity
level to suppress it.

## auto_measure_vectors

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-vectors)

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

await briosa.instrument_operations.auto_measure_vectors(
    instrument,
    vector_group,
    actuals_group,
)
```

These coroutines add no Briosa-owned workflow state, replay, or preflight
behavior.

## auto_measure_surface_vector_intersections

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-surface-vector-intersections)

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

## auto_measure_specified_geometry

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-specified-geometry)

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

## auto_measure_batch_of_features

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features) · [gRPC contract](/api/grpc/instrument-operations#auto-measure-batch-of-features)

```python
async def auto_measure_batch_of_features(
    self,
    instrument: CollectionInstrumentId,
    features: Iterable[CollectionItemName],
    *,
    wait_for_complete: bool = True,
) -> None: ...
```

`features` contains GR-Feature relationship identities.

## auto_correspond_closest_point

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-closest-point)

```python
async def auto_correspond_closest_point(
    self,
    instrument: CollectionInstrumentId,
    reference_group: CollectionObjectName,
    actuals_group: CollectionObjectName,
    *,
    wait_for_completion: bool = True,
) -> None: ...

await briosa.instrument_operations.auto_correspond_closest_point(
    instrument,
    reference_group,
    actuals_group,
)
```

When waiting is false, SA may continue measuring after the coroutine returns.

## close_auto_correspond_closest_point_dialog

[MP command](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog) · [gRPC contract](/api/grpc/instrument-operations#close-auto-correspond-closest-point-dialog)

```python
async def close_auto_correspond_closest_point_dialog(
    self,
    instrument: CollectionInstrumentId,
) -> None: ...

await briosa.instrument_operations.close_auto_correspond_closest_point_dialog(
    instrument
)
```

The caller does not need to have started the running workflow.

## auto_correspond_with_proximity_trigger

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger) · [gRPC contract](/api/grpc/instrument-operations#auto-correspond-with-proximity-trigger)

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

The nominal group may identify a Point Group or Vector Group.

## construct_mirror_from_plane

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-plane)

```python
async def construct_mirror_from_plane(
    self,
    instrument: CollectionInstrumentId,
    mirror_name: str,
    plane: CollectionObjectName,
) -> None: ...
```

## construct_mirror_from_two_points

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points) · [gRPC contract](/api/grpc/instrument-operations#construct-mirror-from-two-points)

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

## drift_check

[MP command](/mp-command-catalog/commands/instrument-operations#drift-check) · [gRPC contract](/api/grpc/instrument-operations#drift-check)

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

result = await briosa.instrument_operations.drift_check(
    instrument,
    reference_group,
    actuals_group,
)
```

`new_instrument` is present only when `instrument_added` is true. SA can report
partial success for tolerance violations or a new station. Silent mode does not
suppress this dialog.

## measure_nominal_feature

[MP command](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature) · [gRPC contract](/api/grpc/instrument-operations#measure-nominal-feature)

```python
async def measure_nominal_feature(
    self,
    instrument: CollectionInstrumentId,
    feature: CollectionObjectName,
    resulting_point: PointName,
) -> None: ...
```

These coroutines retain no Briosa-owned workflow state and are never
automatically replayed after an unknown outcome.

## guide_objects_in_6d_based_on_point_measurements

[MP command](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements) · [gRPC contract](/api/grpc/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

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

## move_objects_in_6d_using_instrument_updates

[MP command](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates) · [gRPC contract](/api/grpc/instrument-operations#move-objects-in-6d-using-instrument-updates)

```python
async def move_objects_in_6d_using_instrument_updates(
    self,
    instrument: CollectionInstrumentId,
    objects_to_move: Iterable[CollectionObjectName],
    measurement_mode: str,
) -> None: ...
```

## align_two_targets_with_axis_wcf_x

[MP command](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x) · [gRPC contract](/api/grpc/instrument-operations#align-two-targets-with-axis-wcf---x)

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

## get_instrument_interface_response_timeout

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-interface-response-timeout)

```python
async def get_instrument_interface_response_timeout(
    self,
    instrument: CollectionInstrumentId,
) -> float: ...
```

The result is expressed in seconds.

## set_instrument_interface_response_timeout

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-interface-response-timeout)

```python
async def set_instrument_interface_response_timeout(
    self,
    instrument: CollectionInstrumentId,
    timeout_seconds: float = 0.0,
) -> None: ...
```

## get_current_trapping_status

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status) · [gRPC contract](/api/grpc/instrument-operations#get-current-trapping-status)

```python
async def get_current_trapping_status(self) -> CurrentTrappingStatus: ...

status = await briosa.instrument_operations.get_current_trapping_status()
```

`focused_item` and `instrument` may be `None` when trapping is inactive.

## wait_for_trapping_to_complete

[MP command](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete) · [gRPC contract](/api/grpc/instrument-operations#wait-for-trapping-to-complete)

```python
async def wait_for_trapping_to_complete(self) -> None: ...

await briosa.instrument_operations.wait_for_trapping_to_complete()
```

The coroutine may block indefinitely. Cancellation does not prove SA's wait
stopped.

## jump_instrument_to_new_location

[MP command](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location) · [gRPC contract](/api/grpc/instrument-operations#jump-instrument-to-new-location)

```python
async def jump_instrument_to_new_location(
    self,
    live_instrument: CollectionInstrumentId,
    *,
    hide_previous_instrument: bool = False,
) -> None: ...
```

## quick_align

[MP command](/mp-command-catalog/commands/instrument-operations#quick-align) · [gRPC contract](/api/grpc/instrument-operations#quick-align)

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

The optional view names correspond positionally to the nominal points. Briosa
leaves length validation to SA.

## align_cloud_to_cad

[MP command](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad) · [gRPC contract](/api/grpc/instrument-operations#align-cloud-to-cad)

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

SA clamps edge lengths below 5 mm to 5 mm. When execution is false, the
returned Working-frame transform is not applied.

## start_gdt_inspection_design

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-design)

```python
async def start_gdt_inspection_design(
    self,
    collection: CollectionName,
    *,
    filter: InspectionFilter = InspectionFilter.ALL,
) -> None: ...
```

The filter maps directly to `ALL`, `CHECKS`, or `DATUMS`.

## start_gdt_inspection_rehearse

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection-rehearse)

```python
async def start_gdt_inspection_rehearse(
    self,
    collection: CollectionName,
    *,
    filter: InspectionFilter = InspectionFilter.ALL,
) -> None: ...
```

## start_gdt_inspection

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection) · [gRPC contract](/api/grpc/instrument-operations#start-gdt-inspection)

```python
async def start_gdt_inspection(
    self,
    instrument: CollectionInstrumentId,
    collection: CollectionName,
    *,
    filter: InspectionFilter = InspectionFilter.ALL,
) -> None: ...
```

## get_inspection_verification_mode

[MP command](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#get-inspection-verification-mode)

```python
async def get_inspection_verification_mode(self) -> bool: ...
```

## set_inspection_verification_mode

[MP command](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode) · [gRPC contract](/api/grpc/instrument-operations#set-inspection-verification-mode)

```python
async def set_inspection_verification_mode(
    self,
    *,
    verification_enabled: bool = False,
) -> None: ...
```

This modifies application-global SA state; Briosa does not restore it.

## set_remeasure_failed_checks_only

[MP command](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only) · [gRPC contract](/api/grpc/instrument-operations#set-remeasure-failed-checks-only)

```python
async def set_remeasure_failed_checks_only(
    self,
    collection: CollectionName,
) -> None: ...
```

The coroutine clears failed-check points, locks passing checks, and starts
trapping. It adds no confirmation or rollback.

## associate_objects_with_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument) · [gRPC contract](/api/grpc/instrument-operations#associate-objects-with-instrument)

```python
async def associate_objects_with_instrument(
    self,
    instrument: CollectionInstrumentId,
    objects: Iterable[CollectionObjectName],
) -> None: ...
```

## disassociate_objects_from_instrument

[MP command](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument) · [gRPC contract](/api/grpc/instrument-operations#disassociate-objects-from-instrument)

```python
async def disassociate_objects_from_instrument(
    self,
    objects: Iterable[CollectionObjectName],
) -> None: ...
```

The exact 2026.1 binding intentionally has no instrument parameter.

## make_collection_object_name_ref_list_from_objects_associated_with_instruments

[MP command](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments) · [gRPC contract](/api/grpc/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```python
async def make_collection_object_name_ref_list_from_objects_associated_with_instruments(
    self,
    instruments: Iterable[CollectionInstrumentId],
) -> list[CollectionObjectName]: ...
```

This queries live SA association state and preserves the returned order.

## combine_point_groups

[MP command](/mp-command-catalog/commands/instrument-operations#combine-point-groups) · [gRPC contract](/api/grpc/instrument-operations#combine-point-groups)

```python
async def combine_point_groups(
    self,
    groups_to_combine: Iterable[CollectionObjectName],
    combined_point_group: CollectionObjectName,
) -> None: ...
```

## dissect_point_group

[MP command](/mp-command-catalog/commands/instrument-operations#dissect-point-group) · [gRPC contract](/api/grpc/instrument-operations#dissect-point-group)

```python
async def dissect_point_group(
    self,
    group_to_dissect: CollectionObjectName,
    base_name_for_dissected_groups: str,
) -> None: ...
```

## synchronized_measurement_master_slave

[MP command](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave) · [gRPC contract](/api/grpc/instrument-operations#synchronized-measurement-masterslave)

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

A deadline or cancellation does not prove that SA stopped an in-progress
measurement.

## create_new_dynamic_reference

[MP command](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference) · [gRPC contract](/api/grpc/instrument-operations#create-new-dynamic-reference)

```python
async def create_new_dynamic_reference(
    self,
    instrument: CollectionInstrumentId,
    points_defining_dynamic_reference: Iterable[PointName],
    dynamic_reference_name: str,
) -> None: ...
```

SA documents this operation for AICON/Hexagon MoveInspect systems.

## calculate_tcp_fixture_uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties) · [gRPC contract](/api/grpc/instrument-operations#calculate-tcp-fixture-uncertainties)

```python
async def calculate_tcp_fixture_uncertainties(
    self,
    tcp_fixture: CollectionObjectName,
    tcp_measurements: Iterable[PointName],
    *,
    tcp_in_working: Transform | None = None,
) -> TcpFixtureUncertainties: ...
```

`None` uses the identity transform.

## construct_tcp_fixture

[MP command](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#construct-tcp-fixture)

```python
async def construct_tcp_fixture(
    self,
    requested_tcp_fixture: CollectionObjectName,
    *,
    point_match_threshold: float = 0.0,
    replace_existing_tcp_fixture: bool = False,
) -> CollectionObjectName: ...
```

## add_nominal_point_to_tcp_fixture

[MP command](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture) · [gRPC contract](/api/grpc/instrument-operations#add-nominal-point-to-tcp-fixture)

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

## get_last_solved_tcp_fixture_uncertainty_covariance_matrix

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix) · [gRPC contract](/api/grpc/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```python
async def get_last_solved_tcp_fixture_uncertainty_covariance_matrix(
    self,
    tcp_fixture: CollectionObjectName,
) -> UncertaintyCovarianceMatrix: ...
```

## set_instrument_base_uncertainty_covariance_matrix_wrt_base

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```python
async def set_instrument_base_uncertainty_covariance_matrix_wrt_base(
    self,
    instrument: CollectionInstrumentId,
    covariance_matrix: UncertaintyCovarianceMatrix,
) -> None: ...
```

## set_instrument_base_uncertainty_covariance_matrix_wrt_world

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```python
async def set_instrument_base_uncertainty_covariance_matrix_wrt_world(
    self,
    instrument: CollectionInstrumentId,
    covariance_matrix: UncertaintyCovarianceMatrix,
) -> None: ...
```

The setters add no mathematical or physical-value validation beyond the fixed
matrix shape.

## get_instrument_base_uncertainty_covariance_matrix_wrt_world

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world) · [gRPC contract](/api/grpc/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```python
async def get_instrument_base_uncertainty_covariance_matrix_wrt_world(
    self,
    instrument: CollectionInstrumentId,
) -> UncertaintyCovarianceMatrix: ...
```

These coroutines retain no Briosa-owned measurement, dynamic-reference, TCP,
or uncertainty state and are never automatically replayed.

## construct_measured_point_uncertainty_ellipsoids

[MP command](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids) · [gRPC contract](/api/grpc/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```python
async def construct_measured_point_uncertainty_ellipsoids(
    self,
    measurements: Iterable[PointName],
) -> None: ...
```

## get_wrtl_channel_and_status

[MP command](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status) · [gRPC contract](/api/grpc/instrument-operations#get-wrtl-channel-and-status)

```python
async def get_wrtl_channel_and_status(
    self,
    instrument: CollectionInstrumentId,
) -> WrtlChannelStatus: ...
```

## set_wrtl_channel

[MP command](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel) · [gRPC contract](/api/grpc/instrument-operations#set-wrtl-channel)

```python
async def set_wrtl_channel(
    self,
    instrument: CollectionInstrumentId,
    *,
    channel: int = 0,
) -> None: ...
```

Briosa adds no channel-range validation. These coroutines retain no Briosa-
owned WRTL or uncertainty-display state and are never automatically replayed.
