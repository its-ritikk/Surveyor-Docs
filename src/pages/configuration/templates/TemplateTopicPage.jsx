import React from "react";
import { useLocation, Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";
import { templateDocsDictionary } from "../../../data/templateDocsData";

export default function TemplateTopicPage({ topicKey: propTopicKey }) {
  const location = useLocation();

  let key = propTopicKey;
  if (!key) {
    let relativePath = location.pathname.replace("/configuration/inspection-templates", "");
    relativePath = relativePath.replace(/^\/+|\/+$/g, "");
    key = relativePath || "overview";
  }

  // Smart resolution for subsection root paths
  let data = templateDocsDictionary[key];
  if (!data && templateDocsDictionary[`${key}/overview`]) {
    data = templateDocsDictionary[`${key}/overview`];
  }
  if (!data) {
    data = templateDocsDictionary["overview"];
  }

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "purpose", label: "Business Purpose & Value" },
    { id: "when-to-use", label: "When To Use (Scenario)" },
    { id: "how-it-works", label: "How It Works & Workflow" },
    { id: "main-features", label: "Main Configuration Features" },
    { id: "common-mistakes", label: "Troubleshooting & Error Checks" },
    { id: "related-modules", label: "Related Modules & Links" },
  ];

  // Helper to render workflow steps as numbered cards if delimited by -> or numbers
  const renderWorkflowSteps = (workflowText) => {
    if (!workflowText) return null;
    const parts = workflowText.split(/\s*->\s*/).map((s) => s.trim()).filter(Boolean);

    if (parts.length > 1) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs mt-3">
          {parts.map((step, idx) => {
            const cleanStep = step.replace(/^\d+\.\s*/, "");
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Step {idx + 1}</span>
                </div>
                <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">{cleanStep}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm font-mono text-xs text-cyan-700 dark:text-cyan-400 leading-relaxed">
        {workflowText}
      </div>
    );
  };

  return (
    <DocPage
      path={data.path}
      eyebrow={data.eyebrow}
      title={data.title}
      description={data.description}
      mediaId={data.mediaId}
      toc={toc}
      hideImage={true}
    >
      {/* 1. OVERVIEW */}
      <Section id="overview" title="Overview">
        <div className="space-y-4">
          <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">{data.overview}</p>
          <DocImage path={data.path} imageKey="overview" hideCaption={true} />
        </div>
      </Section>

      {/* 2. PURPOSE */}
      <Section id="purpose" title="Business Purpose &amp; Value">
        <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04] space-y-2 shadow-sm">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
            BUSINESS VALUE
          </span>
          <p className="text-sm text-ink-800 dark:text-[#E5E5E5] leading-relaxed">{data.purpose}</p>
        </div>
      </Section>

      {/* 3. WHEN TO USE */}
      <Section id="when-to-use" title="When To Use (Scenario)">
        <div className="p-5 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            OPERATIONAL SCENARIO
          </span>
          <p className="text-[14px] leading-relaxed text-ink-800 dark:text-[#E5E5E5]">{data.businessScenario}</p>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works &amp; Workflow">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">{data.howItWorks}</p>
        {renderWorkflowSteps(data.workflow)}
      </Section>

      {/* 5. MAIN FEATURES */}
      <Section id="main-features" title="Main Configuration Features">
        <div className="grid gap-4 sm:grid-cols-2 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
            <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] block">Configurable Parameters</span>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">{data.configuration}</p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
            <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] block">Validation &amp; Access Controls</span>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              <strong>Validation:</strong> {data.validation}
              <br />
              <strong>Permissions:</strong> {data.permissions}
            </p>
          </div>
        </div>
      </Section>

      {/* 6. COMMON MISTAKES & TROUBLESHOOTING */}
      <Section id="common-mistakes" title="Troubleshooting &amp; Error Checks">
        <Callout type="warning" title="Common Configuration Error">
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-relaxed">{data.troubleshooting}</p>
        </Callout>

        {data.bestPractices && (
          <div className="mt-4 p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-1.5 text-xs">
            <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider block">Best Practice Tip</span>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">{data.bestPractices}</p>
          </div>
        )}
      </Section>

      {/* 7. RELATED MODULES */}
      <Section id="related-modules" title="Related Modules &amp; Links">
        <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mb-3">Explore related operational documentation:</p>
        <div className="grid gap-3 sm:grid-cols-3 text-xs font-medium">
          <Link
            to="/configuration/surveys/overview"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <span className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Survey Builder
              <span>&rarr;</span>
            </span>
            <p className="text-ink-650 dark:text-[#A3A3A3] font-normal mt-1">Design mobile checklist questions &amp; steps.</p>
          </Link>

          <Link
            to="/operations/contracts"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <span className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Contract Management
              <span>&rarr;</span>
            </span>
            <p className="text-ink-650 dark:text-[#A3A3A3] font-normal mt-1">Bind templates to live port job dispatches.</p>
          </Link>

          <Link
            to="/reports/overview"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <span className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Report Builder
              <span>&rarr;</span>
            </span>
            <p className="text-ink-650 dark:text-[#A3A3A3] font-normal mt-1">Map checklist answers to PDF certificates.</p>
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}

