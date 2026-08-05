import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "canvas-grid", label: "Canvas Layout & Grid" },
  { id: "drop-targets", label: "Drop Targets & Zones" },
  { id: "reordering", label: "Reordering & Alignment" },
  { id: "section-breaks", label: "Section Breaks & Multi-Step Tabs" },
  { id: "locked-fields", label: "Locked System Fields" },
];

export default function WorkflowCanvas() {
  return (
    <DocPage
      path="/configuration/surveys/workflow-canvas"
      eyebrow="Survey Builder"
      title="Workflow Canvas"
      description="Detailed technical guide to the interactive visual design canvas, drop targets, canvas grid alignment, and multi-step section breaks."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Workflow Canvas</strong> is the central design surface where administrators assemble survey steps and field questions. It provides real-time visual feedback, rendering fields exactly as they will appear on the Mobile Surveyor App.
        </p>
      </Section>

      <Section id="canvas-grid" title="Canvas Layout &amp; Grid">
        <p>
          The canvas utilizes a responsive grid layout supporting single-column mobile viewports and multi-column desktop preview modes. Fields can be stacked vertically or aligned side-by-side using 2-column or 3-column inline containers.
        </p>
      </Section>

      <Section id="drop-targets" title="Drop Targets &amp; Zones">
        <p>
          When a field tile is dragged from the Field Library palette, active <strong>Drop Zones</strong> highlight with a cyan dashed outline. Dropping a field places it precisely at the target position index.
        </p>
      </Section>

      <Section id="reordering" title="Reordering &amp; Alignment">
        <p>
          Fields can be reordered at any time by grabbing the 6-dot drag handle on the left of any field card. Reordering automatically recalculates display order indexes across all step pages.
        </p>
      </Section>

      <Section id="section-breaks" title="Section Breaks &amp; Multi-Step Tabs">
        <p>
          Dropping a <strong>Section Break</strong> element onto the canvas splits a long checklist into discrete multi-step wizard tabs (e.g. <em>Step 1: Check-In</em> → <em>Step 2: Cargo Inspection</em> → <em>Step 3: Sign-Off</em>).
        </p>
      </Section>

      <Section id="locked-fields" title="Locked System Fields">
        <p>
          Certain mandatory system fields (such as <code>Surveyor_GPS_CheckIn</code> and <code>Submission_Timestamp</code>) are automatically injected into the canvas header as locked elements to preserve audit integrity.
        </p>
        <Callout type="important">
          Locked system fields cannot be deleted or reordered below step section breaks.
        </Callout>
      </Section>
    </DocPage>
  );
}
