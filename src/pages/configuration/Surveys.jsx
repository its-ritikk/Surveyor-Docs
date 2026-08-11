import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import FieldTable from "../../components/FieldTable";
import DocImage from "../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "surveys-management", label: "Surveys List & Management" },
  { id: "create-survey-header", label: "Create Survey Header & Status" },
  { id: "details", label: "Survey Details Reference" },
  { id: "builder-layout", label: "3-Panel Builder Architecture" },
  { id: "field-types-catalog", label: "Available Field Types" },
  { id: "rules", label: "Conditional Logic Rules" },
  { id: "publishing", label: "Publishing & Version Control" },
];

export default function Surveys() {
  return (
    <DocPage
      path="/configuration/surveys"
      eyebrow="Configuration"
      title="Survey Builder Reference"
      description="Detailed configurations, field types reference, 3-panel builder layout, and operational rules for designing survey templates in the Surveyor Management System."
      toc={toc}
      hideImage={true}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Survey Builder</strong> is the central tool used to configure digital inspection check-sheets in the Surveyor Management System. The check-sheets, process types, cargo classifications, and field validation parameters defined here control the mobile surveyor app forms and downstream client report generation.
        </p>

        <DocImage path="/configuration/surveys" imageKey="overview" />
      </Section>

      <Section id="surveys-management" title="Surveys List &amp; Management">
        <p>
          The main <strong>Surveys</strong> console displays all active, draft, and published survey check-sheets across your port operations:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="text-xs font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider">Total Surveys</p>
            <p className="text-2xl font-bold text-ink-900 dark:text-[#FFFFFF] mt-1">59</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Published</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">59</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Draft</p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">0</p>
          </div>
        </div>

        <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-4 mb-2">Search &amp; Filtering Controls</h4>
        <ul className="list-disc pl-5 space-y-1.5 text-[13.5px]">
          <li><strong>Search Input:</strong> Real-time keyword filter across survey names and internal reference tags (e.g. <code>Search surveys...</code>).</li>
          <li><strong>Cargo Type Dropdown:</strong> Filter by commodity classification (<code>All Cargo Types</code>, <code>Container</code>, <code>Break-Bulk</code>, <code>Bulk</code>).</li>
          <li><strong>Status Filter:</strong> Toggle between <code>All Status</code>, <code>Published</code>, and <code>Draft</code> states.</li>
          <li><strong>Action Buttons:</strong> Click <strong>Apply Filters</strong> to execute search criteria, or <strong>Reset</strong> to clear filters.</li>
          <li><strong>Primary CTA:</strong> Click <strong>+ Create New Survey</strong> (orange button) to open the Survey Builder.</li>
        </ul>

        <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-5 mb-2">Surveys Table Schema</h4>
        <FieldTable
          rows={[
            { field: "SURVEY", required: true, desc: "Descriptive title of the checksheet (e.g., CONTAINER LOADING SUPERVISION, Destuffing Inspection Survey, MATE RECEIPTS DETAILS)." },
            { field: "TYPE", required: true, desc: "Process type badge: Export (purple) or Import (blue)." },
            { field: "CARGO TYPE", required: true, desc: "Target cargo commodity classification: Container, Break-Bulk, or Bulk." },
            { field: "STATUS", required: true, desc: "Publication state badge: Published (green) or Draft (amber)." },
            { field: "STEPS", required: true, desc: "Number of configured survey steps (e.g., 1 Steps, 2 Steps)." },
            { field: "VERSION", required: true, desc: "Major template revision tag (e.g., v1, v2, v8)." },
            { field: "REPORTS", required: true, desc: "Number of linked PDF report layouts bound to this survey." },
            { field: "ACTIONS", required: true, desc: "Action icons: PDF Report view, Preview survey, More options (...), and Navigate arrow (>)." },
          ]}
        />
      </Section>

      <Section id="create-survey-header" title="Create Survey Header &amp; Status">
        <p>
          When building or editing a survey, the top bar presents core workflow controls:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Back Navigation (&lt;):</strong> Returns to the main Surveys list console.</li>
          <li><strong>Title &amp; Status Badges:</strong> Displays survey name with <code>Draft</code> and version tag <code>v1.0</code> / <code>v2.0</code>.</li>
          <li><strong>Save Draft Button:</strong> Saves progress without publishing changes to active field dispatches.</li>
          <li><strong>Publish Button (Green):</strong> Locks schema, increments major version, and publishes for dispatching.</li>
        </ul>
      </Section>

      <Section id="details" title="Survey Details Reference">
        <p className="mb-3">Configured in the top header card of the builder:</p>
        <FieldTable
          rows={[
            { field: "Survey Name *", required: true, desc: "A descriptive title for the checksheet (e.g. Enter survey name)." },
            { field: "Process Type *", required: true, desc: "Flow direction: Export loading or Import discharge supervision." },
            { field: "Cargo Type *", required: true, desc: "Cargo commodity category: Container, Break-Bulk, or Bulk." },
          ]}
        />
      </Section>

      <Section id="builder-layout" title="3-Panel Builder Architecture">
        <p>
          The Survey Builder uses a responsive 3-panel visual workspace layout:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Available Fields (Left)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Contains 18 draggable field tiles with 6-dot handles. Includes a search input (<code>Search available fields...</code>) and filter category chips (<code>All Fields</code>, <code>Basic Input</code>, <code>Media</code>, <code>Advanced</code>, <code>Special</code>).</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Survey Builder (Center)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Visual step designer with settings icon and orange <code>+ Add Step</code> / <code>+ Add First Step</code> button. Defines survey sequence, steps, and dropped field questions.</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">3. Field Configuration (Right)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Property inspector with <code>Configuration</code> and <code>Preview</code> tabs. Displays field properties, format rules, visibility rules, and live mobile inspector preview.</p>
          </div>
        </div>
      </Section>

      <Section id="field-types-catalog" title="Available Field Types">
        <p className="mb-3">The left <strong>Available Fields</strong> palette includes specialized field tiles equipped with 6-dot drag handles:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Text:</strong> Single line text input for seal numbers, container codes, and short names.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Text Area:</strong> Multi-line text input for detailed damage remarks and narrative notes.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Number:</strong> Quantitative numeric input for weights, package counts, and temperatures.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Calculated Field:</strong> Creates a calculated value dynamically from number or calculated fields.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Comparison Field:</strong> Compares values from numeric fields (e.g. initial vs final draft).
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Dropdown:</strong> Single selection from predefined options.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Multi Select:</strong> Multiple selection from options.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Radio:</strong> Single selection from radio options.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Yes/No Toggle:</strong> Boolean toggle switch for fast pass/fail and compliance checks.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Date:</strong> Calendar date picker.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Time:</strong> 24-hour time picker for shift and hatch opening logs.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Date &amp; Time:</strong> Combined date and time picker for official timestamps.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Photo:</strong> Image capture or upload for photographic evidence.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Video:</strong> Video capture or upload for moving discharge operations.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>File Upload:</strong> General file upload for external PDF receipts and manifests.
          </li>
          <li className="p-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <strong>Barcode/QR Scan:</strong> Barcode or QR code scanner for camera scanning.
          </li>
        </ul>
      </Section>

      <Section id="rules" title="Conditional Logic Rules">
        <p>
          Configure visibility and flow logic:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Field Visibility:</strong> Show/hide questions based on previous dropdown selections (e.g. showing damage fields only if defect checkbox is ticked).</li>
          <li><strong>Required Triggers:</strong> Dynamically switch fields to mandatory based on coordinate matches or specific responses.</li>
        </ul>
      </Section>

      <Section id="publishing" title="Publishing &amp; Version Control">
        <p>
          Releasing new configurations:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Version Increment:</strong> Publishing increments the major version index (e.g. v1.0 &rarr; v2.0), immediately pushing updates to new surveyor dispatches.</li>
          <li><strong>Restore:</strong> Revert to historical versions at any time without data loss.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
