import React from "react";
import { useParams, Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import FieldTable from "../../../components/FieldTable";
import DocImage from "../../../components/DocImage";
import { fieldTypesDictionary } from "../../../data/fieldTypesData";

export default function FieldDetailPage({ fieldKey: propFieldKey }) {
  const params = useParams();
  const fieldKey = propFieldKey || params.fieldKey || "field-text";
  const data = fieldTypesDictionary[fieldKey] || fieldTypesDictionary["field-text"];

  const hasPlacementImages = [
    "field-text",
    "field-date",
    "field-photo",
    "field-gps",
    "field-video",
    "field-file",
  ].includes(fieldKey);

  const toc = [
    { id: "overview", label: "Overview & Business Purpose" },
    ...(hasPlacementImages
      ? [{ id: "builder-placement", label: "Builder Placement & UI Layout" }]
      : []),
    ...(fieldKey === "field-photo"
      ? [{ id: "video-upload-operations", label: "Video Upload Operations & Parity" }]
      : []),
    { id: "when-to-use", label: "When to Use / Not Use" },
    { id: "example", label: "Real Business Example" },
    { id: "behavior", label: "Field Behavior" },
    { id: "properties", label: "Field Configuration Properties" },
    { id: "validations", label: "Validation Rules" },
    { id: "dependencies-permissions", label: "Dependencies & Permissions" },
    { id: "search-reporting-export", label: "Search, Reporting & Export" },
    { id: "workflow", label: "Mobile Workflow" },
  ];

  return (
    <DocPage
      path={data.path}
      eyebrow="Field Library"
      title={data.title}
      description={data.description}
      hideImage={true}
      toc={toc}
    >
      {/* ── OVERVIEW & BUSINESS PURPOSE ────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; Business Purpose">
        <p>{data.overview}</p>
        <p className="mt-3">
          <strong>Business Purpose:</strong> {data.businessPurpose}
        </p>
      </Section>

      {/* ── BUILDER PLACEMENT & UI LAYOUT ──────────────────────────────── */}
      {hasPlacementImages && (
        <Section id="builder-placement" title="Builder Placement &amp; UI Layout">
          {/* TEXT FIELD DRAWER STACK & STEPS */}
          {fieldKey === "field-text" && (
            <div className="my-6 space-y-8">
              {/* IMAGE 1: CORE SETTINGS DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2.5 leading-none">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs leading-none">1</span>
                  Core Settings Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-text"
                  imageKey="core-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Set Field Label:</strong> Enter the survey prompt title (e.g., <code>Container ID / Seal Number</code>) displayed to field surveyors.</li>
                    <li><strong>Define Variable Identifier:</strong> Assign a unique database field key used for report bindings and API exports.</li>
                    <li><strong>Set Placeholder Text:</strong> Enter prompt guidance (e.g., <code>e.g. MSKU1234567</code>) inside the input box.</li>
                    <li><strong>Toggle Required Status:</strong> Turn on the mandatory toggle if surveyors must fill out this field before moving to the next step.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 2: LAYOUT & DISPLAY DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2.5 leading-none">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs leading-none">2</span>
                  Layout &amp; Display Properties Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-text"
                  imageKey="layout-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Select Column Width:</strong> Choose Full Width (100%), Half Width (50%), or Custom Grid Span for mobile screen layout.</li>
                    <li><strong>Set Label Alignment:</strong> Choose Top-aligned or Left-aligned label position for clear mobile screen readability.</li>
                    <li><strong>Add Inline Tooltip Guidance:</strong> Enter helper notes that display when surveyors tap the inline information icon.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 3: VALIDATION RULES DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2.5 leading-none">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs leading-none">3</span>
                  Validation Rules Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-text"
                  imageKey="validations-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Set Min &amp; Max Length Constraints:</strong> Specify minimum and maximum character limits (e.g., Min: 4, Max: 11).</li>
                    <li><strong>Configure Regex Pattern:</strong> Apply regex format validation for ISO Container codes or BL tracking numbers.</li>
                    <li><strong>Enable Auto-Uppercase Transformation:</strong> Turn on automatic text capitalization to ensure clean, standardized data entry.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 4: CONDITIONAL LOGIC RULES DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2.5 leading-none">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs leading-none">4</span>
                  Conditional Logic Rules Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-text"
                  imageKey="rules-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Define Trigger Condition:</strong> Select the source field and operator (e.g., <code>IF "Has Damage?" EQUALS "Yes"</code>).</li>
                    <li><strong>Select Action Target:</strong> Choose the target action to Show, Hide, Require, or Disable this text field dynamically on mobile devices.</li>
                    <li><strong>Verify Rule Execution:</strong> Test rule execution in the Preview Simulator prior to publishing the survey blueprint.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* DATE PICKER FIELD DRAWER STACK & STEPS */}
          {fieldKey === "field-date" && (
            <div className="my-6 space-y-8">
              {/* IMAGE 1: CORE SETTINGS DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">1</span>
                  Core Settings Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="core-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Set Date Label:</strong> Define the field label (e.g., <code>Inspection Date &amp; Time</code>).</li>
                    <li><strong>Select Date &amp; Time Format:</strong> Choose presentation format (<code>DD/MM/YYYY</code>, <code>MM/DD/YYYY</code>, or <code>DD/MM/YYYY HH:mm</code>).</li>
                    <li><strong>Set Default Date Value:</strong> Select default behavior (Today's Date, Custom Date, or Blank).</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 2: VALIDATIONS DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
                  Validation Rules Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="validations-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Set Allowed Date Bounds:</strong> Define minimum and maximum date boundaries for valid selections.</li>
                    <li><strong>Enforce Past/Future Restrictions:</strong> Restrict selection to past dates or future dates only.</li>
                    <li><strong>Configure Required Alert:</strong> Specify custom validation error message when left blank.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 3: RULES DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">3</span>
                  Conditional Logic Rules Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="rules-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Configure Trigger Condition:</strong> Set conditional trigger (e.g., <code>IF Shipment Mode EQUALS "Export"</code>).</li>
                    <li><strong>Assign Action:</strong> Choose action to show date picker, require entry, or auto-fill current date.</li>
                    <li><strong>Save Rule:</strong> Save and test logic rule in simulator preview.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* PHOTO UPLOAD FIELD DRAWER STACK & STEPS */}
          {fieldKey === "field-photo" && (
            <div className="my-6 space-y-8">
              {/* IMAGE 1: CORE SETTINGS DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">1</span>
                  Core Settings Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="core-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Define Photo Field Title:</strong> Set prompt label (e.g., <code>Cargo Damage Evidence Photos</code>).</li>
                    <li><strong>Enforce Real-Time Camera Capture:</strong> Turn on mandatory live camera capture to prevent selecting stale photos from device gallery.</li>
                    <li><strong>Select Photo Quality Profile:</strong> Choose image resolution and compression level.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 2: MEDIA VALIDATIONS DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
                  Media Validations Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="validations-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Set Min &amp; Max Photo Count:</strong> Specify required minimum and maximum photo uploads (e.g., Min: 2, Max: 6).</li>
                    <li><strong>Enforce GPS Geotagging &amp; Timestamps:</strong> Enable mandatory location coordinates and timestamp overlays.</li>
                    <li><strong>Set Max File Size Limits:</strong> Restrict max upload size per photo file.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 3: RULES DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">3</span>
                  Conditional Rules Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="rules-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Configure Conditional Trigger:</strong> Set rule condition (e.g., <code>IF "Discrepancy Found?" EQUALS "Yes"</code>).</li>
                    <li><strong>Set Dynamic Requirement Action:</strong> Make photo upload mandatory only when damage or discrepancy is flagged.</li>
                    <li><strong>Save Rule Logic:</strong> Apply rule and test in preview mode.</li>
                  </ol>
                </div>
              </div>

              {/* IMAGE 4: REFERENCE GALLERY DRAWER */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">4</span>
                  Reference Guide &amp; Example Gallery Drawer
                </h4>
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="media-drawer"
                  hideCaption={true}
                />
                <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                  <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                    Step-by-Step Configuration Steps:
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                    <li><strong>Upload Reference Guide Photos:</strong> Add example photo samples showing acceptable vs rejected photo quality.</li>
                    <li><strong>Add Mandatory Photo Angle Prompts:</strong> Specify required camera angles (e.g., Front View, Close-up Seal, Side Profile).</li>
                    <li><strong>Preview Guidance Cards:</strong> Test reference photo guide display in the mobile simulator.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE IMAGE FIELD TYPES (GPS, VIDEO, FILE) */}
          {fieldKey === "field-gps" && (
            <div className="my-4 space-y-3">
              <DocImage
                path="/configuration/surveys/field-gps"
                imageKey="overview"
                hideCaption={true}
              />
              <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                  Step-by-Step Configuration Steps:
                </strong>
                <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                  <li><strong>Set GPS Field Label:</strong> Define location capture prompt title (e.g., <code>Terminal Berth Geofence Location</code>).</li>
                  <li><strong>Configure Accuracy Threshold:</strong> Specify required GPS accuracy threshold (e.g., within 10 meters).</li>
                  <li><strong>Set Automatic Capture Mode:</strong> Enable automatic background geotagging upon checklist start.</li>
                </ol>
              </div>
            </div>
          )}

          {fieldKey === "field-video" && (
            <div className="my-4 space-y-3">
              <DocImage
                path="/configuration/surveys/field-video"
                imageKey="overview"
                hideCaption={true}
              />
              <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                  Step-by-Step Configuration Steps:
                </strong>
                <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                  <li><strong>Define Video Field Prompt:</strong> Set title (e.g., <code>Cargo Loading Video Stream</code>).</li>
                  <li><strong>Set Max Duration Limit:</strong> Specify max allowed video duration (e.g. 60 seconds).</li>
                  <li><strong>Configure Compression &amp; Resolution:</strong> Set video bitrate and frame rate for efficient mobile upload.</li>
                </ol>
              </div>
            </div>
          )}

          {fieldKey === "field-file" && (
            <div className="my-4 space-y-3">
              <DocImage
                path="/configuration/surveys/field-file"
                imageKey="overview"
                hideCaption={true}
              />
              <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
                <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
                  Step-by-Step Configuration Steps:
                </strong>
                <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
                  <li><strong>Set File Upload Label:</strong> Define document prompt (e.g., <code>Bill of Lading PDF Document</code>).</li>
                  <li><strong>Select Allowed File Extensions:</strong> Restrict uploads to specific formats (e.g., <code>.pdf</code>, <code>.xlsx</code>, <code>.docx</code>).</li>
                  <li><strong>Set Maximum File Size:</strong> Specify max file size constraint (e.g., 25 MB).</li>
                </ol>
              </div>
            </div>
          )}
        </Section>
      )}

      {/* ── VIDEO UPLOAD OPERATIONS & PARITY (PHOTO UPLOAD SUBSECTION) ── */}
      {fieldKey === "field-photo" && (
        <Section id="video-upload-operations" title="Video Upload Operations &amp; Parity">
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                Media Field Operations Note
              </span>
              <h4 className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF]">
                Video Upload Field Operation Parity
              </h4>
            </div>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-5 mb-3">
              The operational workflow, property drawer tabs (<strong>Core</strong>, <strong>Validations</strong>, <strong>Rules</strong>, <strong>Media</strong>), and media validation parameters (<em>Minimum Files</em>, <em>Maximum Files</em>, <em>Camera Only</em>, <em>Max File Size MB</em>, <em>Quality</em>, and <em>Logic Visibility Rules</em>) for the <strong>Video Upload Field</strong> operate identically to Photo Upload.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-ink-800 dark:text-[#E5E5E5] mb-3">
              <li><strong>Video &amp; Photo File Limits:</strong> Minimum Files &amp; Maximum Files parameters.</li>
              <li><strong>Camera Only Anti-Fraud:</strong> Disables device gallery picker for live hardware recording.</li>
              <li><strong>File Size Cap:</strong> Maximum allowed file size per clip (in megabytes).</li>
              <li><strong>Compression Quality:</strong> Low, Medium, or High media quality settings.</li>
            </ul>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <span>See complete Video Field specifications:</span>
              <Link
                to="/configuration/surveys/field-video"
                className="font-bold underline hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                Go to Video Upload Documentation &rarr;
              </Link>
            </div>
          </div>
        </Section>
      )}

      {/* ── WHEN TO USE / NOT USE ──────────────────────────────────────── */}
      <Section id="when-to-use" title="When to Use &amp; When NOT to Use">
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-950 dark:text-emerald-300">
            <p className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">✓ When to Use</p>
            <p className="text-xs mt-1 leading-5">{data.whenToUse}</p>
          </div>
          <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/10 text-rose-950 dark:text-rose-300">
            <p className="font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400">✕ When NOT to Use</p>
            <p className="text-xs mt-1 leading-5">{data.whenNotToUse}</p>
          </div>
        </div>
      </Section>

      {/* ── REAL BUSINESS EXAMPLE ──────────────────────────────────────── */}
      <Section id="example" title="Real Business Example">
        <div className="p-4 my-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-xs">
          <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Operational Scenario:</p>
          <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.realBusinessExample}</p>
        </div>
      </Section>

      {/* ── FIELD BEHAVIOR ────────────────────────────────────────────── */}
      <Section id="behavior" title="Field Behavior">
        <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">{data.behavior}</p>
      </Section>

      {/* ── FIELD CONFIGURATION PROPERTIES ────────────────────────────── */}
      <Section id="properties" title="Field Configuration Properties">
        <FieldTable rows={data.properties} />
      </Section>

      {/* ── VALIDATION RULES ───────────────────────────────────────────── */}
      <Section id="validations" title="Validation Rules">
        <ul className="list-disc pl-5 space-y-1 my-2 text-xs text-ink-700 dark:text-[#E5E5E5]">
          {data.validations.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </Section>

      {/* ── DEPENDENCIES & PERMISSIONS ─────────────────────────────────── */}
      <Section id="dependencies-permissions" title="Dependencies &amp; Permissions">
        <div className="grid gap-3 sm:grid-cols-2 text-xs my-2">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Dependencies / Branching:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.dependencies}</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Permissions:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.permissions}</p>
          </div>
        </div>
      </Section>

      {/* ── SEARCH, REPORTING & EXPORT ─────────────────────────────────── */}
      <Section id="search-reporting-export" title="Search, Reporting &amp; Export">
        <div className="grid gap-3 sm:grid-cols-3 text-xs my-2">
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Search Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.searchBehavior}</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Reporting Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.reportingBehavior}</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Export Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.exportBehavior}</p>
          </div>
        </div>
      </Section>

      {/* ── MOBILE WORKFLOW ─────────────────────────────────── */}
      <Section id="workflow" title="Mobile Workflow">
        <p className="mb-3 text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">
          <strong>Mobile Workflow:</strong> {data.workflow}
        </p>

        <Callout type="warning">
          <strong>Common Mistake:</strong> {data.commonMistakes}
        </Callout>
      </Section>
    </DocPage>
  );
}
