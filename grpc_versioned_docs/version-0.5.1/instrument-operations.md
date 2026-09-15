---
title: Instrument Operations
description: Released gRPC contracts for the reviewed Instrument Operations MP commands.
toc_max_heading_level: 2
---

# Instrument Operations

:::note[Released Server API]

These operations are included in Briosa Server **0.5.1** for SpatialAnalyzer
**2026.1.0529.7**. Runtime policy and readiness determine whether a particular
call is admitted. Validation qualifications below remain independent of release
availability; an At Risk entry is not a claim of licensed-SA validation.

:::

All RPCs use `briosa.InstrumentOperations`, return
`MpExecutionDetails execution = 1000`, and prohibit automatic replay.

## Shared Types

```proto
enum InstrumentPositionReportingFrame {
  INSTRUMENT_POSITION_REPORTING_FRAME_UNSPECIFIED = 0;
  INSTRUMENT_POSITION_REPORTING_FRAME_INSTRUMENT_BASE = 1;
  INSTRUMENT_POSITION_REPORTING_FRAME_WORLD = 2;
  INSTRUMENT_POSITION_REPORTING_FRAME_WORKING = 3;
}

message InstrumentTypeName {
  string value = 1;
}

message ObservationSphericalValues {
  double distance = 1;
  double azimuth = 2;
  double elevation = 3;
}

message ObservationInfo {
  optional CollectionInstrumentId instrument = 1;
  optional ObservationSphericalValues spherical_values = 2;
  bool active = 3;
  string timestamp = 4;
  double rms_error = 5;
  double temperature_fahrenheit = 6;
  double pressure_in_hg = 7;
  double relative_humidity_percent = 8;
  string info_data = 9;
}

enum TargetComputationMethod {
  TARGET_COMPUTATION_METHOD_UNSPECIFIED = 0;
  TARGET_COMPUTATION_METHOD_USE_MOST_RECENT_SHOT_FROM_EACH_FACE = 1;
  TARGET_COMPUTATION_METHOD_USE_ONLY_MOST_RECENT_SHOT = 2;
  TARGET_COMPUTATION_METHOD_DO_NOT_CHANGE_PRIOR_MEASUREMENTS = 3;
  TARGET_COMPUTATION_METHOD_FORCE_NEW_POINT_FOR_EACH_MEASUREMENT = 4;
  TARGET_COMPUTATION_METHOD_REMOVE_ALL_PRIOR_SHOTS = 5;
  TARGET_COMPUTATION_METHOD_DEACTIVATE_ALL_PRIOR_SHOTS = 6;
}

enum CollimationTiltMode {
  COLLIMATION_TILT_MODE_UNSPECIFIED = 0;
  COLLIMATION_TILT_MODE_FULL_COLLIMATION = 1;
  COLLIMATION_TILT_MODE_NO_TILT_COLLIMATION = 2;
}

enum CollimationBaselineMethod {
  COLLIMATION_BASELINE_METHOD_UNSPECIFIED = 0;
  COLLIMATION_BASELINE_METHOD_DETERMINED_BY_VALUE = 1;
  COLLIMATION_BASELINE_METHOD_DETERMINED_FROM_SCALE = 2;
  COLLIMATION_BASELINE_METHOD_DETERMINED_FROM_KNOWN_POINT = 3;
}

enum InspectionFilter {
  INSPECTION_FILTER_UNSPECIFIED = 0;
  INSPECTION_FILTER_ALL = 1;
  INSPECTION_FILTER_CHECKS = 2;
  INSPECTION_FILTER_DATUMS = 3;
}

message InstrumentTargetStatus {
  bool is_locked = 1;
  string name = 2;
  int32 number_of_faces = 3;
  int32 locked_face = 4;
}

message PerimeterLists {
  repeated CollectionObjectName scan_perimeters = 1;
  repeated CollectionObjectName exclusion_perimeters = 2;
}

message DriftCheckResult {
  double maximum_error = 1;
  double rms_error = 2;
  bool instrument_added = 3;
  optional CollectionInstrumentId new_instrument = 4;
  MpExecutionDetails execution = 1000;
}

message CurrentTrappingStatus {
  bool active = 1;
  optional CollectionItemName focused_item = 2;
  optional CollectionInstrumentId instrument = 3;
}

message CloudToCadAlignmentResult {
  double rms_deviation = 1;
  double average_deviation = 2;
  double maximum_absolute_deviation = 3;
  optional Transform resultant_transform_in_working = 4;
}

message DoubleVector6 {
  repeated double values = 1; // exactly six values
}

message UncertaintyCovarianceMatrix {
  optional DoubleVector6 row_1 = 1;
  optional DoubleVector6 row_2 = 2;
  optional DoubleVector6 row_3 = 3;
  optional DoubleVector6 row_4 = 4;
  optional DoubleVector6 row_5 = 5;
  optional DoubleVector6 row_6 = 6;
}

message TcpFixtureUncertainties {
  bool solution_valid = 1;
  optional Transform refined_tcp_in_working = 2;
  optional DoubleVector6 uncertainties_in_tcp_fixture_frame = 3;
  optional DoubleVector6 uncertainties_in_working_frame = 4;
  double rms_error = 5;
  double maximum_absolute_error = 6;
  double goodness_of_fit = 7;
  double robustness = 8;
  repeated string result_notes = 9;
}

message WrtlChannelStatus {
  bool connection_status = 1;
  int32 active_channel = 2;
}

enum ShowUsmnDialog {
  SHOW_USMN_DIALOG_UNSPECIFIED = 0;
  SHOW_USMN_DIALOG_NO = 1;
  SHOW_USMN_DIALOG_YES = 2;
  SHOW_USMN_DIALOG_ON_TOLERANCE_VIOLATION = 3;
}
```

An omitted reporting frame is normalized to `INSTRUMENT_BASE`. The enum maps
mechanically to the MP choices `Instrument Base`, `World`, and `Working`.
`ToleranceVectorOptions`, `Vector`, `PointName`, `CollectionObjectName`,
`CollectionInstrumentId`, `SurfaceFaceList`, and `FileReference` are established shared Briosa
types. `InstrumentTypeName` carries an exact, version-specific MP instrument
type name without freezing SA's evolving choice list into a protocol enum.
An omitted `ShowUsmnDialog` is normalized to `SHOW_USMN_DIALOG_NO`, following
Briosa's no-dialog default policy.
An omitted target-computation method is normalized to
`USE_MOST_RECENT_SHOT_FROM_EACH_FACE`. Omitted collimation choices are
normalized to `FULL_COLLIMATION` and `DETERMINED_BY_VALUE`.

## RPC Index

