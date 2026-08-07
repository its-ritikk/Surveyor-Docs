import React from "react";
import { useParams, Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import FieldTable from "../../../components/FieldTable";
import DocImage from "../../../components/DocImage";
import { fieldTypesDictionary } from "../../../data/fieldTypesData";

export default function FieldDetailPage({ fieldKey: propFieldKey }) {
  const params = useParams();
  const fieldKey = propFieldKey || params.fieldKey || "field-text";
  const data = fieldTypesDictionary[fieldKey] || fieldTypesDictionary["field-text"];

  const toc = [
    { id: "overview", label: "Overview & Business Purpose" },
    ...(fieldKey === "field-date" || fieldKey === "field-photo"
      ? [{ id: "builder-placement", label: "Builder Placement & UI Layout" }]
      : []),
    ...(fieldKey === "field-photo"
      ? [{ id: "video-upload-operations", label: "Video Upload Operations & Parity" }]
      : []),
    { id: "when-to-use", label: "When to Use / Not Use" },
    { id: "example", label: "Real Business Example" },
    { id: "behavior", label: "Field Behavior" },
    { id: "properties", label: "Field Configuration Properties" },
    { id: "validations", label: "Validation Rules" },
    { id: "dependencies-permissions", label: "Dependencies & Permissions" },
    { id: "search-reporting-export", label: "Search, Reporting & Export" },
    { id: "workflow", label: "Mobile Workflow" },
  ];

  return (
    <DocPage
      path={data.path}
      eyebrow="Field Library"
      title={data.title}
      description={data.description}
      hideImage={fieldKey === "field-date" || fieldKey === "field-photo" || fieldKey === "field-text"}
      toc={toc}
    >
      {/* ── OVERVIEW & BUSINESS PURPOSE ────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; Business Purpose">
        <p>{data.overview}</p>
        <p className="mt-3">
          <strong>Business Purpose:</strong> {data.businessPurpose}
        </p>
      </Section>

      {/* ── BUILDER PLACEMENT & UI LAYOUT (DATE / PHOTO ONLY) ─────────── */}
      {(fieldKey === "field-date" || fieldKey === "field-photo") && (
        <Section id="builder-placement" title="Builder Placement &amp; UI Layout">
          {fieldKey === "field-date" && (
            <div className="my-6 space-y-4">
              <p className="text-xs font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2">
                Survey Builder Interfaces — Available Fields, Core Settings, Validations &amp; Logic Rules
              </p>
              {/* Top Horizontal Full-Width Image */}
              <div className="w-full">
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="core-drawer"
                />
              </div>
              {/* Two Images Side-by-Side in One Frame / 2-Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="validations-drawer"
                />
                <DocImage
                  path="/configuration/surveys/field-date"
                  imageKey="rules-drawer"
                />
              </div>
            </div>
          )}

          {fieldKey === "field-photo" && (
            <div className="my-6 space-y-4">
              <p className="text-xs font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2">
                Survey Builder Interfaces — Core Settings, Media Validations, Logic Rules &amp; Example Media
              </p>
              {/* Top Horizontal Full-Width Image */}
              <div className="w-full">
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="core-drawer"
                />
              </div>
              {/* Three Images Side-by-Side in Row Frame */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="validations-drawer"
                />
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="rules-drawer"
                />
                <DocImage
                  path="/configuration/surveys/field-photo"
                  imageKey="media-drawer"
                />
              </div>
            </div>
          )}
        </Section>
      )}

      {/* ── VIDEO UPLOAD OPERATIONS & PARITY (PHOTO UPLOAD SUBSECTION) ── */}
      {fieldKey === "field-photo" && (
        <Section id="video-upload-operations" title="Video Upload Operations &amp; Parity">
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                Media Field Operations Note
              </span>
              <h4 className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF]">
                Video Upload Field Operation Parity
              </h4>
            </div>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-5 mb-3">
              The operational workflow, property drawer tabs (<strong>Core</strong>, <strong>Validations</strong>, <strong>Rules</strong>, <strong>Media</strong>), and media validation parameters (<em>Minimum Files</em>, <em>Maximum Files</em>, <em>Camera Only</em>, <em>Max File Size MB</em>, <em>Quality</em>, and <em>Logic Visibility Rules</em>) for the <strong>Video Upload Field</strong> operate identically to Photo Upload.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-ink-800 dark:text-[#E5E5E5] mb-3">
              <li><strong>Video &amp; Photo File Limits:</strong> Minimum Files &amp; Maximum Files parameters.</li>
              <li><strong>Camera Only Anti-Fraud:</strong> Disables device gallery picker for live hardware recording.</li>
              <li><strong>File Size Cap:</strong> Maximum allowed file size per clip (in megabytes).</li>
              <li><strong>Compression Quality:</strong> Low, Medium, or High media quality settings.</li>
            </ul>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <span>See complete Video Field specifications:</span>
              <Link
                to="/configuration/surveys/field-video"
                className="font-bold underline hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                Go to Video Upload Documentation &rarr;
              </Link>
            </div>
          </div>
        </Section>
      )}

      {/* ── WHEN TO USE / NOT USE ──────────────────────────────────────── */}
      <Section id="when-to-use" title="When to Use &amp; When NOT to Use">
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-950 dark:text-emerald-300">
            <p className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">✓ When to Use</p>
            <p className="text-xs mt-1 leading-5">{data.whenToUse}</p>
          </div>
          <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/10 text-rose-950 dark:text-rose-300">
            <p className="font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400">✕ When NOT to Use</p>
            <p className="text-xs mt-1 leading-5">{data.whenNotToUse}</p>
          </div>
        </div>
      </Section>

      {/* ── REAL BUSINESS EXAMPLE ──────────────────────────────────────── */}
      <Section id="example" title="Real Business Example">
        <div className="p-4 my-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-xs">
          <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Operational Scenario:</p>
          <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.realBusinessExample}</p>
        </div>
      </Section>

      {/* ── FIELD BEHAVIOR ────────────────────────────────────────────── */}
      <Section id="behavior" title="Field Behavior">
        <p className="text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">{data.behavior}</p>
      </Section>

      {/* ── FIELD CONFIGURATION PROPERTIES ────────────────────────────── */}
      <Section id="properties" title="Field Configuration Properties">
        <FieldTable rows={data.properties} />
      </Section>

      {/* ── VALIDATION RULES ───────────────────────────────────────────── */}
      <Section id="validations" title="Validation Rules">
        <ul className="list-disc pl-5 space-y-1 my-2 text-xs text-ink-700 dark:text-[#E5E5E5]">
          {data.validations.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </Section>

      {/* ── DEPENDENCIES & PERMISSIONS ─────────────────────────────────── */}
      <Section id="dependencies-permissions" title="Dependencies &amp; Permissions">
        <div className="grid gap-3 sm:grid-cols-2 text-xs my-2">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Dependencies / Branching:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.dependencies}</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Permissions:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.permissions}</p>
          </div>
        </div>
      </Section>

      {/* ── SEARCH, REPORTING & EXPORT ─────────────────────────────────── */}
      <Section id="search-reporting-export" title="Search, Reporting &amp; Export">
        <div className="grid gap-3 sm:grid-cols-3 text-xs my-2">
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Search Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.searchBehavior}</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Reporting Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.reportingBehavior}</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Export Behavior:</p>
            <p className="text-ink-650 dark:text-[#A3A3A3] mt-1">{data.exportBehavior}</p>
          </div>
        </div>
      </Section>

      {/* ── MOBILE WORKFLOW ─────────────────────────────────── */}
      <Section id="workflow" title="Mobile Workflow">
        <p className="mb-3 text-xs leading-5 text-ink-700 dark:text-[#E5E5E5]">
          <strong>Mobile Workflow:</strong> {data.workflow}
        </p>

        <Callout type="warning">
          <strong>Common Mistake:</strong> {data.commonMistakes}
        </Callout>
      </Section>
    </DocPage>
  );
}
