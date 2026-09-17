---
title: SA 2024.1.0508.5 Review Notes
description: Signature differences and SDK mapping decisions for the planned 2024 Briosa target.
---

# SA 2024.1.0508.5 Review Notes

All 1,283 captured 2024 commands match existing canonical command identities.
Their product dispositions inherit the established 2026 review where the
relevant evidence agrees. The comparison covers argument direction and labels,
SDK call shapes, enumerated choices, and exported sample values. It preserves
the earlier command grouping rather than moving commands into their later groups.

## Collection-Object Bindings

The static SDK-interface comparison found the same **151 COM methods** in both
exact releases. Both include the three-argument collection/name setter and the
four-argument collection/name/type setter. The 2024 exports generally select
the former; 2026 generally selects the latter. This does not imply that a setter
was added after 2024, or that later object choices are valid in 2024.

The reviewed 2024 object and item choice domains omit `Enhanced Cloud`: they have
25 object choices and 41 item choices. The future implementation must preserve
the domain appropriate to each argument and its exact-target binding evidence.
Matching COM interfaces do not establish matching MP behavior or runtime readiness.

## Changed Signatures, Choices, and Samples

The comparison identified **39 command entries** for individual difference review.
The decisions below cover all of them, including exporter-shape differences and
sample changes that do not change the planned command scope.

