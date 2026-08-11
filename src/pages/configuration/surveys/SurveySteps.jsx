import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "step-creation", label: "Step Creation & Naming" },
  { id: "ordering", label: "Sequential Step Ordering" },
  { id: "validations", label: "Step-Level Validation" },
  { id: "skip-rules", label: "Step Skip Rules" },
];

export default function SurveySteps() {
  return (
    <DocPage
      path="/configuration/surveys/survey-steps"
      eyebrow="Survey Builder"
      title="Survey Steps"
      description="How to divide long survey checklists into structured sequential steps, wizard pages, and skip logic routines."
      toc={toc}
      hideImage={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Survey Steps</strong> structure long checklists into logical pages. Dividing a 50-question survey into 4 concise steps accelerates mobile completion speed and reduces surveyor cognitive fatigue.
        </p>

        <DocImage path="/configuration/surveys/survey-steps" imageKey="overview" />
      </Section>

      <Section id="step-creation" title="Step Creation &amp; Naming">
        <p>
          Add new steps by clicking <code>+ Add Step Page</code> on the designer toolbar. Assign clear, action-oriented step titles (e.g. <em>1. Berth Arrival &amp; Geotag</em>, <em>2. Hatch Integrity</em>, <em>3. Tally Log</em>, <em>4. Signatures</em>).
        </p>
      </Section>

      <Section id="ordering" title="Sequential Step Ordering">
        <p>
          Steps execute sequentially on mobile. Inspectors must satisfy all required fields on Step 1 before advancing to Step 2.
        </p>
      </Section>

      <Section id="validations" title="Step-Level Validation">
        <p>
          Tapping <code>Next Step</code> triggers immediate client-side validation for all fields within the current step, highlighting missing required entries with red alert outlines.
        </p>
      </Section>

      <Section id="skip-rules" title="Step Skip Rules">
        <p>
          Configure conditional skip rules to bypass non-applicable steps (e.g. IF <code>Cargo_Type = Container</code> THEN skip <code>Bulk Grain Moisture Step</code>).
        </p>
        <Callout type="tip">
          Keep step pages to under 10 questions each to ensure fast mobile UI rendering.
        </Callout>
      </Section>
    </DocPage>
  );
}
