import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import { Link } from "react-router-dom";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview & 3-Panel Workspace" },
  { id: "drawer-tabs", label: "4 Property Inspector Tabs" },
  { id: "core-tab", label: "1. Core Settings Tab" },
  { id: "options-tab", label: "2. Options Management & API Data Sources" },
  { id: "validations-tab", label: "3. Custom & Text Validations" },
  { id: "rules-tab", label: "4. Logic Rules & Visibility Triggers" },
  { id: "action-bar", label: "Action Bar & Drawer Controls" },
  { id: "subtopics", label: "Explore Sub-Topic Guides" },
];

export default function FieldDropdownPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-dropdown"
      eyebrow="Survey Builder › Field Library"
      title="Dropdown Field Guide"
      description="Complete user guide for configuring Dropdown fields across the 4 Property Inspector tabs: Core, Options, Validations, and Rules."
      toc={toc}
      hideImage={true}
    >
      {/* ── OVERVIEW & 3-PANEL WORKSPACE ────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; 3-Panel Workspace">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Dropdown Field</strong> presents a single-choice picklist menu on the mobile survey form. It enforces standardized data collection for vessel berths, cargo commodity grades, defect classifications, and port locations, eliminating spelling inconsistencies and typos.
        </p>

        <div className="my-6 space-y-3">
          <DocImage
            path="/configuration/surveys/field-dropdown"
            imageKey="main-workspace"
            hideCaption={true}
          />
          <p className="text-xs text-ink-500 dark:text-[#A3A3A3] text-center italic">
            Survey Builder workspace showing Dropdown field placement on the central step card and Property Inspector on the right.
          </p>
        </div>

        <div className="my-6 grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
              Left Panel
            </span>
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Available Fields Palette</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Contains 18 draggable field tiles with 6-dot drag handles. Select or drag the <strong>Dropdown</strong> tile onto any active step container.</p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
              Center Panel
            </span>
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Survey Builder Canvas</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Displays Step cards (Step 1, Step 2) with placed field elements. Features drag-and-drop handles, settings gear icon, duplicate, and delete controls.</p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 shadow-sm">
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              Right Panel
            </span>
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Property Inspector</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Displays the 4 configuration tabs (<strong>Core</strong>, <strong>Options</strong>, <strong>Validations</strong>, <strong>Rules</strong>) for customizing the selected Dropdown field.</p>
          </div>
        </div>
      </Section>

      {/* ── 4 CONFIGURATION PANEL TABS ────────────────────────────────── */}
      <Section id="drawer-tabs" title="4 Property Inspector Tabs">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          Clicking a Dropdown field card in the central builder canvas opens the Right Property Inspector with 4 configuration tabs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">1</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Core Settings Tab</span>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Configures the primary Field Name label displayed above the dropdown menu on the survey step card and mobile app screen.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Options Management Tab</span>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Manages static option items, Unique Selection rules, and dynamic API Data Sources (Packing List, Contract, MDM System).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">3</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Validations Tab</span>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Enforces Custom Validations (Allowed Values, Disallowed Values, Expected Value) and Text Validations (Required *).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">4</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Rules Tab</span>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Sets up IF/THEN Visibility Rules and Auto-fill conditions that dynamically show, hide, or populate fields based on user selections.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 1. CORE SETTINGS TAB ──────────────────────────────────────── */}
      <Section id="core-tab" title="1. Core Settings Tab">
        <div className="space-y-4">
          <DocImage
            path="/configuration/surveys/field-dropdown"
            imageKey="core-drawer"
            hideCaption={true}
          />

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs">
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
              Core Tab Configuration Parameters
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-ink-700 dark:text-[#E5E5E5] leading-relaxed">
              <li>
                <strong>Field name *:</strong> Input box specifying the main label shown to surveyors (e.g. <code>Vessel Berth Number</code> or <code>Cargo Defect Classification</code>).
              </li>
              <li>
                <strong>Variable Tag Binding:</strong> Auto-generates a unique database tag (e.g., <code>{`{Survey_Berth_Number}`}</code>) used in Report Builder templates.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 2. OPTIONS MANAGEMENT & API DATA SOURCES ────────────────────── */}
      <Section id="options-tab" title="2. Options Management &amp; API Data Sources">
        <div className="space-y-4">
          <DocImage
            path="/configuration/surveys/field-dropdown"
            imageKey="options-drawer"
            hideCaption={true}
          />

          <div className="grid gap-3 sm:grid-cols-3 text-xs">
            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-1.5 shadow-sm">
              <p className="font-bold text-sm text-cyan-600 dark:text-cyan-400">Unique Selection</p>
              <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
                Prevents surveyors from picking the same option in subsequent repeated cards within the step (e.g. assigning unique hatch numbers).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-1.5 shadow-sm">
              <p className="font-bold text-sm text-cyan-600 dark:text-cyan-400">API Data Sources</p>
              <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
                Links dropdown options dynamically to external live data APIs: <code>Packing List</code>, <code>Contract</code>, or <code>MDM System</code>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-1.5 shadow-sm">
              <p className="font-bold text-sm text-cyan-600 dark:text-cyan-400">Manual Options</p>
              <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
                Add static menu options using <code>Enter option label</code> and <code>+ Add Option</code>. All options must have non-empty labels.
              </p>
            </div>
          </div>

          <Callout type="note" title="Option Label Validation Alert">
            If an empty option row is left in the list, the Property Inspector displays a red alert:
            <span className="block mt-1 font-semibold text-rose-600 dark:text-rose-400">
              "All options must have a label. Fill or remove empty options."
            </span>
          </Callout>
        </div>
      </Section>

      {/* ── 3. CUSTOM & TEXT VALIDATIONS ──────────────────────────────── */}
      <Section id="validations-tab" title="3. Custom &amp; Text Validations">
        <div className="space-y-4">
          <DocImage
            path="/configuration/surveys/field-dropdown"
            imageKey="validations-drawer"
            hideCaption={true}
          />

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-3">
              <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Custom Validations
              </p>
              <ul className="space-y-2 text-ink-700 dark:text-[#E5E5E5] leading-relaxed">
                <li className="p-2 rounded bg-ink-900/[0.02] dark:bg-white/[0.02] border border-ink-900/5 dark:border-white/5">
                  <strong>Allowed Values:</strong> Restricts selection strictly to chosen approved options (<code>Select allowed values</code>).
                </li>
                <li className="p-2 rounded bg-ink-900/[0.02] dark:bg-white/[0.02] border border-ink-900/5 dark:border-white/5">
                  <strong>Disallowed Values:</strong> Prohibits specific choices (e.g., disallowing "Pass" if defect condition exists).
                </li>
                <li className="p-2 rounded bg-ink-900/[0.02] dark:bg-white/[0.02] border border-ink-900/5 dark:border-white/5">
                  <strong>Expected Value:</strong> Validates against a specific target answer for compliance auditing.
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-3">
              <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Text Validations
              </p>
              <div className="p-3 rounded bg-emerald-500/5 border border-emerald-500/20 text-ink-700 dark:text-[#E5E5E5] space-y-1">
                <p className="font-semibold text-emerald-700 dark:text-emerald-400">Required * Checkbox</p>
                <p className="text-ink-650 dark:text-[#A3A3A3]">
                  Enforces mandatory choice selection before the field surveyor can tap <code>Next Step</code> or submit the survey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. LOGIC RULES & VISIBILITY TRIGGERS ────────────────────── */}
      <Section id="rules-tab" title="4. Logic Rules &amp; Visibility Triggers">
        <div className="space-y-4">
          <DocImage
            path="/configuration/surveys/field-dropdown"
            imageKey="rules-drawer"
            hideCaption={true}
          />

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
              <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Visibility Rules (+ Add Rule)</p>
              <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
                Determines when this dropdown field becomes visible on mobile devices based on answers to prior steps or fields:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-ink-700 dark:text-[#E5E5E5]">
                <li><strong>Source Field:</strong> Select the trigger question (<code>Select a field</code>).</li>
                <li><strong>Comparator:</strong> Choose comparison logic (<code>Equals</code>, <code>Not Equals</code>, <code>Contains</code>).</li>
                <li><strong>Expected Value:</strong> Enter value to match (<code>Enter value to compare</code>).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
              <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Auto-fill Rules (+ Add Rule)</p>
              <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
                Automatically populates this dropdown value when matching rule conditions are satisfied during field inspection execution.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ACTION BAR ────────────────────────────────────────────────── */}
      <Section id="action-bar" title="Action Bar &amp; Drawer Controls">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2 text-xs">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Drawer Action Controls:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-700 dark:text-[#E5E5E5]">
            <li><strong>Cancel Button:</strong> Discards uncommitted property drawer changes and closes the panel.</li>
            <li><strong>Save Changes Button (Orange):</strong> Saves all Core, Options, Validations, and Rules settings directly to the survey blueprint.</li>
          </ul>
        </div>
      </Section>

      {/* ── SUBTOPICS ────────────────────────────────────────────────── */}
      <Section id="subtopics" title="Explore Sub-Topic Guides">
        <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mb-3">
          Dive deeper into specific Dropdown field configuration modules:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <Link
            to="/configuration/surveys/field-dropdown/options-management"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Options Management
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Configure static option lists, unique selection, and API data sources.</p>
          </Link>

          <Link
            to="/configuration/surveys/field-dropdown/validation"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Dropdown Validations
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Set allowed/disallowed value lists, compulsory rules, and expected answers.</p>
          </Link>

          <Link
            to="/configuration/surveys/field-library"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Field Library
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Return to the complete catalog of 18 draggable survey field elements.</p>
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}

