import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "supported-elements", label: "Supported Elements" },
  { id: "configuration", label: "Element Configuration" },
  { id: "rules", label: "Rules & Limits" },
];

export default function ReportElements() {
  return (
    <DocPage
      path="/reports/report-builder/elements"
      eyebrow="Report Builder"
      title="Report Elements"
      description="The standard building blocks used to compose report layouts."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Report designs are composed by stacking modular content blocks vertically on the canvas. Each block handles a distinct type of output (headers, text fields, tables, signatures).
        </p>
      </Section>

      <Section id="supported-elements" title="Supported Elements">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Header</strong> — Renders the standard customer logo and dispatch metadata.</li>
          <li><strong>Label/Value</strong> — Formats survey options and variables into clean summary rows.</li>
          <li><strong>Rich Text</strong> — A narrative text editor block supporting variable mapping.</li>
          <li><strong>Table</strong> — Compiles repeated entries into Flat, Pivot, or Custom tables.</li>
          <li><strong>Photo Grid</strong> — Compiles visual evidence into a structured image grid.</li>
          <li><strong>Signature</strong> — Places signature capture blocks showing graphic signatures and verification timestamps.</li>
        </ul>
      </Section>

      <Section id="configuration" title="Element Configuration">
        <p>
          Clicking any element on the designer canvas opens its properties panel. Developers can map element variables to survey fields, set label formatting, and define conditional visibility rules.
        </p>
      </Section>

      <Section id="rules" title="Rules & Limits">
        <Callout type="warning">
          Each report template must contain at least one Header element and one Signature block before it can be published.
        </Callout>
      </Section>
    </DocPage>
  );
}
