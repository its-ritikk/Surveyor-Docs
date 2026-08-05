import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "rule-builder", label: "Visual Rule Builder" },
  { id: "supported-triggers", label: "Supported IF/THEN Triggers" },
  { id: "nested-logic", label: "Nested & Multi-Condition Logic" },
];

export default function ConditionalLogicPage() {
  return (
    <DocPage
      path="/configuration/surveys/conditional-logic"
      eyebrow="Survey Builder"
      title="Conditional Logic"
      description="Dynamic IF/THEN branching rules, field show/hide triggers, mandatory overrides, and nested logic."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Conditional Logic</strong> allows administrators to create dynamic inspection workflows that adapt based on surveyor answers.
        </p>
      </Section>

      <Section id="rule-builder" title="Visual Rule Builder">
        <p>
          The Rule Builder provides a clean <strong>IF / THEN / ELSE</strong> visual constructor. Select a target trigger field, a condition operator (e.g. <code>EQUALS</code>, <code>GREATER THAN</code>, <code>CONTAINS</code>), and target actions.
        </p>
      </Section>

      <Section id="supported-triggers" title="Supported IF/THEN Triggers">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Show / Hide Field:</strong> Dynamically reveals follow-up questions (e.g., IF <em>Damage = Yes</em>, THEN show <em>Damage Photo</em>).</li>
          <li><strong>Require Field:</strong> Dynamically changes an optional field to mandatory based on risk parameters.</li>
          <li><strong>Skip Step:</strong> Bypasses entire wizard steps if cargo type does not require specific testing.</li>
        </ul>
      </Section>

      <Section id="nested-logic" title="Nested &amp; Multi-Condition Logic">
        <p>
          Combine multiple trigger rules using <code>AND</code> / <code>OR</code> boolean groups.
        </p>
        <Callout type="tip">
          Keep branching rules straightforward to ensure fast evaluation on mobile hardware.
        </Callout>
      </Section>
    </DocPage>
  );
}
