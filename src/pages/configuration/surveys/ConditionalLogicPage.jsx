import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "how-rules-work", label: "How Smart Rules Work" },
  { id: "rule-types", label: "What Rules Can Do" },
  { id: "best-practices", label: "Tips for Clean Rules" },
];

export default function ConditionalLogicPage() {
  return (
    <DocPage
      path="/configuration/surveys/conditional-logic"
      eyebrow="Survey Builder"
      title="Conditional Logic"
      description="Easy guide on setting up rules to automatically show or hide questions based on surveyor answers."
      toc={toc}
      noMedia={true}
    >
      {/* OVERVIEW */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          <strong>Smart Rules</strong> allow your survey forms to react automatically to what field inspectors select on their mobile devices. Questions only appear when they are relevant, keeping mobile check-sheets short, clean, and fast to complete.
        </p>
      </Section>

      {/* HOW SMART RULES WORK */}
      <Section id="how-rules-work" title="How Smart Rules Work">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          Creating an automatic rule takes three simple choices:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">1</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Trigger Question</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Select the question to watch (for example: <em>"Is there any cargo damage?"</em>).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Trigger Answer</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Choose the inspector answer that triggers the rule (for example: <em>Equals "Yes"</em>).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">3</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Automatic Action</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Select what happens next (for example: <em>Unhide Damage Photo Question</em>).
            </p>
          </div>
        </div>
      </Section>

      {/* WHAT RULES CAN DO */}
      <Section id="rule-types" title="What Rules Can Do">
        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Show or Hide Questions</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Automatically reveal follow-up questions only when needed (e.g. showing defect description fields only if defect checkbox is marked).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Make Questions Mandatory</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Dynamically switch optional questions to compulsory when an issue or exception is reported.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Skip Entire Step Pages</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              Bypass non-applicable step pages automatically (e.g. skipping bulk grain moisture checks if cargo type selected is Container).
            </p>
          </div>
        </div>
      </Section>

      {/* TIPS FOR CLEAN RULES */}
      <Section id="best-practices" title="Tips for Clean Rules">
        <Callout type="tip" title="Pro-Tip for Survey Builders">
          Keep your rules clear and direct. Direct rules ensure your survey runs fast and smoothly for inspectors in the field.
        </Callout>
      </Section>
    </DocPage>
  );
}

