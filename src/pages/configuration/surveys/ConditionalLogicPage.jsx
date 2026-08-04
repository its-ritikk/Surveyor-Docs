import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "rule-builder", label: "Visual Rule Builder" },
  { id: "supported-triggers", label: "Supported IF/THEN Triggers" },
  { id: "nested-logic", label: "Nested & Multi-Condition Logic" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function ConditionalLogicPage() {
  return (
    <DocPage
      path="/configuration/surveys/conditional-logic"
      eyebrow="Survey Builder"
      title="Conditional Logic"
      description="Configure dynamic branching rules, IF/THEN question visibility, and threshold triggers."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Conditional Logic</strong> enables dynamic checklist behavior. Questions and section breaks automatically unhide, hide, or switch to mandatory status based on answers entered in previous steps.
        </p>
      </Section>

      <Section id="rule-builder" title="Visual Rule Builder">
        <p>
          The rule builder interface lets administrators construct logic statements without writing code:
        </p>
        <div className="p-4 my-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-800 dark:text-[#E5E5E5]">
          IF [Cargo_Condition] EQUALS "Damaged" THEN UNHIDE [Damage_Photos] AND SET_REQUIRED [Damage_Description]
        </div>
      </Section>

      <Section id="supported-triggers" title="Supported IF/THEN Triggers">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Dropdown Triggers:</strong> Unhide fields when specific options (e.g., 'Damaged') are selected.</li>
          <li><strong>Numeric Threshold Triggers:</strong> Fire rules when numbers exceed bounds (e.g., Moisture &gt; 14.0%).</li>
          <li><strong>Checkbox Fail Triggers:</strong> Mandate photo evidence when safety checkboxes are unchecked.</li>
        </ul>
      </Section>

      <Section id="nested-logic" title="Nested &amp; Multi-Condition Logic">
        <p>
          Supports AND / OR boolean logic combinations (e.g., IF <code>Cargo = Grain</code> AND <code>Moisture &gt; 14%</code> THEN trigger <code>High Moisture Warning</code>).
        </p>
        <Callout type="tip">
          Keep branching rules straightforward to ensure fast evaluation on mobile hardware.
        </Callout>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="conditional-logic-tutorial-video"
          caption="Conditional Logic Rule Builder Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
