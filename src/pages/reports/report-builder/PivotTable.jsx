import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "grouping-aggregations", label: "Grouping & Aggregations" },
  { id: "supported-aggregations", label: "Supported Aggregations" },
  { id: "configuration", label: "Configuration" },
  { id: "rules", label: "Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Features" },
];

export default function PivotTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/pivot"
      eyebrow="Report Builder"
      title="Pivot Table"
      description="Groups and aggregates repeated survey entries across configurable row and column dimensions."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Pivot Table</strong> element summarises checklist records by grouping inputs across two dimensions — rows and columns — and calculating consolidated numeric totals, counts, or averages. Unlike the Flat Table (which lists every record), the Pivot Table collapses repeated entries into meaningful summary cells.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Use Pivot Tables when operational summaries need to cross-reference two or more grouping dimensions. Common use cases include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Total bags loaded <strong>per hatch</strong> broken down <strong>per shift</strong>.</li>
          <li>Average container weight <strong>per port</strong> across <strong>each surveyor</strong>.</li>
          <li>Defect count <strong>per cargo type</strong> grouped <strong>by inspection date</strong>.</li>
          <li>Running totals across multiple submission rounds for a single contract.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Pivot Table reads all survey submission records linked to the active contract and groups them by the fields you designate as <strong>Row Headers</strong> and <strong>Column Headers</strong>. The intersection cell displays the configured aggregation result for that group combination.
        </p>
        <table>
          <thead>
            <tr>
              <th>Axis</th>
              <th>Role</th>
              <th>Example Field</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row Headers</td>
              <td>The primary grouping dimension shown as left-side row labels.</td>
              <td>Hatch Number</td>
            </tr>
            <tr>
              <td>Column Headers</td>
              <td>The secondary grouping dimension shown as top column labels.</td>
              <td>Shift Name</td>
            </tr>
            <tr>
              <td>Value Cell</td>
              <td>The aggregated numeric result at each row × column intersection.</td>
              <td>Total Bags Loaded</td>
            </tr>
            <tr>
              <td>Grand Total Row</td>
              <td>Auto-appended row summing all column values.</td>
              <td>Sum across all hatches</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="aggregations" title="Supported Aggregations">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Field Type Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sum</strong></td>
              <td>Adds all numeric values within the group. Ideal for totalling weights, quantities, or counts.</td>
              <td>Number</td>
            </tr>
            <tr>
              <td><strong>Count</strong></td>
              <td>Counts the number of submission records matching the group — useful for frequency analysis.</td>
              <td>Any field type</td>
            </tr>
            <tr>
              <td><strong>Average</strong></td>
              <td>Computes the arithmetic mean of numeric values in the group.</td>
              <td>Number</td>
            </tr>
          </tbody>
        </table>
        <Callout type="warning">
          Sum and Average functions only work on <strong>Number</strong> type survey fields. Applying them to Text or Dropdown fields returns zero. Use <strong>Count</strong> for non-numeric groupings.
        </Callout>
      </Section>

      <Section id="rows-cols" title="Row & Column Config">
        <p>
          Define grouping hierarchies by dragging survey checklist field headers into the Rows or Columns configuration zones in the properties panel. Multiple fields can be stacked per axis to create multi-level hierarchies (e.g. Vessel → Hatch → Shift).
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Drag <strong>categorical fields</strong> (Dropdown, Text) into Row or Column zones.</li>
          <li>Drag <strong>numeric fields</strong> (Number) into the Value zone and select an aggregation function.</li>
          <li>Up to 3 nested grouping levels are supported per axis.</li>
        </ul>
      </Section>

      <Section id="filters-sorting" title="Filters & Sorting">
        <p>
          Narrow the dataset fed into the Pivot Table before grouping occurs:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Include/Exclude Filters</strong> — Select specific dropdown option values to include or exclude from the group calculation.</li>
          <li><strong>Sort Direction</strong> — Sort row or column labels alphabetically or by descending aggregated value.</li>
          <li><strong>Top N Filter</strong> — Show only the top N groups by value (e.g. top 5 hatches by total weight).</li>
        </ul>
      </Section>

      <Section id="export" title="Export Behaviour">
        <p>
          Pivot layouts dynamically expand to fit the data grid at report generation time. The PDF renderer wraps large pivot tables across multiple pages and repeats header rows at each page break for readability. Column widths auto-scale based on the widest cell value in each column.
        </p>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="warning">
          All Value fields must be bound to <strong>Number</strong> type survey fields. Attempting arithmetic aggregations on Text fields returns zero without a compile error — always verify field types in the Survey Builder before publishing.
        </Callout>
      </Section>
    </DocPage>
  );
}
