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
  { id: "aggregations", label: "Aggregation Functions" },
  { id: "configuration", label: "Configuration Options" },
  { id: "designer-behavior", label: "Designer Behaviour" },
  { id: "properties", label: "Supported Properties" },
  { id: "validation", label: "Validation Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "best-practices", label: "Best Practices" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Elements" },
];

export default function PivotTableElement() {
  return (
    <DocPage
      path="/reports/report-builder/elements/pivot-table"
      eyebrow="Report Builder · Elements"
      title="Pivot Table"
      description="The Pivot Table element groups and aggregates repeated survey entries across two configurable dimensions — rows and columns — producing consolidated numeric summaries."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Pivot Table</strong> element summarises survey checklist records by collapsing many individual entries into a two-dimensional summary grid. Unlike the Flat Table (which lists every record), the Pivot Table groups records by two categorical dimensions and calculates an aggregated numeric result at each intersection cell — delivering high-level operational summaries in a compact format.
        </p>
        <DocImage path="/reports/report-builder/elements/pivot-table" />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Pivot Tables address the need for summary-level operational data in reports. Rather than requiring recipients to manually total or compare rows in a Flat Table, the Pivot Table pre-calculates grouped totals, counts, or averages and presents them in a cross-referenced grid that can be read at a glance.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A multi-day vessel loading operation spans 3 hatches and 2 shifts per day over 4 days. The operations manager needs a daily summary showing how many bags were loaded in each hatch during each shift. The Pivot Table is configured with <strong>Hatch Number</strong> as the row dimension, <strong>Shift Name</strong> as the column dimension, and <strong>Bags Loaded</strong> as the Sum value. The result is a compact 3×8 summary grid (3 hatches × 8 shift columns) with a grand total row at the bottom — replacing what would otherwise be 300+ rows in a Flat Table.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>When the report recipient needs a summary view rather than a complete record listing.</li>
          <li>When cargo data must be cross-referenced across two operational dimensions (e.g. Hatch × Shift, Port × Cargo Type).</li>
          <li>When totals, averages, or counts need to be calculated across groups without manual spreadsheet work.</li>
          <li>For management dashboards embedded in PDF inspection reports.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Pivot Table reads all survey submission records for the active contract, groups them by the configured Row and Column dimensions, and applies the aggregation function to the numeric value field at each group intersection.
        </p>
        <table>
          <thead>
            <tr><th>Axis</th><th>Role</th><th>Field Type</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Row Headers</td><td>Primary grouping dimension — appears as left-side row labels</td><td>Categorical (Dropdown, Text)</td><td>Hatch Number</td></tr>
            <tr><td>Column Headers</td><td>Secondary grouping dimension — appears as top column labels</td><td>Categorical (Dropdown, Text)</td><td>Shift Name</td></tr>
            <tr><td>Value Cell</td><td>Aggregated result at each row × column intersection</td><td>Numeric (Number)</td><td>Sum of Bags Loaded</td></tr>
            <tr><td>Grand Total Row</td><td>Auto-appended row summing all column values</td><td>Auto-calculated</td><td>Total bags across all hatches</td></tr>
            <tr><td>Grand Total Column</td><td>Auto-appended column summing all row values</td><td>Auto-calculated</td><td>Total bags per hatch across all shifts</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="aggregations" title="Aggregation Functions">
        <table>
          <thead>
            <tr><th>Function</th><th>Description</th><th>Required Field Type</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Sum</strong></td><td>Adds all numeric values within the group. Used for totals of weights, quantities, and counts.</td><td>Number</td></tr>
            <tr><td><strong>Count</strong></td><td>Counts the number of submission records in the group. Works on any field type.</td><td>Any</td></tr>
            <tr><td><strong>Average</strong></td><td>Computes the arithmetic mean of numeric values in the group.</td><td>Number</td></tr>
          </tbody>
        </table>
        <Callout type="warning">
          Sum and Average only work on <strong>Number</strong> type survey fields. Applying them to Text or Dropdown fields returns zero. Use <strong>Count</strong> for non-numeric groupings.
        </Callout>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Row Dimension Field</td><td>Categorical survey field whose unique values become the row labels.</td><td>—</td></tr>
            <tr><td>Column Dimension Field</td><td>Categorical survey field whose unique values become the column headers.</td><td>—</td></tr>
            <tr><td>Value Field</td><td>Numeric survey field that is aggregated at each row × column intersection.</td><td>—</td></tr>
            <tr><td>Aggregation Function</td><td>Sum, Count, or Average applied to the Value Field.</td><td>Sum</td></tr>
            <tr><td>Show Grand Total Row</td><td>Append a totals row at the bottom of the table.</td><td>On</td></tr>
            <tr><td>Show Grand Total Column</td><td>Append a totals column on the right side of the table.</td><td>On</td></tr>
            <tr><td>Sort Rows</td><td>Sort row labels alphabetically or by descending total value.</td><td>Alphabetical</td></tr>
            <tr><td>Sort Columns</td><td>Sort column labels alphabetically or by descending total value.</td><td>Alphabetical</td></tr>
            <tr><td>Include Filters</td><td>Restrict the source data to specific dropdown option values before grouping.</td><td>None</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>The Pivot Table configuration uses a drag-and-drop zone interface in the properties panel for Row, Column, and Value fields.</li>
          <li>The live preview shows a sample 3×3 pivot grid with placeholder values.</li>
          <li>Actual row and column count depends on the unique values in the configured dimension fields — the table expands dynamically at render time.</li>
          <li>Very wide pivot tables (many unique column values) auto-scale column widths to fit the PDF page width.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>rowDimensionField</td><td>String (tag key)</td><td>Categorical field for row grouping.</td></tr>
            <tr><td>columnDimensionField</td><td>String (tag key)</td><td>Categorical field for column grouping.</td></tr>
            <tr><td>valueField</td><td>String (tag key)</td><td>Numeric field to aggregate.</td></tr>
            <tr><td>aggregationFn</td><td>Enum (sum/count/average)</td><td>Aggregation function applied to value field.</td></tr>
            <tr><td>showGrandTotalRow</td><td>Boolean</td><td>Append a grand total row.</td></tr>
            <tr><td>showGrandTotalColumn</td><td>Boolean</td><td>Append a grand total column.</td></tr>
            <tr><td>rowSortOrder</td><td>Enum (alpha/value-desc)</td><td>Row label sort order.</td></tr>
            <tr><td>columnSortOrder</td><td>Enum (alpha/value-desc)</td><td>Column label sort order.</td></tr>
            <tr><td>includeFilters</td><td>Array of {"{field, values}"}</td><td>Pre-filter the dataset before grouping.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          The Row Dimension, Column Dimension, and Value Field must all be bound to active survey field tags. Broken bindings block template publishing.
        </Callout>
        <Callout type="note">
          If the Row or Column dimension field has only one unique value across all submissions, the Pivot Table renders as a single-row or single-column table. This is valid but may indicate that a Flat Table is more appropriate for that dataset.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Loading summary: Hatch × Shift → Total Bags Loaded.</li>
          <li>Weight distribution: Cargo Type × Vessel Hold → Sum of Gross Weight.</li>
          <li>Container count: Port of Origin × Condition Grade → Count of Containers.</li>
          <li>Shift productivity: Crew Team × Day → Average Containers Inspected.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Keep the number of unique column dimension values under 8 to ensure all columns fit on A4 width without overflow.</li>
          <li>Always enable the <strong>Grand Total Row</strong> on summary reports — clients typically expect a bottom-line total.</li>
          <li>Use <strong>Include Filters</strong> to exclude null or "N/A" entries from the source data before pivoting, preventing empty cells in the grid.</li>
          <li>Label the value field clearly in the table caption (e.g. "Sum of Bags Loaded (mt)") so the unit of measure is clear.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Selecting a free-text survey field (e.g. Remarks, Notes) as the Column Dimension field creates one column per unique text entry — potentially hundreds of columns. Only use Dropdown or fixed-option fields as dimension fields.
        </Callout>
        <Callout type="warning">
          Applying Sum aggregation to a Text field silently returns zero for all cells without displaying an error. Always confirm that the Value Field is a Number type in the Survey Builder before publishing.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>All value cells show 0</td><td>Value Field is a Text type, not Number</td><td>Verify the field type in Survey Builder and switch to a Number field.</td></tr>
            <tr><td>Too many columns overflowing PDF</td><td>Column dimension has many unique values</td><td>Apply Include Filters to restrict column values, or use a Flat Table instead.</td></tr>
            <tr><td>Missing rows or columns</td><td>Dimension field values not submitted in some records</td><td>Make the dimension field required in the survey template to ensure every submission has a value.</td></tr>
            <tr><td>Grand total row is blank</td><td>No numeric data to aggregate</td><td>Confirm submissions contain numeric values in the Value Field.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/flat-table">Flat Table</a> — For listing every individual record rather than grouped summaries.</li>
          <li><a href="/reports/report-builder/elements/custom-table">Custom Table</a> — For manually structured summary layouts that require cell merging and mixed static/dynamic content.</li>
          <li><a href="/reports/report-builder/elements/label-value">Label / Value</a> — For displaying a single pre-calculated total or statistic outside of a table grid.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
