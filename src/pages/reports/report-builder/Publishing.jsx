import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "live-preview", label: "Live Preview Panel" },
  { id: "publishing-layouts", label: "Publishing Layouts" },
  { id: "rules", label: "Rules" },
];

export default function Publishing() {
  return (
    <DocPage
      path="/reports/report-builder/publishing"
      eyebrow="Report Builder"
      title="Preview & Publishing"
      description="Validating and publishing finalized report templates for operation dispatches."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Finalize report layouts before making them selectable for active cargo contracts. Allows verifying variables and margin alignments.
        </p>
      </Section>

      <Section id="live-preview" title="Live Preview Panel">
        <p>
          The right-side preview simulates PDF print layouts. Developers can toggle sample contract data values to check word-wrapping and column widths.
        </p>
      </Section>

      <Section id="publishing-layouts" title="Publishing Layouts">
        <p>
          Publishing locks the template state. The layout gets associated with its survey or template, immediately updating new surveyor dispatches.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="warning">
          Once a template is published, you cannot directly modify its columns if it is active on existing contracts. Re-save as a new draft version instead.
        </Callout>
      </Section>
    </DocPage>
  );
}
