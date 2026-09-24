---
title: Utility Operations
description: Unreleased python 0.3.0 operations, exact signatures, and defaults for SA 2026.1.0529.7.
toc_max_heading_level: 2
---

# Utility Operations

[SA 2026.1.0529.7](/api/python/utility-operations) · [SA 2024.1.0508.5](/api/python/sa-2024.1.0508.5/utility-operations)

This reference covers **SA 2026.1.0529.7**, client **0.3.0** (unpublished candidate). Choose the other exact target in the sidebar; command availability and input choices differ. Runtime policy and readiness still apply. Implementation does not establish licensed execution of every operation. Follow the linked catalog qualifications, including hardware, fixture, and interactive requirements.

[MP Value Types](./value-types.md) defines the referenced types and exact-target choices. Caller cancellation does not prove that in-flight SA work stopped. Never automatically replay an uncertain operation.

## Close All Watch Windows {/* #close-all-watch-windows */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#close-all-watch-windows) · [gRPC Contract](/api/grpc/utility-operations#close-all-watch-windows)

```python
async def close_all_watch_windows(self) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Folder {/* #delete-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-folder) · [gRPC Contract](/api/grpc/utility-operations#delete-folder)

```python
async def delete_folder(
        self,
        *,
        folder_path: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Items {/* #delete-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-items) · [gRPC Contract](/api/grpc/utility-operations#delete-items)

```python
async def delete_items(
        self,
        item_list: Iterable[CollectionItemName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Delete Objects {/* #delete-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#delete-objects) · [gRPC Contract](/api/grpc/utility-operations#delete-objects)

```python
async def delete_objects(
        self,
        object_names: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Language {/* #get-active-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-language) · [gRPC Contract](/api/grpc/utility-operations#get-active-language)

```python
async def get_active_language(self) -> GetActiveLanguageResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Active Units {/* #get-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-active-units) · [gRPC Contract](/api/grpc/utility-operations#get-active-units)

```python
async def get_active_units(self) -> ActiveUnits: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Angular Representation {/* #get-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-angular-representation) · [gRPC Contract](/api/grpc/utility-operations#get-angular-representation)

```python
async def get_angular_representation(self) -> bool: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `value_0_360` | False selects the +/-180 angular representation. |

## Get Collection Notes {/* #get-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-collection-notes) · [gRPC Contract](/api/grpc/utility-operations#get-collection-notes)

```python
async def get_collection_notes(
        self,
        collection: CollectionName,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Collections {/* #get-folder-collections */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-collections) · [gRPC Contract](/api/grpc/utility-operations#get-folder-collections)

```python
async def get_folder_collections(
        self,
        *,
        folder_path: str = "",
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folder Notes {/* #get-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folder-notes) · [gRPC Contract](/api/grpc/utility-operations#get-folder-notes)

```python
async def get_folder_notes(
        self,
        *,
        folder_path: str = "",
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Folders by Wildcard {/* #get-folders-by-wildcard */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-folders-by-wildcard) · [gRPC Contract](/api/grpc/utility-operations#get-folders-by-wildcard)

```python
async def get_folders_by_wildcard(
        self,
        *,
        search_string: str = "",
        case_sensitive_search: bool = True,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Object Notes {/* #get-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-object-notes) · [gRPC Contract](/api/grpc/utility-operations#get-object-notes)

```python
async def get_object_notes(
        self,
        object: CollectionObjectName,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Double {/* #get-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/utility-operations#get-opc-da-tag-value-double)

```python
async def get_opc_da_tag_value_double(
        self,
        *,
        opc_server_da_tag_name: str = "",
    ) -> float: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value Integer {/* #get-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/utility-operations#get-opc-da-tag-value-integer)

```python
async def get_opc_da_tag_value_integer(
        self,
        *,
        opc_server_da_tag_name: str = "",
    ) -> int: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get OPC DA Tag Value String {/* #get-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/utility-operations#get-opc-da-tag-value-string)

```python
async def get_opc_da_tag_value_string(
        self,
        *,
        opc_server_da_tag_name: str = "",
    ) -> str: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Point Notes {/* #get-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-point-notes) · [gRPC Contract](/api/grpc/utility-operations#get-point-notes)

```python
async def get_point_notes(
        self,
        point: PointName,
    ) -> list[str]: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Get Screen Resolution {/* #get-screen-resolution */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-screen-resolution) · [gRPC Contract](/api/grpc/utility-operations#get-screen-resolution)

```python
async def get_screen_resolution(
        self,
        *,
        display: int = -1,
    ) -> GetScreenResolutionResult: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `display` | -1 selects the primary display. |

## Get Working Frame Properties {/* #get-working-frame-properties */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#get-working-frame-properties) · [gRPC Contract](/api/grpc/utility-operations#get-working-frame-properties)

```python
async def get_working_frame_properties(self) -> WorkingFrameProperties: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Increment Point Name {/* #increment-point-name */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#increment-point-name) · [gRPC Contract](/api/grpc/utility-operations#increment-point-name)

```python
async def increment_point_name(
        self,
        base_point_name: PointName,
        *,
        increment: int = 0,
    ) -> PointName: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock Imported Items {/* #lock-imported-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lock-imported-items) · [gRPC Contract](/api/grpc/utility-operations#lock-imported-items)

```python
async def lock_imported_items(
        self,
        *,
        lock_items: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Selected Items {/* #lockunlock-selected-items */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-selected-items) · [gRPC Contract](/api/grpc/utility-operations#lockunlock-selected-items)

```python
async def lock_unlock_selected_items(
        self,
        item_list: Iterable[CollectionItemName],
        instruments: Iterable[CollectionInstrumentId],
        *,
        lock_items: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Lock/Unlock Trapping Control {/* #lockunlock-trapping-control */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#lockunlock-trapping-control) · [gRPC Contract](/api/grpc/utility-operations#lockunlock-trapping-control)

```python
async def lock_unlock_trapping_control(
        self,
        relationship_ref_list: Iterable[CollectionItemName],
        feature_check_ref_list: Iterable[CollectionItemName],
        datum_ref_list: Iterable[CollectionObjectName],
        *,
        lock_out_trapping: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Collection to Folder {/* #move-collection-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-collection-to-folder) · [gRPC Contract](/api/grpc/utility-operations#move-collection-to-folder)

```python
async def move_collection_to_folder(
        self,
        collection: CollectionName,
        *,
        folder_path: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Folder to Folder {/* #move-folder-to-folder */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-folder-to-folder) · [gRPC Contract](/api/grpc/utility-operations#move-folder-to-folder)

```python
async def move_folder_to_folder(
        self,
        *,
        source_folder_path: str = "",
        destination_folder_path: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Instruments Drag Graphically {/* #move-instruments-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-instruments-drag-graphically) · [gRPC Contract](/api/grpc/utility-operations#move-instruments-drag-graphically)

```python
async def move_instruments_drag_graphically(
        self,
        instruments: Iterable[CollectionInstrumentId],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Move Objects Drag Graphically {/* #move-objects-drag-graphically */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#move-objects-drag-graphically) · [gRPC Contract](/api/grpc/utility-operations#move-objects-drag-graphically)

```python
async def move_objects_drag_graphically(
        self,
        objects: Iterable[CollectionObjectName],
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Scale Objects {/* #scale-objects */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#scale-objects) · [gRPC Contract](/api/grpc/utility-operations#scale-objects)

```python
async def scale_objects(
        self,
        objects: Iterable[CollectionObjectName],
        *,
        scale_factor: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Custom Language {/* #set-active-custom-language */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-custom-language) · [gRPC Contract](/api/grpc/utility-operations#set-active-custom-language)

```python
async def set_active_custom_language(
        self,
        language_file_name: FileReference,
        *,
        font: Font = Font.DEFAULT,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Active Units {/* #set-active-units */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-active-units) · [gRPC Contract](/api/grpc/utility-operations#set-active-units)

```python
async def set_active_units(
        self,
        *,
        length: DistanceUnits = DistanceUnits.INCHES,
        display_inch_fractions: bool = False,
        inch_fraction_denominator: float = 16.000000,
        simplify_inch_fraction: bool = True,
        temperature: TemperatureUnits = TemperatureUnits.FAHRENHEIT,
        angular: AngularUnits = AngularUnits.DEGREES,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Angular Representation {/* #set-angular-representation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-angular-representation) · [gRPC Contract](/api/grpc/utility-operations#set-angular-representation)

```python
async def set_angular_representation(
        self,
        *,
        value_0_360: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `value_0_360` | False selects the +/-180 angular representation. |

## Set Auto Event Creation {/* #set-auto-event-creation */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-auto-event-creation) · [gRPC Contract](/api/grpc/utility-operations#set-auto-event-creation)

```python
async def set_auto_event_creation(
        self,
        *,
        active: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Backup State {/* #set-automatic-backup-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-backup-state) · [gRPC Contract](/api/grpc/utility-operations#set-automatic-backup-state)

```python
async def set_automatic_backup_state(
        self,
        *,
        auto_job_file_restore_points_active: bool = True,
        auto_measurements_backup_active: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Automatic Relationship Construction State {/* #set-automatic-relationship-construction-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-automatic-relationship-construction-state) · [gRPC Contract](/api/grpc/utility-operations#set-automatic-relationship-construction-state)

```python
async def set_automatic_relationship_construction_state(
        self,
        *,
        active: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Collection Notes {/* #set-collection-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-collection-notes) · [gRPC Contract](/api/grpc/utility-operations#set-collection-notes)

```python
async def set_collection_notes(
        self,
        collection: CollectionName,
        notes: Iterable[str],
        *,
        append: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Decimal Digits for Display {/* #set-decimal-digits-for-display */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-decimal-digits-for-display) · [gRPC Contract](/api/grpc/utility-operations#set-decimal-digits-for-display)

```python
async def set_decimal_digits_for_display(
        self,
        *,
        length: int = 4,
        angle: int = 4,
        scale: int = 6,
        unit_vector: int = 6,
        weight: int = 3,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Folder Notes {/* #set-folder-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-folder-notes) · [gRPC Contract](/api/grpc/utility-operations#set-folder-notes)

```python
async def set_folder_notes(
        self,
        *,
        folder_path: str = "",
        notes: Iterable[str],
        append: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set Interaction Mode {/* #set-interaction-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-interaction-mode) · [gRPC Contract](/api/grpc/utility-operations#set-interaction-mode)

```python
async def set_interaction_mode(
        self,
        sa_interaction_mode: SaInteractionMode,
        measurement_plan_interaction_mode: MpInteractionMode,
        measurement_plan_dialog_interaction_mode: MpDialogInteractionMode,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Logging State {/* #set-logging-state */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-logging-state) · [gRPC Contract](/api/grpc/utility-operations#set-logging-state)

```python
async def set_logging_state(
        self,
        *,
        active: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Notification Cancel Override {/* #set-notification-cancel-override */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-notification-cancel-override) · [gRPC Contract](/api/grpc/utility-operations#set-notification-cancel-override)

```python
async def set_notification_cancel_override(
        self,
        *,
        prohibit_cancel: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Object Notes {/* #set-object-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-object-notes) · [gRPC Contract](/api/grpc/utility-operations#set-object-notes)

```python
async def set_object_notes(
        self,
        object: CollectionObjectName,
        notes: Iterable[str],
        *,
        append: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set OPC DA Tag Value Double {/* #set-opc-da-tag-value-double */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-double) · [gRPC Contract](/api/grpc/utility-operations#set-opc-da-tag-value-double)

```python
async def set_opc_da_tag_value_double(
        self,
        *,
        opc_server_da_tag_name: str = "",
        value: float = 0.000000,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value Integer {/* #set-opc-da-tag-value-integer */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-integer) · [gRPC Contract](/api/grpc/utility-operations#set-opc-da-tag-value-integer)

```python
async def set_opc_da_tag_value_integer(
        self,
        *,
        opc_server_da_tag_name: str = "",
        value: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set OPC DA Tag Value String {/* #set-opc-da-tag-value-string */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-opc-da-tag-value-string) · [gRPC Contract](/api/grpc/utility-operations#set-opc-da-tag-value-string)

```python
async def set_opc_da_tag_value_string(
        self,
        *,
        opc_server_da_tag_name: str = "",
        value: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Point Notes {/* #set-point-notes */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-point-notes) · [gRPC Contract](/api/grpc/utility-operations#set-point-notes)

```python
async def set_point_notes(
        self,
        point: PointName,
        notes: Iterable[str],
        *,
        append: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `append` | False overwrites existing notes. |

## Set User Interface Profile {/* #set-user-interface-profile */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-user-interface-profile) · [gRPC Contract](/api/grpc/utility-operations#set-user-interface-profile)

```python
async def set_user_interface_profile(
        self,
        *,
        profile_name: str = "Default",
        profile_file_name: FileReference,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

Parameter and result notes (units, defaults, and presence are unchanged):

| Member | Meaning |
| --- | --- |
| `profile_file_name` | Optional in the MP editor; the existing API presence and omission behavior is unchanged. |

## Set View Idle Update Frequency {/* #set-view-idle-update-frequency */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-view-idle-update-frequency) · [gRPC Contract](/api/grpc/utility-operations#set-view-idle-update-frequency)

```python
async def set_view_idle_update_frequency(
        self,
        *,
        idle_count: int = 0,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set WildCard Asterisk Mode {/* #set-wildcard-asterisk-mode */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-wildcard-asterisk-mode) · [gRPC Contract](/api/grpc/utility-operations#set-wildcard-asterisk-mode)

```python
async def set_wild_card_asterisk_mode(
        self,
        *,
        auto_wrap_search_string: bool = True,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Set Working Frame {/* #set-working-frame */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#set-working-frame) · [gRPC Contract](/api/grpc/utility-operations#set-working-frame)

```python
async def set_working_frame(
        self,
        new_working_frame_name: CollectionObjectName,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Status Dialog {/* #status-dialog */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#status-dialog) · [gRPC Contract](/api/grpc/utility-operations#status-dialog)

```python
async def status_dialog(
        self,
        *,
        dialog_title: str = "",
        text_message: str = "",
        current_position: int = 0,
        upper_limit: int = 0,
        suppress_time_remaining: bool = True,
        close_dialog: bool = False,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Trim Log File {/* #trim-log-file */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#trim-log-file) · [gRPC Contract](/api/grpc/utility-operations#trim-log-file)

```python
async def trim_log_file(
        self,
        *,
        number_of_entries_to_keep: int = 10,
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

## Write to Log {/* #write-to-log */}

[MP Catalog](/mp-command-catalog/commands/utility-operations#write-to-log) · [gRPC Contract](/api/grpc/utility-operations#write-to-log)

```python
async def write_to_log(
        self,
        *,
        log_entry: str = "",
    ) -> None: ...
```

The signature records required inputs and language defaults. The gRPC contract records exact MP argument and output bindings.

[Candidate Source](https://github.com/spatialanalyzer/briosa-py/tree/62742ed39d1ce8508664c585c906948122e7517d/targets/2026.1.0529.7)
