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
    { id: "purpose", label: "Business Purpose & Value" },
    { id: "when-to-use", label: "When To Use (Scenario)" },
    { id: "how-it-works", label: "How It Works & Workflow" },
    { id: "main-features", label: "Main Configuration Features" },
    { id: "common-mistakes", label: "Troubleshooting & Error Checks" },
    { id: "related-modules", label: "Related Modules & Sub-Guides" },
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
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5] mb-4">{data.overview}</p>

        {key === "overview" && (
          <div className="my-5">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="core-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "options-management" && (
          <div className="my-5">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="options-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "validation" && (
          <div className="my-5">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="validations-drawer"
              hideCaption={true}
            />
          </div>
        )}

        {key === "rules" && (
          <div className="my-5">
            <DocImage
              path="/configuration/surveys/field-dropdown"
              imageKey="rules-drawer"
              hideCaption={true}
            />
          </div>
        )}
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
            MARITIME SCENARIO
          </span>
          <p className="text-[14px] leading-relaxed text-ink-800 dark:text-[#E5E5E5]">{data.businessScenario}</p>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works &amp; Workflow">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">{data.howItWorks}</p>
        
        <div className="p-5 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-3">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            STEP-BY-STEP WORKFLOW
          </span>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-[#000000] font-mono text-xs text-cyan-700 dark:text-cyan-400 leading-relaxed">
            {data.workflow}
          </div>
        </div>
      </Section>

      {/* 5. MAIN FEATURES */}
      <Section id="main-features" title="Main Configuration Features">
        <div className="grid gap-4 sm:grid-cols-2 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Configurable Option Parameters</h4>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">{data.configuration}</p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2">
            <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Validation &amp; Access Rights</h4>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
              <strong>Validation:</strong> {data.validationRules}
              <br />
              <strong>Permissions:</strong> {data.permissions}
            </p>
          </div>
        </div>
      </Section>

      {/* 6. COMMON MISTAKES & TROUBLESHOOTING */}
      <Section id="common-mistakes" title="Troubleshooting &amp; Error Checks">
        <Callout type="warning" title="Common Configuration Pitfall">
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-relaxed">{data.commonMistakes}</p>
        </Callout>

        <div className="mt-4 p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2 text-xs">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] uppercase tracking-wider">Diagnostic Steps</p>
          <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">{data.troubleshooting}</p>
        </div>
      </Section>

      {/* 7. RELATED MODULES */}
      <Section id="related-modules" title="Related Modules &amp; Sub-Guides">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <Link
            to="/configuration/surveys/field-dropdown"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Dropdown Field Guide
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Main guide with screenshots of all 4 Property Inspector drawer tabs.</p>
          </Link>

          <Link
            to="/configuration/surveys/field-dropdown/options-management"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Options Management
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Deep dive into API data sources, MDM linking, and Unique Selection.</p>
          </Link>

          <Link
            to="/configuration/surveys/field-dropdown/validation"
            className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors group"
          >
            <p className="font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
              Dropdown Validations
              <span>&rarr;</span>
            </p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">Allowed values, disallowed values, compulsory rules, and expected answers.</p>
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}

