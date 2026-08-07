import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "how-it-works", label: "How It Works" },
  { id: "layout", label: "Manual Layout Builder" },
  { id: "mapping", label: "Variable Mapping" },
  { id: "formatting", label: "Formatting Options" },
  { id: "export", label: "Export Behaviour" },
  { id: "rules", label: "Validation Rules" },
];

export default function CustomTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/custom"
      eyebrow="Report Builder"
      title="Custom Table"
      description="Manually structured cell layouts for complex cargo spreadsheets and client billing reports."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Custom Table</strong> element gives designers full manual control over the table structure — defining rows, merging cells, applying shading, and mixing static text with dynamic variable bindings in a single flexible grid.
        </p>
        <DocImage path="/reports/report-builder/tables/custom" />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Use Custom Tables when you need to construct layouts that don't fit the automatic row-per-record model of Flat Tables or the grouped aggregation model of Pivot Tables. Common use cases include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Client billing reports with custom row hierarchies and merged header cells.</li>
          <li>Cargo customs declarations with fixed-format columns required by port authorities.</li>
          <li>Mixed-content summaries combining contract metadata with checklist field data.</li>
          <li>Survey tally sheets with static category labels and dynamic quantity cells.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          Unlike Flat and Pivot Tables which auto-populate rows from survey data, the Custom Table starts as a blank grid. You define the table skeleton manually, then bind individual cells to survey fields, contract variables, or static text.
        </p>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>What It Does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grid Builder</td>
              <td>Define the number of rows and columns. Add, remove, and resize rows and columns freely.</td>
            </tr>
            <tr>
              <td>Cell Merge</td>
              <td>Select adjacent cells and merge them to create spanning header rows or category labels.</td>
            </tr>
            <tr>
              <td>Static Label</td>
              <td>Type fixed text directly into any cell (e.g. "Total Weight", "BL Reference").</td>
            </tr>
            <tr>
              <td>Variable Binding</td>
              <td>Bind a cell to a database variable tag so it auto-fills from survey or contract data at render time.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="layout" title="Manual Layout Builder">
        <p>
          The layout builder toolbar provides these cell-level controls:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Add Row Above / Below</strong> — Insert a new row relative to the selected row.</li>
          <li><strong>Add Column Left / Right</strong> — Insert a new column beside the selected column.</li>
          <li><strong>Merge Cells</strong> — Combine a selection of adjacent cells into a single wider cell.</li>
          <li><strong>Split Cell</strong> — Revert a previously merged cell back into individual cells.</li>
          <li><strong>Delete Row / Column</strong> — Remove the selected row or column from the grid.</li>
        </ul>
      </Section>

      <Section id="mapping" title="Variable Mapping">
        <p>
          Cells can be bound to any of the following variable categories via the cell properties panel:
        </p>
        <table>
          <thead>
            <tr>
              <th>Variable Category</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contract Metadata</td>
              <td>BL Number, Vessel Name, Port of Loading, Port of Discharge, Contract Date</td>
            </tr>
            <tr>
              <td>Surveyor Metadata</td>
              <td>Surveyor Name, Inspector ID, Submission Timestamp, GPS Coordinates</td>
            </tr>
            <tr>
              <td>Survey Field Data</td>
              <td>Any active checklist field tag defined in the linked survey template</td>
            </tr>
            <tr>
              <td>Calculated Values</td>
              <td>Sum of a repeating numeric field across all submissions (aggregated)</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="formatting" title="Formatting Options">
        <p>Available per-cell and per-row formatting properties:</p>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background Fill</td>
              <td>Apply solid colour shading to header rows or category labels for visual grouping.</td>
            </tr>
            <tr>
              <td>Border Weight</td>
              <td>Set border thickness (none, thin, medium, thick) per cell edge individually.</td>
            </tr>
            <tr>
              <td>Text Alignment</td>
              <td>Left, centre, or right align cell content horizontally. Top, middle, or bottom vertically.</td>
            </tr>
            <tr>
              <td>Font Style</td>
              <td>Bold, italic, or underline individual cell content independently of adjacent cells.</td>
            </tr>
            <tr>
              <td>Padding</td>
              <td>Set interior cell padding (in pt) for tighter or more spacious layouts.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="export" title="Export Behaviour">
        <p>
          Custom Tables enforce static pixel or percentage widths on report generation. This prevents column clipping or text truncation on printed paper, ensuring that manually defined column proportions are preserved exactly in the exported document.
        </p>
        <Callout type="note">
          Set column widths as percentages (e.g. 20%, 40%, 40%) rather than fixed pixels to ensure the table spans correctly across both A4 and Letter paper formats.
        </Callout>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="warning">
          All variable bindings must match the active database schema. If a mapped field is deleted from the linked survey template, the cell will display a warning tag and block template publishing until the binding is updated or removed.
        </Callout>
      </Section>
    </DocPage>
  );
}
