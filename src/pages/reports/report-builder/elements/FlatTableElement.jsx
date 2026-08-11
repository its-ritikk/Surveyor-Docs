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

export default function FlatTableElement() {
  return (
    <DocPage
hideImage={true}
            path="/reports/report-builder/elements/flat-table"
      eyebrow="Report Builder · Elements"
      title="Flat Table"
      description="The Flat Table element displays survey checklist entries in a simple chronological row-per-record, column-per-field grid — the most common table format for inspection data."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Flat Table</strong> element is the simplest and most frequently used table in the Report Builder. It renders one row per survey submission record and one column per selected survey field, producing a clean, scrollable data grid that captures every individual inspection entry in chronological order.
        </p>
        <DocImage path="/reports/report-builder/elements/flat-table" hideCaption={true} />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Flat Tables translate raw survey checklist submission records into a structured, readable tabular format within the PDF report. They provide the primary data evidence trail for inspections where every individual record matters — tally counts, container logs, and entry-by-entry cargo condition assessments.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A grain loading tally report needs to document every truck weigh-in over an 8-hour shift. The surveyor submits 142 checklist entries via the mobile app, each with Truck ID, Gross Weight, Tare Weight, Net Weight, and Time In. The Flat Table element auto-compiles all 142 records into a 5-column table. The report is generated once the shift ends, producing a complete, auditable weight tally.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>When every individual submission record needs to appear as its own row.</li>
          <li>For tally sheets, entry logs, and per-container inspection records.</li>
          <li>When data does not require grouping or mathematical aggregation.</li>
          <li>When the column set is fixed and the same fields apply to every record.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Flat Table reads all survey submission records linked to the active contract. Each column in the table maps to one survey field database tag. Each row represents one submission record. The table auto-sorts by submission timestamp unless overridden.
        </p>
        <table>
          <thead>
            <tr><th>Concept</th><th>Mapping</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Column</td><td>One survey field database tag</td><td><code>gross_weight_kg</code></td></tr>
            <tr><td>Row</td><td>One survey submission record</td><td>Truck weighin #47 at 14:32</td></tr>
            <tr><td>Cell</td><td>The value of that field in that submission</td><td>18,400 kg</td></tr>
            <tr><td>Header row</td><td>The configured display label for each column</td><td>"Gross Weight (kg)"</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Columns</td><td>List of survey field tags to display as columns, in the defined order.</td><td>—</td></tr>
            <tr><td>Column Header Labels</td><td>Custom display name for each column header (overrides the raw field key).</td><td>Field key name</td></tr>
            <tr><td>Column Widths</td><td>Percentage or fixed pixel width per column to control PDF layout.</td><td>Auto (equal distribution)</td></tr>
            <tr><td>Sort Field</td><td>Column to sort rows by. Ascending or descending.</td><td>Submission timestamp, ascending</td></tr>
            <tr><td>Row Banding</td><td>Alternate row shading (zebra stripes) for improved readability on long tables.</td><td>Off</td></tr>
            <tr><td>Show Row Numbers</td><td>Prepend a sequential row number column to the table.</td><td>Off</td></tr>
            <tr><td>Show Totals Row</td><td>Append a footer row showing the sum of numeric columns.</td><td>Off</td></tr>
            <tr><td>Max Rows</td><td>Limit the number of rows included in the report (most recent N records).</td><td>Unlimited</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Columns are added by selecting field tags from the tag picker in the properties panel.</li>
          <li>Drag column header chips in the properties panel to reorder columns without touching the layout.</li>
          <li>The live preview renders a sample 3-row table with placeholder values to simulate the column layout.</li>
          <li>Enabling Row Banding immediately updates the preview with alternating shading.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>columns</td><td>Array of {"{tag, label, width}"}</td><td>Ordered column definitions.</td></tr>
            <tr><td>sortField</td><td>String (tag key)</td><td>Field to sort rows by.</td></tr>
            <tr><td>sortDirection</td><td>Enum (asc/desc)</td><td>Ascending or descending sort.</td></tr>
            <tr><td>rowBanding</td><td>Boolean</td><td>Enable alternating row shading.</td></tr>
            <tr><td>showRowNumbers</td><td>Boolean</td><td>Prepend row number column.</td></tr>
            <tr><td>showTotalsRow</td><td>Boolean</td><td>Append sum row for numeric columns.</td></tr>
            <tr><td>maxRows</td><td>Number or null</td><td>Maximum records to render.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          All column field tags must reference active fields in the linked survey template. Deleted or renamed field tags display a broken-binding warning on the column chip and block template publishing.
        </Callout>
        <Callout type="note">
          Flat Tables do not support mathematical aggregation across rows. The Totals Row only performs a <strong>Sum</strong> of the raw numeric values. For weighted averages, grouped subtotals, or multi-level aggregation, use a <a href="/reports/report-builder/elements/pivot-table">Pivot Table</a> instead.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Truck tally sheets: Truck ID, Weigh-in Time, Gross Weight, Tare, Net Weight per entry.</li>
          <li>Container inspection logs: Container No., Seal No., Condition, Surveyor per entry.</li>
          <li>Hatch entry records: Hatch Number, Shift, Bags Loaded, Inspector per entry.</li>
          <li>Laboratory sample logs: Sample ID, Collection Time, Sample Type, Test Result per entry.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Using equal column widths for columns with very different data lengths (e.g. a 3-character Hatch No. column and a 40-character Remarks column) causes wasted space on narrow columns and truncated text on wide ones. Set column widths individually based on expected data length.
        </Callout>
        <Callout type="warning">
          Adding more than 10 columns to a Flat Table on A4 paper causes the PDF renderer to clip the rightmost columns silently. Always verify column count in the live preview before publishing.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Table appears empty in PDF</td><td>No survey submissions linked to the contract</td><td>Confirm that survey submissions exist and are linked to the active contract before generating the report.</td></tr>
            <tr><td>Column text truncated in PDF</td><td>Column width too narrow for the data</td><td>Increase the column width percentage or reduce the number of columns.</td></tr>
            <tr><td>Totals row showing 0</td><td>Column tag is a Text type, not a Number type</td><td>Totals only sum Number fields. Verify the field type in the Survey Builder.</td></tr>
            <tr><td>Rows out of order</td><td>Sort field is a text field, sorted alphabetically</td><td>Change the Sort Field to the submission timestamp or a numeric sequence field.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/pivot-table">Pivot Table</a> — For grouped summaries and numeric aggregation across dimensions.</li>
          <li><a href="/reports/report-builder/elements/custom-table">Custom Table</a> — For manually structured cell layouts not following the row-per-record pattern.</li>
          <li><a href="/reports/report-builder/elements/photo-grid">Photo Grid</a> — For the photographic evidence that accompanies Flat Table inspection records.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
