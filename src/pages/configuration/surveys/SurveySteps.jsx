import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "3-panel-architecture", label: "3-Panel Builder Integration" },
  { id: "step-creation", label: "Step Creation & Page Naming" },
  { id: "sequential-ordering", label: "Sequential Step Ordering & Navigation" },
  { id: "validations", label: "Step-Level Validation" },
  { id: "skip-rules", label: "Conditional Step Skip Rules" },
];

export default function SurveySteps() {
  return (
    <DocPage
      path="/configuration/surveys/survey-steps"
      eyebrow="Survey Builder"
      title="Survey Steps"
      description="How to divide long survey checklists into structured sequential steps, multi-page wizard workflows, and conditional skip logic routines."
      toc={toc}
      hideImage={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Survey Steps</strong> structure multi-question mobile inspection check-sheets into clean, sequential wizard pages. Splitting complex surveys (e.g. 50+ inspection items) into concise, single-topic step pages accelerates field completion speed, prevents input fatigue for field surveyors, and enforces logical workflow progression during vessel operations.
        </p>

        <DocImage path="/configuration/surveys/survey-steps" imageKey="overview" />
      </Section>

      <Section id="3-panel-architecture" title="3-Panel Builder Integration">
        <p>
          Survey Steps are created and organized within the central workspace of the 3-panel Survey Builder designer:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Left Palette (Available Fields)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Drag field tiles (Text, Dropdown, Photo, Signature, etc.) directly into the active step container in the center workspace.</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Center Workspace (Step Builder)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Displays step containers, step page titles, field order, drag-and-drop target slots, and step action controls (<code>+ Add Step</code> / <code>+ Add First Step</code>).</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">3. Right Inspector (Step / Field Props)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3]">Configure properties for the selected step or field, including labels, compulsory flags, validation rules, and visibility triggers.</p>
          </div>
        </div>
      </Section>

      <Section id="step-creation" title="Step Creation &amp; Page Naming">
        <p>
          To add a new step page in the Survey Builder:
        </p>

        <ol className="list-decimal pl-5 space-y-2 my-4 text-[13.5px]">
          <li>
            <strong>Add Step:</strong> Click the orange <code>+ Add Step</code> (or <code>+ Add First Step</code>) button on the center designer action bar.
          </li>
          <li>
            <strong>Assign Step Name:</strong> Give each step a clear, action-oriented title matching operational phases (e.g. <em>1. Berth Arrival &amp; Geotag</em>, <em>2. Hatch &amp; Hold Condition</em>, <em>3. Tally &amp; Cargo Inspection</em>, <em>4. Signatures &amp; Sign-off</em>).
          </li>
          <li>
            <strong>Add Optional Description:</strong> Provide helper guidance text displayed beneath the step title on the mobile screen to instruct surveyors on required tasks for that phase.
          </li>
          <li>
            <strong>Reorder Steps:</strong> Reorder step pages by dragging step headers left or right across the step bar in the center workspace.
          </li>
          <li>
            <strong>Delete / Duplicate:</strong> Use the step options header controls to duplicate step structures or delete empty step pages.
          </li>
        </ol>
      </Section>

      <Section id="sequential-ordering" title="Sequential Step Ordering &amp; Navigation">
        <p>
          Steps execute sequentially on the Mobile Surveyor App:
        </p>

        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>Step-by-Step Flow:</strong> Field surveyors complete questions step page by step page using the <code>Next Step</code> and <code>Previous</code> buttons.</li>
          <li><strong>Progress Indicator:</strong> A visual step counter (e.g., <em>Step 2 of 4</em>) and progress bar show the surveyor how far they have progressed through the checksheet.</li>
          <li><strong>Local State Preservation:</strong> Responses entered on earlier steps are saved locally in real-time, allowing surveyors to navigate backward and forward without losing entered data.</li>
        </ul>
      </Section>

      <Section id="validations" title="Step-Level Validation">
        <p>
          When a field surveyor taps <code>Next Step</code> in the mobile app, the system runs immediate client-side validation across all questions within that step:
        </p>

        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>Compulsory Fields:</strong> If any required field (e.g., compulsory photo, mandatory dropdown choice, or initial draft value) is unfulfilled, page transition is blocked.</li>
          <li><strong>Visual Error Alerts:</strong> Missing or invalid fields highlight with red border outlines and red error labels.</li>
          <li><strong>Auto-Scroll:</strong> The mobile viewport automatically scrolls to the first unfulfilled or invalid field on the step page.</li>
        </ul>
      </Section>

      <Section id="skip-rules" title="Conditional Step Skip Rules">
        <p>
          Configure conditional skip rules to dynamically bypass steps that do not apply to specific inspection scenarios:
        </p>

        <div className="my-4 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-3 text-xs">
          <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Common Skip Rule Examples:</p>
          <div className="p-2.5 rounded border border-amber-500/20 bg-amber-500/5 text-ink-800 dark:text-slate-200 font-mono">
            IF <code>Cargo_Type == Container</code> THEN SKIP <code>Step 3: Bulk Moisture Checks</code>
          </div>
          <div className="p-2.5 rounded border border-amber-500/20 bg-amber-500/5 text-ink-800 dark:text-slate-200 font-mono">
            IF <code>Damaged_Cargo_Observed == No</code> THEN SKIP <code>Step 4: Damage Matrix &amp; Defect Photos</code>
          </div>
        </div>

        <Callout type="tip">
          Keep individual step pages under 8 to 10 questions each to maintain fast mobile UI rendering and optimal field surveyor efficiency.
        </Callout>
      </Section>
    </DocPage>
  );
}

