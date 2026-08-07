import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "available-fields", label: "Survey Builder Field Catalog" },
  { id: "field-specifications", label: "Detailed Field Specifications" },
  { id: "best-practices", label: "Field Configuration Guidelines" },
];

const surveyBuilderFields = [
  {
    id: "field-text",
    title: "Text",
    subtitle: "Single line text input",
    category: "Basic Input",
    purpose: "Captures short single-line string entries, reference codes, serial numbers, and alphanumeric tags.",
    useCases: "Recording container bolt seal IDs (e.g. MSKU-982341-X), vessel call signs (e.g. ABCD123), truck license plates, and driver names.",
    rules: "Supports character min/max limits (4 to 255 chars), text format rules, auto-capitalization, and duplicate checking across dispatches.",
    example: "MSKU-982341-X",
  },
  {
    id: "field-textarea",
    title: "Text Area",
    subtitle: "Multi-line text input",
    category: "Basic Input",
    purpose: "Multi-line expanded text box for entering narrative remarks, detailed observations, and damage summaries.",
    useCases: "Logging comprehensive cargo damage observations, hatch cover condition notes, freeform surveyor remarks, and port authority notes.",
    rules: "Supports initial visible row count configuration (3 to 10 rows), maximum character limits up to 2000 characters, and text formatting.",
    example: "Rust spots and denting observed on lower left door panel; bolt seal intact upon berth arrival.",
  },
  {
    id: "field-number",
    title: "Number",
    subtitle: "Numeric input",
    category: "Basic Input",
    purpose: "Numeric input box restricted to numbers, decimal values, quantities, and physical measurements.",
    useCases: "Recording cargo gross weight (24.50 MT), package/bag counts (500), hold temperatures (-18.5 °C), and moisture percentages (12.4%).",
    rules: "Enforces minimum and maximum range boundaries, decimal precision controls (0 to 4 decimal places), and unit of measure badges (MT, KG, °C, %).",
    example: "24.50 MT | Temperature: -18.5 °C",
  },
  {
    id: "field-calculated",
    title: "Calculated Field",
    subtitle: "Creates a calculated value from number or calculated fields",
    category: "Advanced",
    purpose: "Dynamic formula field that automatically computes math values in real-time based on numeric input fields.",
    useCases: "Automatically calculating net cargo weight (Net Weight = Gross Weight - Tare Weight), total bag sums, or average cargo temperature across holds.",
    rules: "Read-only field on mobile devices, evaluates formulas instantly upon field entry, and binds directly to Report Builder summary tables.",
    example: "Net Weight = 24.50 MT - 2.10 MT = 22.40 MT",
  },
  {
    id: "field-comparison",
    title: "Comparison Field",
    subtitle: "Compares values from numeric fields",
    category: "Advanced",
    purpose: "Automated evaluation component that compares numeric values across different steps or fields to highlight discrepancies.",
    useCases: "Comparing initial vs final draft survey readings to detect weight variance, or comparing bill of lading weight vs weighbridge scale weight.",
    rules: "Displays visual delta indicators (positive/negative variance), flags out-of-tolerance discrepancies in red, and triggers mandatory supervisor note fields.",
    example: "Variance Delta = +0.35 MT (Within 0.5% Tolerance)",
  },
  {
    id: "field-dropdown",
    title: "Dropdown",
    subtitle: "Single selection from options",
    category: "Choice",
    purpose: "Single-selection picklist menu allowing surveyors to select exactly one option from a predefined list.",
    useCases: "Selecting inspection outcome (Passed / Failed / Pending), hatch assignment (Hatch 1 / Hatch 2 / Hatch 3), or commodity category.",
    rules: "Searchable option list for long menus, custom option key codes, default selected items, and primary trigger for conditional question visibility.",
    example: "Hatch Selection: [Hatch 1, Hatch 2, Hatch 3, Hatch 4]",
  },
  {
    id: "field-multiselect",
    title: "Multi Select",
    subtitle: "Multiple selection from options",
    category: "Choice",
    purpose: "Multi-choice array component allowing surveyors to check off multiple applicable options simultaneously.",
    useCases: "Marking all observed cargo defect types (Dent, Rust, Water Stain, Torn Bag), or selecting required PPE safety gear.",
    rules: "Configurable minimum/maximum selection bounds, custom option tags, and exports as clean array lists in PDF inspection reports.",
    example: "Observed Defects: [x] Dent  [x] Rust  [ ] Water Stain",
  },
  {
    id: "field-radio",
    title: "Radio",
    subtitle: "Single selection from radio options",
    category: "Choice",
    purpose: "Radio button selection group displayed directly on the mobile form screen for fast 1-tap choice selection.",
    useCases: "Quick single-tap selection for short choice lists (2 to 4 options) such as Shift selection (Day Shift / Night Shift) or Weather (Clear / Rain / Fog).",
    rules: "Renders options horizontally or vertically on screen without opening a popup overlay, accelerating mobile check-in speed.",
    example: "Shift: (o) Day Shift  ( ) Night Shift",
  },
  {
    id: "field-toggle",
    title: "Yes/No Toggle",
    subtitle: "Boolean toggle switch",
    category: "Choice",
    purpose: "High-speed binary toggle switch for confirming Yes or No compliance checks and safety flags.",
    useCases: "Confirming critical safety compliance items (Hatch Cover Sealed: Yes/No, Damage Observed: Yes/No, Cleanliness Approved: Yes/No).",
    rules: "Clear visual ON/OFF state indicators, customizable default position (Checked vs Unchecked), and critical fail alerts if left unchecked.",
    example: "Hatch Cover Sealed: ON (Yes)",
  },
  {
    id: "field-date",
    title: "Date",
    subtitle: "Date picker",
    category: "Date & Time",
    purpose: "Calendar picker for selecting a specific day, month, and year in standard DD-MM-YYYY format.",
    useCases: "Selecting calendar dates such as Inspection Date (10-08-2026), Certificate Issue Date, or Vessel Departure Date.",
    rules: "Enforces standard DD-MM-YYYY formatting, supports past-date or future-date constraint rules, and normalizes calendar dates globally.",
    example: "10-08-2026",
  },
  {
    id: "field-time",
    title: "Time",
    subtitle: "Time picker",
    category: "Date & Time",
    purpose: "24-hour clock selector for recording precise hours and minutes (HH:MM format).",
    useCases: "Logging operational timestamps within a single day, such as shift start/end times, hatch unsealing moments (14:30 HRS), or break times.",
    rules: "24-hour format validation (00:00 to 23:59), time-boundary checks, and automatic shift log grouping.",
    example: "14:30 HRS",
  },
  {
    id: "field-datetime",
    title: "Date & Time",
    subtitle: "Date and time picker",
    category: "Date & Time",
    purpose: "Combined date and time selector capturing full timestamp coordinates (DD-MM-YYYY HH:MM UTC).",
    useCases: "Official inspection commencement timestamps, laytime calculation start/end moments, and SLA tracking across multi-day voyages.",
    rules: "Full timezone normalization (UTC offset conversion), automated duration calculations, and official certificate timestamping.",
    example: "10-08-2026 14:30 UTC",
  },
  {
    id: "field-photo",
    title: "Photo",
    subtitle: "Image capture or upload",
    category: "Media",
    purpose: "Mobile camera photographic evidence tool for snapping real-time inspection photos with geotags and captions.",
    useCases: "Snapping photographic proof of cargo damage, container bolt seal IDs, vessel hatch covers, and berth conditions on site.",
    rules: "Mandatory photo caption enforcement, camera-only capture mode (anti-fraud control), EXIF location geotagging, and image compression.",
    example: "Photo Attachment + Caption (\"Container Door Seal MSKU-982341-X\")",
  },
  {
    id: "field-video",
    title: "Video",
    subtitle: "Video capture or upload",
    category: "Media",
    purpose: "Video clip recording tool for capturing short video footage of dynamic moving operations.",
    useCases: "Recording short video clips (10 to 30 seconds) of active crane discharge operations, hatch cover hydraulic mechanism movement, or liquid cargo pumping.",
    rules: "Configurable maximum clip duration, MP4 video compression, camera viewfinder controls, and embedded video preview in report viewers.",
    example: "15-Second Video Clip (\"Crane Discharge Supervision\")",
  },
  {
    id: "field-file",
    title: "File Upload",
    subtitle: "General file upload",
    category: "Media",
    purpose: "Document attachment tool for attaching external files, PDF certificates, and manifests to the survey record.",
    useCases: "Attaching official weighbridge slips, lab quality analysis certificates, bills of lading PDFs, and signed port authority documents.",
    rules: "Supported file type restrictions (PDF, XLSX, DOCX), maximum file size limits (up to 25MB), and multi-file attachment lists.",
    example: "Weighbridge_Slip_WB-9912.pdf",
  },
  {
    id: "field-barcode",
    title: "Barcode/QR Scan",
    subtitle: "Barcode or QR code scanner",
    category: "Special",
    purpose: "High-speed camera scanner tool that reads 1D barcodes and 2D QR codes to auto-fill survey fields instantly.",
    useCases: "Scanning container ISO barcodes, seal IDs, pallet QR tags, and digital shipping passes during gate check-in or tallying.",
    rules: "Built-in 1D/2D scanning viewfinder, decoding format rules, instant multi-field auto-fill mapping, and manual fallback entry mode.",
    example: "Scanned QR Code -> Auto-fills Lot Number, Expiry, and Net Weight",
  },
];

