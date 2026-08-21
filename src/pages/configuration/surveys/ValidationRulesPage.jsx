import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "built-in-validations", label: "Answer Validation Types" },
  { id: "format-rules", label: "Text Format Checks" },
  { id: "conditional-validations", label: "Dynamic Answer Rules" },
];

export default function ValidationRulesPage() {
  return (
    <DocPage
      path="/configuration/surveys/validation-rules"
      eyebrow="Survey Builder"
      title="Validation & Answer Rules"
      description="Easy guide to answer validation rules, text format checks, email and phone formatting, and number range limits."
      toc={toc}
      noMedia={true}
    >
      {/* OVERVIEW */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          <strong>Validation Rules</strong> ensure field surveyors enter accurate, complete information on their mobile app before moving to the next step or submitting an inspection checklist. If an entry is incomplete or incorrectly typed, a clear message guides the surveyor to correct it immediately.
        </p>
      </Section>

      {/* ANSWER VALIDATION TYPES */}
      <Section id="built-in-validations" title="Answer Validation Types">
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Mandatory Questions (Required)</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Guarantees essential questions (like seal numbers or sign-offs) cannot be left blank before submitting.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Number Range Limits</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Ensures numbers stay within reasonable bounds (for example: 0 to 100 for cargo moisture percentage).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Character Length Constraints</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Prevents text notes from being too short or exceeding maximum character limits.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Duplicate Prevention</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Prevents container seal numbers or reference codes from being recorded twice by accident.
            </p>
          </div>
        </div>
      </Section>

      {/* TEXT FORMAT CHECKS */}
      <Section id="format-rules" title="Text Format Checks">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Text format rules enforce standardized entries for container codes, seal numbers, and vessel call signs:
        </p>

        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2 text-xs">
          <p><strong>Container Number Format:</strong> 4 uppercase letters followed by 7 digits (e.g. <code>MSKU1234567</code>)</p>
          <p><strong>Bolt Seal Format:</strong> Prefix followed by digits and letter (e.g. <code>SEAL-123456-X</code>)</p>
          <p><strong>Vessel Call Sign Format:</strong> 4 to 7 alphanumeric characters (e.g. <code>ABCD123</code>)</p>
        </div>
      </Section>

      {/* DYNAMIC ANSWER RULES */}
      <Section id="conditional-validations" title="Dynamic Answer Rules">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Validation rules can turn on dynamically based on previous choices (for example: IF <em>Damage Observed = Yes</em> THEN <em>Photo Evidence</em> becomes mandatory).
        </p>

        <Callout type="tip" title="Testing Your Survey">
          Use the <strong>Preview</strong> mode to test your format rules and ensure questions behave smoothly for field surveyors before publishing.
        </Callout>
      </Section>
    </DocPage>
  );
}

