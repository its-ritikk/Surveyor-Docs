import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "supported-elements", label: "Supported Elements" },
  { id: "configuration", label: "Element Configuration" },
  { id: "rules", label: "Rules & Limits" },
];

export default function ReportElements() {
  return (
    <DocPage
      path="/reports/report-builder/elements"
      eyebrow="Report Builder"
      title="Report Elements"
      description="The standard building blocks used to compose report layouts."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Report designs are composed by stacking modular content blocks vertically in the designer. Each block handles a distinct type of output — headers, text fields, tables, photo grids, and signatures — and can be independently configured and reordered.
        </p>
      </Section>

      <Section id="supported-elements" title="Supported Elements">
        <p>The following element types are available in the Report Builder workspace:</p>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Purpose</th>
              <th>Output Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Header</strong></td>
              <td>Renders the customer logo, dispatch reference, vessel, and port metadata at the top of the report.</td>
              <td>Static block</td>
            </tr>
            <tr>
              <td><strong>Label / Value</strong></td>
              <td>Formats individual survey answers or contract variables into clean two-column summary rows (label on left, value on right).</td>
              <td>Key–value pair</td>
            </tr>
            <tr>
              <td><strong>Text</strong></td>
              <td>A narrative text editor block supporting free text and variable mapping for dynamic statements or legal disclaimers.</td>
              <td>Paragraph</td>
            </tr>
            <tr>
              <td><strong>Table</strong></td>
              <td>Compiles repeated survey entries into Flat, Pivot, or Custom table layouts for tabular cargo data.</td>
              <td>Tabular rows</td>
            </tr>
            <tr>
              <td><strong>Photo Grid</strong></td>
              <td>Aggregates surveyor-uploaded inspection images into a structured grid with optional captions and GPS stamps.</td>
              <td>Image gallery</td>
            </tr>
            <tr>
              <td><strong>Signature</strong></td>
              <td>Places signature capture blocks showing graphic signatures, names, and verification timestamps for all signing parties.</td>
              <td>Signature block</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Element Configuration">
        <p>
          Clicking any element in the designer opens its properties panel on the right side. From there you can:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Map element variables to specific survey field database tags.</li>
          <li>Set label text, font weight, and alignment overrides.</li>
          <li>Define conditional visibility rules (e.g. show only if a field has a value).</li>
          <li>Control padding, border, and background shading per block.</li>
        </ul>
      </Section>

      <Section id="rules" title="Rules & Limits">
        <Callout type="warning">
          Each report template must contain at least one <strong>Header</strong> element and one <strong>Signature</strong> block before it can be published. Templates missing these elements will be blocked from dispatch.
        </Callout>
        <Callout type="note">
          Elements can be freely reordered by dragging their handle on the left of the element block. Changes auto-save to a draft state and require an explicit publish action to go live.
        </Callout>
      </Section>
    </DocPage>
  );
}
