import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import FieldTable from "../../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "property-inspector", label: "Property Inspector Panel" },
  { id: "core-properties", label: "Core Properties Reference" },
];

export default function FieldConfigurationPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-configuration"
      eyebrow="Survey Builder"
      title="Field Configuration"
      description="Complete reference manual for configuring field properties, labels, help text, default values, and display orders."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          Selecting any field in the workspace loads its settings inside the <strong>Right Property Inspector Panel</strong>. Field configurations define display text, input constraints, and database bindings.
        </p>
      </Section>

      <Section id="property-inspector" title="Property Inspector Panel">
        <p>
          Changes made in the Property Inspector reflect immediately in the center workspace. Properties are saved into the survey draft file upon tapping Save Draft.
        </p>
      </Section>

      <Section id="core-properties" title="Core Properties Reference">
        <FieldTable
          rows={[
            { field: "Label", required: true, desc: "Field title text rendered above input box." },
            { field: "Placeholder", required: false, desc: "Hint text inside empty input box." },
            { field: "Required", required: true, desc: "Enforces non-empty input before step submission." },
            { field: "Help Text", required: false, desc: "Sub-label guidance note for inspectors." },
            { field: "Default Value", required: false, desc: "Initial pre-filled value." },
            { field: "Read Only", required: false, desc: "Locks input from mobile editing." },
            { field: "Hidden", required: false, desc: "Hides input from UI while retaining database tag." },
            { field: "Min / Max Limits", required: false, desc: "Sets numerical or character length boundaries." },
            { field: "Text Format Rule", required: false, desc: "Text pattern format rule." },
            { field: "Unique", required: false, desc: "Enforces unique entries across contract dispatches." },
            { field: "Display Order", required: true, desc: "Sequential position index on step page." },
            { field: "Conditional Visibility", required: false, desc: "IF/THEN visibility trigger rule." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
