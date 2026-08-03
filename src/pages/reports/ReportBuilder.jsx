import React from "react";
import DocPage, { Section } from "../../components/DocPage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "header", label: "Header Element" },
  { id: "label-value", label: "Label / Value Element" },
  { id: "rich-text", label: "Rich Text Element" },
  { id: "signature", label: "Signature Element" },
  { id: "photo-grid", label: "Photo Grid Element" },
  { id: "tables", label: "Tables Section" },
  { id: "flat-table", label: "Flat Table" },
  { id: "pivot-table", label: "Pivot Table" },
  { id: "custom-table", label: "Custom Table" },
  { id: "branding", label: "Branding" },
  { id: "publishing", label: "Preview & Publishing" },
];

export default function ReportBuilder() {
  return (
    <DocPage
      path="/reports/report-builder"
      eyebrow="Reports"
      title="Report Builder Reference"
      description="The design surface to create report layouts, containing elements configurations and multi-table structures."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Report Builder workspace compiles surveyor responses and contract parameters into paginated PDF layouts, featuring a drag-and-drop canvas and a live print preview panel.
        </p>
      </Section>

      <Section id="header" title="Header Element">
        <p><strong>Purpose:</strong> Renders the document heading, including logos and shipping dispatches metadata.</p>
        <p className="mt-2"><strong>When to use:</strong> Mandatory at the very top of first-page templates.</p>
        <p className="mt-2"><strong>Designer Behavior:</strong> Statically locked at the top of the canvas, preventing dragging below other body sections.</p>
        <p className="mt-2"><strong>Available Configurations:</strong> Toggle fields visibility (BL Number, Vessel Name, Port), and choose left/right logo positioning.</p>
        <p className="mt-2"><strong>Implementation Notes:</strong> Automatically scales corporate logo uploads to fit standard print columns without clipping.</p>
      </Section>

      <Section id="label-value" title="Label / Value Element">
        <p><strong>Purpose:</strong> Formats cargo parameters into clean key-value summary rows.</p>
        <p className="mt-2"><strong>When to use:</strong> Displaying static contract details or single-input surveyor checklist answers.</p>
        <p className="mt-2"><strong>Designer Behavior:</strong> Compiles records into 2-column or 4-column grids with text truncation handling.</p>
        <p className="mt-2"><strong>Available Configurations:</strong> Columns layout grid density, label text overrides, and binding tags.</p>
        <p className="mt-2"><strong>Supported Interactions:</strong> Double-clicking cell values loads database tags mapping options in the properties editor panel.</p>
      </Section>

      <Section id="rich-text" title="Rich Text Element">
        <p><strong>Purpose:</strong> A narrative free-text block supporting markdown styling and dynamic variable interpolation.</p>
        <p className="mt-2"><strong>When to use:</strong> Adding cargo damage descriptions, terms, and custom clearances.</p>
        <p className="mt-2"><strong>Designer Behavior:</strong> Supports full rich text editing (bold, lists) directly on the designer canvas.</p>
        <p className="mt-2"><strong>Available Configurations:</strong> Font sizing, paragraph alignments, and bracket variable injection (e.g. <code>{`{Surveyor_Name}`}</code>).</p>
      </Section>

      <Section id="signature" title="Signature Element">
        <p><strong>Purpose:</strong> Displays surveyor and terminal supervisor witness touch-drawn signatures.</p>
        <p className="mt-2"><strong>When to use:</strong> Standard at the bottom of the final report page.</p>
        <p className="mt-2"><strong>Designer Behavior:</strong> Places a container showing graphic vector paths, signee name, title, and timestamp logs.</p>
        <p className="mt-2"><strong>Available Configurations:</strong> Single or dual signature columns, label designations, and borders toggles.</p>
      </Section>

      <Section id="photo-grid" title="Photo Grid Element">
        <p><strong>Purpose:</strong> Groups surveyor-uploaded checklist images into grid rows.</p>
        <p className="mt-2"><strong>When to use:</strong> Visual evidence logs (seals, defects, damage observations).</p>
        <p className="mt-2"><strong>Designer Behavior:</strong> Places placeholder photo grid blocks that dynamically scale columns based on active entries.</p>
        <p className="mt-2"><strong>Available Configurations:</strong> Target columns density (2, 3, or 4 columns wide), and photo caption metadata tags.</p>
      </Section>

      <Section id="tables" title="Tables Section">
        <p>
          Tables compile multi-entry data (such as shifting times, container checks, or hatch loading registers) into a structured grid format:
        </p>
        <div className="overflow-x-auto my-6 border border-ink-900/10 dark:border-white/10 rounded-lg">
          <table className="min-w-full divide-y divide-ink-900/10 dark:divide-white/10 text-[12.5px] leading-6">
            <thead className="bg-ink-900/[0.02] dark:bg-white/[0.02]">
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <th className="px-4 py-2 text-left font-bold">Feature</th>
                <th className="px-4 py-2 text-left font-bold">Flat Table</th>
                <th className="px-4 py-2 text-left font-bold">Pivot Table</th>
                <th className="px-4 py-2 text-left font-bold">Custom Table</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10 dark:divide-white/10">
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <td className="px-4 py-2 font-semibold">Purpose</td>
                <td className="px-4 py-2">Lists logs chronologically.</td>
                <td className="px-4 py-2">Groups and aggregates data.</td>
                <td className="px-4 py-2">Specialized custom cell designs.</td>
              </tr>
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <td className="px-4 py-2 font-semibold">Best For</td>
                <td className="px-4 py-2">Itemized cargo listings.</td>
                <td className="px-4 py-2">Tonnages or averages metrics.</td>
                <td className="px-4 py-2">Mixed metadata summaries.</td>
              </tr>
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <td className="px-4 py-2 font-semibold">Layout</td>
                <td className="px-4 py-2">Automatic rows generation.</td>
                <td className="px-4 py-2">Dynamic summary matrix.</td>
                <td className="px-4 py-2">Fixed manual rows.</td>
              </tr>
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <td className="px-4 py-2 font-semibold">Grouping</td>
                <td className="px-4 py-2">None.</td>
                <td className="px-4 py-2">Rows/Columns configurations.</td>
                <td className="px-4 py-2">Manual coordinate mappings.</td>
              </tr>
              <tr className="divide-x divide-ink-900/10 dark:divide-white/10">
                <td className="px-4 py-2 font-semibold">Configuration</td>
                <td className="px-4 py-2">Columns mapping panel.</td>
                <td className="px-4 py-2">Aggregations setup screen.</td>
                <td className="px-4 py-2">Cell-by-cell property editor.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="flat-table" title="Flat Table">
        <p><strong>Overview:</strong> Renders rows matching logged survey answers, maintaining structured chronological orders.</p>
        <p className="mt-2"><strong>Purpose:</strong> Ideal for detailed checklists (e.g. <em>Tug Boat Inspections</em> or <em>Hatch Checks</em>) where aggregates are not required.</p>
        <p className="mt-2"><strong>Supported Data:</strong> Captures String, Decimal, Checkbox, and Timestamp answers.</p>
        <p className="mt-2"><strong>Configuration:</strong> Add columns and map database variables in the properties panel.</p>
        <p className="mt-2"><strong>Sorting & Filtering:</strong> Configure column sorts (e.g. sorting by timestamp ascending) and add filters to hide null variables.</p>
        <div className="my-4 text-[13.5px] bg-ink-900/[0.015] dark:bg-white/[0.015] p-4 rounded-lg border border-ink-900/10 dark:border-white/10">
          <p className="font-semibold">Example Workflow & Best Practices:</p>
          <ol className="list-decimal pl-5 space-y-1.5 mt-2">
            <li>Insert a Flat Table block and configure 4 columns.</li>
            <li>Map columns to: Hatch Number, Seal Number, Condition, Timestamp.</li>
            <li>Limit columns counts to under 8 to fit standard paper prints correctly.</li>
          </ol>
        </div>
      </Section>

      <Section id="pivot-table" title="Pivot Table">
        <p><strong>Overview:</strong> Groups data matrices and runs value computations.</p>
        <p className="mt-2"><strong>Purpose:</strong> Calculates sum weights or total safety defects across surveyors or shifts.</p>
        <p className="mt-2"><strong>Row & Column Groups:</strong> Drag survey fields to create nested rows (e.g. grouping by Shift &rarr; Hatch Number).</p>
        <p className="mt-2"><strong>Aggregations & Calculations:</strong> Set value columns to Sum (weights, bags count) or Average (temperature, moisture content).</p>
        <div className="my-4 text-[13.5px] bg-ink-900/[0.015] dark:bg-white/[0.015] p-4 rounded-lg border border-ink-900/10 dark:border-white/10">
          <p className="font-semibold">Example Workflow & Best Practices:</p>
          <ol className="list-decimal pl-5 space-y-1.5 mt-2">
            <li>Add a Pivot Table, drag Hatch Number to Rows, and Shift to Columns.</li>
            <li>Set Values field to Gross Weight, and select the Sum aggregator.</li>
            <li>Ensure target calculation columns only contain numeric input variables.</li>
          </ol>
        </div>
      </Section>

      <Section id="custom-table" title="Custom Table">
        <p><strong>Overview:</strong> A manual grid editor giving design control over cell layout configurations.</p>
        <p className="mt-2"><strong>Purpose:</strong> Custom checklists containing custom text labels, merged blocks, and contract parameters.</p>
        <p className="mt-2"><strong>Manual Layout:</strong> Define fixed columns and rows, and merge cells using coordinate spans.</p>
        <p className="mt-2"><strong>Dynamic Variables:</strong> Cells can mix static titles (e.g. <code>"BL Number:"</code>) and dynamic tags (e.g. <code>{`{Contract_BL_Number}`}</code>).</p>
        <div className="my-4 text-[13.5px] bg-ink-900/[0.015] dark:bg-white/[0.015] p-4 rounded-lg border border-ink-900/10 dark:border-white/10">
          <p className="font-semibold">Example Workflow & Best Practices:</p>
          <ol className="list-decimal pl-5 space-y-1.5 mt-2">
            <li>Create a Custom Table grid of 2 rows by 4 columns.</li>
            <li>Merge row 1 to display the title, and configure row 2 to bind metadata variables.</li>
            <li>Define column widths in percentages rather than fixed pixels to ensure scaling.</li>
          </ol>
        </div>
      </Section>

      <Section id="branding" title="Branding">
        <p>
          Branding configurations are set globally for the template using the layout panel:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Organization Logo</strong> — Upload a custom logo (PNG/JPG) which automatically replaces the default header.</li>
          <li><strong>Company Identifiers</strong> — Enter custom address lines, tax registries, contact phone numbers, and taglines.</li>
        </ul>
      </Section>

      <Section id="publishing" title="Preview & Publishing">
        <p>
          Verify the document layout prior to locking it into production:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Live Preview Pane</strong> — Simulates final PDF layout sizes, page boundaries, and field wraps.</li>
          <li><strong>Publish Template</strong> — Locks template revisions, making the layout ready for operational contract dispatches.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
