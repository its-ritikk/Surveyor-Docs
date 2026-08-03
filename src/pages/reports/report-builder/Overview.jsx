import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Core Capabilities" },
  { id: "workflow", label: "Workflow Integration" },
  { id: "rules", label: "Validation Rules" },
];

export default function Overview() {
  return (
    <DocPage
      path="/reports/report-builder/overview"
      eyebrow="Report Builder"
      title="Report Builder Overview"
      description="The workspace interface for designing custom report blueprints in the Surveyor platform."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Report Builder workspace provides a drag-and-drop canvas layout for composing and structuring inspection summaries. Layout modifications compile and preview instantly in a right-hand preview panel.
        </p>
      </Section>

      <Section id="capabilities" title="Core Capabilities">
        <p>
          The designer acts as a templating engine. Layouts include customized metadata rows, structured checklists, tabular repeated entries, graphical signatures, and automated photo catalogs.
        </p>
      </Section>

      <Section id="workflow" title="Workflow Integration">
        <p>
          Once published, report designs are selectable when drafting inspection templates or contract dispatches. Revisions increment the blueprint version index without overwriting historical run logs.
        </p>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="note">
          Variables mapped in table columns must match field keys defined in the parent survey checklist. Mismatches will disable page publishing.
        </Callout>
      </Section>
    </DocPage>
  );
}
