import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "built-in-validations", label: "Built-In Validation Types" },
  { id: "format-rules", label: "Text Format Rules" },
  { id: "conditional-validations", label: "Conditional Validations" },
];

export default function ValidationRulesPage() {
  return (
    <DocPage
      path="/configuration/surveys/validation-rules"
      eyebrow="Survey Builder"
      title="Validation Rules"
      description="Easy guide to answer validation rules, text format checks, email and phone formatting, and number range limits."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Validation Rules</strong> ensure that field surveyors enter accurate, complete information on their mobile app before moving to the next step or submitting an inspection checklist. If an entry is incomplete or incorrectly formatted, a clear warning message guides the surveyor to correct it.
        </p>
      </Section>

      <Section id="built-in-validations" title="Built-In Validation Types">
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Required Check:</strong> Ensures mandatory questions are not left blank before submitting.</li>
          <li><strong>Number Range Limits:</strong> Guarantees numbers fall within acceptable minimum and maximum values (for example, 0 to 100 for moisture percentage).</li>
          <li><strong>Character Length Constraints:</strong> Prevents text notes from being too short or exceeding maximum length limits.</li>
          <li><strong>Email &amp; Phone Formatting:</strong> Checks that email addresses and phone numbers are typed in standard formats.</li>
          <li><strong>Duplicate Prevention:</strong> Prevents container seal numbers or reference codes from being recorded twice by accident.</li>
        </ul>
      </Section>

      <Section id="format-rules" title="Text Format Rules">
        <p>
          Administrators can apply text format rules to enforce consistent entries for container codes, seal numbers, and call signs:
        </p>
        <div className="p-4 my-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
          <p><strong>Container Number Format:</strong> 4 uppercase letters followed by 7 digits (e.g. <code>MSKU1234567</code>)</p>
          <p><strong>Bolt Seal Format:</strong> Prefix followed by digits and letter (e.g. <code>SEAL-123456-X</code>)</p>
          <p><strong>Vessel Call Sign Format:</strong> 4 to 7 alphanumeric characters (e.g. <code>ABCD123</code>)</p>
        </div>
      </Section>

      <Section id="conditional-validations" title="Conditional Validations">
        <p>
          Validation rules can be dynamically activated based on previous choices (for example, IF <code>Damage Observed = Yes</code> THEN <code>Photo Evidence</code> becomes Required).
        </p>
        <Callout type="tip">
          Test format rules in the Preview Simulator to make sure questions behave smoothly for field surveyors.
        </Callout>
      </Section>
    </DocPage>
  );
}