| MP Command | RPC | Operation ID |
| --- | --- | --- |
| Get Last Instrument Index | `GetLastInstrumentIndex` | `instrument_operations.get_last_instrument_index` |
| Rename Instrument | `RenameInstrument` | `instrument_operations.rename_instrument` |
| Get Instrument ID from Name | `GetInstrumentIdFromName` | `instrument_operations.get_instrument_id_from_name` |
| Get Instrument Model | `GetInstrumentModel` | `instrument_operations.get_instrument_model` |
| Move Instrument to Another Collection | `MoveInstrumentToAnotherCollection` | `instrument_operations.move_instrument_to_another_collection` |
| Save Instrument Configuration | `SaveInstrumentConfiguration` | `instrument_operations.save_instrument_configuration` |
| Load Instrument Configuration | `LoadInstrumentConfiguration` | `instrument_operations.load_instrument_configuration` |
| Export Instrument History to XML File | `ExportInstrumentHistoryToXmlFile` | `instrument_operations.export_instrument_history_to_xml_file` |
| Point At Target | `PointAtTarget` | `instrument_operations.point_at_target` |
| Measure Single Point Here | `MeasureSinglePointHere` | `instrument_operations.measure_single_point_here` |
| Get Current Instrument Position Update | `GetCurrentInstrumentPositionUpdate` | `instrument_operations.get_current_instrument_position_update` |
| 'Build' Target | `BuildTarget` | `instrument_operations.build_target` |
| Measure Existing Single Point | `MeasureExistingSinglePoint` | `instrument_operations.measure_existing_single_point` |
| Measure Existing Single Point (Manual Guide) | `MeasureExistingSinglePointManualGuide` | `instrument_operations.measure_existing_single_point_manual_guide` |
| Measure Existing Single Point and Compare | `MeasureExistingSinglePointAndCompare` | `instrument_operations.measure_existing_single_point_and_compare` |
| Set Probe Offset Frame Online (Measure Raw Frame) | `SetProbeOffsetFrameOnline` | `instrument_operations.set_probe_offset_frame_online` |
| Set Probe Offset Frame Offline (Select Previously Measured Frame) | `SetProbeOffsetFrameOffline` | `instrument_operations.set_probe_offset_frame_offline` |
| Stop Active Measurement Mode | `StopActiveMeasurementMode` | `instrument_operations.stop_active_measurement_mode` |
| Enable/Disable Frame Set Scan Mode (All Instruments) | `EnableDisableFrameSetScanModeAllInstruments` | `instrument_operations.enable_disable_frame_set_scan_mode_all_instruments` |
| Enable/Disable Frame Set Scan Mode (By Instrument) | `EnableDisableFrameSetScanModeByInstrument` | `instrument_operations.enable_disable_frame_set_scan_mode_by_instrument` |
| Enable/Disable Point Set Scan Mode | `EnableDisablePointSetScanMode` | `instrument_operations.enable_disable_point_set_scan_mode` |
| Add New Instrument | `AddNewInstrument` | `instrument_operations.add_new_instrument` |
| Delete Instrument | `DeleteInstrument` | `instrument_operations.delete_instrument` |
| Delete Measurements | `DeleteMeasurements` | `instrument_operations.delete_measurements` |
| Delete Measurement Observation | `DeleteMeasurementObservation` | `instrument_operations.delete_measurement_observation` |
| Move Measurement Observation | `MoveMeasurementObservation` | `instrument_operations.move_measurement_observation` |
| Initiate Servo-Guide | `InitiateServoGuide` | `instrument_operations.initiate_servo_guide` |
| Start Theodolite Interface | `StartTheodoliteInterface` | `instrument_operations.start_theodolite_interface` |
| Start Instrument Interface | `StartInstrumentInterface` | `instrument_operations.start_instrument_interface` |
| Stop Instrument Interface | `StopInstrumentInterface` | `instrument_operations.stop_instrument_interface` |
| Activate/Deactivate Instrument Toolbar | `ActivateDeactivateInstrumentToolbar` | `instrument_operations.activate_deactivate_instrument_toolbar` |
| Verify Instrument Connection | `VerifyInstrumentConnection` | `instrument_operations.verify_instrument_connection` |
| Configure and Measure | `ConfigureAndMeasure` | `instrument_operations.configure_and_measure` |
| Measure | `Measure` | `instrument_operations.measure` |
| Set XYZ Reference Frame Instrument Base Anchor Frame | `SetXyzReferenceFrameInstrumentBaseAnchorFrame` | `instrument_operations.set_xyz_reference_frame_instrument_base_anchor_frame` |
| Dock Instrument Interface | `DockInstrumentInterface` | `instrument_operations.dock_instrument_interface` |
| Locate Instrument (Ref. Tie-In) | `LocateInstrumentRefTieIn` | `instrument_operations.locate_instrument_ref_tie_in` |
| Locate Instrument (Group to Surface Quick Fit) | `LocateInstrumentGroupToSurfaceQuickFit` | `instrument_operations.locate_instrument_group_to_surface_quick_fit` |
| Multi Measurement Initiate | `MultiMeasurementInitiate` | `instrument_operations.multi_measurement_initiate` |
| Multi Measurement Stop | `MultiMeasurementStop` | `instrument_operations.multi_measurement_stop` |
| Align Laser Projector | `AlignLaserProjector` | `instrument_operations.align_laser_projector` |
| Locate Instruments (USMN) | `LocateInstrumentsUsmn` | `instrument_operations.locate_instruments_usmn` |
| Create Templated Instrument (USMN) | `CreateTemplatedInstrumentUsmn` | `instrument_operations.create_templated_instrument_usmn` |
| Locate Instrument (Best Fit - Group to Group) | `LocateInstrumentBestFitGroupToGroup` | `instrument_operations.locate_instrument_best_fit_group_to_group` |
| Locate Instrument (Best Fit - Nominal Geometry) | `LocateInstrumentBestFitNominalGeometry` | `instrument_operations.locate_instrument_best_fit_nominal_geometry` |
| Get Instrument Transform | `GetInstrumentTransform` | `instrument_operations.get_instrument_transform` |
| Set Instrument Transform | `SetInstrumentTransform` | `instrument_operations.set_instrument_transform` |
| Get Tracker/EDM Theodolite Uncertainties | `GetTrackerEdmTheodoliteUncertainties` | `instrument_operations.get_tracker_edm_theodolite_uncertainties` |
| Set Tracker/EDM Theodolite Uncertainties | `SetTrackerEdmTheodoliteUncertainties` | `instrument_operations.set_tracker_edm_theodolite_uncertainties` |
| Get PCMM Instrument XYZ Uncertainties | `GetPcmmInstrumentXyzUncertainties` | `instrument_operations.get_pcmm_instrument_xyz_uncertainties` |
| Set PCMM Instrument XYZ Uncertainties | `SetPcmmInstrumentXyzUncertainties` | `instrument_operations.set_pcmm_instrument_xyz_uncertainties` |
| Get XYZ Instrument Uncertainties | `GetXyzInstrumentUncertainties` | `instrument_operations.get_xyz_instrument_uncertainties` |
| Set XYZ Instrument Uncertainties | `SetXyzInstrumentUncertainties` | `instrument_operations.set_xyz_instrument_uncertainties` |
| Get Instrument Weather Setting | `GetInstrumentWeatherSetting` | `instrument_operations.get_instrument_weather_setting` |
| Set Instrument Weather Setting | `SetInstrumentWeatherSetting` | `instrument_operations.set_instrument_weather_setting` |
| Get Instrument Part Temperature | `GetInstrumentPartTemperature` | `instrument_operations.get_instrument_part_temperature` |
| Compute CTE Scale Factor | `ComputeCteScaleFactor` | `instrument_operations.compute_cte_scale_factor` |
| Set (multiply) Instrument Scale Factor (CAUTION!) | `SetMultiplyInstrumentScaleFactor` | `instrument_operations.set_multiply_instrument_scale_factor` |
| Set (absolute) Instrument Scale Factor (CAUTION!) | `SetAbsoluteInstrumentScaleFactor` | `instrument_operations.set_absolute_instrument_scale_factor` |
| Get Instrument Scale Factor | `GetInstrumentScaleFactor` | `instrument_operations.get_instrument_scale_factor` |
| Transform Instrument - Frame To Frame | `TransformInstrumentFrameToFrame` | `instrument_operations.transform_instrument_frame_to_frame` |
| Transform Instrument by Delta | `TransformInstrumentByDelta` | `instrument_operations.transform_instrument_by_delta` |
| Transform Multiple Instruments By Delta | `TransformMultipleInstrumentsByDelta` | `instrument_operations.transform_multiple_instruments_by_delta` |
| Instrument Operational Check | `InstrumentOperationalCheck` | `instrument_operations.instrument_operational_check` |
| Get Number of Observations on Target | `GetNumberOfObservationsOnTarget` | `instrument_operations.get_number_of_observations_on_target` |
| Get Instruments with Observations on Target | `GetInstrumentsWithObservationsOnTarget` | `instrument_operations.get_instruments_with_observations_on_target` |
| Get Targets Measured by Instrument | `GetTargetsMeasuredByInstrument` | `instrument_operations.get_targets_measured_by_instrument` |
| Set Observation Status | `SetObservationStatus` | `instrument_operations.set_observation_status` |
| Get Observation Info | `GetObservationInfo` | `instrument_operations.get_observation_info` |
| Fabricate Observations | `FabricateObservations` | `instrument_operations.fabricate_observations` |
| Get Obscured Points from Instrument | `GetObscuredPointsFromInstrument` | `instrument_operations.get_obscured_points_from_instrument` |
| Get Instrument Targets and Mode/Profiles | `GetInstrumentTargetsAndModeProfiles` | `instrument_operations.get_instrument_targets_and_mode_profiles` |
| Set Instrument Measurement Mode/Profile | `SetInstrumentMeasurementModeProfile` | `instrument_operations.set_instrument_measurement_mode_profile` |
| Set Instrument Group and Target | `SetInstrumentGroupAndTarget` | `instrument_operations.set_instrument_group_and_target` |
| Set Instrument Targeting | `SetInstrumentTargeting` | `instrument_operations.set_instrument_targeting` |
| Get Instrument Measurement Mode/Profile | `GetInstrumentMeasurementModeProfile` | `instrument_operations.get_instrument_measurement_mode_profile` |
| Get Instrument Group and Target | `GetInstrumentGroupAndTarget` | `instrument_operations.get_instrument_group_and_target` |
| Get Instrument Targeting | `GetInstrumentTargeting` | `instrument_operations.get_instrument_targeting` |
| Set Target Computation Options | `SetTargetComputationOptions` | `instrument_operations.set_target_computation_options` |
| Set Observation Mirror Cube Shot Face | `SetObservationMirrorCubeShotFace` | `instrument_operations.set_observation_mirror_cube_shot_face` |
| Set Observation Collimation Shot Options | `SetObservationCollimationShotOptions` | `instrument_operations.set_observation_collimation_shot_options` |
| Collimation | `Collimation` | `instrument_operations.collimation` |
| Get Instrument Target Status | `GetInstrumentTargetStatus` | `instrument_operations.get_instrument_target_status` |
| Make Surface Face List from Point Proximity | `MakeSurfaceFaceListFromPointProximity` | `instrument_operations.make_surface_face_list_from_point_proximity` |
| Scan within perimeter | `ScanWithinPerimeter` | `instrument_operations.scan_within_perimeter` |
| Edit Scan Perimeter Profile | `EditScanPerimeterProfile` | `instrument_operations.edit_scan_perimeter_profile` |
| Get Estimated Scan Time | `GetEstimatedScanTime` | `instrument_operations.get_estimated_scan_time` |
| Construct Perimeters from Surface Face List | `ConstructPerimetersFromSurfaceFaceList` | `instrument_operations.construct_perimeters_from_surface_face_list` |
| Scan CAD Faces | `ScanCadFaces` | `instrument_operations.scan_cad_faces` |
| Edge Scan Measurement | `EdgeScanMeasurement` | `instrument_operations.edge_scan_measurement` |
| Track Tape Measurement | `TrackTapeMeasurement` | `instrument_operations.track_tape_measurement` |
| Auto Measure Points | `AutoMeasurePoints` | `instrument_operations.auto_measure_points` |
| Auto-Measure Vectors | `AutoMeasureVectors` | `instrument_operations.auto_measure_vectors` |
| Auto-Measure Surface Vector Intersections | `AutoMeasureSurfaceVectorIntersections` | `instrument_operations.auto_measure_surface_vector_intersections` |
| Auto-Measure Specified Geometry | `AutoMeasureSpecifiedGeometry` | `instrument_operations.auto_measure_specified_geometry` |
| Auto-Measure Batch of Features | `AutoMeasureBatchOfFeatures` | `instrument_operations.auto_measure_batch_of_features` |
| Auto-Correspond Closest Point | `AutoCorrespondClosestPoint` | `instrument_operations.auto_correspond_closest_point` |
| Close Auto-Correspond Closest Point Dialog | `CloseAutoCorrespondClosestPointDialog` | `instrument_operations.close_auto_correspond_closest_point_dialog` |
| Auto-Correspond with Proximity Trigger | `AutoCorrespondWithProximityTrigger` | `instrument_operations.auto_correspond_with_proximity_trigger` |
| Construct Mirror from Plane | `ConstructMirrorFromPlane` | `instrument_operations.construct_mirror_from_plane` |
| Construct Mirror from Two Points | `ConstructMirrorFromTwoPoints` | `instrument_operations.construct_mirror_from_two_points` |
| Drift Check | `DriftCheck` | `instrument_operations.drift_check` |
| Measure Nominal Feature | `MeasureNominalFeature` | `instrument_operations.measure_nominal_feature` |
| Guide Objects in 6D based on Point Measurements | `GuideObjectsIn6dBasedOnPointMeasurements` | `instrument_operations.guide_objects_in_6d_based_on_point_measurements` |
| Move Objects in 6D using Instrument Updates | `MoveObjectsIn6dUsingInstrumentUpdates` | `instrument_operations.move_objects_in_6d_using_instrument_updates` |
| Align Two Targets with Axis (WCF - X) | `AlignTwoTargetsWithAxisWcfX` | `instrument_operations.align_two_targets_with_axis_wcf_x` |
| Get Instrument Interface Response Timeout | `GetInstrumentInterfaceResponseTimeout` | `instrument_operations.get_instrument_interface_response_timeout` |
| Set Instrument Interface Response Timeout | `SetInstrumentInterfaceResponseTimeout` | `instrument_operations.set_instrument_interface_response_timeout` |
| Get Current Trapping Status | `GetCurrentTrappingStatus` | `instrument_operations.get_current_trapping_status` |
| Wait For Trapping To Complete | `WaitForTrappingToComplete` | `instrument_operations.wait_for_trapping_to_complete` |
| Jump Instrument To New Location | `JumpInstrumentToNewLocation` | `instrument_operations.jump_instrument_to_new_location` |
| Quick Align | `QuickAlign` | `instrument_operations.quick_align` |
| Align Cloud to CAD | `AlignCloudToCad` | `instrument_operations.align_cloud_to_cad` |
| Start GD&T Inspection Design | `StartGdtInspectionDesign` | `instrument_operations.start_gdt_inspection_design` |
| Start GD&T Inspection Rehearse | `StartGdtInspectionRehearse` | `instrument_operations.start_gdt_inspection_rehearse` |
| Start GD&T Inspection | `StartGdtInspection` | `instrument_operations.start_gdt_inspection` |
| Get Inspection Verification Mode | `GetInspectionVerificationMode` | `instrument_operations.get_inspection_verification_mode` |
| Set Inspection Verification Mode | `SetInspectionVerificationMode` | `instrument_operations.set_inspection_verification_mode` |
| Set Remeasure Failed Checks Only | `SetRemeasureFailedChecksOnly` | `instrument_operations.set_remeasure_failed_checks_only` |
| Associate Objects with Instrument | `AssociateObjectsWithInstrument` | `instrument_operations.associate_objects_with_instrument` |
| Disassociate Objects from Instrument | `DisassociateObjectsFromInstrument` | `instrument_operations.disassociate_objects_from_instrument` |
| Make Collection Object Name Ref List from Objects associated with Instruments | `MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments` | `instrument_operations.make_collection_object_name_ref_list_from_objects_associated_with_instruments` |
| Combine Point Groups | `CombinePointGroups` | `instrument_operations.combine_point_groups` |
| Dissect Point Group | `DissectPointGroup` | `instrument_operations.dissect_point_group` |
| Synchronized Measurement (Master/Slave) | `SynchronizedMeasurementMasterSlave` | `instrument_operations.synchronized_measurement_master_slave` |
| Create New Dynamic Reference | `CreateNewDynamicReference` | `instrument_operations.create_new_dynamic_reference` |
| Calculate TCP Fixture Uncertainties | `CalculateTcpFixtureUncertainties` | `instrument_operations.calculate_tcp_fixture_uncertainties` |
| Construct TCP Fixture | `ConstructTcpFixture` | `instrument_operations.construct_tcp_fixture` |
| Add Nominal Point to TCP Fixture | `AddNominalPointToTcpFixture` | `instrument_operations.add_nominal_point_to_tcp_fixture` |
| Get Last Solved TCP Fixture Uncertainty Covariance Matrix | `GetLastSolvedTcpFixtureUncertaintyCovarianceMatrix` | `instrument_operations.get_last_solved_tcp_fixture_uncertainty_covariance_matrix` |
| Set Instrument Base Uncertainty Covariance Matrix WRT Base | `SetInstrumentBaseUncertaintyCovarianceMatrixWrtBase` | `instrument_operations.set_instrument_base_uncertainty_covariance_matrix_wrt_base` |
| Set Instrument Base Uncertainty Covariance Matrix WRT WORLD | `SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld` | `instrument_operations.set_instrument_base_uncertainty_covariance_matrix_wrt_world` |
| Get Instrument Base Uncertainty Covariance Matrix WRT WORLD | `GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld` | `instrument_operations.get_instrument_base_uncertainty_covariance_matrix_wrt_world` |
| Construct Measured Point Uncertainty Ellipsoids | `ConstructMeasuredPointUncertaintyEllipsoids` | `instrument_operations.construct_measured_point_uncertainty_ellipsoids` |
| Get WRTL Channel and Status | `GetWrtlChannelAndStatus` | `instrument_operations.get_wrtl_channel_and_status` |
| Set WRTL Channel | `SetWrtlChannel` | `instrument_operations.set_wrtl_channel` |

Each route is `/briosa.InstrumentOperations/<RPC>`.

## Get Last Instrument Index

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-instrument-index)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Result | 1 | `instrument_index` | `int32` | `Instrument ID` via integer output | — |
| Result | 2 | `instrument` | `CollectionInstrumentId` | `Instrument ID` via Collection/Instrument output | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetLastInstrumentIndex(GetLastInstrumentIndexRequest) returns (GetLastInstrumentIndexResult);
message GetLastInstrumentIndexRequest {}
message GetLastInstrumentIndexResult {
  int32 instrument_index = 1;
  optional CollectionInstrumentId instrument = 2;
  MpExecutionDetails execution = 1000;
}
```

The result preserves the two independently retrieved SDK outputs. The service
does not synthesize or reconcile them.

## Rename Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#rename-instrument)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `new_name` | `string` | `New Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc RenameInstrument(RenameInstrumentRequest) returns (RenameInstrumentResult);
message RenameInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  string new_name = 2;
}
message RenameInstrumentResult { MpExecutionDetails execution = 1000; }
```

## Get Instrument ID from Name

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-id-from-name)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `name` | `string` | `Name` | Required |
| Result | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetInstrumentIdFromName(GetInstrumentIdFromNameRequest) returns (GetInstrumentIdFromNameResult);
message GetInstrumentIdFromNameRequest { string name = 1; }
message GetInstrumentIdFromNameResult {
  optional CollectionInstrumentId instrument = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Instrument Model

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-model)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Result | 1 | `name` | `string` | `Name` | — |
| Result | 2 | `model` | `string` | `Model` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetInstrumentModel(GetInstrumentModelRequest) returns (GetInstrumentModelResult);
message GetInstrumentModelRequest { optional CollectionInstrumentId instrument = 1; }
message GetInstrumentModelResult {
  string name = 1;
  string model = 2;
  MpExecutionDetails execution = 1000;
}
```

## Move Instrument to Another Collection

[MP command](/mp-command-catalog/commands/instrument-operations#move-instrument-to-another-collection)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `collection_name` | `CollectionName` | `Collection Name` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveInstrumentToAnotherCollection(MoveInstrumentToAnotherCollectionRequest) returns (MoveInstrumentToAnotherCollectionResult);
message MoveInstrumentToAnotherCollectionRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionName collection_name = 2;
}
message MoveInstrumentToAnotherCollectionResult { MpExecutionDetails execution = 1000; }
```

## Save Instrument Configuration

[MP command](/mp-command-catalog/commands/instrument-operations#save-instrument-configuration)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `configuration_file` | `FileReference` | `Configuration File` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SaveInstrumentConfiguration(SaveInstrumentConfigurationRequest) returns (SaveInstrumentConfigurationResult);
message SaveInstrumentConfigurationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference configuration_file = 2;
}
message SaveInstrumentConfigurationResult { MpExecutionDetails execution = 1000; }
```

## Load Instrument Configuration

[MP command](/mp-command-catalog/commands/instrument-operations#load-instrument-configuration)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `configuration_file` | `FileReference` | `Configuration File` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LoadInstrumentConfiguration(LoadInstrumentConfigurationRequest) returns (LoadInstrumentConfigurationResult);
message LoadInstrumentConfigurationRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference configuration_file = 2;
}
message LoadInstrumentConfigurationResult { MpExecutionDetails execution = 1000; }
```

## Export Instrument History to XML File

[MP command](/mp-command-catalog/commands/instrument-operations#export-instrument-history-to-xml-file)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `file_path` | `FileReference` | `File Path` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ExportInstrumentHistoryToXmlFile(ExportInstrumentHistoryToXmlFileRequest) returns (ExportInstrumentHistoryToXmlFileResult);
message ExportInstrumentHistoryToXmlFileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional FileReference file_path = 2;
}
message ExportInstrumentHistoryToXmlFileResult { MpExecutionDetails execution = 1000; }
```

`FileReference` follows the established Briosa file contract. For these three
MP commands, it resolves to a path available to the local Briosa server. Caller
cancellation never proves that a file mutation stopped, and no uncertain call
is replayed automatically.

## Point At Target

[MP command](/mp-command-catalog/commands/instrument-operations#point-at-target)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `target_id` | `PointName` | `Target ID` | Required |
| Request | 3 | `html_prompt_file` | `FileReference` | `HTML Prompt File (optional)` | Absent |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc PointAtTarget(PointAtTargetRequest) returns (PointAtTargetResult);
message PointAtTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target_id = 2;
  optional FileReference html_prompt_file = 3;
}
message PointAtTargetResult { MpExecutionDetails execution = 1000; }
```

## Measure Single Point Here

[MP command](/mp-command-catalog/commands/instrument-operations#measure-single-point-here)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `target_id` | `PointName` | `Target ID` | Required |
| Request | 3 | `measure_immediately` | `bool` | `Measure Immediately` | false |
| Request | 4 | `html_prompt_file` | `FileReference` | `HTML Prompt File (optional)` | Absent |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MeasureSinglePointHere(MeasureSinglePointHereRequest) returns (MeasureSinglePointHereResult);
message MeasureSinglePointHereRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target_id = 2;
  optional bool measure_immediately = 3;
  optional FileReference html_prompt_file = 4;
}
message MeasureSinglePointHereResult { MpExecutionDetails execution = 1000; }
```

