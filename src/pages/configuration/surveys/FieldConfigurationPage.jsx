import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import FieldTable from "../../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "settings-panel", label: "Settings Panel" },
  { id: "settings-reference", label: "Question Settings Reference" },
];

export default function FieldConfigurationPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-configuration"
      eyebrow="Survey Builder"
      title="Question Settings & Customization"
      description="Clear guide on how to customize question titles, hint text, mandatory options, and question layout on your survey."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          When you select any question on your survey canvas, its <strong>Settings Panel</strong> opens on the right side of your screen. This panel allows you to customize how the question appears and behaves for field surveyors on the mobile app.
        </p>
      </Section>

      <Section id="settings-panel" title="Settings Panel">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2 text-xs">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Live Canvas Updates</h4>
          <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
            Any change you make in the settings panel—such as changing a question title or adding hint text—updates immediately on your survey screen. Click <strong>Save Draft</strong> at the top to save your changes.
          </p>
        </div>
      </Section>

      <Section id="settings-reference" title="Question Settings Reference">
        <FieldTable
          rows={[
            { field: "Question Title (Label)", required: true, desc: "The main title displayed above the question on the survey." },
            { field: "Hint Text (Placeholder)", required: false, desc: "Sample hint text displayed inside an empty answer box (e.g. MSKU1234567)." },
            { field: "Mandatory (Required)", required: true, desc: "Requires inspectors to answer the question before advancing to the next page." },
            { field: "Helper Guidance", required: false, desc: "Sub-label guidance note displayed beneath the question title." },
            { field: "Default Answer", required: false, desc: "Pre-fills an initial answer in the input box." },
            { field: "Read Only", required: false, desc: "Locks the answer so inspectors can view it but cannot edit it." },
            { field: "Hide Question", required: false, desc: "Hides the question from the mobile screen while preserving it for reporting." },
            { field: "Min / Max Limits", required: false, desc: "Sets minimum and maximum allowed numbers or text character lengths." },
            { field: "Text Format Check", required: false, desc: "Ensures text matches expected formats (like container numbers or emails)." },
            { field: "Unique Entry", required: false, desc: "Prevents entering the same code or seal number twice by mistake." },
            { field: "Question Position", required: true, desc: "Controls the vertical position of the question on the page." },
            { field: "Show / Hide Rule", required: false, desc: "Automatically shows or hides the question based on previous answers." },
          ]}
        />
      </Section>
    </DocPage>
  );
}

