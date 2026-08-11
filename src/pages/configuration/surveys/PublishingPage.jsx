import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "lifecycle-states", label: "Draft vs Published States" },
  { id: "publishing-checks", label: "Pre-Publish Validation Checks" },
];

export default function PublishingPage() {
  return (
    <DocPage
      path="/configuration/surveys/publishing"
      eyebrow="Survey Builder"
      title="Publishing"
      description="Transitioning surveys from Draft to Published state, validation checks, and release management."
      toc={toc}
      hideImage={true}
    >
      <Section id="overview" title="Overview">
        <p>
          Publishing makes a survey blueprint active for contract dispatches.
        </p>
        <DocImage
          path="/configuration/surveys/publishing"
          imageKey="overview"
          hideCaption={true}
        />
      </Section>

      <Section id="lifecycle-states" title="Draft vs Published States">
        <div className="space-y-3 my-4">
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
    </DocPage>
  );
}
