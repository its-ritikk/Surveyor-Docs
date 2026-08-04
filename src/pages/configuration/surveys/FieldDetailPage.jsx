import React from "react";
import { useParams } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";
import FieldTable from "../../../components/FieldTable";
import { fieldTypesDictionary } from "../../../data/fieldTypesData";

export default function FieldDetailPage({ fieldKey: propFieldKey }) {
  const params = useParams();
  const fieldKey = propFieldKey || params.fieldKey || "field-text";
  const data = fieldTypesDictionary[fieldKey] || fieldTypesDictionary["field-text"];

  const toc = [
    { id: "overview", label: "Overview & Business Purpose" },
    { id: "when-to-use", label: "When to Use / Not Use" },
    { id: "example", label: "Real Business Example" },
    { id: "behavior", label: "Field Behavior" },
    { id: "properties", label: "Field Configuration Properties" },
    { id: "validations", label: "Validation Rules" },
    { id: "dependencies-permissions", label: "Dependencies & Permissions" },
    { id: "search-reporting-export", label: "Search, Reporting & Export" },
    { id: "workflow-best-practices", label: "Workflow & Best Practices" },
  ];

  if (data.hasVideo) {
    toc.push({ id: "tutorial-video", label: "Tutorial Video" });
  }

  return (
    <DocPage
      path={data.path}
      eyebrow="Field Types"
      title={`${data.title} Reference`}
      description={data.description}
      toc={toc}
    >
      {/* ── OVERVIEW & BUSINESS PURPOSE ────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; Business Purpose">
        <p>{data.overview}</p>
        <p className="mt-3">
          <strong>Business Purpose:</strong> {data.businessPurpose}
        </p>
      </Section>

      {/* ── WHEN TO USE / NOT USE ──────────────────────────────────────── */}
      <Section id="when-to-use" title="When to Use &amp; When NOT to Use">
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <p className="font-bold text-xs text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">When to Use</p>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">{data.whenToUse}</p>
          </div>
          <div className="p-4 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50/30 dark:bg-rose-500/10">
            <p className="font-bold text-xs text-rose-700 dark:text-rose-400 uppercase tracking-wider">When NOT to Use</p>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">{data.whenNotToUse}</p>
          </div>
        </div>
      </Section>

      {/* ── REAL BUSINESS EXAMPLE ─────────────────────────────────────── */}
      <Section id="example" title="Real Business Example">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Maritime Field Example:</p>
          <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
            {data.realBusinessExample}
          </p>
        </div>
      </Section>

      {/* ── FIELD BEHAVIOR ────────────────────────────────────────────── */}
      <Section id="behavior" title="Field Behavior">
        <p>{data.behavior}</p>
        <p className="mt-2 text-xs text-ink-650 dark:text-[#A3A3A3]">
          <strong>Offline Behavior:</strong> {data.offlineBehavior}
        </p>
      </Section>

      {/* ── CONFIGURATION PROPERTIES ──────────────────────────────────── */}
      <Section id="properties" title="Field Configuration Properties">
        <p className="mb-3 text-xs text-ink-650 dark:text-[#A3A3A3]">
          Configurable parameters available in the right-hand Property Inspector:
        </p>
        {data.properties && (
          <FieldTable
            rows={data.properties.map((p) => ({
              field: p.name,
              required: p.req,
              desc: `${p.desc} (Type: ${p.type})`,
            }))}
          />
        )}
      </Section>

      {/* ── VALIDATION RULES ──────────────────────────────────────────── */}
      <Section id="validations" title="Validation Rules">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          {data.validations.map((v, i) => (
            <li key={i}><strong>{v}</strong></li>
          ))}
        </ul>
      </Section>

      {/* ── DEPENDENCIES & PERMISSIONS ────────────────────────────────── */}
      <Section id="dependencies-permissions" title="Dependencies &amp; Permissions">
        <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5] mb-2">
          <strong>Conditional Dependencies:</strong> {data.dependencies}
        </p>
        <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">
          <strong>RBAC Permissions:</strong> {data.permissions}
        </p>
      </Section>

      {/* ── SEARCH, REPORTING & EXPORT ────────────────────────────────── */}
      <Section id="search-reporting-export" title="Search, Reporting &amp; Export">
        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-xs text-ink-900 dark:text-[#FFFFFF]">Search Behavior</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">{data.searchBehavior}</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-xs text-ink-900 dark:text-[#FFFFFF]">Reporting Behavior</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">{data.reportingBehavior}</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-xs text-ink-900 dark:text-[#FFFFFF]">Export Behavior</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">{data.exportBehavior}</p>
          </div>
        </div>
      </Section>

      {/* ── WORKFLOW & BEST PRACTICES ─────────────────────────────────── */}
      <Section id="workflow-best-practices" title="Workflow &amp; Best Practices">
        <p className="mb-3 text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">
          <strong>Mobile Workflow:</strong> {data.workflow}
        </p>

        <Callout type="tip">
          <strong>Best Practice:</strong> {data.bestPractices}
        </Callout>

        <Callout type="warning">
          <strong>Common Mistake:</strong> {data.commonMistakes}
        </Callout>
      </Section>

      {/* ── TUTORIAL VIDEO ────────────────────────────────────────────── */}
      {data.hasVideo && (
        <Section id="tutorial-video" title="Tutorial Video">
          <DocMedia
            mediaId={data.mediaId}
            caption={`${data.title} Configuration & Mobile Usage Video Tutorial`}
          />
        </Section>
      )}
    </DocPage>
  );
}
