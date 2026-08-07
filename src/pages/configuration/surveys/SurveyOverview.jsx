import React from "react";
import DocPage, { Section } from "../../../components/DocPage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "business-purpose", label: "Business Purpose" },
  { id: "architecture", label: "Visual Drag & Drop Architecture" },
  { id: "survey-lifecycle", label: "Workflow & Lifecycle" },
  { id: "field-library", label: "Field Library Overview" },
  { id: "publishing", label: "Publishing" },
  { id: "template-relationship", label: "Relationship with Inspection Templates" },
  { id: "report-relationship", label: "Relationship with Report Builder" },
];

export default function SurveyOverview() {
  return (
    <DocPage
      path="/configuration/surveys/overview"
      eyebrow="Survey Builder"
      title="Survey Builder Overview"
      description="The central visual drag-and-drop designer for building mobile surveyor checklists, setting validation parameters, and binding database tags."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Survey Builder</strong> is the core interactive design surface of the Surveyor Management System. It allows system administrators and operational coordinators to visually construct mobile inspection checksheets using a no-code, drag-and-drop workflow.
        </p>
        <p className="mt-3">
          Checksheets created in the Survey Builder define the exact questions, field types, validation rules, photo requirements, and witness signature pads presented to field surveyors operating the Mobile Surveyor App at port terminals.
        </p>

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Visual Designer</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">No-code visual designer for stacking, reordering, and configuring distinct field types.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Validation Engine</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Enforces text format rules, range limits, compulsory fields, and location checks.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Offline Sync Blueprint</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Compiles checklist files pushed to mobile clients for 100% offline checklist execution.</p>
          </div>
        </div>
      </Section>

      <Section id="business-purpose" title="Business Purpose">
        <p>
          Maritime cargo operations require strict compliance with international shipping regulations, client Service Level Agreements (SLAs), and port authority guidelines. The Survey Builder exists to:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4 text-[14px]">
          <li><strong>Standardize Field Data Collection:</strong> Replace paper clipboards and unformatted notes with structured digital forms.</li>
          <li><strong>Eliminate Typographical Errors:</strong> Enforce predefined Dropdowns, Date pickers, and Format rules to eliminate spelling inconsistencies.</li>
          <li><strong>Secure Legal Sign-Offs:</strong> Embed mandatory touchscreen signature pads and location verification to prevent dispute claims.</li>
          <li><strong>Automate Downstream Reporting:</strong> Map survey field tags directly to Report Builder tables, eliminating manual report re-keying.</li>
        </ul>
      </Section>

      <Section id="architecture" title="Visual Drag &amp; Drop Architecture">
        <p>
          The Survey Builder UI is organized into a 3-column workspace:
        </p>
        <ol className="list-decimal pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Left Panel (Available Fields):</strong> Contains 18 draggable field type tiles categorized with filter chips (<em>All Fields</em>, <em>Basic Input</em>, <em>Media</em>, <em>Advanced</em>, <em>Special</em>). Includes a search bar (<code>Search available fields...</code>) and field tiles equipped with 6-dot drag handles (<em>Text</em>, <em>Text Area</em>, <em>Number</em>, <em>Calculated Field</em>, <em>Comparison Field</em>, <em>Dropdown</em>, <em>Multi Select</em>, <em>Radio</em>, etc.).</li>
          <li><strong>Center Workspace (Survey Builder):</strong> The visual step designer where steps are added via an orange <code>+ Add Step</code> / <code>+ Add First Step</code> button, and field tiles are dropped, reordered, and grouped.</li>
          <li><strong>Right Property Inspector (Field Configuration):</strong> Features <code>Configuration</code> and <code>Preview</code> tabs. Displays configurable properties for the selected field (label, placeholder, validations, format rules, visibility rules) and a live mobile preview.</li>
        </ol>
      </Section>

      <Section id="survey-lifecycle" title="Workflow &amp; Lifecycle">
        <p>
          Every survey follows a strict operational lifecycle:
        </p>
        <div className="p-4 my-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-800 dark:text-[#E5E5E5] space-y-1">
          <p>Draft Creation → Add Section Breaks → Drag &amp; Drop Fields → Configure Validations → Preview Mobile Simulator → Publish Locked Schema → Bind to Contract Dispatch → Mobile Execution → Quality Review</p>
        </div>
      </Section>

      <Section id="field-library" title="Field Library Overview">
        <p>
          The Survey Builder supports <strong>specialized field types</strong> tailored for maritime inspection tasks. Explore individual field type documentation pages in the left sidebar for deep property and validation specifications.
        </p>
      </Section>

      <Section id="publishing" title="Publishing">
        <p>
          Surveys exist in either <code>Draft</code> or <code>Published</code> states. Publishing locks active field schema definitions to maintain consistent data collection across ongoing port contracts.
        </p>
      </Section>

      <Section id="template-relationship" title="Relationship with Inspection Templates">
        <p>
          Surveys built in the Survey Builder act as atomic building blocks. Multiple individual surveys (e.g., <em>Initial Hatch Check</em> + <em>Discharge Tally</em> + <em>Final Inspection</em>) are grouped into a comprehensive <strong>Inspection Template</strong> for contract dispatching.
        </p>
      </Section>

      <Section id="report-relationship" title="Relationship with Report Builder">
        <p>
          Every field configured in the Survey Builder generates a unique database binding tag (e.g., <code>{`{Survey_Hatch1_Condition}`}</code>). These tags map seamlessly into the <a href="/reports/report-builder">Report Builder</a> to automatically populate client PDF certificates.
        </p>
      </Section>
    </DocPage>
  );
}
