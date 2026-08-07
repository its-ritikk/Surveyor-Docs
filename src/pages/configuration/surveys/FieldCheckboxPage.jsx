import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import { Link } from "react-router-dom";

const toc = [
  { id: "overview", label: "Overview & 3-Panel Workspace" },
  { id: "drawer-tabs", label: "4 Configuration Panel Tabs" },
  { id: "core-tab", label: "1. Core Settings Tab" },
  { id: "options-tab", label: "2. Options Management & API Data Sources" },
  { id: "validations-tab", label: "3. Custom & Text Validations" },
  { id: "rules-tab", label: "4. Logic Rules (Visibility & Auto-Fill)" },
  { id: "action-bar", label: "Action Bar (Cancel & Save Changes)" },
];

export default function FieldCheckboxPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-multiselect"
      eyebrow="Survey Builder › Field Library"
      title="Multi Select Field Guide"
      description="Functional documentation for configuring Multi Select fields across the 4 Property Inspector tabs: Core, Options, Validations, and Rules."
      toc={toc}
    >
      {/* ── OVERVIEW & 3-PANEL WORKSPACE ────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; 3-Panel Workspace">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Multi Select Field</strong> presents a multi-choice checklist menu on the survey form, allowing field surveyors to select multiple items simultaneously.
          When building a survey, the 3-panel workspace displays:
        </p>

        <ul className="mt-3 space-y-2 text-xs text-ink-700 dark:text-[#E5E5E5] list-disc pl-5">
          <li><strong>Left Panel (Available Fields):</strong> Contains 18 draggable field element tiles (Number, Calculated Field, Comparison Field, Dropdown, Multi Select, Radio, etc.).</li>
          <li><strong>Center Panel (Survey Builder):</strong> Displays Step cards (Step 1, Step 2) with placed field elements equipped with drag handle (::), settings gear, copy, and delete controls.</li>
          <li><strong>Right Panel (Field Configuration):</strong> Displays the 4 Property Inspector configuration tabs (Core, Options, Validations, Rules) for the selected survey field.</li>
        </ul>
      </Section>

      {/* ── 4 CONFIGURATION PANEL TABS ────────────────────────────────── */}
      <Section id="drawer-tabs" title="4 Configuration Panel Tabs">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          Selecting a Multi Select card on the Survey Builder activates the right panel with 4 drawer tabs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-mono">Tab 1</span>
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-1.5">Core</h4>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Configures the Field Name displayed above the multi-select input on the step survey and mobile app.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-mono">Tab 2</span>
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-1.5">Options</h4>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Manages Unique Selection, API Data Source links (Packing List, Contract, MDM), and static option choices.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-mono">Tab 3</span>
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-1.5">Validations</h4>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Enforces Custom Validations (Allowed Values, Disallowed Values, Expected Value) and Text Validations (Required *).</p>
          </div>

          <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-mono">Tab 4</span>
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mt-1.5">Rules</h4>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Defines IF/THEN Visibility Rules and Auto-fill conditions triggered by surveyor responses.</p>
          </div>
        </div>
      </Section>

      {/* ── 1. CORE SETTINGS TAB ──────────────────────────────────────── */}
      <Section id="core-tab" title="1. Core Settings Tab">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Core Settings Parameters:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-700 dark:text-[#E5E5E5]">
            <li><strong>Field name *:</strong> Input box specifying the header label displayed on the survey card and mobile inspection form (e.g. <code>Multi Select</code> or <code>Observed Defect Tags</code>).</li>
          </ul>
        </div>
      </Section>

      {/* ── 2. OPTIONS MANAGEMENT & API DATA SOURCES ────────────────────── */}
      <Section id="options-tab" title="2. Options Management &amp; API Data Sources">
        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Unique Selection Checkbox</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">
              <strong>Unique selection:</strong> Checkbox with label <em>"Ensure options selected in one entry (card) cannot be selected in subsequent entries of this step."</em>
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">API Data Source Section</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1 mb-2">
              <em>"Link this field to data extracted from the Packing List, Contract, or MDM system. Options will be dynamically populated at survey execution time."</em>
            </p>
            <p className="text-ink-700 dark:text-[#E5E5E5]">
              <strong>Data Source Selector:</strong> Dropdown picklist containing Packing List, Contract, or MDM System API integration channels.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Options List &amp; Validation Message</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">
              Add custom menu choices via the <strong>Enter option label</strong> input row and <strong>+ Add Option</strong> button.
              <br />
              <span className="text-rose-600 dark:text-rose-400 font-semibold mt-1 inline-block">
                Validation Warning: "All options must have a label. Fill or remove empty options."
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── 3. CUSTOM & TEXT VALIDATIONS ──────────────────────────────── */}
      <Section id="validations-tab" title="3. Custom &amp; Text Validations">
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-2">CUSTOM VALIDATIONS</p>
            <ul className="space-y-2 text-ink-700 dark:text-[#E5E5E5]">
              <li>
                <strong>Allowed Values (Checkbox):</strong> "Only selected values are allowed" &rarr; Input: <code>Select allowed values</code>.
              </li>
              <li>
                <strong>Disallowed Values (Checkbox):</strong> "Selected values are not allowed" &rarr; Input: <code>Select disallowed values</code>.
              </li>
              <li>
                <strong>Expected Value (Checkbox):</strong> "Value must match the expected answer" &rarr; Input: <code>Select expected value</code>.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-2">TEXT VALIDATIONS</p>
            <p className="text-ink-700 dark:text-[#E5E5E5]">
              <strong>Required * (Checkbox):</strong> "Field must have a value" &rarr; Mandates non-empty selection array before step submission.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 4. LOGIC RULES (VISIBILITY & AUTO-FILL) ────────────────────── */}
      <Section id="rules-tab" title="4. Logic Rules (Visibility &amp; Auto-Fill)">
        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Visibility Rules (+ Add Rule)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1 mb-2">
              <em>"This field stays visible when all enabled rules match values from the above steps or this step."</em>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-ink-700 dark:text-[#E5E5E5]">
              <li><strong>Source field:</strong> Selector (<code>Select a field</code>).</li>
              <li><strong>Comparator:</strong> Logic comparator (<code>Equals</code>, <code>Not Equals</code>, <code>Contains</code>).</li>
              <li><strong>Expected value:</strong> Input box (<code>Enter value to compare</code>).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Auto-fill Rules (+ Add Rule)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">
              <em>"Auto-fill this field when the first matching rule condition is satisfied."</em> Displays <strong>+ Add Rule</strong> button.
            </p>
          </div>
        </div>
      </Section>

      {/* ── ACTION BAR ────────────────────────────────────────────────── */}
      <Section id="action-bar" title="Action Bar (Cancel &amp; Save Changes)">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Drawer Action Controls:</p>
          <ul className="list-disc pl-5 space-y-1 text-ink-700 dark:text-[#E5E5E5]">
            <li><strong>Cancel Button:</strong> Discards uncommitted drawer edits and closes the Configuration panel.</li>
            <li><strong>Save Changes Button (Orange):</strong> Commits and applies all configured Core, Options, Validations, and Rules settings directly to the survey field element.</li>
          </ul>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
          <span>Explore sub-topics:</span>
          <Link to="/configuration/surveys/field-multiselect/options-management" className="font-bold underline hover:text-cyan-700 dark:hover:text-cyan-300">
            Options Management &rarr;
          </Link>
          <span>|</span>
          <Link to="/configuration/surveys/field-multiselect/validation" className="font-bold underline hover:text-cyan-700 dark:hover:text-cyan-300">
            Multi Select Validations &rarr;
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}
