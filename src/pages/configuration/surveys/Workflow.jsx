import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "grid-layout", label: "Layout & Grid" },
  { id: "drop-targets", label: "Drop Targets & Zones" },
  { id: "reordering", label: "Reordering & Alignment" },
  { id: "section-breaks", label: "Section Breaks & Multi-Step Tabs" },
  { id: "locked-fields", label: "Locked System Fields" },
];

export default function Workflow() {
  return (
    <DocPage
      path="/configuration/surveys/workflow-workspace"
      eyebrow="Survey Builder"
      title="Workflow"
      description="Detailed technical guide to the interactive visual design workspace, drop targets, grid alignment, and multi-step section breaks."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Workflow</strong> is the central design surface where administrators assemble survey steps and field questions. It provides real-time visual feedback, rendering fields exactly as they will appear on the Mobile Surveyor App.
        </p>
      </Section>

      <Section id="grid-layout" title="Layout &amp; Grid">
        <p>
          The designer utilizes a responsive grid layout supporting single-column mobile viewports and multi-column desktop preview modes. Fields can be stacked vertically or aligned side-by-side using 2-column or 3-column inline containers.
        </p>
      </Section>

      <Section id="drop-targets" title="Drop Targets &amp; Zones">
        <p>
          As you drag a field from the library palette, valid drop targets highlight in bright cyan. Drop target zones calculate insertion position dynamically, shifting existing fields downward to create a drop slot.
        </p>
      </Section>

      <Section id="reordering" title="Reordering &amp; Alignment">
        <p>
          Fields on the workspace can be reordered at any time using their drag handle. Alignments (left, center, right, full-width) are adjusted via the field property drawer.
        </p>
      </Section>

      <Section id="section-breaks" title="Section Breaks &amp; Multi-Step Tabs">
        <p>
          Dropping a <strong>Section Break</strong> element onto the workspace splits a long checklist into discrete multi-step wizard tabs (e.g. <em>Step 1: Check-In</em> &rarr; <em>Step 2: Cargo Inspection</em> &rarr; <em>Step 3: Sign-Off</em>).
        </p>
      </Section>

      <Section id="locked-fields" title="Locked System Fields">
        <p>
          Certain mandatory system fields (such as <code>Surveyor_GPS_CheckIn</code> and <code>Submission_Timestamp</code>) are automatically injected into the step header as locked elements to preserve audit integrity.
        </p>
        <Callout type="warning">
          Locked system fields cannot be deleted or reordered below step section breaks.
        </Callout>
      </Section>
    </DocPage>
  );
}
