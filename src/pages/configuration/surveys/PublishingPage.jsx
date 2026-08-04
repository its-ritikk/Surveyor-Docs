import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "lifecycle-states", label: "Draft vs Published States" },
  { id: "publishing-checks", label: "Pre-Publish Validation Checks" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function PublishingPage() {
  return (
    <DocPage
      path="/configuration/surveys/publishing"
      eyebrow="Survey Builder"
      title="Publishing"
      description="Locking survey configurations, schema compilation, and publishing blueprints to live mobile dispatches."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Publishing</strong> compiles a survey design into a production JSON schema payload, immediately releasing it to the contract creation wizard and active mobile app sync queues.
        </p>
      </Section>

      <Section id="lifecycle-states" title="Draft vs Published States">
        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/5 dark:bg-[#0A0A0A]">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-[#171717] text-ink-700 dark:text-[#E5E5E5] font-bold text-xs uppercase tracking-wider">Draft</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Work-in-progress state. Admins can add, reorder, or edit fields freely without affecting live mobile dispatches.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Published</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Production state. Survey field schema is locked and available in contract dispatch selection lists.</p>
          </div>
        </div>
      </Section>

      <Section id="publishing-checks" title="Pre-Publish Validation Checks">
        <p>
          Before publishing, the system validates that all fields have valid labels, dropdowns contain at least 2 options, and formulas have valid syntax.
        </p>
        <Callout type="important">
          Publishing locks active field IDs to preserve audit integrity for completed contract reports.
        </Callout>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="publishing-survey-tutorial-video"
          caption="Survey Publishing & Release Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