## Get Current Instrument Position Update

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-instrument-position-update)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `reporting_frame` | `InstrumentPositionReportingFrame` | `Reporting Frame` | Instrument Base |
| Request | 3 | `polar_coordinates` | `bool` | `Polar Coordinates?` | false |
| Result | 1 | `x_or_r` | `double` | `X / R` | — |
| Result | 2 | `y_or_theta_degrees` | `double` | `Y / Theta (Degrees)` | — |
| Result | 3 | `z_or_phi_degrees` | `double` | `Z / Phi (Degrees)` | — |
| Result | 4 | `time_since_update_seconds` | `double` | `Time Since Update (sec)` | — |
| Result | 5 | `timestamp_approximate` | `string` | `Timestamp (Approximate)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetCurrentInstrumentPositionUpdate(GetCurrentInstrumentPositionUpdateRequest) returns (GetCurrentInstrumentPositionUpdateResult);
message GetCurrentInstrumentPositionUpdateRequest {
  optional CollectionInstrumentId instrument = 1;
  optional InstrumentPositionReportingFrame reporting_frame = 2;
  optional bool polar_coordinates = 3;
}
message GetCurrentInstrumentPositionUpdateResult {
  double x_or_r = 1;
  double y_or_theta_degrees = 2;
  double z_or_phi_degrees = 3;
  double time_since_update_seconds = 4;
  string timestamp_approximate = 5;
  MpExecutionDetails execution = 1000;
}
```

The field names remain valid in Cartesian and polar modes without implying
that Briosa converts the values.

## 'Build' Target

[MP command](/mp-command-catalog/commands/instrument-operations#build-target)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `output_target_name` | `PointName` | `Output Target Name` | Required |
| Request | 3 | `nominal_point` | `PointName` | `Nominal Point` | Required |
| Request | 4 | `tolerance` | `ToleranceVectorOptions` | `Tolerance` | All components disabled at 0 |
| Request | 5 | `html_prompt_file` | `FileReference` | `HTML Prompt File (optional)` | Absent |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc BuildTarget(BuildTargetRequest) returns (BuildTargetResult);
message BuildTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName output_target_name = 2;
  optional PointName nominal_point = 3;
  optional ToleranceVectorOptions tolerance = 4;
  optional FileReference html_prompt_file = 5;
}
message BuildTargetResult { MpExecutionDetails execution = 1000; }
```

When `tolerance` is absent, the server supplies the exact MP default: all high
and low X, Y, Z, and magnitude checks disabled with values of zero.

## Measure Existing Single Point

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `existing_target_id` | `PointName` | `Existing Target ID` | Required |
| Request | 3 | `group_name_for_new_point` | `CollectionObjectName` | `Group name for new point` | Required; Point Group |
| Request | 4 | `measure_immediately` | `bool` | `Measure Immediately` | false |
| Request | 5 | `html_prompt_file` | `FileReference` | `HTML Prompt File (optional)` | Absent |
| Result | 1 | `resulting_point_name` | `PointName` | `Resulting Point Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MeasureExistingSinglePoint(MeasureExistingSinglePointRequest) returns (MeasureExistingSinglePointResult);
message MeasureExistingSinglePointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
}
message MeasureExistingSinglePointResult {
  optional PointName resulting_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Measure Existing Single Point (Manual Guide)

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-manual-guide)

```proto
rpc MeasureExistingSinglePointManualGuide(MeasureExistingSinglePointManualGuideRequest) returns (MeasureExistingSinglePointManualGuideResult);
message MeasureExistingSinglePointManualGuideRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
}
message MeasureExistingSinglePointManualGuideResult {
  optional PointName resulting_point_name = 1;
  MpExecutionDetails execution = 1000;
}
```

The request and result fields, required presence, and defaults are identical to
`MeasureExistingSinglePoint`; only the exact MP step and RPC identity differ.

## Measure Existing Single Point and Compare

[MP command](/mp-command-catalog/commands/instrument-operations#measure-existing-single-point-and-compare)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `existing_target_id` | `PointName` | `Existing Target ID` | Required |
| Request | 3 | `group_name_for_new_point` | `CollectionObjectName` | `Group name for new point` | Required; Point Group |
| Request | 4 | `measure_immediately` | `bool` | `Measure Immediately` | false |
| Request | 5 | `html_prompt_file` | `FileReference` | `HTML Prompt File (optional)` | Absent |
| Request | 6 | `tolerance` | `double` | `Tolerance (0.0 for none)` | 0.0 |
| Result | 1 | `vector_representation` | `Vector` | `Vector Representation` | — |
| Result | 2 | `x_value` | `double` | `X Value` | — |
| Result | 3 | `y_value` | `double` | `Y Value` | — |
| Result | 4 | `z_value` | `double` | `Z Value` | — |
| Result | 5 | `magnitude` | `double` | `Magnitude` | — |
| Result | 6 | `resulting_point_name` | `PointName` | `Resulting Point Name` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MeasureExistingSinglePointAndCompare(MeasureExistingSinglePointAndCompareRequest) returns (MeasureExistingSinglePointAndCompareResult);
message MeasureExistingSinglePointAndCompareRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName existing_target_id = 2;
  optional CollectionObjectName group_name_for_new_point = 3;
  optional bool measure_immediately = 4;
  optional FileReference html_prompt_file = 5;
  optional double tolerance = 6;
}
message MeasureExistingSinglePointAndCompareResult {
  optional Vector vector_representation = 1;
  double x_value = 2;
  double y_value = 3;
  double z_value = 4;
  double magnitude = 5;
  optional PointName resulting_point_name = 6;
  MpExecutionDetails execution = 1000;
}
```

The separate scalar outputs are preserved even though some may overlap the
vector components. In particular, the SA 2026.1 `Magnitude` output is not
discarded to imitate an older client contract.

## Set Probe Offset Frame Online (Measure Raw Frame)

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-online-measure-raw-frame)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `probe_name` | `string` | `Probe Name` | Required |
| Request | 3 | `face_id` | `int32` | `Face ID ` | 0 |
| Request | 4 | `measure_profile_name` | `string` | `Measure Profile Name` | Empty |
| Request | 5 | `timeout_seconds` | `double` | `Timeout in Seconds` | 15.0 |
| Request | 6 | `offset_frame` | `CollectionObjectName` | `Offset Frame` | Required; Frame |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetProbeOffsetFrameOnline(SetProbeOffsetFrameOnlineRequest) returns (SetProbeOffsetFrameOnlineResult);
message SetProbeOffsetFrameOnlineRequest {
  optional CollectionInstrumentId instrument = 1;
  string probe_name = 2;
  optional int32 face_id = 3;
  optional string measure_profile_name = 4;
  optional double timeout_seconds = 5;
  optional CollectionObjectName offset_frame = 6;
}
message SetProbeOffsetFrameOnlineResult { MpExecutionDetails execution = 1000; }
```

## Set Probe Offset Frame Offline (Select Previously Measured Frame)

[MP command](/mp-command-catalog/commands/instrument-operations#set-probe-offset-frame-offline-select-previously-measured-frame)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `probe_name` | `string` | `Probe Name` | Required |
| Request | 3 | `face_id` | `int32` | `Face ID ` | 0 |
| Request | 4 | `raw_measured_frame` | `CollectionObjectName` | `Raw Measured Frame` | Required; Frame |
| Request | 5 | `offset_frame` | `CollectionObjectName` | `Offset Frame` | Required; Frame |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetProbeOffsetFrameOffline(SetProbeOffsetFrameOfflineRequest) returns (SetProbeOffsetFrameOfflineResult);
message SetProbeOffsetFrameOfflineRequest {
  optional CollectionInstrumentId instrument = 1;
  string probe_name = 2;
  optional int32 face_id = 3;
  optional CollectionObjectName raw_measured_frame = 4;
  optional CollectionObjectName offset_frame = 5;
}
message SetProbeOffsetFrameOfflineResult { MpExecutionDetails execution = 1000; }
```

## Stop Active Measurement Mode

[MP command](/mp-command-catalog/commands/instrument-operations#stop-active-measurement-mode)

```proto
rpc StopActiveMeasurementMode(StopActiveMeasurementModeRequest) returns (StopActiveMeasurementModeResult);
message StopActiveMeasurementModeRequest {
  optional CollectionInstrumentId instrument = 1;
}
message StopActiveMeasurementModeResult { MpExecutionDetails execution = 1000; }
```

The instrument is required. Briosa does not maintain a parallel measurement
state or limit this operation to a recovery path. All ten operations are
hardware-dependent and prohibit automatic replay after an unknown outcome.

## Enable/Disable Frame Set Scan Mode (All Instruments)

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-all-instruments)

```proto
rpc EnableDisableFrameSetScanModeAllInstruments(EnableDisableFrameSetScanModeAllInstrumentsRequest) returns (EnableDisableFrameSetScanModeAllInstrumentsResult);
message EnableDisableFrameSetScanModeAllInstrumentsRequest {
  optional bool enable_frame_set_scan_mode = 1;
}
message EnableDisableFrameSetScanModeAllInstrumentsResult {
  MpExecutionDetails execution = 1000;
}
```

`enable_frame_set_scan_mode` maps to `Enable Frame Set Scan Mode` and defaults
to `true` when absent.

## Enable/Disable Frame Set Scan Mode (By Instrument)

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-frame-set-scan-mode-by-instrument)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `enable_frame_set_scan_mode` | `bool` | `Enable Frame Set Scan Mode` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc EnableDisableFrameSetScanModeByInstrument(EnableDisableFrameSetScanModeByInstrumentRequest) returns (EnableDisableFrameSetScanModeByInstrumentResult);
message EnableDisableFrameSetScanModeByInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool enable_frame_set_scan_mode = 2;
}
message EnableDisableFrameSetScanModeByInstrumentResult {
  MpExecutionDetails execution = 1000;
}
```

## Enable/Disable Point Set Scan Mode

[MP command](/mp-command-catalog/commands/instrument-operations#enabledisable-point-set-scan-mode)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `enable_point_set_scan_mode` | `bool` | `Enable Point Set Scan Mode` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc EnableDisablePointSetScanMode(EnableDisablePointSetScanModeRequest) returns (EnableDisablePointSetScanModeResult);
message EnableDisablePointSetScanModeRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool enable_point_set_scan_mode = 2;
}
message EnableDisablePointSetScanModeResult { MpExecutionDetails execution = 1000; }
```

## Add New Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#add-new-instrument)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_type` | `InstrumentTypeName` | `Instrument Type` | Required |
| Result | 1 | `instrument_added` | `CollectionInstrumentId` | `Instrument Added (result)` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc AddNewInstrument(AddNewInstrumentRequest) returns (AddNewInstrumentResult);
message AddNewInstrumentRequest {
  optional InstrumentTypeName instrument_type = 1;
}
message AddNewInstrumentResult {
  optional CollectionInstrumentId instrument_added = 1;
  MpExecutionDetails execution = 1000;
}
```

SA determines whether the exact wrapper value is available in the installed
target. Briosa never substitutes a different instrument type.

## Delete Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#delete-instrument)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `prompt_user_to_confirm` | `bool` | `Prompt user to confirm?` | false |
| Request | 3 | `keep_resulting_points` | `bool` | `Keep resulting points?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc DeleteInstrument(DeleteInstrumentRequest) returns (DeleteInstrumentResult);
message DeleteInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool prompt_user_to_confirm = 2;
  optional bool keep_resulting_points = 3;
}
message DeleteInstrumentResult { MpExecutionDetails execution = 1000; }
```

The no-prompt default intentionally differs from the MP Editor default. A
caller may opt into the SpatialAnalyzer confirmation dialog explicitly.

## Delete Measurements

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurements)

```proto
rpc DeleteMeasurements(DeleteMeasurementsRequest) returns (DeleteMeasurementsResult);
message DeleteMeasurementsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_name = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
}
message DeleteMeasurementsResult { MpExecutionDetails execution = 1000; }
```

The instrument and point are required. `delete_point_if_no_measurements_remain`
maps to the identically worded MP argument and defaults to `false`.

## Delete Measurement Observation

[MP command](/mp-command-catalog/commands/instrument-operations#delete-measurement-observation)

```proto
rpc DeleteMeasurementObservation(DeleteMeasurementObservationRequest) returns (DeleteMeasurementObservationResult);
message DeleteMeasurementObservationRequest {
  optional PointName point_name = 1;
  optional int32 observation_index = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
}
message DeleteMeasurementObservationResult { MpExecutionDetails execution = 1000; }
```

The point is required. `observation_index` defaults to `0`, and deleting an
empty point defaults to `false`.

## Move Measurement Observation

[MP command](/mp-command-catalog/commands/instrument-operations#move-measurement-observation)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `source_point_name` | `PointName` | `Source Point Name` | Required |
| Request | 2 | `observation_index` | `int32` | `Observation index` | 0 |
| Request | 3 | `delete_point_if_no_measurements_remain` | `bool` | `Delete point if no measurements remain?` | false |
| Request | 4 | `destination_point_name` | `PointName` | `Destination Point Name` | Required |
| Request | 5 | `force_observation_active` | `bool` | `Force observation to be active?` | true |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc MoveMeasurementObservation(MoveMeasurementObservationRequest) returns (MoveMeasurementObservationResult);
message MoveMeasurementObservationRequest {
  optional PointName source_point_name = 1;
  optional int32 observation_index = 2;
  optional bool delete_point_if_no_measurements_remain = 3;
  optional PointName destination_point_name = 4;
  optional bool force_observation_active = 5;
}
message MoveMeasurementObservationResult { MpExecutionDetails execution = 1000; }
```

Briosa adds no preflight or transaction around these mutations. SA evaluates
current state at execution time, and none of the eight operations is
automatically replayed after an unknown outcome.

## Guide Objects in 6D based on Point Measurements

