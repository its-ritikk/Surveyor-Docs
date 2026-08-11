import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";
import { dropdownDocsDictionary } from "../../../data/dropdownDocsData";

export default function DropdownTopicPage({ topicKey }) {
  const key = topicKey || "overview";
  const data = dropdownDocsDictionary[key] || dropdownDocsDictionary["overview"];

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "purpose", label: "Purpose" },
    { id: "when-to-use", label: "When To Use" },
    { id: "how-it-works", label: "How It Works" },
    { id: "main-features", label: "Main Features" },
    { id: "common-mistakes", label: "Common Mistakes & Troubleshooting" },
    { id: "related-modules", label: "Related Modules" },
  ];

  return (
    <DocPage
      path={data.path}
      eyebrow="Survey Builder › Dropdown Field"
      title={data.title}
      description={data.description}
      mediaId={data.mediaId}
      toc={toc}
      hideImage={true}
    >
      {/* 1. OVERVIEW */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">{data.overview}</p>

        {key === "overview" && (
          <div className="my-4">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="core-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "options-management" && (
          <div className="my-4">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="options-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "validation" && (
          <div className="my-4">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="validations-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "rules" && (
          <div className="my-4">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="rules-drawer"
              hideCaption={true}
            />
          </div>
        )}
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
          <p className="font-semibold text-xs text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-1">Real Maritime Operational Scenario</p>
          <p className="text-[14px] leading-6 text-ink-800 dark:text-[#E5E5E5]">{data.businessScenario}</p>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">{data.howItWorks}</p>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#000000]">
          <p className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider mb-2">Step-by-Step Workflow</p>
          <p className="font-mono text-xs text-cyan-700 dark:text-cyan-400 leading-6">{data.workflow}</p>
        </div>
      </Section>

      {/* 5. MAIN FEATURES */}
      <Section id="main-features" title="Main Features">
        <div className="space-y-3 text-[14px] leading-6">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Configurable Options</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">{data.configuration}</p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Validation Rules &amp; Access Controls</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Validation: {data.validationRules} | Permissions: {data.permissions}</p>
          </div>
        </div>
      </Section>

      {/* 6. COMMON MISTAKES & TROUBLESHOOTING */}
      <Section id="common-mistakes" title="Common Mistakes &amp; Troubleshooting">
        <Callout type="warning" title="Common Configuration Error">
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5]">{data.commonMistakes}</p>
        </Callout>
        <div className="mt-3 p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-semibold text-xs text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider mb-1">Diagnostic Steps</p>
          <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">{data.troubleshooting}</p>
        </div>
      </Section>

      {/* 7. RELATED MODULES */}
      <Section id="related-modules" title="Related Modules">
        <div className="flex flex-wrap gap-2 text-xs">
          <Link to="/configuration/surveys/field-dropdown/options-management" className="px-3 py-1.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 text-ink-700 dark:text-[#E5E5E5] font-semibold transition-colors">
            Options Management &rarr;
          </Link>
          <Link to="/configuration/surveys/field-dropdown/validation" className="px-3 py-1.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 text-ink-700 dark:text-[#E5E5E5] font-semibold transition-colors">
            Dropdown Validations &rarr;
          </Link>
          <Link to="/configuration/surveys/field-library" className="px-3 py-1.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 text-ink-700 dark:text-[#E5E5E5] font-semibold transition-colors">
            Field Library &rarr;
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}
