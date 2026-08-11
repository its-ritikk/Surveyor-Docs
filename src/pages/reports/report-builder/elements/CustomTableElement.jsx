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
  { id: "layout-builder", label: "Layout Builder" },
  { id: "configuration", label: "Configuration Options" },
  { id: "designer-behavior", label: "Designer Behaviour" },
  { id: "properties", label: "Supported Properties" },
  { id: "validation", label: "Validation Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Elements" },
];

export default function CustomTableElement() {
  return (
    <DocPage
hideImage={true}
            path="/reports/report-builder/elements/custom-table"
      eyebrow="Report Builder · Elements"
      title="Custom Table"
      description="The Custom Table element provides a fully manual cell-by-cell layout builder, supporting merged headers, mixed static text, dynamic variable bindings, and per-cell formatting."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Custom Table</strong> element gives designers complete manual control over a table's structure. Unlike Flat and Pivot Tables which auto-populate from survey data, the Custom Table starts as a blank grid that you build yourself — defining rows, merging cells, applying shading, and binding individual cells to either static text or dynamic variable tags.
        </p>
        <DocImage path="/reports/report-builder/elements/custom-table" hideCaption={true} />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Custom Tables handle the complex layouts that fall outside the automated data patterns of Flat and Pivot Tables. They enable designers to create client-specific billing layouts, port authority declaration tables, and mixed-content summaries that require both fixed structure and dynamic values in the same grid.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A client requires a cargo customs declaration table with a legally mandated fixed format: merged header rows spanning the full width, alternating shaded sections for different cargo categories, mixed static labels with dynamic weight and quantity values, and fixed column widths specified by the port authority. Neither Flat nor Pivot Tables can produce this format. The Custom Table is built manually to match the exact declaration template, with cells bound to the relevant survey and contract data variables.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>When a table format is prescribed by a regulatory authority or client and does not follow the row-per-record pattern.</li>
          <li>When cell merging and spanning headers are required across multiple columns or rows.</li>
          <li>When a table mixes static label text with dynamic survey and contract variable values in the same grid.</li>
          <li>When per-cell formatting (border weights, background shading, font styles) needs to differ across individual cells.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Custom Table editor provides a visual grid builder. You define the table skeleton by specifying rows and columns, then configure each cell individually — choosing between a static text value or a dynamic variable binding.
        </p>
        <table>
          <thead>
            <tr><th>Cell Type</th><th>How It Works</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Static Label</td><td>Type fixed text directly into the cell — always renders the same text.</td><td>"Total Gross Weight"</td></tr>
            <tr><td>Variable Binding</td><td>Bind the cell to a database tag — resolves to the actual value at report generation time.</td><td><code>total_gross_weight_kg</code> → "42,300 kg"</td></tr>
            <tr><td>Merged Cell</td><td>Combine adjacent cells into a single spanning cell for header rows or category labels.</td><td>Header spanning all 4 columns</td></tr>
            <tr><td>Empty Cell</td><td>Leave a cell without content — renders as an empty box, useful for spacer rows.</td><td>—</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="layout-builder" title="Layout Builder">
        <p>
          The layout builder toolbar provides the following cell-level actions:
        </p>
        <table>
          <thead>
            <tr><th>Action</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Add Row Above / Below</td><td>Insert a new empty row relative to the currently selected row.</td></tr>
            <tr><td>Add Column Left / Right</td><td>Insert a new empty column beside the currently selected column.</td></tr>
            <tr><td>Merge Cells</td><td>Select 2 or more adjacent cells and merge them into one spanning cell.</td></tr>
            <tr><td>Split Cell</td><td>Revert a previously merged cell back into its individual component cells.</td></tr>
            <tr><td>Delete Row</td><td>Remove the selected row and all its cell content from the grid.</td></tr>
            <tr><td>Delete Column</td><td>Remove the selected column and all its cell content from the grid.</td></tr>
            <tr><td>Bind Variable</td><td>Open the tag picker for the selected cell to bind it to a survey or contract variable.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Per-Cell or Global</th></tr>
          </thead>
          <tbody>
            <tr><td>Column Widths</td><td>Set percentage or fixed widths per column for PDF layout control.</td><td>Per column</td></tr>
            <tr><td>Background Fill</td><td>Solid colour shading for header rows, category rows, or individual cells.</td><td>Per cell</td></tr>
            <tr><td>Border Weight</td><td>None, thin, medium, or thick border per cell edge (top, bottom, left, right).</td><td>Per cell edge</td></tr>
            <tr><td>Text Alignment</td><td>Left, centre, or right horizontally; top, middle, or bottom vertically.</td><td>Per cell</td></tr>
            <tr><td>Font Style</td><td>Bold, italic, or underline for cell content.</td><td>Per cell</td></tr>
            <tr><td>Font Size</td><td>Override the default font size (8pt–14pt) for individual cells.</td><td>Per cell</td></tr>
            <tr><td>Padding</td><td>Interior cell padding in points for tighter or more spacious layouts.</td><td>Per cell</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Click any cell in the grid to select it and open its properties in the right panel.</li>
          <li>Hold Shift and click multiple adjacent cells to select a range for merging.</li>
          <li>The designer toolbar switches to cell-editing mode when a Custom Table block is selected in the workspace.</li>
          <li>Variable tag chips in cells are highlighted in blue — click a chip to change the binding.</li>
          <li>The live preview shows resolved variable placeholders in all bound cells.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>grid</td><td>2D array of cell objects</td><td>The complete cell-by-cell table structure.</td></tr>
            <tr><td>cell.type</td><td>Enum (static/variable/merged/empty)</td><td>Cell content type.</td></tr>
            <tr><td>cell.content</td><td>String or tag key</td><td>Static text or variable tag key for the cell.</td></tr>
            <tr><td>cell.colspan</td><td>Number</td><td>Number of columns this cell spans (for merged cells).</td></tr>
            <tr><td>cell.rowspan</td><td>Number</td><td>Number of rows this cell spans (for merged cells).</td></tr>
            <tr><td>cell.style</td><td>Object</td><td>Per-cell styling (background, border, alignment, font, padding).</td></tr>
            <tr><td>columnWidths</td><td>Array of strings (% or px)</td><td>Width definition for each column.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          All variable bindings in Custom Table cells must reference active field tags. Stale bindings (pointing to deleted survey fields) display a warning badge on the affected cell and block template publishing.
        </Callout>
        <Callout type="note">
          Set column widths as <strong>percentages</strong> (e.g. 25%, 25%, 50%) rather than fixed pixel values to ensure the table renders correctly across both A4 and Letter paper formats without overflow.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Port authority cargo declaration tables with mandatory fixed formats and merged column headers.</li>
          <li>Client billing summaries combining static line-item labels with dynamic quantity and weight values.</li>
          <li>Phytosanitary certificate tables with multi-row spanning headers and category shading.</li>
          <li>Mixed cargo manifest tables with different formatting rules per cargo category section.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Merging cells that contain variable bindings deletes the bindings from all but the anchor cell. Always merge empty or static-text cells first, then add variable bindings to the merged cell.
        </Callout>
        <Callout type="warning">
          Setting column widths in fixed pixels instead of percentages causes the table to overflow or clip on different paper sizes. Always use percentage widths.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Cell content clipped in PDF</td><td>Column width too narrow for the content</td><td>Increase the column width percentage. Consider using a smaller font size for that column.</td></tr>
            <tr><td>Merged cell showing incorrect content</td><td>Variable binding lost during merge operation</td><td>Re-bind the variable tag to the merged cell by clicking it and using the tag picker.</td></tr>
            <tr><td>Table overflows page width</td><td>Column widths sum to more than 100%</td><td>Verify that all column width percentages add up to 100%. Adjust proportionally.</td></tr>
            <tr><td>Border styles inconsistent in PDF</td><td>Different border settings per cell were not applied consistently</td><td>Select all cells and apply border settings globally, then override individual cells as needed.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/flat-table">Flat Table</a> — For automatic row-per-record tables from survey data without manual layout.</li>
          <li><a href="/reports/report-builder/elements/pivot-table">Pivot Table</a> — For automatic grouped summaries without manual cell construction.</li>
          <li><a href="/reports/report-builder/elements/label-value">Label / Value</a> — For simpler key–value rows without the full grid builder overhead.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
