import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "built-in-validations", label: "Built-In Validation Types" },
  { id: "regex-engine", label: "Regex Pattern Engine" },
  { id: "conditional-validations", label: "Conditional Validations" },
];

export default function ValidationRulesPage() {
  return (
    <DocPage
      path="/configuration/surveys/validation-rules"
      eyebrow="Survey Builder"
      title="Validation Rules"
      description="Deep dive into client-side validation rules, regex pattern matchers, email/phone syntax checks, and range bounds."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Validation Rules</strong> run on the mobile device client before a surveyor can advance step pages or submit a completed checksheet. Failed validations display red inline warning boxes highlighting the exact error condition.
        </p>
      </Section>

      <Section id="built-in-validations" title="Built-In Validation Types">
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Required Check:</strong> Rejects blank or whitespace-only inputs for compulsory questions.</li>
          <li><strong>Numeric Range Limits:</strong> Guarantees numbers fall within acceptable minimum and maximum bounds (e.g., 0 &le; Moisture &le; 100).</li>
          <li><strong>Character Length Constraints:</strong> Prevents text inputs from exceeding maximum column lengths.</li>
          <li><strong>Email &amp; Phone Syntax:</strong> Checks standard RFC-5322 email formatting and E.164 phone digit counts.</li>
          <li><strong>Duplicate Prevention:</strong> Queries local database to ensure container seal numbers are not entered twice.</li>
        </ul>
      </Section>

      <Section id="regex-engine" title="Regex Pattern Engine">
        <p>
          Administrators can input standard PCRE regular expressions into the <code>Regex Validation</code> field:
        </p>
        <div className="p-4 my-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2 text-xs font-mono">
          <p><strong>ISO Container Number:</strong> <code>^[A-Z]{`{4}`} \d{`{7}`}$</code></p>
          <p><strong>Bolt Seal Format:</strong> <code>^SEAL-\d{`{6}`}-[A-Z]$</code></p>
          <p><strong>Vessel Call Sign:</strong> <code>^[A-Z0-9]{`{4,7}`}$</code></p>
        </div>
      </Section>

      <Section id="conditional-validations" title="Conditional Validations">
        <p>
          Validation rules can be dynamically toggled ON or OFF based on prior choices (e.g. IF <code>Damage Observed = Yes</code> THEN <code>Photo Caption</code> becomes Required).
        </p>
        <Callout type="tip">
          Test regex patterns in the Preview Simulator before publishing templates to production.
        </Callout>
      </Section>
    </DocPage>
  );
}