| Command | 2024 Status | Reviewed Difference and Decision |
| --- | --- | --- |
| [Add New Instrument](/mp-command-catalog/commands/instrument-operations#add-new-instrument) | **Next** | The 2024 instrument choices include `PMT Arm 4m 7 dof`, which is absent from the reviewed 2026 list. They omit the later `Leica ATS800`, `Hexagon Handheld 3D Scanner`, `Leica TS20 Total Station`, `API iLT`, `Leica Geosystems RTC360`, `Generic Aux Device`, and `Generic Aux Device 2` choices. Preserve the exact-target list and its instrument-specific validation requirements. |
| [Auto Filter Clouds to Nominal Geometry 2D](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-2d) | **Next** | The 2024 signature has no `Use Feature Specific Filter Settings?` input. Retain the earlier filtering controls. |
| [Auto Filter Clouds to Nominal Geometry 3D](/mp-command-catalog/commands/relationship-operations#auto-filter-clouds-to-nominal-geometry-3d) | **Next** | The 2024 signature has no `Use Feature Specific Filter Settings?` input. Retain the earlier filtering controls. |
| [Center Graphics About Object(s)](/mp-command-catalog/commands/view-control#center-graphics-about-objects) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Construct a Vector Group - Area Profile Check](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group---area-profile-check) | **Next** | The 2024 vector-group setter has three arguments, matching the exact SDK interface. The 2026 export adds a fourth type literal even though its SDK interface also has three arguments. Keep the reviewed three-argument mapping; this exporter difference does not create a new MP input. |
| [Construct a Vector Group From a Relationship](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-a-relationship) | **Next** | The 2024 vector-group setter has three arguments, matching the exact SDK interface. The 2026 export adds a fourth type literal even though its SDK interface also has three arguments. Keep the reviewed three-argument mapping; this exporter difference does not create a new MP input. |
| [Construct a Vector Group From Vector Name Ref List](/mp-command-catalog/commands/construction-operations-vectors-and-vector-groups#construct-a-vector-group-from-vector-name-ref-list) | **Next** | The 2024 vector-group setter has three arguments, matching the exact SDK interface. The 2026 export adds a fourth type literal even though its SDK interface also has three arguments. Keep the reviewed three-argument mapping; this exporter difference does not create a new MP input. |
| [Construct Objects From Surface Faces - Runtime Select](/mp-command-catalog/commands/construction-operations#construct-objects-from-surface-faces---runtime-select) | **Next** | This command has a distinct 2024 signature: seven Boolean inputs select planes, cylinders, spheres, cones, lines, points, and circles. Retain that signature. The later `Object Type` selector and `Point Offset` input do not apply to 2024; neither do the later slot and point-subtype choices. |
| [Construct Point Cloud from Existing Clouds](/mp-command-catalog/commands/construction-operations-point-clouds#construct-point-cloud-from-existing-clouds) | **Next** | The 2024 signature has no `Set Cloud Point RGB from Voxels?` input. Retain the earlier cloud-construction controls. |
| [Direct CAD Access](/mp-command-catalog/commands/file-operations#direct-cad-access) | **Next** | The captured `Surface Compatibility Mode` sample is `false` in 2024 and `true` in 2026. Retain the operation, but do not import the 2026 default. This review establishes no 2024 omission behavior: the future API must require an explicit choice unless a separate default review establishes otherwise. |
| [Do Relationship Fit](/mp-command-catalog/commands/relationship-operations#do-relationship-fit) | **Next** | The 2024 signature has no `Enable Randomized Start` input. Retain the fit operation without the later randomized-start control. |
| [Edit Scan Perimeter Profile](/mp-command-catalog/commands/instrument-operations#edit-scan-perimeter-profile) | **SDK Unavailable** | The 2024 export explicitly lacks an SDK binding for `Parameter set name`; 2026 supplies a string binding. The presence of a generic string setter in both SDKs does not establish that it can supply this 2024 argument. No complete reviewed 2024 mapping is available. Use the SpatialAnalyzer workflow directly; reconsider the direct RPC when exact-target binding evidence is available. |
| [Export ASCII Point Clouds](/mp-command-catalog/commands/file-operations#export-ascii-point-clouds) | **Next** | The 2024 signature has neither `Include Cloud Point Labeling?` nor `Include Scan Direction Vector?`. Retain the export operation without these later options. |
| [Export QDAS Characteristics](/mp-command-catalog/commands/file-operations#export-qdas-characteristics) | **Next** | The `K0004: Date Time Stamp` samples differ only by capture time. They are not reusable defaults and do not change the command disposition. A 2024 caller must provide its intended timestamp. Existing dimension-list limitations retain the reviewed 2026 handling. |
| [Filter Clouds to Vector Groups - Resolve points](/mp-command-catalog/commands/cloud-and-mesh-operations#filter-clouds-to-vector-groups---resolve-points) | **Next** | The 2024 signature has no `Include Proximity Points?` input. Retain the operation with its eight captured inputs; do not add the later option. |
| [Get Cone Properties](/mp-command-catalog/commands/analysis-operations#get-cone-properties) | **Next** | The 2024 outputs do not include `Cut Length from Apex`. Retain the getter with its captured outputs; do not synthesize a value for the later output. |
| [Get Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#get-feature-check-reporting-options) | **Next** | The 2024 outputs do not include `Only Create Failed Vectors?`. Retain the earlier reporting options. The existing `Vector Creation` export limitation is shared with 2026 and retains the reviewed mapping decision; it is not a new 2024 difference. |
| [Get General Relationship Statistics](/mp-command-catalog/commands/relationship-operations#get-general-relationship-statistics) | **Next** | The 2024 output label is `Max Deviation`, while 2026 uses `Absolute Max Deviation`. Preserve the 2024 label and binding. This review does not infer an absolute-value guarantee from the later label. |
| [Get Instrument Targets and Mode/Profiles](/mp-command-catalog/commands/instrument-operations#get-instrument-targets-and-modeprofiles) | **Next** | The 2024 input is named `Instrument to set`, despite this being a getter. The 2026 label is `Instrument to get`. Preserve the exact 2024 input label and the two returned string lists. |
| [Get Points to Objects Relationship Statistics](/mp-command-catalog/commands/relationship-operations#get-points-to-objects-relationship-statistics) | **Next** | The 2024 outputs do not include `Avg Deviation`. Retain the captured statistics without computing a substitute for the later output. |
| [Is Object of Type](/mp-command-catalog/commands/analysis-operations#is-object-of-type) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Item Name from Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-from-strings) | **Excluded** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Item Name Reference List - WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-item-name-reference-list---wildcard-selection) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name - Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name---runtime-select) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name from Strings](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-from-strings) | **Excluded** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name Ref List - By Type](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name Ref List - By Type and Color](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-ref-list---by-type-and-color) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name Reference List- Runtime Select](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--runtime-select) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a Collection Object Name Reference List- WildCard Selection](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-collection-object-name-reference-list--wildcard-selection) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |
| [Make a System String](/mp-command-catalog/commands/construction-operations-other-mp-types#make-a-system-string) | **Next** | The 2024 choices include `User Name`. They do not include the later `License User Name`, `Windows User Name`, or `Computer Name` choices. Keep `User Name` as its own exact-target choice; do not silently identify it with either later user-name choice. |
| [Make Cylinder Fit Profile](/mp-command-catalog/commands/analysis-operations#make-cylinder-fit-profile) | **Next** | The 2024 signature omits `Constrain to Nominal Axis?`, `Constrain to Nominal Orientation?`, `Align with Nominal?`, `Reverse Axis?`, and `Set Axis First to Last Point?`. Retain the fit-profile operation with the earlier controls. |
| [Prepare QDAS Data List](/mp-command-catalog/commands/file-operations#prepare-qdas-data-list) | **Next** | The `K0004: Date Time Stamp` samples differ only by capture time. They are not reusable defaults and do not change the command disposition. A 2024 caller must provide its intended timestamp. Existing dimension-list limitations retain the reviewed 2026 handling. |
| [Re-Compute Calculated Items](/mp-command-catalog/commands/analysis-operations#re-compute-calculated-items) | **Next** | The 2024 signature has no `Refresh Filtered Cloud Data?` input. Retain the operation without that later refresh control. |
| [Scan CAD Faces](/mp-command-catalog/commands/instrument-operations#scan-cad-faces) | **SDK Unavailable** | The 2024 export explicitly lacks an SDK binding for `Parameter set name`; 2026 supplies a string binding. The presence of a generic string setter in both SDKs does not establish that it can supply this 2024 argument. No complete reviewed 2024 mapping is available. Use the SpatialAnalyzer workflow directly; reconsider the direct RPC when exact-target binding evidence is available. |
| [Scan within perimeter](/mp-command-catalog/commands/instrument-operations#scan-within-perimeter) | **SDK Unavailable** | The 2024 export explicitly lacks an SDK binding for `Parameter set name`; 2026 supplies a string binding. The presence of a generic string setter in both SDKs does not establish that it can supply this 2024 argument. No complete reviewed 2024 mapping is available. Use the SpatialAnalyzer workflow directly; reconsider the direct RPC when exact-target binding evidence is available. |
| [Set Feature Check Reporting Options](/mp-command-catalog/commands/gdt-analysis#set-feature-check-reporting-options) | **Next** | The 2024 signature has no `Only Create Failed Vectors?` input. Retain the earlier reporting options. The existing `Vector Creation` export limitation is shared with 2026 and retains the reviewed mapping decision; it is not a new 2024 difference. |
| [Set Geom Relationship Auto Vectors Nominal (AVN)](/mp-command-catalog/commands/relationship-operations#set-geom-relationship-auto-vectors-nominal-avn) | **Next** | The 2024 signature has neither `Use Vector Group Custom Prefix?` nor `Vector Group Custom Prefix`. Retain the earlier automatic-vector settings. |
| [Set Relationship Auto Vectors Fit (AVF)](/mp-command-catalog/commands/relationship-operations#set-relationship-auto-vectors-fit-avf) | **Next** | The 2024 signature has neither `Use Vector Group Custom Prefix?` nor `Vector Group Custom Prefix`. Retain the earlier automatic-vector settings. |
| [Show / Hide by Object Type](/mp-command-catalog/commands/view-control#show--hide-by-object-type) | **Next** | The 2024 type choices omit `Enhanced Cloud`. Preserve the earlier choice domain: 25 object choices or 41 item choices, as applicable to this argument. The later choice must not be accepted implicitly. The command retains its existing support or exclusion rationale. |

## SDK Export Limitations

An exporter warning or helper name is not automatically a callable COM method.
The same five exporter helper names are absent from both exact SDK interfaces:
the GD&T distance-between and evaluation-method helpers, item-type helper,
cloud-thinning-mode helper, and mesh-orientation helper. Existing reviewed
mapping or exclusion decisions remain applicable where the MP argument evidence
matches; this review does not invent new aliases.

Three result-setting exports omit a parameter in both releases. Their existing
MP-subroutine exclusions or external-device deferral remain unchanged. Three
vector-group exports add an extra argument in 2026; the installed interfaces in
both releases retain the reviewed three-argument method.

For `Scan within perimeter`, `Edit Scan Perimeter Profile`, and `Scan CAD Faces`,
the 2024 capture has no binding for `Parameter set name`. A later string binding
does not prove a 2024 mapping. These entries are **SDK Unavailable** for 2024,
pending new exact-target binding evidence, while retaining their 2026 status.

## Defaults and Runtime Evidence

Captured values are examples, not proof of what happens when an API input is
omitted. Capture-time timestamps are not reusable defaults. The changed Direct
CAD Access sample requires an explicit future 2024 choice unless omission
behavior is separately established. Other 2026 defaults remain scoped to the
2026 implementation until the 2024 API is implemented and reviewed.

The review inspected type-library metadata without starting or connecting to
SpatialAnalyzer, changing SDK registration, or executing MP commands. Portable
or licensed 2026 test results do not become 2024 validation results. All planned
2024 commands still require implementation and target-specific validation.