[MP command](/mp-command-catalog/commands/instrument-operations#guide-objects-in-6d-based-on-point-measurements)

```proto
rpc GuideObjectsIn6dBasedOnPointMeasurements(GuideObjectsIn6dBasedOnPointMeasurementsRequest) returns (GuideObjectsIn6dBasedOnPointMeasurementsResult);
message GuideObjectsIn6dBasedOnPointMeasurementsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName destination_group = 2;
  optional CollectionObjectName moving_reference_group = 3;
  repeated CollectionObjectName objects_to_move = 4;
  optional CollectionObjectName initial_survey_group = 5;
  optional ToleranceVectorOptions positional_tolerance = 6;
  optional ToleranceVectorOptions rotational_tolerance = 7;
}
message GuideObjectsIn6dBasedOnPointMeasurementsResult { MpExecutionDetails execution = 1000; }
```

The first three identities are required and identify an instrument and two
Point Groups. The remaining group and both tolerances are optional.

## Move Objects in 6D using Instrument Updates

[MP command](/mp-command-catalog/commands/instrument-operations#move-objects-in-6d-using-instrument-updates)

```proto
rpc MoveObjectsIn6dUsingInstrumentUpdates(MoveObjectsIn6dUsingInstrumentUpdatesRequest) returns (MoveObjectsIn6dUsingInstrumentUpdatesResult);
message MoveObjectsIn6dUsingInstrumentUpdatesRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects_to_move = 2;
  optional string measurement_mode = 3;
}
message MoveObjectsIn6dUsingInstrumentUpdatesResult { MpExecutionDetails execution = 1000; }
```

## Align Two Targets with Axis (WCF - X)

[MP command](/mp-command-catalog/commands/instrument-operations#align-two-targets-with-axis-wcf---x)

```proto
rpc AlignTwoTargetsWithAxisWcfX(AlignTwoTargetsWithAxisWcfXRequest) returns (AlignTwoTargetsWithAxisWcfXResult);
message AlignTwoTargetsWithAxisWcfXRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName first_point_on_axis = 2;
  optional PointName second_point_on_axis = 3;
  optional CollectionObjectName initial_measured_group = 4;
  optional ToleranceVectorOptions rotational_tolerance = 5;
}
message AlignTwoTargetsWithAxisWcfXResult { MpExecutionDetails execution = 1000; }
```

The first four fields are required; the group must be a Point Group. The
rotational tolerance is optional.

## Get Instrument Interface Response Timeout

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-interface-response-timeout)

```proto
rpc GetInstrumentInterfaceResponseTimeout(GetInstrumentInterfaceResponseTimeoutRequest) returns (GetInstrumentInterfaceResponseTimeoutResult);
message GetInstrumentInterfaceResponseTimeoutRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentInterfaceResponseTimeoutResult {
  double timeout_seconds = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Interface Response Timeout

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-interface-response-timeout)

```proto
rpc SetInstrumentInterfaceResponseTimeout(SetInstrumentInterfaceResponseTimeoutRequest) returns (SetInstrumentInterfaceResponseTimeoutResult);
message SetInstrumentInterfaceResponseTimeoutRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double timeout_seconds = 2;
}
message SetInstrumentInterfaceResponseTimeoutResult { MpExecutionDetails execution = 1000; }
```

`timeout_seconds` defaults to `0.0`; Briosa adds no range check.

## Get Current Trapping Status

[MP command](/mp-command-catalog/commands/instrument-operations#get-current-trapping-status)

```proto
rpc GetCurrentTrappingStatus(GetCurrentTrappingStatusRequest) returns (GetCurrentTrappingStatusResult);
message GetCurrentTrappingStatusRequest {}
message GetCurrentTrappingStatusResult {
  optional CurrentTrappingStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

`focused_item` and `instrument` are present when SA supplies those identities;
they are not required when trapping is inactive.

## Wait For Trapping To Complete

[MP command](/mp-command-catalog/commands/instrument-operations#wait-for-trapping-to-complete)

```proto
rpc WaitForTrappingToComplete(WaitForTrappingToCompleteRequest) returns (WaitForTrappingToCompleteResult);
message WaitForTrappingToCompleteRequest {}
message WaitForTrappingToCompleteResult { MpExecutionDetails execution = 1000; }
```

The call returns immediately if trapping is inactive; otherwise SA waits for
trapping to advance. A gRPC deadline or cancellation does not prove that the
underlying call stopped, and worker replacement does not make replay safe.

## Jump Instrument To New Location

[MP command](/mp-command-catalog/commands/instrument-operations#jump-instrument-to-new-location)

```proto
rpc JumpInstrumentToNewLocation(JumpInstrumentToNewLocationRequest) returns (JumpInstrumentToNewLocationResult);
message JumpInstrumentToNewLocationRequest {
  optional CollectionInstrumentId live_instrument = 1;
  optional bool hide_previous_instrument = 2;
}
message JumpInstrumentToNewLocationResult { MpExecutionDetails execution = 1000; }
```

Hiding the previous instrument defaults to `false`. Briosa adds no confirmation
around SA's interface stop/create/start sequence.

## Quick Align

[MP command](/mp-command-catalog/commands/instrument-operations#quick-align)

```proto
rpc QuickAlign(QuickAlignRequest) returns (QuickAlignResult);
message QuickAlignRequest {
  repeated CollectionInstrumentId instruments = 1;
  repeated CollectionObjectName objects = 2;
  repeated PointName nominal_points = 3;
  repeated string nominal_point_of_view_names = 4;
  optional bool align_to_individual_faces_only = 5;
}
message QuickAlignResult { MpExecutionDetails execution = 1000; }
```

The first two lists are required. Nominal points and their sequentially
corresponding point-of-view names are optional; Briosa does not prevalidate
their lengths. Face-only alignment defaults to `false`.

## Align Cloud to CAD

[MP command](/mp-command-catalog/commands/instrument-operations#align-cloud-to-cad)

```proto
rpc AlignCloudToCad(AlignCloudToCadRequest) returns (AlignCloudToCadResult);
message AlignCloudToCadRequest {
  optional CollectionObjectName cloud = 1;
  repeated CollectionObjectName surfaces = 2;
  optional double maximum_coarse_cad_mesh_edge_length = 3;
  optional bool use_fine_cad_mesh = 4;
  optional bool execute_alignment = 5;
}
message AlignCloudToCadResult {
  optional CloudToCadAlignmentResult alignment = 1;
  MpExecutionDetails execution = 1000;
}
```

The cloud and surfaces are required. Defaults are `0.0`, `false`, and `true`.
SA clamps edge lengths below 5 mm to 5 mm. When execution is false, the
returned transform is analytical and is not applied automatically. These calls
retain no Briosa-owned workflow state and are never automatically replayed.

## Initiate Servo-Guide

[MP command](/mp-command-catalog/commands/instrument-operations#initiate-servo-guide)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 2 | `nominal_points` | repeated `PointName` | `Nominal Points` | Required, non-empty |
| Request | 3 | `group_name_suffix` | `string` | `Group Name Suffix` | Empty |
| Request | 4 | `target_name_suffix` | `string` | `Target Name Suffix` | Empty |
| Request | 5 | `tolerance` | `double` | `Tolerance` | 0.0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc InitiateServoGuide(InitiateServoGuideRequest) returns (InitiateServoGuideResult);
message InitiateServoGuideRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName nominal_points = 2;
  optional string group_name_suffix = 3;
  optional string target_name_suffix = 4;
  optional double tolerance = 5;
}
message InitiateServoGuideResult { MpExecutionDetails execution = 1000; }
```

## Start Theodolite Interface

[MP command](/mp-command-catalog/commands/instrument-operations#start-theodolite-interface)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `theodolite_type` | `string` | `Theodolite Type` | Required |
| Request | 3 | `comm_port` | `int32` | `Comm Port` | 0 |
| Request | 4 | `device_ip_address` | `string` | `IP Address` | Empty |
| Request | 5 | `simulation` | `bool` | `Simulation` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc StartTheodoliteInterface(StartTheodoliteInterfaceRequest) returns (StartTheodoliteInterfaceResult);
message StartTheodoliteInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string theodolite_type = 2;
  optional int32 comm_port = 3;
  optional string device_ip_address = 4;
  optional bool simulation = 5;
}
message StartTheodoliteInterfaceResult { MpExecutionDetails execution = 1000; }
```

The type is passed to Theodolite Manager exactly as supplied. The device IP
configures communication from local SA to the instrument; it is not a remote
Briosa server address.

## Start Instrument Interface

[MP command](/mp-command-catalog/commands/instrument-operations#start-instrument-interface)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `initialize_at_startup` | `bool` | `Initialize at startup?` | false |
| Request | 3 | `device_ip_address` | `string` | `Device IP Address` | Empty |
| Request | 4 | `interface_type` | `int32` | `Interface Type` | 0 |
| Request | 5 | `run_in_simulation` | `bool` | `Run in Simulation?` | false |
| Request | 6 | `allow_start_without_initialization_requirements` | `bool` | `Allow Start Without Initialization Requirements?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc StartInstrumentInterface(StartInstrumentInterfaceRequest) returns (StartInstrumentInterfaceResult);
message StartInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool initialize_at_startup = 2;
  optional string device_ip_address = 3;
  optional int32 interface_type = 4;
  optional bool run_in_simulation = 5;
  optional bool allow_start_without_initialization_requirements = 6;
}
message StartInstrumentInterfaceResult { MpExecutionDetails execution = 1000; }
```

`interface_type = 0` selects the instrument's default interface. The device IP
has the same local SA-to-instrument meaning described above.

## Stop Instrument Interface

[MP command](/mp-command-catalog/commands/instrument-operations#stop-instrument-interface)

```proto
rpc StopInstrumentInterface(StopInstrumentInterfaceRequest) returns (StopInstrumentInterfaceResult);
message StopInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
}
message StopInstrumentInterfaceResult { MpExecutionDetails execution = 1000; }
```

The required `instrument` maps to `Instrument's ID`.

## Activate/Deactivate Instrument Toolbar

[MP command](/mp-command-catalog/commands/instrument-operations#activatedeactivate-instrument-toolbar)

```proto
rpc ActivateDeactivateInstrumentToolbar(ActivateDeactivateInstrumentToolbarRequest) returns (ActivateDeactivateInstrumentToolbarResult);
message ActivateDeactivateInstrumentToolbarRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool deactivate_toolbar = 2;
}
message ActivateDeactivateInstrumentToolbarResult { MpExecutionDetails execution = 1000; }
```

The required instrument maps to `Instrument's ID`. `deactivate_toolbar` maps
to `Deactivate Toolbar?` and defaults to `false`, so the default call activates
the toolbar.

## Verify Instrument Connection

[MP command](/mp-command-catalog/commands/instrument-operations#verify-instrument-connection)

```proto
rpc VerifyInstrumentConnection(VerifyInstrumentConnectionRequest) returns (VerifyInstrumentConnectionResult);
message VerifyInstrumentConnectionRequest {
  optional CollectionInstrumentId instrument = 1;
}
message VerifyInstrumentConnectionResult {
  optional bool connected = 1;
  MpExecutionDetails execution = 1000;
}
```

`connected` preserves the MP `Connected?` output for the selected instrument
interface. It does not report the SA SDK connection owned by Briosa.

## Configure and Measure

[MP command](/mp-command-catalog/commands/instrument-operations#configure-and-measure)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument's ID` | Required |
| Request | 2 | `target` | `PointName` | `Target` | Required |
| Request | 3 | `measurement_mode` | `string` | `Measurement Mode` | Required |
| Request | 4 | `measure_immediately` | `bool` | `Measure Immediately?` | false |
| Request | 5 | `wait_for_completion` | `bool` | `Wait for Completion?` | true |
| Request | 6 | `timeout_seconds` | `double` | `Timeout (seconds)` | 0.0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc ConfigureAndMeasure(ConfigureAndMeasureRequest) returns (ConfigureAndMeasureResult);
message ConfigureAndMeasureRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName target = 2;
  optional string measurement_mode = 3;
  optional bool measure_immediately = 4;
  optional bool wait_for_completion = 5;
  optional double timeout_seconds = 6;
}
message ConfigureAndMeasureResult { MpExecutionDetails execution = 1000; }
```

The measurement mode is interpreted by the selected instrument. A value of
`0.0` is the MP command's no-timeout setting; it does not remove the caller's
gRPC deadline or Briosa's worker watchdog.

## Measure

[MP command](/mp-command-catalog/commands/instrument-operations#measure)

```proto
rpc Measure(MeasureRequest) returns (MeasureResult);
message MeasureRequest {
  optional CollectionInstrumentId instrument = 1;
}
message MeasureResult { MpExecutionDetails execution = 1000; }
```

The required instrument maps to `Instrument's ID`. SA uses its current
instrument configuration; Briosa does not keep a parallel state model.

## Set XYZ Reference Frame Instrument Base Anchor Frame

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-reference-frame-instrument-base-anchor-frame)

```proto
rpc SetXyzReferenceFrameInstrumentBaseAnchorFrame(SetXyzReferenceFrameInstrumentBaseAnchorFrameRequest) returns (SetXyzReferenceFrameInstrumentBaseAnchorFrameResult);
message SetXyzReferenceFrameInstrumentBaseAnchorFrameRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName anchor_frame = 2;
}
message SetXyzReferenceFrameInstrumentBaseAnchorFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The instrument maps to `Instrument's ID`. `anchor_frame` maps to `Anchor Frame`
and must identify an existing SA Frame.

## Dock Instrument Interface

[MP command](/mp-command-catalog/commands/instrument-operations#dock-instrument-interface)

```proto
rpc DockInstrumentInterface(DockInstrumentInterfaceRequest) returns (DockInstrumentInterfaceResult);
message DockInstrumentInterfaceRequest {
  optional CollectionInstrumentId instrument = 1;
  optional bool dock_interface = 2;
}
message DockInstrumentInterfaceResult { MpExecutionDetails execution = 1000; }
```

The instrument maps to `Instrument's ID`. `dock_interface` maps to `Dock
Interface?` and defaults to `false`.

These interface and measurement operations are evaluated against live SA and
instrument state. Briosa performs no state preflight and never automatically
replays a call whose completion is unknown.

## Locate Instrument (Ref. Tie-In)

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-ref-tie-in)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument to Locate` | Required |
| Request | 2 | `reference_group` | `CollectionObjectName` | `Reference Group Name` | Required Point Group |
| Request | 3 | `actuals_group` | `CollectionObjectName` | `Actuals Group Name (to be measured)` | Required Point Group |
| Request | 4 | `tolerance` | `double` | `Tolerance` | 0.0 |
| Request | 5 | `auto_survey` | `bool` | `Auto Survey` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LocateInstrumentRefTieIn(LocateInstrumentRefTieInRequest) returns (LocateInstrumentRefTieInResult);
message LocateInstrumentRefTieInRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional double tolerance = 4;
  optional bool auto_survey = 5;
}
message LocateInstrumentRefTieInResult {
  MpExecutionDetails execution = 1000;
}
```

SA owns the guided or automatic measurement workflow and all resulting live
state. Briosa does not model the intermediate measurements.

## Locate Instrument (Group to Surface Quick Fit)

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-group-to-surface-quick-fit)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument to Locate` | Required |
| Request | 2 | `measured_group` | `CollectionObjectName` | `Name of Measured Group` | Required Point Group |
| Request | 3 | `surface_points_group` | `CollectionObjectName` | `Name of Group containing Surface Pts` | Required Point Group |
| Request | 4 | `surface_to_fit` | `CollectionObjectName` | `Surface to fit` | Required Surface |
| Request | 5 | `other_objects_to_transform` | repeated `CollectionObjectName` | `Other Objects to Transform` | Empty |
| Request | 6 | `rms_tolerance` | `double` | `RMS Tolerance (0.0 for none)` | 0.0 |
| Request | 7 | `maximum_absolute_tolerance` | `double` | `Maximum Absolute Tolerance (0.0 for none)` | 0.0 |
| Result | 1 | `rms_error` | `double` | `RMS Error` | — |
| Result | 2 | `maximum_absolute_error` | `double` | `Maximum Absolute Error` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LocateInstrumentGroupToSurfaceQuickFit(LocateInstrumentGroupToSurfaceQuickFitRequest) returns (LocateInstrumentGroupToSurfaceQuickFitResult);
message LocateInstrumentGroupToSurfaceQuickFitRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName measured_group = 2;
  optional CollectionObjectName surface_points_group = 3;
  optional CollectionObjectName surface_to_fit = 4;
  repeated CollectionObjectName other_objects_to_transform = 5;
  optional double rms_tolerance = 6;
  optional double maximum_absolute_tolerance = 7;
}
message LocateInstrumentGroupToSurfaceQuickFitResult {
  optional double rms_error = 1;
  optional double maximum_absolute_error = 2;
  MpExecutionDetails execution = 1000;
}
```

## Multi Measurement Initiate

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-initiate)

```proto
rpc MultiMeasurementInitiate(MultiMeasurementInitiateRequest) returns (MultiMeasurementInitiateResult);
message MultiMeasurementInitiateRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional string measurement_mode = 2;
  optional bool wait_for_completion = 3;
}
message MultiMeasurementInitiateResult { MpExecutionDetails execution = 1000; }
```

`instruments` must be non-empty. `measurement_mode` is required and passed to
SA exactly as supplied. `wait_for_completion` defaults to `false`.

## Multi Measurement Stop

[MP command](/mp-command-catalog/commands/instrument-operations#multi-measurement-stop)

```proto
rpc MultiMeasurementStop(MultiMeasurementStopRequest) returns (MultiMeasurementStopResult);
message MultiMeasurementStopRequest {
  repeated CollectionInstrumentId instruments = 1;
}
message MultiMeasurementStopResult { MpExecutionDetails execution = 1000; }
```

`instruments` must be non-empty. Briosa does not require that it previously
initiated the active measurements.

## Align Laser Projector

[MP command](/mp-command-catalog/commands/instrument-operations#align-laser-projector)

```proto
rpc AlignLaserProjector(AlignLaserProjectorRequest) returns (AlignLaserProjectorResult);
message AlignLaserProjectorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName group = 2;
}
message AlignLaserProjectorResult { MpExecutionDetails execution = 1000; }
```

The instrument maps to `Instrument ID`; `group` maps to `Group Name` and must
identify an existing Point Group.

## Locate Instruments (USMN)

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instruments-usmn)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instruments` | repeated `CollectionInstrumentId` | `Instruments to Locate` | Required, non-empty |
| Request | 2 | `nominals_group` | `CollectionObjectName` | `Nominals Group Name (blank for none)` | Omitted |
| Request | 3 | `output_group` | `CollectionObjectName` | `Output Group Name (to be established)` | Required Point Group identity |
| Request | 4 | `move_in_working_frame` | `bool` | `Move In Working Frame (TRUE) or Instrument Frame (FALSE)` | false |
| Request | 5 | `auto_reject_outliers_and_resolve` | `bool` | `AutoReject Outliers and Resolve` | false |
| Request | 6 | `show_usmn_dialog` | `ShowUsmnDialog` | `Show USMN Dialog` | No |
| Request | 7 | `maximum_acceptable_rms_error` | `double` | `Max Acceptable RMS Error Value (0.0 for none)` | 0.0 |
| Request | 8 | `maximum_acceptable_error` | `double` | `Max Acceptable Error Value (0.0 for none)` | 0.0 |
| Request | 9 | `excluded_groups` | repeated `CollectionObjectName` | `Groups to be Excluded` | Empty |
| Request | 10 | `exclude_single_instrument_points` | `bool` | `Exclude Points Measured By Only One Instrument` | false |
| Request | 11 | `run_uncertainty_field_analysis` | `bool` | `Run Uncertainty Field Analysis?` | false |
| Request | 12 | `analysis_samples` | `int32` | `Analysis Samples` | 300 |
| Request | 13 | `analysis_time_limit_minutes` | `double` | `Analysis Time Limit (Minutes - 0 for none)` | 4.0 |
| Result | 1 | `rms_error` | `double` | `RMS Error Value` | — |
| Result | 2 | `maximum_error` | `double` | `Max Error Value` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc LocateInstrumentsUsmn(LocateInstrumentsUsmnRequest) returns (LocateInstrumentsUsmnResult);
message LocateInstrumentsUsmnRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional CollectionObjectName nominals_group = 2;
  optional CollectionObjectName output_group = 3;
  optional bool move_in_working_frame = 4;
  optional bool auto_reject_outliers_and_resolve = 5;
  optional ShowUsmnDialog show_usmn_dialog = 6;
  optional double maximum_acceptable_rms_error = 7;
  optional double maximum_acceptable_error = 8;
  repeated CollectionObjectName excluded_groups = 9;
  optional bool exclude_single_instrument_points = 10;
  optional bool run_uncertainty_field_analysis = 11;
  optional int32 analysis_samples = 12;
  optional double analysis_time_limit_minutes = 13;
}
message LocateInstrumentsUsmnResult {
  optional double rms_error = 1;
  optional double maximum_error = 2;
  MpExecutionDetails execution = 1000;
}
```

The no-dialog default intentionally overrides ObjectiveSA's older
`On Tolerance Violation` default. SA remains responsible for the USMN solution,
outlier handling, movement, and uncertainty analysis.

## Create Templated Instrument (USMN)

[MP command](/mp-command-catalog/commands/instrument-operations#create-templated-instrument-usmn)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument_template_name` | `CollectionObjectName` | `Instrument Template Name` | Required USMN Template identity |
| Request | 2 | `instrument` | `CollectionInstrumentId` | `Instrument ID` | Required |
| Request | 3 | `overall_instrument_weight` | `double` | `Overal Instrument Weight` | 1.0 |
| Request | 4 | `moving` | `bool` | `Moving` | true |
| Request | 5 | `enable_x` | `bool` | `Enable X` | true |
| Request | 6 | `enable_y` | `bool` | `Enable Y` | true |
| Request | 7 | `enable_z` | `bool` | `Enable Z` | true |
| Request | 8 | `enable_rx` | `bool` | `Enable Rx` | true |
| Request | 9 | `enable_ry` | `bool` | `Enable Ry` | true |
| Request | 10 | `enable_rz` | `bool` | `Enable Rz` | true |
| Request | 11 | `enable_scale` | `bool` | `Enable Scale` | false |
| Request | 12 | `enable_component_weights` | `bool` | `Enable Component Weights` | true |
| Request | 13 | `azimuth_weight` | `double` | `Component 1 (Azimuth) Weight` | 1.0 |
| Request | 14 | `elevation_weight` | `double` | `Component 2 (Elevation) Weight` | 1.0 |
| Request | 15 | `distance_weight` | `double` | `Component 3 (Distance) Weight` | 1.0 |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc CreateTemplatedInstrumentUsmn(CreateTemplatedInstrumentUsmnRequest) returns (CreateTemplatedInstrumentUsmnResult);
message CreateTemplatedInstrumentUsmnRequest {
  optional CollectionObjectName instrument_template_name = 1;
  optional CollectionInstrumentId instrument = 2;
  optional double overall_instrument_weight = 3;
  optional bool moving = 4;
  optional bool enable_x = 5;
  optional bool enable_y = 6;
  optional bool enable_z = 7;
  optional bool enable_rx = 8;
  optional bool enable_ry = 9;
  optional bool enable_rz = 10;
  optional bool enable_scale = 11;
  optional bool enable_component_weights = 12;
  optional double azimuth_weight = 13;
  optional double elevation_weight = 14;
  optional double distance_weight = 15;
}
message CreateTemplatedInstrumentUsmnResult {
  MpExecutionDetails execution = 1000;
}
```

The public field corrects the MP argument's `Overal` spelling; the server must
still use the exact misspelled argument label internally. These seven
operations receive no extra workflow safeguards and are never automatically
replayed after an unknown outcome.

## Locate Instrument (Best Fit - Group to Group)

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---group-to-group)

```proto
rpc LocateInstrumentBestFitGroupToGroup(LocateInstrumentBestFitGroupToGroupRequest) returns (LocateInstrumentBestFitGroupToGroupResult);
message LocateInstrumentBestFitGroupToGroupRequest {
  optional CollectionObjectName reference_group = 1;
  optional CollectionObjectName corresponding_group = 2;
  optional bool show_interface = 3;
  optional double rms_tolerance = 4;
  optional double maximum_absolute_tolerance = 5;
  optional bool allow_scale = 6;
  optional bool allow_x = 7;
  optional bool allow_y = 8;
  optional bool allow_z = 9;
  optional bool allow_rx = 10;
  optional bool allow_ry = 11;
  optional bool allow_rz = 12;
  optional bool lock_degrees_of_freedom = 13;
  optional bool generate_event = 14;
  optional FileReference csv_report = 15;
}
message LocateInstrumentBestFitGroupToGroupResult {
  optional Transform transform_in_working = 1;
  optional WorldTransform optimum_transform = 2;
  optional double rms_deviation = 3;
  optional double maximum_absolute_deviation = 4;
  optional int32 number_of_unknowns = 5;
  optional int32 number_of_equations = 6;
  optional double robustness = 7;
  MpExecutionDetails execution = 1000;
}
```

Both groups are required Point Groups. `show_interface` defaults to `false`,
both tolerances to `0.0`, scale to `false`, all six rigid-body degrees of
freedom to `true`, and locking and event generation to `false`. `csv_report` is
optional and is used by SA only when the interface is shown.

## Locate Instrument (Best Fit - Nominal Geometry)

[MP command](/mp-command-catalog/commands/instrument-operations#locate-instrument-best-fit---nominal-geometry)

```proto
rpc LocateInstrumentBestFitNominalGeometry(LocateInstrumentBestFitNominalGeometryRequest) returns (LocateInstrumentBestFitNominalGeometryResult);
message LocateInstrumentBestFitNominalGeometryRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName geometry_relationships = 2;
  optional bool show_interface = 3;
  optional double rms_tolerance = 4;
  optional double maximum_absolute_tolerance = 5;
  optional bool allow_scale = 6;
  optional bool allow_x = 7;
  optional bool allow_y = 8;
  optional bool allow_z = 9;
  optional bool allow_rx = 10;
  optional bool allow_ry = 11;
  optional bool allow_rz = 12;
  optional bool lock_degrees_of_freedom = 13;
  optional bool generate_event = 14;
  optional FileReference csv_report = 15;
}
message LocateInstrumentBestFitNominalGeometryResult {
  optional Transform transform_in_working = 1;
  optional WorldTransform optimum_transform = 2;
  optional double rms_deviation = 3;
  optional double maximum_absolute_deviation = 4;
  optional int32 number_of_unknowns = 5;
  optional int32 number_of_equations = 6;
  optional double robustness = 7;
  MpExecutionDetails execution = 1000;
}
```

`instrument` is required and `geometry_relationships` must be non-empty. The
remaining defaults and complete result shape match the group-to-group command.

## Get Instrument Transform

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-transform)

```proto
rpc GetInstrumentTransform(GetInstrumentTransformRequest) returns (GetInstrumentTransformResult);
message GetInstrumentTransformRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_frame = 2;
}
message GetInstrumentTransformResult {
  optional Transform transform = 1;
  MpExecutionDetails execution = 1000;
}
```

The reference-frame identity is required and must refer to an SA Frame.

## Set Instrument Transform

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-transform)

```proto
rpc SetInstrumentTransform(SetInstrumentTransformRequest) returns (SetInstrumentTransformResult);
message SetInstrumentTransformRequest {
  optional CollectionInstrumentId instrument = 1;
  optional Transform destination_transform = 2;
  optional CollectionObjectName reference_frame = 3;
  optional int32 number_of_steps = 4;
}
message SetInstrumentTransformResult { MpExecutionDetails execution = 1000; }
```

The first three fields are required. `number_of_steps` maps to the MP animation
setting and defaults to `0`.

## Get Tracker/EDM Theodolite Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-trackeredm-theodolite-uncertainties)

```proto
rpc GetTrackerEdmTheodoliteUncertainties(GetTrackerEdmTheodoliteUncertaintiesRequest) returns (GetTrackerEdmTheodoliteUncertaintiesResult);
message GetTrackerEdmTheodoliteUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetTrackerEdmTheodoliteUncertaintiesResult {
  optional double theta_dispersion_arcseconds = 1;
  optional double theta_threshold = 2;
  optional double phi_dispersion_arcseconds = 3;
  optional double phi_threshold = 4;
  optional double distance_ppm = 5;
  optional double distance_threshold = 6;
  MpExecutionDetails execution = 1000;
}
```

The result follows the exact export's output order and labels. The thresholds
use current SA linear units. The installed command-listing page describes a
different uncertainty schema and is not used for this exact-target contract.

## Set Tracker/EDM Theodolite Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-trackeredm-theodolite-uncertainties)

```proto
rpc SetTrackerEdmTheodoliteUncertainties(SetTrackerEdmTheodoliteUncertaintiesRequest) returns (SetTrackerEdmTheodoliteUncertaintiesResult);
message SetTrackerEdmTheodoliteUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double theta_dispersion_arcseconds = 2;
  optional double theta_threshold = 3;
  optional double phi_dispersion_arcseconds = 4;
  optional double phi_threshold = 5;
  optional double distance_ppm = 6;
  optional double distance_threshold = 7;
}
message SetTrackerEdmTheodoliteUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

Defaults are `1.0`, `0.001`, `1.0`, `0.001`, `2.5`, and `0.0003` in field
order. Internally the server preserves the exported `Phi Dispersion(arcseconds)`
and `Phi Threshold(linear units)` labels.

## Get PCMM Instrument XYZ Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-pcmm-instrument-xyz-uncertainties)

```proto
rpc GetPcmmInstrumentXyzUncertainties(GetPcmmInstrumentXyzUncertaintiesRequest) returns (GetPcmmInstrumentXyzUncertaintiesResult);
message GetPcmmInstrumentXyzUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetPcmmInstrumentXyzUncertaintiesResult {
  optional double x_uncertainty = 1;
  optional double y_uncertainty = 2;
  optional double z_uncertainty = 3;
  MpExecutionDetails execution = 1000;
}
```

## Set PCMM Instrument XYZ Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-pcmm-instrument-xyz-uncertainties)

```proto
rpc SetPcmmInstrumentXyzUncertainties(SetPcmmInstrumentXyzUncertaintiesRequest) returns (SetPcmmInstrumentXyzUncertaintiesResult);
message SetPcmmInstrumentXyzUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double x_uncertainty = 2;
  optional double y_uncertainty = 3;
  optional double z_uncertainty = 4;
}
message SetPcmmInstrumentXyzUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

All three values default to `0.001`. The server binds public `y_uncertainty` to
the exact exported `Y Uncertainty)` argument label.

## Get XYZ Instrument Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#get-xyz-instrument-uncertainties)

```proto
rpc GetXyzInstrumentUncertainties(GetXyzInstrumentUncertaintiesRequest) returns (GetXyzInstrumentUncertaintiesResult);
message GetXyzInstrumentUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetXyzInstrumentUncertaintiesResult {
  optional double x_uncertainty = 1;
  optional double y_uncertainty = 2;
  optional double z_uncertainty = 3;
  MpExecutionDetails execution = 1000;
}
```

## Set XYZ Instrument Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#set-xyz-instrument-uncertainties)

```proto
rpc SetXyzInstrumentUncertainties(SetXyzInstrumentUncertaintiesRequest) returns (SetXyzInstrumentUncertaintiesResult);
message SetXyzInstrumentUncertaintiesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double x_uncertainty = 2;
  optional double y_uncertainty = 3;
  optional double z_uncertainty = 4;
}
message SetXyzInstrumentUncertaintiesResult {
  MpExecutionDetails execution = 1000;
}
```

All three values default to `0.0005`. The server binds public `z_uncertainty`
to the exact exported `Z Uncertainty)` argument label. These operations receive
no additional preflight and are never automatically replayed after an unknown
outcome.

## Get Instrument Weather Setting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-weather-setting)

```proto
rpc GetInstrumentWeatherSetting(GetInstrumentWeatherSettingRequest) returns (GetInstrumentWeatherSettingResult);
message GetInstrumentWeatherSettingRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentWeatherSettingResult {
  optional double temperature_fahrenheit = 1;
  optional double pressure_mmhg = 2;
  optional double relative_humidity_percent = 3;
  optional bool set_automatically = 4;
  MpExecutionDetails execution = 1000;
}
```

The result preserves `Temperature (F)`, `Pressure (mmHg)`, `Humidity (%Rel)`,
and `Was Set Automatically? (using Inst or external sensor` in MP order.

## Set Instrument Weather Setting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-weather-setting)

```proto
rpc SetInstrumentWeatherSetting(SetInstrumentWeatherSettingRequest) returns (SetInstrumentWeatherSettingResult);
message SetInstrumentWeatherSettingRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double temperature_fahrenheit = 2;
  optional double pressure_mmhg = 3;
  optional double relative_humidity_percent = 4;
  optional bool set_automatically = 5;
}
message SetInstrumentWeatherSettingResult { MpExecutionDetails execution = 1000; }
```

All numeric values default to `0.0`, and `set_automatically` defaults to
`false`. When it is true, SA ignores the three supplied weather values.

## Get Instrument Part Temperature

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-part-temperature)

```proto
rpc GetInstrumentPartTemperature(GetInstrumentPartTemperatureRequest) returns (GetInstrumentPartTemperatureResult);
message GetInstrumentPartTemperatureRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentPartTemperatureResult {
  optional double part_temperature_fahrenheit = 1;
  MpExecutionDetails execution = 1000;
}
```

## Compute CTE Scale Factor

[MP command](/mp-command-catalog/commands/instrument-operations#compute-cte-scale-factor)

```proto
rpc ComputeCteScaleFactor(ComputeCteScaleFactorRequest) returns (ComputeCteScaleFactorResult);
message ComputeCteScaleFactorRequest {
  optional double material_cte_per_degree_fahrenheit = 1;
  optional double initial_temperature_fahrenheit = 2;
  optional double final_temperature_fahrenheit = 3;
}
message ComputeCteScaleFactorResult {
  optional double scale_factor = 1;
  MpExecutionDetails execution = 1000;
}
```

All three inputs default to `0.0`. The operation intentionally preserves SA's
Fahrenheit-based MP workflow even though callers could perform equivalent math.

## Set (multiply) Instrument Scale Factor (CAUTION!)

[MP command](/mp-command-catalog/commands/instrument-operations#set-multiply-instrument-scale-factor-caution)

```proto
rpc SetMultiplyInstrumentScaleFactor(SetMultiplyInstrumentScaleFactorRequest) returns (SetMultiplyInstrumentScaleFactorResult);
message SetMultiplyInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scale_factor = 2;
}
message SetMultiplyInstrumentScaleFactorResult {
  MpExecutionDetails execution = 1000;
}
```

`scale_factor` defaults to `0.0` and multiplies the current scale. Briosa adds
no confirmation or range check.

## Set (absolute) Instrument Scale Factor (CAUTION!)

[MP command](/mp-command-catalog/commands/instrument-operations#set-absolute-instrument-scale-factor-caution)

```proto
rpc SetAbsoluteInstrumentScaleFactor(SetAbsoluteInstrumentScaleFactorRequest) returns (SetAbsoluteInstrumentScaleFactorResult);
message SetAbsoluteInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
  optional double scale_factor = 2;
}
message SetAbsoluteInstrumentScaleFactorResult {
  MpExecutionDetails execution = 1000;
}
```

`scale_factor` also defaults to `0.0`, but this operation replaces the current
scale rather than multiplying it. Briosa adds no safeguard.

## Get Instrument Scale Factor

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-scale-factor)

```proto
rpc GetInstrumentScaleFactor(GetInstrumentScaleFactorRequest) returns (GetInstrumentScaleFactorResult);
message GetInstrumentScaleFactorRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentScaleFactorResult {
  optional double scale_factor = 1;
  MpExecutionDetails execution = 1000;
}
```

## Transform Instrument - Frame To Frame

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument---frame-to-frame)

```proto
rpc TransformInstrumentFrameToFrame(TransformInstrumentFrameToFrameRequest) returns (TransformInstrumentFrameToFrameResult);
message TransformInstrumentFrameToFrameRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName initial_frame = 2;
  optional CollectionObjectName destination_frame = 3;
  optional int32 number_of_steps = 4;
}
message TransformInstrumentFrameToFrameResult {
  MpExecutionDetails execution = 1000;
}
```

The first three fields are required; both object identities must be SA Frames.
`number_of_steps` defaults to `0`.

## Transform Instrument by Delta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-instrument-by-delta)

```proto
rpc TransformInstrumentByDelta(TransformInstrumentByDeltaRequest) returns (TransformInstrumentByDeltaResult);
message TransformInstrumentByDeltaRequest {
  optional CollectionInstrumentId instrument = 1;
  optional WorldTransform delta_transform = 2;
  optional bool apply_scale_to_instrument = 3;
}
message TransformInstrumentByDeltaResult { MpExecutionDetails execution = 1000; }
```

The instrument and delta are required. Applying the World Transform's scale
component defaults to `false`.

## Transform Multiple Instruments By Delta

[MP command](/mp-command-catalog/commands/instrument-operations#transform-multiple-instruments-by-delta)

```proto
rpc TransformMultipleInstrumentsByDelta(TransformMultipleInstrumentsByDeltaRequest) returns (TransformMultipleInstrumentsByDeltaResult);
message TransformMultipleInstrumentsByDeltaRequest {
  repeated CollectionInstrumentId instruments = 1;
  optional WorldTransform delta_transform = 2;
  optional bool apply_scale_to_instruments = 3;
}
message TransformMultipleInstrumentsByDeltaResult {
  MpExecutionDetails execution = 1000;
}
```

The instrument list must be non-empty and the delta is required. Applying scale
defaults to `false`. Briosa provides no transaction or rollback, and none of
these operations is automatically replayed after an unknown outcome.

## Instrument Operational Check

[MP command](/mp-command-catalog/commands/instrument-operations#instrument-operational-check)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `instrument` | `CollectionInstrumentId` | `Instrument to Check` | Required |
| Request | 2 | `check_type` | `string` | `Check Type` | Required |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc InstrumentOperationalCheck(InstrumentOperationalCheckRequest) returns (InstrumentOperationalCheckResult);
message InstrumentOperationalCheckRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string check_type = 2;
}
message InstrumentOperationalCheckResult {
  MpExecutionDetails execution = 1000;
}
```

