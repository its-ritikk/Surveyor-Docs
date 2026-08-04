import React from "react";
import { useLocation, Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import { templateDocsDictionary } from "../../../data/templateDocsData";

export default function TemplateTopicPage({ topicKey: propTopicKey }) {
  const location = useLocation();

  let key = propTopicKey;
  if (!key) {
    const relativePath = location.pathname.replace("/configuration/inspection-templates/", "");
    key = relativePath || "overview";
  }

  const data = templateDocsDictionary[key] || templateDocsDictionary["overview"];

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "purpose", label: "Purpose" },
    { id: "when-to-use", label: "When To Use" },
    { id: "how-it-works", label: "How It Works" },
    { id: "main-features", label: "Main Features" },
    { id: "best-practices", label: "Best Practices" },
    { id: "common-mistakes", label: "Common Mistakes & Troubleshooting" },
    { id: "related-modules", label: "Related Modules" },
  ];

  return (
    <DocPage
      path={data.path}
      eyebrow={data.eyebrow}
      title={data.title}
      description={data.description}
      mediaId={data.mediaId}
      toc={toc}
    >
      {/* 1. OVERVIEW */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">{data.overview}</p>
      </Section>

      {/* 2. PURPOSE */}
      <Section id="purpose" title="Purpose">
        <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1">Business Purpose &amp; Value</p>
          <p className="text-sm text-ink-800 dark:text-[#E5E5E5]">{data.purpose}</p>
        </div>
      </Section>

      {/* 3. WHEN TO USE */}
      <Section id="when-to-use" title="When To Use">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-sm mb-3">
          <p className="font-semibold text-xs text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-1">Real-World Operational Scenario</p>
          <p className="text-[14px] leading-6 text-ink-800 dark:text-[#E5E5E5]">{data.businessScenario}</p>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">{data.howItWorks}</p>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#000000]">
          <p className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider mb-2">Step-by-Step Execution Sequence</p>
          <p className="font-mono text-xs text-cyan-700 dark:text-cyan-400 leading-6">{data.workflow}</p>
        </div>
      </Section>

      {/* 5. MAIN FEATURES */}
      <Section id="main-features" title="Main Features">
        <div className="space-y-3 text-[14px] leading-6">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Configuration Options</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">{data.configuration}</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Validation &amp; Access Controls</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Validation: {data.validation} | RBAC: {data.permissions}</p>
          </div>
        </div>
      </Section>

      {/* 6. BEST PRACTICES */}
      <Section id="best-practices" title="Best Practices">
        <Callout type="best-practice" title="Recommended Best Practice">
          {data.bestPractices}
        </Callout>
      </Section>

      {/* 7. COMMON MISTAKES & TROUBLESHOOTING */}
      <Section id="common-mistakes" title="Common Mistakes &amp; Troubleshooting">
        <Callout type="warning" title="Common Mistake to Avoid">
          {data.troubleshooting}
        </Callout>
      </Section>

      {/* 8. RELATED MODULES */}
      <Section id="related-modules" title="Related Modules">
        <p className="text-xs text-ink-600 dark:text-[#A3A3A3] mb-3">Explore related documentation sections:</p>
        <div className="grid gap-2 sm:grid-cols-3 text-xs font-medium">
          <Link to="/configuration/surveys" className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] hover:bg-cyan-500/5 text-cyan-700 dark:text-cyan-400">
            Survey Builder →
          </Link>
          <Link to="/operations/contracts" className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] hover:bg-cyan-500/5 text-cyan-700 dark:text-cyan-400">
            Contract Operations →
          </Link>
          <Link to="/reports/overview" className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] hover:bg-cyan-500/5 text-cyan-700 dark:text-cyan-400">
            Reports Ecosystem →
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}
