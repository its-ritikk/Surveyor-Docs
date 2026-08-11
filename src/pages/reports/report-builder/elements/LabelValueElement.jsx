import React from "react";
import DocPage, { Section } from "../../../../components/DocPage";
import Callout from "../../../../components/Callout";
import DocImage from "../../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "business-scenario", label: "Business Scenario" },
  { id: "when-to-use", label: "When To Use" },
  { id: "how-it-works", label: "How It Works" },
  { id: "configuration", label: "Configuration Options" },
  { id: "designer-behavior", label: "Designer Behaviour" },
  { id: "properties", label: "Supported Properties" },
  { id: "validation", label: "Validation Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Elements" },
];

export default function LabelValueElement() {
  return (
    <DocPage
hideImage={true}
            path="/reports/report-builder/elements/label-value"
      eyebrow="Report Builder · Elements"
      title="Label / Value"
      description="The Label / Value element displays individual survey field answers or contract variables as clean two-column key–value summary rows."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Label / Value</strong> element is the most commonly used building block for displaying named data points in a report. It renders as a two-column row — the left column shows a fixed label (field name) and the right column shows the dynamically resolved value from survey data or contract metadata.
        </p>
        <DocImage path="/reports/report-builder/elements/label-value" hideCaption={true} />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Label / Value elements bridge the gap between raw survey data and human-readable report content. Rather than embedding data in table rows, this element presents individual data points in a scannable key–value format, ideal for summary sections, condition reports, and cargo identity blocks.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A pre-shipment inspection report needs to show the cargo's commodity type, gross weight, net weight, and condition grade immediately below the report header. The coordinator adds four Label / Value rows — each bound to the corresponding survey field — and the report auto-fills these values from the inspecting surveyor's submitted checklist data.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>When a specific survey answer or contract field needs to be called out individually, not inside a table.</li>
          <li>For summary sections listing cargo identity, vessel details, or surveyor credentials.</li>
          <li>When data points have variable text lengths that would cause formatting issues inside table cells.</li>
          <li>When only 1–10 named values need to be shown rather than a full repeating data set.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          Each Label / Value element instance represents a single row. The label text is static (typed by the designer) and the value is bound to a database variable tag. At report generation time, the variable resolves to the actual data from the contract or survey submission.
        </p>
        <table>
          <thead>
            <tr><th>Column</th><th>Source</th><th>Editable</th></tr>
          </thead>
          <tbody>
            <tr><td>Label (Left)</td><td>Static text typed by the designer</td><td>Yes — always manual text</td></tr>
            <tr><td>Value (Right)</td><td>Bound database variable tag</td><td>Tag selection only; value auto-resolves</td></tr>
          </tbody>
        </table>
        <p>
          Multiple Label / Value elements can be stacked vertically to create a complete summary block. Each instance is independently configured and can have a different label, variable binding, and styling.
        </p>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Label Text</td><td>The static display name shown in the left column (e.g. "Gross Weight", "Commodity", "Condition").</td><td>—</td></tr>
            <tr><td>Variable Tag</td><td>The database field key whose value populates the right column.</td><td>—</td></tr>
            <tr><td>Label Width</td><td>Percentage of the row width allocated to the label column (e.g. 35%).</td><td>40%</td></tr>
            <tr><td>Label Font Weight</td><td>Normal or Bold text weight for the label.</td><td>Bold</td></tr>
            <tr><td>Value Font Style</td><td>Normal, italic, or monospace for the value column.</td><td>Normal</td></tr>
            <tr><td>Divider Line</td><td>Show a faint horizontal border beneath the row to visually separate rows.</td><td>On</td></tr>
            <tr><td>Fallback Text</td><td>Text to display if the variable tag resolves to an empty value (e.g. "N/A" or "—").</td><td>—</td></tr>
            <tr><td>Conditional Visibility</td><td>Hide this row if the bound variable is empty.</td><td>Off</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Click any Label / Value block in the designer to open its properties panel.</li>
          <li>Drag the block handle to reorder the row within the layout.</li>
          <li>Use the <strong>Duplicate</strong> action to create a new row pre-filled with the same label width and styling — then only change the label text and variable tag.</li>
          <li>The live preview panel updates in real time when you change the variable binding or label text.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>labelText</td><td>String</td><td>Static display name for the left column.</td></tr>
            <tr><td>variableTag</td><td>String (DB key)</td><td>The survey or contract field tag to resolve.</td></tr>
            <tr><td>labelWidthPct</td><td>Number (0–100)</td><td>Percentage of row width for the label column.</td></tr>
            <tr><td>labelBold</td><td>Boolean</td><td>Whether label text renders bold.</td></tr>
            <tr><td>valueItalic</td><td>Boolean</td><td>Whether value text renders italic.</td></tr>
            <tr><td>showDivider</td><td>Boolean</td><td>Show a bottom border on this row.</td></tr>
            <tr><td>fallbackText</td><td>String</td><td>Text shown when the variable resolves to empty.</td></tr>
            <tr><td>hideIfEmpty</td><td>Boolean</td><td>Collapse this row if the variable is empty.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          The <strong>Variable Tag</strong> must reference an existing field key in the linked survey template or contract schema. If the tag is deleted from the survey after binding, the element displays a broken-binding warning and blocks template publishing until resolved.
        </Callout>
        <Callout type="note">
          The Label Text field is required. Publishing a Label / Value element with an empty label is blocked by a validation warning at publish time.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Cargo summary block: Commodity, Grade, Quantity, Gross Weight, Net Weight.</li>
          <li>Vessel identification section: Vessel Name, IMO Number, Flag State, Port of Loading.</li>
          <li>Surveyor credentials block: Inspector Name, Certification ID, Inspection Date, Location.</li>
          <li>Condition grade display: Overall Condition, Moisture Level, Contamination Status.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Binding two different Label / Value elements to the same variable tag is allowed but creates confusing duplicate data in the report. Use duplication only when the same value needs to appear in different sections.
        </Callout>
        <Callout type="warning">
          Setting Label Width above 60% causes very narrow value columns that truncate long data values in the PDF. Keep the label column at 35–45% for most use cases.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Value shows blank in PDF</td><td>Survey field was not answered in the submission</td><td>Set a Fallback Text in the properties panel, or enable Hide If Empty.</td></tr>
            <tr><td>Broken binding warning in designer</td><td>Survey field key was renamed or deleted</td><td>Open the element properties and rebind to the correct active field tag.</td></tr>
            <tr><td>Label column text wrapping unexpectedly</td><td>Label Width is too narrow for the text</td><td>Increase Label Width percentage or shorten the label text.</td></tr>
            <tr><td>Row not visible in report</td><td>Hide If Empty is on and field is blank</td><td>Disable Hide If Empty or ensure the survey submission contains a value for this field.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/header">Header</a> — For displaying contract identity at the top level rather than per-row.</li>
          <li><a href="/reports/report-builder/elements/rich-text">Text</a> — For narrative paragraphs interspersed between label-value blocks.</li>
          <li><a href="/reports/report-builder/elements/flat-table">Flat Table</a> — For displaying many repeating field values in a row-per-record format.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
