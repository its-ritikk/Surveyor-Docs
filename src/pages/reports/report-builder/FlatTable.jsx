import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "supported-data", label: "Supported Data" },
  { id: "config-options", label: "Configuration Options" },
  { id: "user-actions", label: "User Actions" },
  { id: "validations", label: "Validation Rules" },
  { id: "permissions", label: "User Permissions" },
  { id: "limitations", label: "Limitations" },
  { id: "related", label: "Related Features" },
  { id: "notes", label: "Important Notes" },
];

export default function FlatTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/flat"
      eyebrow="Report Builder"
      title="Flat Table Reference"
      description="Technical reference manual for the Flat Table report component in the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Flat Table component displays logged checklist entries in a traditional tabular layout. Each column maps to a survey question field, and each row logs a surveyor's submission record.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Used to list cargo entries chronologically (e.g. per container, hatch, or truck) where data aggregation (totals or averages) is not required.
        </p>
      </Section>

      <Section id="supported-data" title="Supported Data">
        <p>
          Supports mapping of all primary survey inputs: Text, Number, Dropdown, Checkbox, and Date entries.
        </p>
      </Section>

      <Section id="config-options" title="Configuration Options">
        <p>
          Configurable parameters in the properties panel include column width scales, header label text overrides, variable tags selection, and sort directions.
        </p>
      </Section>

      <Section id="user-actions" title="User Actions">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Add Column</strong> — Inserts a column and binds it to a survey field database tag.</li>
          <li><strong>Reorder Columns</strong> — Drag column header boxes to adjust the horizontal sorting.</li>
          <li><strong>Remove Column</strong> — Delete variables from the active layout grid.</li>
        </ul>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          Columns must be bound to active survey checklist variables. Mismatched database tags will cause compiling warnings and prevent template publication.
        </p>
      </Section>

      <Section id="permissions" title="User Permissions">
        <p>
          Configuring and editing Flat Tables requires the <strong>Administrator</strong> role. Viewers can read compiled table exports with normal surveyor access.
        </p>
      </Section>

      <Section id="limitations" title="Limitations">
        <Callout type="warning">
          Flat Tables do not support math aggregation (such as summing total weight). Limit column count to under 8 to fit PDF layouts.
        </Callout>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          Flat Tables reference <a href="/reports/report-builder/tables/pivot">Pivot Tables</a> and the <a href="/configuration/surveys">Survey Builder</a>.
        </p>
      </Section>

      <Section id="notes" title="Important Notes">
        <Callout type="note">
          Table values render read-only on the final PDF and reflect the exact coordinates and answers approved in the review panel.
        </Callout>
      </Section>
    </DocPage>
  );
}
