import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";
import FieldTable from "../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "template-details", label: "Template Details" },
  { id: "template-sections", label: "Template Sections" },
  { id: "field-types", label: "Field Types Overview" },
  { id: "field-text", label: "Field: Text" },
  { id: "field-number", label: "Field: Number" },
  { id: "field-date", label: "Field: Date & Time" },
  { id: "field-dropdown", label: "Field: Dropdown" },
  { id: "field-checkbox", label: "Field: Checkbox" },
  { id: "field-gps", label: "Field: GPS" },
  { id: "field-photo", label: "Field: Photo" },
  { id: "field-signature", label: "Field: Signature" },
  { id: "field-barcode-qr", label: "Field: Barcode / QR Code" },
  { id: "validation-rules", label: "Validation Rules" },
  { id: "conditional-logic", label: "Conditional Logic" },
  { id: "publishing", label: "Publishing" },
  { id: "versioning", label: "Versioning" },
  { id: "import-export", label: "Import & Export" },
  { id: "permissions", label: "Permissions" },
];

export default function InspectionTemplates() {
  return (
    <DocPage
      path="/configuration/inspection-templates"
      eyebrow="Configuration"
      title="Inspection Templates Reference"
      description="Detailed configurations, field types, validation rules, conditional logic, and versioning for cargo inspection blueprints."
      toc={toc}
    >
      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          An <strong>Inspection Template</strong> is a reusable operational blueprint that standardizes survey requirements for recurring logistics contracts, vessel discharge operations, and port terminal checks.
        </p>
        <p className="mt-3">
          Templates combine checklist question structures, field validation rules, conditional branching logic, attachment requirements, and report variable bindings into a locked configuration package. When an Operational Coordinator registers a <Link to="/operations/contracts">Contract</Link>, binding an Inspection Template automatically expands the required execution steps and mobile surveyor checklists.
        </p>
        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/template-overview.png"
          alt="Inspection Templates Management Console Overview"
          caption="Figure 1.1: Inspection Templates management console showing template library, version tags, and draft state controls."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/template-overview-walkthrough.mp4"
          alt="Inspection Templates Overview Video Walkthrough"
          caption="Video 1.1: 2-minute video overview of creating, configuring, and publishing inspection templates."
        />
      </Section>

      {/* ── TEMPLATE DETAILS ────────────────────────────────────────────── */}
      <Section id="template-details" title="Template Details">
        <p>
          The <strong>Template Details Panel</strong> defines master header attributes used to categorize blueprints in the template library:
        </p>

        <div className="my-4">
          <FieldTable
            rows={[
              { field: "Template Name", required: true, desc: "Alphanumeric name (e.g., Containerized Rice Discharge V2)." },
              { field: "Description", required: false, desc: "Operational guidance specifying when this blueprint should be applied." },
              { field: "Process Type", required: true, desc: "Flow direction: Import Discharge, Export Loading, or Storage Audit." },
              { field: "Cargo Type", required: true, desc: "Target commodity category: Containerized, Break Bulk, Liquid Bulk, or Dry Bulk." },
              { field: "Default SLA (Hours)", required: true, desc: "Standard target turnaround time assigned to dispatches using this template." },
            ]}
          />
        </div>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/template-details-form.png"
          alt="Template Details Configuration Interface"
          caption="Figure 2.1: Header settings form for setting process types, cargo categories, and default SLA targets."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/template-details-tutorial.mp4"
          alt="Template Details Tutorial Video"
          caption="Video 2.1: Demonstration of setting up template details and cargo category tags."
        />
      </Section>

      {/* ── TEMPLATE SECTIONS ───────────────────────────────────────────── */}
      <Section id="template-sections" title="Template Sections">
        <p>
          Templates organize checklist questions into logical <strong>Inspection Sections</strong> that correspond to real-world terminal phases:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">1. Pre-Inspection</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Verifies surveyor arrival, weather conditions, berth access, and safety gear verification.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">2. Discharge / Loading</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Tracks hatch unsealing, crane operations, tally counts, and container seal verifications.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">3. Damage &amp; Defect Audit</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Captures cargo condition anomalies, damaged package counts, and evidence photographs.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">4. Final Sign-off</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Collects digital touchscreen signatures from the chief surveyor, vessel officer, and recipient.</p>
          </div>
        </div>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/template-sections-builder.png"
          alt="Template Section Reordering & Structuring Canvas"
          caption="Figure 3.1: Drag-and-drop section builder allowing administrators to organize checklist phases."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/template-sections-tutorial.mp4"
          alt="Template Section Reordering Video Tutorial"
          caption="Video 3.1: Tutorial demonstrating section creation and reordering."
        />
      </Section>

      {/* ── FIELD TYPES OVERVIEW ────────────────────────────────────────── */}
      <Section id="field-types" title="Field Types Overview">
        <p>
          The system supports <strong>9 specialized input field types</strong> to capture diverse operational data during field inspections. Every field supports properties for mandatory validation, report variable binding, and conditional display rules.
        </p>

        {/* Text Field */}
        <div id="field-text" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">TEXT</span>
            Field: Text
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Single-line or multi-line text input for freeform comments, vessel call signs, and serial numbers.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Placeholder text, max character limit (1–1000 chars), multiline toggle.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Optional Regex pattern matching (e.g., container serial number regex <code>^[A-Z]{4}\d{7}$</code>).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Container Seal Number, Hatch Condition Remarks, Driver License Number.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-text-config.png"
            alt="Text Field Configuration Interface"
            caption="Figure 4.1: Text field property panel showing character limits and regex pattern validator."
          />
        </div>

        {/* Number Field */}
        <div id="field-number" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">NUMBER</span>
            Field: Number
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Numeric input for quantities, weights, temperatures, and tally counts.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Min value, Max value, Decimal precision (0–4 places), Unit label (kg, MT, °C, bags).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Hard lower/upper bounds prevent out-of-range entry errors on mobile devices.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Damaged Bag Quantity (MT), Cargo Hold Temperature (°C), Total Package Count.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-number-config.png"
            alt="Number Field Configuration Interface"
            caption="Figure 4.2: Number field property panel with min/max range limits and unit label selection."
          />
        </div>

        {/* Date Field */}
        <div id="field-date" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">DATE</span>
            Field: Date &amp; Time
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Timestamp logging for operational milestones (berth arrival, hatch opening, discharge completion).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Date mode (Date only vs Date &amp; Time), Timezone normalization (UTC vs Local Port Time).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Future/past date restriction rules (e.g., unsealing timestamp cannot be in the future).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Vessel Commence Discharge Time, Final Tally Time.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-date-config.png"
            alt="Date & Time Field Configuration Interface"
            caption="Figure 4.3: Date picker properties showing timestamp mode and timezone normalization."
          />
        </div>

        {/* Dropdown Field */}
        <div id="field-dropdown" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">DROPDOWN</span>
            Field: Dropdown
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Selection menu for predefined options, preventing spelling variances in reporting.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Option list key-value editor, Single-select vs Multi-select mode, Default value.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Option selection enforcement; supports driving conditional logic branching rules.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Cargo Condition (Good, Damaged, Wet, Contaminated), Weather Condition (Clear, Rain, Heavy Fog).</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-dropdown-config.png"
            alt="Dropdown Option List Configurator Interface"
            caption="Figure 4.4: Key-value option editor for configuring dropdown menus and branching triggers."
          />
        </div>

        {/* Checkbox Field */}
        <div id="field-checkbox" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">CHECKBOX</span>
            Field: Checkbox
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Boolean pass/fail toggle or multi-item checklist for safety and equipment inspections.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Label text, Default state (Checked/Unchecked), Critical Fail Flag (triggers red alert if unchecked).</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Mandatory check enforcement for critical safety items.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Hatch Covers Intact?, Container Seals Verified?, Safety Equipment Worn?.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-checkbox-config.png"
            alt="Checkbox Pass/Fail Criteria Configurator"
            caption="Figure 4.5: Checkbox settings panel showing critical fail trigger options."
          />
        </div>

        {/* GPS Field */}
        <div id="field-gps" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">GPS</span>
            Field: GPS Location
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Geotagged location capture verifying physical surveyor presence at port berths.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Target latitude/longitude, Geofence radius tolerance (default: 1.0 km), Auto-capture on check-in toggle.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Distance audit against planned contract coordinates using the Haversine formula. Variance over 1.0 km flags a warning on the review dashboard.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Berth 4 Check-In Geotag, Terminal Gate Arrival Location.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-gps-config.png"
            alt="GPS Geofence Property Configurator"
            caption="Figure 4.6: GPS location field properties with geofence radius settings."
          />
        </div>

        {/* Photo Field */}
        <div id="field-photo" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">PHOTO</span>
            Field: Photo Attachment
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-slate-300"><strong>Purpose:</strong> Mobile camera photographic evidence capture for cargo condition and damage documentation.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-slate-300"><strong>Configuration:</strong> Min/Max photo count (1–10 photos), Mandatory caption toggle, Image compression ratio.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-slate-300"><strong>Validation:</strong> Prevents checklist submission until required photo evidence is captured and geotagged.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-slate-300"><strong>Examples:</strong> Container Seal Photo, Damaged Bag Evidence, Hatch Cover Seal Picture.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-photo-config.png"
            alt="Photo Attachment Configurator Interface"
            caption="Figure 4.7: Photo field settings specifying photo count requirements and mandatory caption rules."
          />
        </div>

        {/* Signature Field */}
        <div id="field-signature" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">SIGNATURE</span>
            Field: Signature
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Touchscreen or mouse digital signature capture box for legal sign-off and receipt acknowledgment.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Signatory role label (Surveyor, Vessel Chief Officer, Terminal Representative), Name text field binding.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Ensures non-empty canvas vector path data before checklist approval.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Chief Surveyor Sign-Off, Recipient Representative Signature.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-signature-config.png"
            alt="Signature Box Configuration Interface"
            caption="Figure 4.8: Signature field properties specifying signatory roles and name capture fields."
          />
        </div>

        {/* Barcode / QR Field */}
        <div id="field-barcode-qr" className="my-6 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-signal-50 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 text-xs font-mono">BARCODE / QR</span>
            Field: Barcode / QR Code Scanner
          </h4>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Purpose:</strong> Mobile camera code scanner for instant verification of container ISO numbers and seal barcodes.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Configuration:</strong> Supported symbologies (Code128, QR Code, DataMatrix), Auto-fill target text field toggle.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Validation:</strong> Validates scanned code against expected packing list container IDs.</p>
          <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]"><strong>Examples:</strong> Container ISO Code Scanner, High-Security Seal Barcode Verification.</p>
          <DocMedia
            type="image"
            src="s3://cargoclave-docs-assets/inspection-templates/field-barcode-qr-config.png"
            alt="Barcode & QR Scanner Configurator Interface"
            caption="Figure 4.9: Barcode and QR code scanner field properties."
          />
        </div>
      </Section>

      {/* ── VALIDATION RULES ───────────────────────────────────────────── */}
      <Section id="validation-rules" title="Validation Rules">
        <p>
          The template engine enforces <strong>Validation Rules</strong> to guarantee data quality before surveyor submissions are transmitted to the review console.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Rule Types &amp; Execution Enforcements</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Mandatory Field Constraints:</strong> Prevents advancing to subsequent checklist steps if required fields are blank.</li>
          <li><strong>Regex Pattern Matchers:</strong> Validates string formats (e.g., container numbers, phone numbers, tax IDs).</li>
          <li><strong>Numeric Bound Range Checks:</strong> Ensures inputs stay within realistic physical thresholds (e.g., cargo temperature between -30°C and +50°C).</li>
          <li><strong>GPS Geofence Radius Audit:</strong> Automatically flags check-ins occurring more than 1.0 km away from target port terminal coordinates.</li>
        </ul>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/validation-rules-builder.png"
          alt="Validation Rules Configuration Panel"
          caption="Figure 5.1: Rule builder interface for configuring mandatory fields, regex patterns, and range limits."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/validation-rules-tutorial.mp4"
          alt="Validation Rules Tutorial Video"
          caption="Video 5.1: Tutorial demonstrating validation rule setup and mobile error triggers."
        />
      </Section>

      {/* ── CONDITIONAL LOGIC ──────────────────────────────────────────── */}
      <Section id="conditional-logic" title="Conditional Logic">
        <p>
          <strong>Conditional Logic Rules</strong> enable dynamic checklist behavior, showing or hiding question blocks based on prior answers.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Supported Branching Triggers</h4>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Dropdown Answer Trigger</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">Selecting <code>Cargo Condition = Damaged</code> dynamically unhides mandatory Damage Photo and Damaged Quantity fields.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Numeric Threshold Trigger</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">Entering a gross weight greater than 500 MT automatically reveals mandatory hatch inspection checklists.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Checkbox Fail Trigger</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">Unchecking <code>Container Seal Intact</code> forces the surveyor to take a seal damage photo and enter a replacement seal number.</p>
          </div>
        </div>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/conditional-logic-builder.png"
          alt="Conditional Logic Rule Builder Interface"
          caption="Figure 6.1: Visual rule builder showing IF/THEN branching conditions and field visibility toggles."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/conditional-logic-tutorial.mp4"
          alt="Conditional Logic Tutorial Video"
          caption="Video 6.1: Video walkthrough showing conditional step branching in mobile checklists."
        />
      </Section>

      {/* ── PUBLISHING ─────────────────────────────────────────────────── */}
      <Section id="publishing" title="Publishing">
        <p>
          Templates exist in one of two lifecycle states:
        </p>

        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/5 dark:bg-[#0A0A0A]">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-[#171717] text-ink-700 dark:text-[#E5E5E5] font-bold text-xs uppercase tracking-wider">Draft</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Work-in-progress state. Admins can add, reorder, or delete fields without affecting live dispatches. Draft templates do not appear in contract creation dropdowns.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Published</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Locked production state. Published templates immediately become available in the contract creation wizard. Published fields are immutable to preserve audit integrity.</p>
          </div>
        </div>

        <Callout type="important">
          Publishing a template locks all question IDs and variable bindings. Any subsequent changes require creating a new template version to ensure past contract reports remain reproducible.
        </Callout>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/publishing-modal.png"
          alt="Publishing & Locking Modal Dialogue"
          caption="Figure 7.1: Publishing confirmation dialogue warning that published fields will be locked for audit integrity."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/publishing-tutorial.mp4"
          alt="Template Publishing Video Tutorial"
          caption="Video 7.1: Demonstration of template validation checks before publishing."
        />
      </Section>

      {/* ── VERSIONING ─────────────────────────────────────────────────── */}
      <Section id="versioning" title="Versioning">
        <p>
          The template engine maintains full <strong>Version Control</strong> (e.g., <code>v1.0</code>, <code>v1.1</code>, <code>v2.0</code>) for every published blueprint.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-4 mb-2">Version Control Rules</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Minor Revisions (v1.1):</strong> Non-breaking edits (updating description text or adding optional help notes).</li>
          <li><strong>Major Revisions (v2.0):</strong> Breaking structural edits (adding mandatory fields or modifying report variable bindings).</li>
          <li><strong>Backward Compatibility:</strong> Active contracts continue using the exact template version selected during dispatch creation, ensuring ongoing surveys are never disrupted by template updates.</li>
        </ul>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/versioning-history.png"
          alt="Template Version History Panel"
          caption="Figure 8.1: Template version history audit trail showing past revisions, publish timestamps, and active dispatch counts."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/versioning-tutorial.mp4"
          alt="Template Versioning Video Tutorial"
          caption="Video 8.1: Tutorial showing version cloning and minor vs major release workflows."
        />
      </Section>

      {/* ── IMPORT & EXPORT ────────────────────────────────────────────── */}
      <Section id="import-export" title="Import &amp; Export">
        <p>
          Template configurations can be exported as standardized <strong>JSON Schema Files</strong> or imported to replicate blueprint structures across multi-tenant enterprise environments.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-4 mb-2">Schema Tools</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Export JSON Schema:</strong> Downloads the complete template structure including sections, field types, validation rules, and conditional logic.</li>
          <li><strong>Import JSON Schema:</strong> Uploads an exported template schema, creating a new Draft template in the target workspace.</li>
        </ul>

        <DocMedia
          type="image"
          src="s3://cargoclave-docs-assets/inspection-templates/import-export-modal.png"
          alt="Template Schema Import & Export Interface"
          caption="Figure 9.1: Template JSON schema import/export dialogue."
        />
        <DocMedia
          type="video"
          src="s3://cargoclave-docs-assets/inspection-templates/import-export-tutorial.mp4"
          alt="Template Schema Import & Export Video Tutorial"
          caption="Video 9.1: Demonstration of exporting template JSON schemas and importing across tenants."
        />
      </Section>

      {/* ── PERMISSIONS ────────────────────────────────────────────────── */}
      <Section id="permissions" title="Permissions">
        <p>
          Inspection Template configuration is governed by strict Role-Based Access Control (RBAC):
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Action</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Coordinator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Reviewer</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Surveyor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-medium">Create / Edit Template</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Publish Template</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Bind Template to Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Export / Import Schema</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