`check_type` is an opaque, instrument-specific command string. The server does
not interpret or restrict it.

## Get Number of Observations on Target

[MP command](/mp-command-catalog/commands/instrument-operations#get-number-of-observations-on-target)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point Name` | Required |
| Result | 1 | `observation_count` | `int32` | `Number of Shots` | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetNumberOfObservationsOnTarget(GetNumberOfObservationsOnTargetRequest) returns (GetNumberOfObservationsOnTargetResult);
message GetNumberOfObservationsOnTargetRequest {
  optional PointName point = 1;
}
message GetNumberOfObservationsOnTargetResult {
  int32 observation_count = 1;
  MpExecutionDetails execution = 1000;
}
```

## Get Instruments with Observations on Target

[MP command](/mp-command-catalog/commands/instrument-operations#get-instruments-with-observations-on-target)

```proto
rpc GetInstrumentsWithObservationsOnTarget(GetInstrumentsWithObservationsOnTargetRequest) returns (GetInstrumentsWithObservationsOnTargetResult);
message GetInstrumentsWithObservationsOnTargetRequest {
  optional PointName point = 1;
}
message GetInstrumentsWithObservationsOnTargetResult {
  repeated CollectionInstrumentId instruments = 1;
  MpExecutionDetails execution = 1000;
}
```

`point` maps to `Point Name`; `instruments` maps to `Resultant Collection
Instrument Reference List` and preserves SA's returned order.

## Get Targets Measured by Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-targets-measured-by-instrument)

```proto
rpc GetTargetsMeasuredByInstrument(GetTargetsMeasuredByInstrumentRequest) returns (GetTargetsMeasuredByInstrumentResult);
message GetTargetsMeasuredByInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetTargetsMeasuredByInstrumentResult {
  repeated PointName targets = 1;
  MpExecutionDetails execution = 1000;
}
```

`instrument` maps to `Measuring Instrument ID`; `targets` maps to `Points
Measured by Instrument` and preserves SA's returned order.

## Set Observation Status

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-status)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point Name` | Required |
| Request | 2 | `observation_index` | `int32` | `Observation Index` | 0 |
| Request | 3 | `active` | `bool` | `Active?` | false |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc SetObservationStatus(SetObservationStatusRequest) returns (SetObservationStatusResult);
message SetObservationStatusRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool active = 3;
}
message SetObservationStatusResult { MpExecutionDetails execution = 1000; }
```

Observation indexes are zero-based.

## Get Observation Info

[MP command](/mp-command-catalog/commands/instrument-operations#get-observation-info)

| Message | Field | Name | Type | Exact MP Argument | Briosa Default |
| --- | ---: | --- | --- | --- | --- |
| Request | 1 | `point` | `PointName` | `Point Name` | Required |
| Request | 2 | `observation_index` | `int32` | `Observation Index` | 0 |
| Result | 1 | `observation` | `ObservationInfo` | Outputs 2–10 | — |
| Result | 1000 | `execution` | `MpExecutionDetails` | Briosa execution details | — |

```proto
rpc GetObservationInfo(GetObservationInfoRequest) returns (GetObservationInfoResult);
message GetObservationInfoRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
}
message GetObservationInfoResult {
  optional ObservationInfo observation = 1;
  MpExecutionDetails execution = 1000;
}
```

`spherical_values` maps the MP `Resultant Vector` components in their documented
order: distance, azimuth, and elevation. These are raw instrument-specific
values; Briosa does not normalize angular direction. `timestamp` and
`info_data` remain unparsed SA strings. SA reports `0` for unavailable RMS
error and `-1` for unavailable temperature, pressure, or humidity.

## Fabricate Observations

[MP command](/mp-command-catalog/commands/instrument-operations#fabricate-observations)

```proto
rpc FabricateObservations(FabricateObservationsRequest) returns (FabricateObservationsResult);
message FabricateObservationsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName point_group = 2;
  optional bool introduce_instrument_error = 3;
  optional bool limit_distance = 4;
  optional double minimum_distance = 5;
  optional double maximum_distance = 6;
}
message FabricateObservationsResult { MpExecutionDetails execution = 1000; }
```

The instrument and Point Group are required. Defaults are `false`, `false`,
`0.0`, and `1000000.0` in field order. SA ignores both distances when
`limit_distance` is false. Simulated instrument error is supported only by
applicable polar instruments. Briosa adds no preflight, transaction, or
rollback.

## Get Obscured Points from Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#get-obscured-points-from-instrument)

```proto
rpc GetObscuredPointsFromInstrument(GetObscuredPointsFromInstrumentRequest) returns (GetObscuredPointsFromInstrumentResult);
message GetObscuredPointsFromInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName candidate_points = 2;
  optional bool show_obscured_shots = 3;
}
message GetObscuredPointsFromInstrumentResult {
  repeated PointName obscured_points = 1;
  MpExecutionDetails execution = 1000;
}
```

`show_obscured_shots` defaults to `false`. The result preserves SA's order.

## Get Instrument Targets and Mode/Profiles

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles)

```proto
rpc GetInstrumentTargetsAndModeProfiles(GetInstrumentTargetsAndModeProfilesRequest) returns (GetInstrumentTargetsAndModeProfilesResult);
message GetInstrumentTargetsAndModeProfilesRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentTargetsAndModeProfilesResult {
  repeated string mode_profiles = 1;
  repeated string target_names = 2;
  MpExecutionDetails execution = 1000;
}
```

The two lists map independently to `Mode/Profile` and `Target Names`. The
server binds `instrument` to the exact-target `Instrument to get` argument and
does not assume the two lists have equal lengths or paired indexes.

## Set Instrument Measurement Mode/Profile

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-measurement-modeprofile)

```proto
rpc SetInstrumentMeasurementModeProfile(SetInstrumentMeasurementModeProfileRequest) returns (SetInstrumentMeasurementModeProfileResult);
message SetInstrumentMeasurementModeProfileRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mode_profile = 2;
}
message SetInstrumentMeasurementModeProfileResult {
  MpExecutionDetails execution = 1000;
}
```

Both fields are required. `mode_profile` is an opaque, instrument-specific
string passed directly to SA. These ten operations do not create Briosa-owned
workflow state and are never automatically replayed after an unknown outcome.

## Set Instrument Group and Target

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-group-and-target)

```proto
rpc SetInstrumentGroupAndTarget(SetInstrumentGroupAndTargetRequest) returns (SetInstrumentGroupAndTargetResult);
message SetInstrumentGroupAndTargetRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point = 2;
}
message SetInstrumentGroupAndTargetResult {
  MpExecutionDetails execution = 1000;
}
```

Both fields are required and map to `Instrument ID` and `Point Name`. The call
changes live instrument-interface naming state; Briosa does not retain it.

## Set Instrument Targeting

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-targeting)

```proto
rpc SetInstrumentTargeting(SetInstrumentTargetingRequest) returns (SetInstrumentTargetingResult);
message SetInstrumentTargetingRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string targeting_name = 2;
}
message SetInstrumentTargetingResult { MpExecutionDetails execution = 1000; }
```

Both fields are required. `targeting_name` is passed directly to the active
instrument interface.

## Get Instrument Measurement Mode/Profile

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-measurement-modeprofile)

```proto
rpc GetInstrumentMeasurementModeProfile(GetInstrumentMeasurementModeProfileRequest) returns (GetInstrumentMeasurementModeProfileResult);
message GetInstrumentMeasurementModeProfileRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentMeasurementModeProfileResult {
  string mode_profile = 1;
  MpExecutionDetails execution = 1000;
}
```

The server preserves the exact MP input label `Instrument to set`, even though
this operation is a getter. The result is the currently active `Mode/Profile`.

## Get Instrument Group and Target

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-group-and-target)

```proto
rpc GetInstrumentGroupAndTarget(GetInstrumentGroupAndTargetRequest) returns (GetInstrumentGroupAndTargetResult);
message GetInstrumentGroupAndTargetRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentGroupAndTargetResult {
  optional PointName point = 1;
  MpExecutionDetails execution = 1000;
}
```

The result retains the complete Collection/Group/Target `Point Name` identity.

## Get Instrument Targeting

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-targeting)

```proto
rpc GetInstrumentTargeting(GetInstrumentTargetingRequest) returns (GetInstrumentTargetingResult);
message GetInstrumentTargetingRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentTargetingResult {
  string targeting_name = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Target Computation Options

[MP command](/mp-command-catalog/commands/instrument-operations#set-target-computation-options)

```proto
rpc SetTargetComputationOptions(SetTargetComputationOptionsRequest) returns (SetTargetComputationOptionsResult);
message SetTargetComputationOptionsRequest {
  optional TargetComputationMethod computation_method = 1;
  optional bool ignore_distance_measurements = 2;
}
message SetTargetComputationOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The method defaults to `USE_MOST_RECENT_SHOT_FROM_EACH_FACE`; ignoring distance
defaults to `false`. This mutates application-global SA state. Briosa does not
cache, restore, lease, or otherwise manage that state.

## Set Observation Mirror Cube Shot Face

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-mirror-cube-shot-face)

```proto
rpc SetObservationMirrorCubeShotFace(SetObservationMirrorCubeShotFaceRequest) returns (SetObservationMirrorCubeShotFaceResult);
message SetObservationMirrorCubeShotFaceRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool is_mirror_cube_shot = 3;
  optional int32 mirror_cube_shot_face = 4;
}
message SetObservationMirrorCubeShotFaceResult {
  MpExecutionDetails execution = 1000;
}
```

Defaults are `0`, `false`, and `1`. SA documents face values 1 through 6;
Briosa adds no range validation.

## Set Observation Collimation Shot Options

[MP command](/mp-command-catalog/commands/instrument-operations#set-observation-collimation-shot-options)

```proto
rpc SetObservationCollimationShotOptions(SetObservationCollimationShotOptionsRequest) returns (SetObservationCollimationShotOptionsResult);
message SetObservationCollimationShotOptionsRequest {
  optional PointName point = 1;
  optional int32 observation_index = 2;
  optional bool is_collimation_shot = 3;
  optional CollectionInstrumentId targeted_instrument = 4;
}
message SetObservationCollimationShotOptionsResult {
  MpExecutionDetails execution = 1000;
}
```

The point is required; the index and flag default to `0` and `false`. The
targeted instrument may be omitted for a normal shot. The server binds the
public flag to the exact malformed `Is Collimation Shot? (FALSE = Normal`
argument label.

## Collimation

[MP command](/mp-command-catalog/commands/instrument-operations#collimation)

```proto
rpc Collimation(CollimationRequest) returns (CollimationResult);
message CollimationRequest {
  optional CollectionInstrumentId stationary_instrument = 1;
  optional CollectionInstrumentId moving_instrument = 2;
  optional PointName collimation_point = 3;
  optional bool zero_moving_instrument = 4;
  optional CollimationTiltMode tilt_mode = 5;
  optional CollimationBaselineMethod baseline_method = 6;
  optional double baseline_distance = 7;
  optional PointName scale_point_1 = 8;
  optional PointName scale_point_2 = 9;
  optional PointName not_measured_by_moving_instrument = 10;
  optional PointName as_measured_by_moving_instrument = 11;
}
message CollimationResult { MpExecutionDetails execution = 1000; }
```

The two instruments and collimation point are required. Defaults are `false`,
`FULL_COLLIMATION`, `DETERMINED_BY_VALUE`, and `0.0`. The remaining points are
mode-specific and optional at the transport boundary. Briosa passes absent
values to SA as empty MP identities and adds no preflight workflow validation.

## Get Instrument Target Status

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-target-status)

```proto
rpc GetInstrumentTargetStatus(GetInstrumentTargetStatusRequest) returns (GetInstrumentTargetStatusResult);
message GetInstrumentTargetStatusRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentTargetStatusResult {
  optional InstrumentTargetStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

The result maps `Is Locked?`, `Name`, `Number of Faces`, and `Locked Face` in
MP order. SA documents this command as laser-tracker-only. These operations
remain stateless from Briosa's perspective and are never automatically replayed
after an unknown outcome.

## Make Surface Face List from Point Proximity

[MP command](/mp-command-catalog/commands/instrument-operations#make-surface-face-list-from-point-proximity)

```proto
rpc MakeSurfaceFaceListFromPointProximity(MakeSurfaceFaceListFromPointProximityRequest) returns (MakeSurfaceFaceListFromPointProximityResult);
message MakeSurfaceFaceListFromPointProximityRequest { repeated PointName measured_points = 1; }
message MakeSurfaceFaceListFromPointProximityResult {
  optional SurfaceFaceList surface_faces = 1;
  MpExecutionDetails execution = 1000;
}
```

`measured_points` maps to `Measured Points`; `surface_faces` maps to the opaque
`Selected Surface Faces` string returned by SA.

## Scan within perimeter

[MP command](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter)

```proto
rpc ScanWithinPerimeter(ScanWithinPerimeterRequest) returns (ScanWithinPerimeterResult);
message ScanWithinPerimeterRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName scan_perimeters = 2;
  repeated CollectionObjectName exclusion_perimeters = 3;
  optional string parameter_set_name = 4;
  optional CollectionObjectName point_group = 5;
  optional bool wait_for_completion = 6;
}
message ScanWithinPerimeterResult { MpExecutionDetails execution = 1000; }
```

`wait_for_completion` defaults to `true`. `point_group` must identify a Point
Group. The exclusion list is part of the exact SA 2026.1 SDK contract even
though an older installed argument table omits it.

## Edit Scan Perimeter Profile

[MP command](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile)

```proto
rpc EditScanPerimeterProfile(EditScanPerimeterProfileRequest) returns (EditScanPerimeterProfileResult);
message EditScanPerimeterProfileRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName scan_perimeters = 2;
  repeated CollectionObjectName exclusion_perimeters = 3;
  optional string parameter_set_name = 4;
  optional string profile_name = 5;
  optional bool clear_profile = 6;
  optional bool create_new_profile = 7;
}
message EditScanPerimeterProfileResult { MpExecutionDetails execution = 1000; }
```

`clear_profile` defaults to `true`; `create_new_profile` defaults to `false`.
SA requires the selected parameter-set and profile types to be compatible.

## Get Estimated Scan Time

[MP command](/mp-command-catalog/commands/instrument-operations#get-estimated-scan-time)

```proto
rpc GetEstimatedScanTime(GetEstimatedScanTimeRequest) returns (GetEstimatedScanTimeResult);
message GetEstimatedScanTimeRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string profile_name = 2;
}
message GetEstimatedScanTimeResult {
  double estimated_scan_time = 1;
  MpExecutionDetails execution = 1000;
}
```

`estimated_scan_time` is SA's raw numeric result. Its unit is not documented by
the available SA material, so Briosa does not assign or convert one.

## Construct Perimeters from Surface Face List

[MP command](/mp-command-catalog/commands/instrument-operations#construct-perimeters-from-surface-face-list)

```proto
rpc ConstructPerimetersFromSurfaceFaceList(ConstructPerimetersFromSurfaceFaceListRequest) returns (ConstructPerimetersFromSurfaceFaceListResult);
message ConstructPerimetersFromSurfaceFaceListRequest {
  optional SurfaceFaceList surface_faces = 1;
}
message ConstructPerimetersFromSurfaceFaceListResult {
  optional PerimeterLists perimeters = 1;
  MpExecutionDetails execution = 1000;
}
```

The lists map to `Scan perimeter list` and `Exclusion perimeter list`. The
server passes `surface_faces.value` to `Selected Surface Faces`.

## Scan CAD Faces

[MP command](/mp-command-catalog/commands/instrument-operations#scan-cad-faces)

```proto
rpc ScanCadFaces(ScanCadFacesRequest) returns (ScanCadFacesResult);
message ScanCadFacesRequest {
  optional CollectionInstrumentId instrument = 1;
  optional SurfaceFaceList surface_faces = 2;
  optional string parameter_set_name = 3;
  optional bool enable_exclusions = 4;
  optional bool wait_for_completion = 5;
}
message ScanCadFacesResult { MpExecutionDetails execution = 1000; }
```

Both flags default to `true`. The 2026.1 SDK provides the complete binding;
Briosa does not inherit ObjectiveSA's older unsupported marker.

## Edge Scan Measurement

[MP command](/mp-command-catalog/commands/instrument-operations#edge-scan-measurement)

```proto
rpc EdgeScanMeasurement(EdgeScanMeasurementRequest) returns (EdgeScanMeasurementResult);
message EdgeScanMeasurementRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_near_edge = 2;
  optional PointName edge_search_direction_point = 3;
  optional string parameter_set_name = 4;
  optional CollectionObjectName point_group = 5;
  optional string target_name = 6;
}
message EdgeScanMeasurementResult { MpExecutionDetails execution = 1000; }
```

All six values are required; `point_group` must identify a Point Group.

## Track Tape Measurement

[MP command](/mp-command-catalog/commands/instrument-operations#track-tape-measurement)

```proto
rpc TrackTapeMeasurement(TrackTapeMeasurementRequest) returns (TrackTapeMeasurementResult);
message TrackTapeMeasurementRequest {
  optional CollectionInstrumentId instrument = 1;
  optional PointName point_on_tape = 2;
  optional PointName point_on_part = 3;
  optional PointName direction_point = 4;
  optional PointName termination_point = 5;
  optional string parameter_set_name = 6;
  optional CollectionObjectName point_group = 7;
  optional string initial_target_name = 8;
}
message TrackTapeMeasurementResult { MpExecutionDetails execution = 1000; }
```

All fields are required; `point_group` must identify a Point Group.

## Auto Measure Points

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-points)

```proto
rpc AutoMeasurePoints(AutoMeasurePointsRequest) returns (AutoMeasurePointsResult);
message AutoMeasurePointsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool force_existing_group = 4;
  optional bool show_complete_dialog = 5;
  optional bool wait_for_completion = 6;
  optional bool auto_start = 7;
}
message AutoMeasurePointsResult { MpExecutionDetails execution = 1000; }
```

The three identities are required and both groups must be Point Groups.
Defaults are `false`, `false`, `true`, and `false` in field order. Setting
`show_complete_dialog` to `false` selects SA's abbreviated interface; it is not
a no-UI guarantee. SA's application-global interactivity level can suppress
that interface when configured separately.

## Auto-Measure Vectors

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-vectors)

```proto
rpc AutoMeasureVectors(AutoMeasureVectorsRequest) returns (AutoMeasureVectorsResult);
message AutoMeasureVectorsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName vector_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool project_point_to_vector = 4;
  optional double angle_tolerance = 5;
  optional double high_tolerance = 6;
  optional double low_tolerance = 7;
}
message AutoMeasureVectorsResult { MpExecutionDetails execution = 1000; }
```

The identities are required; `vector_group` and `actuals_group` must identify a
Vector Group and Point Group. The flag defaults to `false`, and all tolerances
default to `0.0`. These operations add no Briosa-owned workflow state and are
never automatically replayed after an unknown outcome.

## Auto-Measure Surface Vector Intersections

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-surface-vector-intersections)

```proto
rpc AutoMeasureSurfaceVectorIntersections(AutoMeasureSurfaceVectorIntersectionsRequest) returns (AutoMeasureSurfaceVectorIntersectionsResult);
message AutoMeasureSurfaceVectorIntersectionsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName vector_group = 2;
  optional CollectionObjectName resultant_group = 3;
  optional bool wait_for_complete = 4;
}
message AutoMeasureSurfaceVectorIntersectionsResult { MpExecutionDetails execution = 1000; }
```

The groups must identify a Vector Group and Point Group. Waiting defaults to
`true`.

## Auto-Measure Specified Geometry

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-specified-geometry)

```proto
rpc AutoMeasureSpecifiedGeometry(AutoMeasureSpecifiedGeometryRequest) returns (AutoMeasureSpecifiedGeometryResult);
message AutoMeasureSpecifiedGeometryRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName geometry = 2;
  optional string mode_profile = 3;
  optional bool wait_for_complete = 4;
}
message AutoMeasureSpecifiedGeometryResult { MpExecutionDetails execution = 1000; }
```

The first three fields are required. Waiting defaults to `false`.

## Auto-Measure Batch of Features

[MP command](/mp-command-catalog/commands/instrument-operations#auto-measure-batch-of-features)

```proto
rpc AutoMeasureBatchOfFeatures(AutoMeasureBatchOfFeaturesRequest) returns (AutoMeasureBatchOfFeaturesResult);
message AutoMeasureBatchOfFeaturesRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionItemName features = 2;
  optional bool wait_for_complete = 3;
}
message AutoMeasureBatchOfFeaturesResult { MpExecutionDetails execution = 1000; }
```

`features` maps to the MP `Feature List` relationship list. Waiting defaults to
`true`.

## Auto-Correspond Closest Point

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-closest-point)

```proto
rpc AutoCorrespondClosestPoint(AutoCorrespondClosestPointRequest) returns (AutoCorrespondClosestPointResult);
message AutoCorrespondClosestPointRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional bool wait_for_completion = 4;
}
message AutoCorrespondClosestPointResult { MpExecutionDetails execution = 1000; }
```

Both groups must identify Point Groups. Waiting defaults to `true`.

## Close Auto-Correspond Closest Point Dialog

[MP command](/mp-command-catalog/commands/instrument-operations#close-auto-correspond-closest-point-dialog)

```proto
rpc CloseAutoCorrespondClosestPointDialog(CloseAutoCorrespondClosestPointDialogRequest) returns (CloseAutoCorrespondClosestPointDialogResult);
message CloseAutoCorrespondClosestPointDialogRequest {
  optional CollectionInstrumentId instrument = 1;
}
message CloseAutoCorrespondClosestPointDialogResult { MpExecutionDetails execution = 1000; }
```

This independently stops the operation associated with the selected instrument.
The server does not require caller or session ownership of the running workflow.

## Auto-Correspond with Proximity Trigger

[MP command](/mp-command-catalog/commands/instrument-operations#auto-correspond-with-proximity-trigger)

```proto
rpc AutoCorrespondWithProximityTrigger(AutoCorrespondWithProximityTriggerRequest) returns (AutoCorrespondWithProximityTriggerResult);
message AutoCorrespondWithProximityTriggerRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName nominal_group = 2;
  optional CollectionObjectName results_group = 3;
  optional double point_distance_threshold = 4;
  optional double vector_axis_threshold = 5;
  optional bool project_results_to_nominal_vector = 6;
  optional double warbler_ramp_start_distance = 7;
  optional bool show_watch_window = 8;
  optional string deviation_vector_group_name = 9;
  optional bool make_unmeasured_group = 10;
  optional bool measure_each_point_only_once = 11;
}
message AutoCorrespondWithProximityTriggerResult { MpExecutionDetails execution = 1000; }
```

`nominal_group` may identify a Point Group or Vector Group; `results_group`
must identify a Point Group. Defaults are `0.5`, `0.25`, `false`, `12.0`,
`false`, an empty vector-group name, `false`, and `false` in field order.

## Construct Mirror from Plane

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-plane)

```proto
rpc ConstructMirrorFromPlane(ConstructMirrorFromPlaneRequest) returns (ConstructMirrorFromPlaneResult);
message ConstructMirrorFromPlaneRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mirror_name = 2;
  optional CollectionObjectName plane = 3;
}
message ConstructMirrorFromPlaneResult { MpExecutionDetails execution = 1000; }
```

All fields are required; `plane` must identify an SA Plane.

## Construct Mirror from Two Points

[MP command](/mp-command-catalog/commands/instrument-operations#construct-mirror-from-two-points)

```proto
rpc ConstructMirrorFromTwoPoints(ConstructMirrorFromTwoPointsRequest) returns (ConstructMirrorFromTwoPointsResult);
message ConstructMirrorFromTwoPointsRequest {
  optional CollectionInstrumentId instrument = 1;
  optional string mirror_name = 2;
  optional PointName point_measured_directly = 3;
  optional PointName point_measured_through_mirror = 4;
  optional bool send_mirror_to_instrument = 5;
}
message ConstructMirrorFromTwoPointsResult {
  optional CollectionObjectName mirror_plane = 1;
  MpExecutionDetails execution = 1000;
}
```

The four identity/name fields are required. Sending the mirror defaults to
`true`; the result maps to `Mirror Plane`.

## Drift Check

[MP command](/mp-command-catalog/commands/instrument-operations#drift-check)

```proto
rpc DriftCheck(DriftCheckRequest) returns (DriftCheckResult);
message DriftCheckRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName reference_group = 2;
  optional CollectionObjectName actuals_group = 3;
  optional double tolerance = 4;
  optional int32 minimum_point_count = 5;
  optional bool use_closest_reference_point = 6;
}
```

The groups must identify Point Groups. Defaults are `0.0`, `0`, and `true`.
`new_instrument` is populated only when `instrument_added` is true. SA may
return partial success when points exceed tolerance or a new station is added.
The operation is interactive even under SA silent mode.

## Measure Nominal Feature

[MP command](/mp-command-catalog/commands/instrument-operations#measure-nominal-feature)

```proto
rpc MeasureNominalFeature(MeasureNominalFeatureRequest) returns (MeasureNominalFeatureResult);
message MeasureNominalFeatureRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionObjectName feature = 2;
  optional PointName resulting_point = 3;
}
message MeasureNominalFeatureResult { MpExecutionDetails execution = 1000; }
```

All fields are required. These operations retain no Briosa-owned workflow state
and are never automatically replayed after an unknown outcome.

## Start GD&T Inspection Design

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-design)

```proto
rpc StartGdtInspectionDesign(StartGdtInspectionDesignRequest) returns (StartGdtInspectionDesignResult);
message StartGdtInspectionDesignRequest {
  optional CollectionName collection = 1;
  optional InspectionFilter filter = 2;
}
message StartGdtInspectionDesignResult { MpExecutionDetails execution = 1000; }
```

An omitted filter normalizes to `INSPECTION_FILTER_ALL`, which maps to the MP
string `ALL`; the other values map to `CHECKS` and `DATUMS`.

## Start GD&T Inspection Rehearse

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection-rehearse)

```proto
rpc StartGdtInspectionRehearse(StartGdtInspectionRehearseRequest) returns (StartGdtInspectionRehearseResult);
message StartGdtInspectionRehearseRequest {
  optional CollectionName collection = 1;
  optional InspectionFilter filter = 2;
}
message StartGdtInspectionRehearseResult { MpExecutionDetails execution = 1000; }
```

The filter also defaults to `ALL`.

## Start GD&T Inspection

[MP command](/mp-command-catalog/commands/instrument-operations#start-gdt-inspection)

```proto
rpc StartGdtInspection(StartGdtInspectionRequest) returns (StartGdtInspectionResult);
message StartGdtInspectionRequest {
  optional CollectionInstrumentId instrument = 1;
  optional CollectionName collection = 2;
  optional InspectionFilter filter = 3;
}
message StartGdtInspectionResult { MpExecutionDetails execution = 1000; }
```

The instrument and collection are required; the filter defaults to `ALL`.

## Get Inspection Verification Mode

[MP command](/mp-command-catalog/commands/instrument-operations#get-inspection-verification-mode)

```proto
rpc GetInspectionVerificationMode(GetInspectionVerificationModeRequest) returns (GetInspectionVerificationModeResult);
message GetInspectionVerificationModeRequest {}
message GetInspectionVerificationModeResult {
  bool verification_enabled = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Inspection Verification Mode

[MP command](/mp-command-catalog/commands/instrument-operations#set-inspection-verification-mode)

```proto
rpc SetInspectionVerificationMode(SetInspectionVerificationModeRequest) returns (SetInspectionVerificationModeResult);
message SetInspectionVerificationModeRequest {
  optional bool verification_enabled = 1;
}
message SetInspectionVerificationModeResult { MpExecutionDetails execution = 1000; }
```

The flag defaults to `false`. This is application-global SA state; the server
does not cache or restore it.

## Set Remeasure Failed Checks Only

[MP command](/mp-command-catalog/commands/instrument-operations#set-remeasure-failed-checks-only)

```proto
rpc SetRemeasureFailedChecksOnly(SetRemeasureFailedChecksOnlyRequest) returns (SetRemeasureFailedChecksOnlyResult);
message SetRemeasureFailedChecksOnlyRequest {
  optional CollectionName collection = 1;
}
message SetRemeasureFailedChecksOnlyResult { MpExecutionDetails execution = 1000; }
```

SA clears failed-check points, locks passing checks, and begins trapping. Briosa
adds no transaction or rollback.

## Associate Objects with Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#associate-objects-with-instrument)

```proto
rpc AssociateObjectsWithInstrument(AssociateObjectsWithInstrumentRequest) returns (AssociateObjectsWithInstrumentResult);
message AssociateObjectsWithInstrumentRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated CollectionObjectName objects = 2;
}
message AssociateObjectsWithInstrumentResult { MpExecutionDetails execution = 1000; }
```

SA may report partial success when some objects cannot be found.

## Disassociate Objects from Instrument

[MP command](/mp-command-catalog/commands/instrument-operations#disassociate-objects-from-instrument)

```proto
rpc DisassociateObjectsFromInstrument(DisassociateObjectsFromInstrumentRequest) returns (DisassociateObjectsFromInstrumentResult);
message DisassociateObjectsFromInstrumentRequest {
  repeated CollectionObjectName objects = 1;
}
message DisassociateObjectsFromInstrumentResult { MpExecutionDetails execution = 1000; }
```

The exact SA 2026.1 export has only the object-list input. The server does not
invent the Instrument ID described by an inconsistent installed documentation
page.

## Make Collection Object Name Ref List from Objects associated with Instruments

[MP command](/mp-command-catalog/commands/instrument-operations#make-collection-object-name-ref-list-from-objects-associated-with-instruments)

```proto
rpc MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstruments(MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsRequest) returns (MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsResult);
message MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsRequest {
  repeated CollectionInstrumentId instruments = 1;
}
message MakeCollectionObjectNameRefListFromObjectsAssociatedWithInstrumentsResult {
  repeated CollectionObjectName objects = 1;
  MpExecutionDetails execution = 1000;
}
```

The result preserves SA's returned order.

## Combine Point Groups

[MP command](/mp-command-catalog/commands/instrument-operations#combine-point-groups)

```proto
rpc CombinePointGroups(CombinePointGroupsRequest) returns (CombinePointGroupsResult);
message CombinePointGroupsRequest {
  repeated CollectionObjectName groups_to_combine = 1;
  optional CollectionObjectName combined_point_group = 2;
}
message CombinePointGroupsResult { MpExecutionDetails execution = 1000; }
```

The output identity must be a Point Group.

## Dissect Point Group

[MP command](/mp-command-catalog/commands/instrument-operations#dissect-point-group)

```proto
rpc DissectPointGroup(DissectPointGroupRequest) returns (DissectPointGroupResult);
message DissectPointGroupRequest {
  optional CollectionObjectName group_to_dissect = 1;
  optional string base_name_for_dissected_groups = 2;
}
message DissectPointGroupResult { MpExecutionDetails execution = 1000; }
```

The group must identify a Point Group. The public field corrects the spelling
of SA's internal `Base Name for Disected Groups` argument.

## Synchronized Measurement (Master/Slave)

[MP command](/mp-command-catalog/commands/instrument-operations#synchronized-measurement-masterslave)

```proto
rpc SynchronizedMeasurementMasterSlave(SynchronizedMeasurementMasterSlaveRequest) returns (SynchronizedMeasurementMasterSlaveResult);
message SynchronizedMeasurementMasterSlaveRequest {
  optional CollectionInstrumentId master_instrument = 1;
  optional CollectionInstrumentId slave_instrument = 2;
  optional string slave_group_suffix = 3;
  optional bool locate_one_of_the_instruments = 4;
  optional bool locate_master = 5;
  optional bool wait_for_completion = 6;
}
message SynchronizedMeasurementMasterSlaveResult { MpExecutionDetails execution = 1000; }
```

Defaults are `_Slave`, `true`, `false`, and `true` in field order. A deadline
or cancellation does not prove that SA stopped an in-progress measurement.

## Create New Dynamic Reference

[MP command](/mp-command-catalog/commands/instrument-operations#create-new-dynamic-reference)

```proto
rpc CreateNewDynamicReference(CreateNewDynamicReferenceRequest) returns (CreateNewDynamicReferenceResult);
message CreateNewDynamicReferenceRequest {
  optional CollectionInstrumentId instrument = 1;
  repeated PointName points_defining_dynamic_reference = 2;
  optional string dynamic_reference_name = 3;
}
message CreateNewDynamicReferenceResult { MpExecutionDetails execution = 1000; }
```

All fields are required. SA documents this operation for AICON/Hexagon
MoveInspect systems.

## Calculate TCP Fixture Uncertainties

[MP command](/mp-command-catalog/commands/instrument-operations#calculate-tcp-fixture-uncertainties)

```proto
rpc CalculateTcpFixtureUncertainties(CalculateTcpFixtureUncertaintiesRequest) returns (CalculateTcpFixtureUncertaintiesResult);
message CalculateTcpFixtureUncertaintiesRequest {
  optional CollectionObjectName tcp_fixture = 1;
  optional Transform tcp_in_working = 2;
  repeated PointName tcp_measurements = 3;
}
message CalculateTcpFixtureUncertaintiesResult {
  optional TcpFixtureUncertainties uncertainties = 1;
  MpExecutionDetails execution = 1000;
}
```

`tcp_in_working` defaults to the identity transform. Both returned uncertainty
vectors contain exactly six values.

## Construct TCP Fixture

[MP command](/mp-command-catalog/commands/instrument-operations#construct-tcp-fixture)

```proto
rpc ConstructTcpFixture(ConstructTcpFixtureRequest) returns (ConstructTcpFixtureResult);
message ConstructTcpFixtureRequest {
  optional CollectionObjectName requested_tcp_fixture = 1;
  optional double point_match_threshold = 2;
  optional bool replace_existing_tcp_fixture = 3;
}
message ConstructTcpFixtureResult {
  optional CollectionObjectName resulting_tcp_fixture = 1;
  MpExecutionDetails execution = 1000;
}
```

Threshold and replacement default to `0.0` and `false`. The result follows the
exact SDK export despite the installed command page's inconsistent return
table.

## Add Nominal Point to TCP Fixture

[MP command](/mp-command-catalog/commands/instrument-operations#add-nominal-point-to-tcp-fixture)

```proto
rpc AddNominalPointToTcpFixture(AddNominalPointToTcpFixtureRequest) returns (AddNominalPointToTcpFixtureResult);
message AddNominalPointToTcpFixtureRequest {
  optional CollectionObjectName tcp_fixture = 1;
  optional string nominal_point_name = 2;
  optional Vector nominal_point_location = 3;
  optional double var_xx = 4;
  optional double var_yy = 5;
  optional double var_zz = 6;
  optional double covar_xy = 7;
  optional double covar_xz = 8;
  optional double covar_yz = 9;
}
message AddNominalPointToTcpFixtureResult { MpExecutionDetails execution = 1000; }
```

The fixture, name, and location are required. All six covariance terms default
to `0.0`.

## Get Last Solved TCP Fixture Uncertainty Covariance Matrix

[MP command](/mp-command-catalog/commands/instrument-operations#get-last-solved-tcp-fixture-uncertainty-covariance-matrix)

```proto
rpc GetLastSolvedTcpFixtureUncertaintyCovarianceMatrix(GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixRequest) returns (GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixResult);
message GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixRequest {
  optional CollectionObjectName tcp_fixture = 1;
}
message GetLastSolvedTcpFixtureUncertaintyCovarianceMatrixResult {
  optional UncertaintyCovarianceMatrix covariance_matrix = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set Instrument Base Uncertainty Covariance Matrix WRT Base

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-base)

```proto
rpc SetInstrumentBaseUncertaintyCovarianceMatrixWrtBase(SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseRequest) returns (SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseResult);
message SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseRequest {
  optional CollectionInstrumentId instrument = 1;
  optional UncertaintyCovarianceMatrix covariance_matrix = 2;
}
message SetInstrumentBaseUncertaintyCovarianceMatrixWrtBaseResult { MpExecutionDetails execution = 1000; }
```

## Set Instrument Base Uncertainty Covariance Matrix WRT WORLD

[MP command](/mp-command-catalog/commands/instrument-operations#set-instrument-base-uncertainty-covariance-matrix-wrt-world)

```proto
rpc SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest) returns (SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult);
message SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest {
  optional CollectionInstrumentId instrument = 1;
  optional UncertaintyCovarianceMatrix covariance_matrix = 2;
}
message SetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult { MpExecutionDetails execution = 1000; }
```

Both setters require six rows containing exactly six values each. Briosa adds
no symmetry, positive-semidefinite, coordinate, or physical-value validation.

## Get Instrument Base Uncertainty Covariance Matrix WRT WORLD

[MP command](/mp-command-catalog/commands/instrument-operations#get-instrument-base-uncertainty-covariance-matrix-wrt-world)

```proto
rpc GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorld(GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest) returns (GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult);
message GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetInstrumentBaseUncertaintyCovarianceMatrixWrtWorldResult {
  optional UncertaintyCovarianceMatrix covariance_matrix = 1;
  MpExecutionDetails execution = 1000;
}
```

These operations retain no Briosa-owned measurement, dynamic-reference, TCP,
or uncertainty state and are never automatically replayed after an unknown
outcome.

## Construct Measured Point Uncertainty Ellipsoids

[MP command](/mp-command-catalog/commands/instrument-operations#construct-measured-point-uncertainty-ellipsoids)

```proto
rpc ConstructMeasuredPointUncertaintyEllipsoids(ConstructMeasuredPointUncertaintyEllipsoidsRequest) returns (ConstructMeasuredPointUncertaintyEllipsoidsResult);
message ConstructMeasuredPointUncertaintyEllipsoidsRequest {
  repeated PointName measurements = 1;
}
message ConstructMeasuredPointUncertaintyEllipsoidsResult { MpExecutionDetails execution = 1000; }
```

SA reports failure when points are missing or do not contain uncertainty data.

## Get WRTL Channel and Status

[MP command](/mp-command-catalog/commands/instrument-operations#get-wrtl-channel-and-status)

```proto
rpc GetWrtlChannelAndStatus(GetWrtlChannelAndStatusRequest) returns (GetWrtlChannelAndStatusResult);
message GetWrtlChannelAndStatusRequest {
  optional CollectionInstrumentId instrument = 1;
}
message GetWrtlChannelAndStatusResult {
  optional WrtlChannelStatus status = 1;
  MpExecutionDetails execution = 1000;
}
```

## Set WRTL Channel

[MP command](/mp-command-catalog/commands/instrument-operations#set-wrtl-channel)

```proto
rpc SetWrtlChannel(SetWrtlChannelRequest) returns (SetWrtlChannelResult);
message SetWrtlChannelRequest {
  optional CollectionInstrumentId instrument = 1;
  optional int32 channel = 2;
}
message SetWrtlChannelResult { MpExecutionDetails execution = 1000; }
```

Channel defaults to `0`. Briosa adds no range validation because the available
evidence does not establish valid channel limits. These operations retain no
Briosa-owned WRTL or uncertainty-display state and are never automatically
replayed after an unknown outcome.