export default function FieldLibrary() {
  return (
    <DocPage
      path="/configuration/surveys/field-library"
      eyebrow="Survey Builder"
      title="Field Library"
      description="Complete catalog of the 16 specialized survey builder fields with detailed operational guidelines, rules, and usage specifications."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Field Library</strong> houses the <strong>16 available field types</strong> in the Survey Builder left side panel. All dates use standard <code>DD-MM-YYYY</code> format. Selecting the appropriate field type ensures clean data entry for field surveyors, enforces business rules, and enables downstream automated report generation.
        </p>
      </Section>

      <Section id="available-fields" title="Survey Builder Field Catalog">
        <p className="mb-4">Below is the complete inventory of the 16 fields available in the Survey Builder palette:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {surveyBuilderFields.map((f) => (
            <div
              key={f.id}
              className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">{f.title}</p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold">
                  {f.category}
                </span>
              </div>
              <p className="text-xs text-ink-500 dark:text-[#A3A3A3] mt-0.5 italic">{f.subtitle}</p>
              <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-2"><strong>Sample:</strong> <code>{f.example}</code></p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="field-specifications" title="Detailed Field Specifications">
        <p className="mb-4">Explore operational purposes, port use cases, and configuration rules for every field type:</p>
        
        <div className="space-y-4">
          {surveyBuilderFields.map((f) => (
            <div
              key={`spec-${f.id}`}
              className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]"
            >
              {/* Perfectly aligned title & subtitle baseline */}
              <div className="flex items-baseline gap-2 pb-2.5 mb-3 border-b border-ink-900/10 dark:border-[#262626]">
                <h4 className="font-bold text-base text-ink-900 dark:text-[#FFFFFF] leading-none">{f.title}</h4>
                <span className="text-xs font-medium text-ink-500 dark:text-[#A3A3A3] leading-none">({f.subtitle})</span>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold">
                  {f.category}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Purpose &amp; Scope:</p>
                  <p className="text-ink-650 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">{f.purpose}</p>
                </div>

                <div>
                  <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Port Operations &amp; Use Cases:</p>
                  <p className="text-ink-650 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">{f.useCases}</p>
                </div>

                <div>
                  <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Configuration &amp; Validation Rules:</p>
                  <p className="text-ink-650 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">{f.rules}</p>
                </div>

                <div className="pt-1.5 flex items-center gap-1.5 text-ink-700 dark:text-[#E5E5E5]">
                  <span className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Sample Entry:</span>
                  <code className="px-2 py-0.5 rounded bg-ink-900/5 dark:bg-white/5 border border-ink-900/10 dark:border-white/10 font-mono text-[11px]">
                    {f.example}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="best-practices" title="Field Configuration Guidelines">
        <Callout type="tip">
          <strong>Pro-tip for Survey Builders:</strong> Always prefer constrained input types like <code>Yes/No Toggle</code>, <code>Dropdown</code>, or <code>Barcode/QR Scan</code> over open <code>Text</code> fields. All dates use <code>DD-MM-YYYY</code> format. Constrained inputs prevent typos, speed up mobile check-ins, and allow automatic report chart aggregation.
        </Callout>
      </Section>
    </DocPage>
  );
}
