import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "aggregations", label: "Supported Aggregations" },
  { id: "rows-cols", label: "Row & Column Config" },
  { id: "filters-sorting", label: "Filters & Sorting" },
  { id: "export", label: "Export Support" },
  { id: "rules", label: "Validation Rules" },
];

export default function PivotTable() {
  return (
    <DocPage
      path="/reports/report-builder/tables/pivot"
      eyebrow="Report Builder"
      title="Pivot Table Reference"
      description="Technical reference manual for the Pivot Table report component in the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Pivot Table component summarizes checklist records by grouping inputs along rows and columns, calculating consolidated totals and averages.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Used to calculate operational metrics across dynamic groups — such as total bags loaded per port, defect counts per surveyor, or average weights per hatch.
        </p>
      </Section>

      <Section id="aggregations" title="Supported Aggregations">
        <p>
          Value column calculations include Sum (adds numeric options), Count (logs the number of submissions), and Average (computes intermediate levels).
        </p>
      </Section>

      <Section id="rows-cols" title="Row & Column Config">
        <p>
          Define grouping hierarchies by dragging surveyor checklist headers (e.g. Shift Name, Hatch Number) into the Rows or Columns fields.
        </p>
      </Section>

      <Section id="filters-sorting" title="Filters & Sorting">
        <p>
          Exclude specific inputs from value results using search filters, and set sorting variables (alphabetical, high-to-low values) for grouping columns.
        </p>
      </Section>

      <Section id="export" title="Export Support">
        <p>
          Pivot layouts dynamically expand to fit the data grid. Export processes compile tables into standard PDF document page width sheets.
        </p>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="warning">
          Value calculations (Sum, Average) must be bound to numeric fields. Attempting arithmetic aggregations on text fields will return zero values.
        </Callout>
      </Section>
    </DocPage>
  );
}
