import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "layout", label: "Manual Layout Builder" },
  { id: "mapping", label: "Variable Mapping" },
  { id: "formatting", label: "Formatting Options" },
  { id: "export", label: "Export Support" },
  { id: "rules", label: "Validation Rules" },
];

export default function CustomTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/custom"
      eyebrow="Report Builder"
      title="Custom Table Reference"
      description="Technical reference manual for the Custom Table report component in the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Custom Table component enables manual formatting of individual cells, rows, and columns, mixing contract metadata variables with checklist replies in a single layout grid.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Used to construct complex cargo spreadsheets, customs logs, and client billing reports that must adhere to strict visual layouts.
        </p>
      </Section>

      <Section id="layout" title="Manual Layout Builder">
        <p>
          Specify rows, adjust individual cell spans, add custom static labels, and merge cells to create headers or descriptions.
        </p>
      </Section>

      <Section id="mapping" title="Variable Mapping">
        <p>
          Cells can be bound to arbitrary database variables — including BL Number, Vessel Name, surveyor metadata, and checklist answers.
        </p>
      </Section>

      <Section id="formatting" title="Formatting Options">
        <p>
          Configure border weights, padding spaces, background fills (e.g. shaded headers), and text alignments inside the cell properties editor.
        </p>
      </Section>

      <Section id="export" title="Export Support">
        <p>
          Enforces static pixel or percentage widths on PDF generation, preventing column clipping or text truncation on printed paper.
        </p>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="note">
          Variables must match the active database schema. If a mapped field is deleted from the survey template, the cell will display a warning tag.
        </Callout>
      </Section>
    </DocPage>
  );
}
