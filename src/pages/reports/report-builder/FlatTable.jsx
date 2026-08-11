import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "column-configuration", label: "Column Configuration" },
  { id: "calculated-columns", label: "Calculated Columns" },
  { id: "sorting-display", label: "Sorting & Display Options" },
  { id: "rules", label: "Validation Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Features" },
];

export default function FlatTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/flat"
      eyebrow="Report Builder"
      title="Flat Table"
      description="Displays logged checklist entries in a simple, chronological row-and-column layout."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Flat Table</strong> element displays survey checklist entries as a straightforward grid — one row per submission record, one column per selected survey field. It is the simplest and most common table type for exporting raw inspection data to PDF.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Use Flat Tables when you need to list cargo entries in sequence without any mathematical grouping or aggregation. Common use cases include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Listing containers inspected per shift chronologically.</li>
          <li>Logging hatch entries with condition remarks per row.</li>
          <li>Exporting truck tally records with driver, time, and quantity fields.</li>
          <li>Recording individual surveyor check-in timestamps per location.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          Each <strong>column</strong> in a Flat Table maps to a single survey field (e.g. Container Number, Gross Weight, Condition). Each <strong>row</strong> represents one submitted inspection record from the checklist. The table auto-populates from the active contract's survey data at report generation time.
        </p>
        <table>
          <thead>
            <tr>
              <th>Column</th>
              <th>Maps To</th>
              <th>Example Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Container No.</td>
              <td>Survey field tag <code>container_id</code></td>
              <td>MSCU1234567</td>
            </tr>
            <tr>
              <td>Gross Weight</td>
              <td>Survey field tag <code>gross_weight_kg</code></td>
              <td>18,400 kg</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>Survey field tag <code>cargo_condition</code></td>
              <td>Good</td>
            </tr>
            <tr>
              <td>Surveyor</td>
              <td>Auto-populated from user session</td>
              <td>J. Rahman</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="supported-data" title="Supported Data">
        <p>
          Flat Tables support mapping all primary survey input types:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Text</strong> — Free-text remarks or identifiers.</li>
          <li><strong>Number</strong> — Quantities, weights, and measurements.</li>
          <li><strong>Dropdown</strong> — Selected option labels from choice lists.</li>
          <li><strong>Checkbox</strong> — Boolean yes/no results rendered as ticks.</li>
          <li><strong>Date / Time</strong> — Timestamp fields formatted per locale settings.</li>
        </ul>
      </Section>

      <Section id="config-options" title="Configuration Options">
        <p>Open the element properties panel by clicking the Flat Table block in the designer. Available settings:</p>
        <table>
          <thead>
            <tr>
              <th>Setting</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Column Width Scale</td>
              <td>Set percentage or fixed pixel widths per column to prevent text truncation on PDF pages.</td>
            </tr>
            <tr>
              <td>Header Label Override</td>
              <td>Replace the default field name with a custom display label (e.g. "Wt (kg)" instead of "gross_weight_kg").</td>
            </tr>
            <tr>
              <td>Sort Direction</td>
              <td>Sort rows ascending or descending by any bound column at render time.</td>
            </tr>
            <tr>
              <td>Row Banding</td>
              <td>Toggle alternating row shading (zebra stripes) for improved readability on long tables.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="user-actions" title="User Actions">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Add Column</strong> — Insert a column and bind it to a survey field database tag from the tag picker.</li>
          <li><strong>Reorder Columns</strong> — Drag column header boxes left or right to adjust horizontal order.</li>
          <li><strong>Remove Column</strong> — Delete a column variable from the active layout grid via the trash icon.</li>
          <li><strong>Rename Header</strong> — Double-click any column header to set a custom display label.</li>
        </ul>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          Columns must be bound to active survey checklist variables. If a variable tag no longer exists in the linked survey template, the column displays a warning badge and blocks template publishing until resolved.
        </p>
        <Callout type="warning">
          Mismatched database tags will cause compilation warnings and prevent template publication. Always verify variable bindings after modifying the linked survey template.
        </Callout>
      </Section>

      <Section id="limitations" title="Limitations">
        <Callout type="note">
          Flat Tables do <strong>not</strong> support mathematical aggregation (summing totals, averages). Use a <a href="/reports/report-builder/tables/pivot">Pivot Table</a> for aggregated calculations. Keep column count under 8 to ensure all columns fit within standard PDF page widths without clipping.
        </Callout>
      </Section>

      <Section id="related" title="Related Features">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/tables/pivot">Pivot Table</a> — For grouped summaries and numeric aggregation.</li>
          <li><a href="/reports/report-builder/tables/custom">Custom Table</a> — For manually structured cell layouts.</li>
          <li><a href="/configuration/surveys">Survey Builder</a> — Where the field tags bound to table columns are defined.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
