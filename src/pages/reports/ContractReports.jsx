import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "contract-report", label: "Contract Report Workspace" },
  { id: "survey-report", label: "Survey Report Types" },
  { id: "media-and-attachments", label: "Media & Attachments" },
  { id: "export-and-preview", label: "Export & Preview" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function ContractReports() {
  return (
    <DocPage
      path="/reports/contract-reports"
      eyebrow="Reports"
      title="Contract Reports Guide"
      description="A dedicated reporting workspace for consolidated, contract-level reports, combining automated contract fields, survey inspection data, client summaries, and evidence photo grids."
      toc={toc}
    >
      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Contract Reports</strong> workspace (also referred to as Pick Reports) is a specialized module built specifically for producing consolidated, contract-level supervision reports.
        </p>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
            <p className="font-bold text-xs text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Relationship with Report Builder</p>
            <p className="mt-1 text-xs text-ink-800 dark:text-[#E5E5E5]">
              Unlike the dynamic drag-and-drop Report Builder used for designing custom element templates, Contract Reports favors a predictable, predefined layout suited to consolidated contract dispatches where contract data and survey answers map automatically.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04]">
            <p className="font-bold text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Relationship with Inspection Templates</p>
            <p className="mt-1 text-xs text-ink-800 dark:text-[#E5E5E5]">
              Pulls mapped Contract Fields (Vessel Name, IMO, Berth, Cargo Quantity) and execution answers configured in Inspection Templates directly into the report summary blocks.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CONTRACT REPORT WORKSPACE ──────────────────────────────────── */}
      <Section id="contract-report" title="Contract Report Workspace">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          The Contract Report workspace features a split-screen authoring environment:
        </p>
        <div className="space-y-3 text-[14px] leading-6">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Left Panel: Editable Summary Form</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Superintendents author executive remarks, cargo condition conclusions, and specialized notes. This is the only section directly typed; all other sections populate automatically.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Right Panel: Real-Time Live Preview</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Renders the exact formatted report layout in real time, combining corporate headers, auto-mapped contract fields, survey answers, photo grids, and authorized signature blocks.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SURVEY REPORT TYPES ────────────────────────────────────────── */}
      <Section id="survey-report" title="Survey Report Types">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Contract Reports support 3 standardized report output formats:
        </p>
        <div className="grid gap-3 sm:grid-cols-3 my-4">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <div className="mb-2"><StatusBadge color="teal">Final Supervision Report</StatusBadge></div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">
              Comprehensive contract summary combining vessel details, cargo totals, inspection checks, and executive remarks.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <div className="mb-2"><StatusBadge color="blue">Photograph Report</StatusBadge></div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">
              Pre-seeded with an automated Photo Grid block aggregating every photo captured across all contract surveys.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <div className="mb-2"><StatusBadge color="purple">Custom Pick Report</StatusBadge></div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">
              A flexible contract layout allowing custom arrangement of summary sections, survey blocks, and attachment tables.
            </p>
          </div>
        </div>
      </Section>

      {/* ── MEDIA & ATTACHMENTS ────────────────────────────────────────── */}
      <Section id="media-and-attachments" title="Media &amp; Attachments">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          All inspection photos captured on mobile devices automatically sync into the contract's media repository. The Photograph Report automatically arranges photos into a multi-column photo grid complete with timestamps, GPS tags, and inspector captions.
        </p>
      </Section>

      {/* ── EXPORT & PREVIEW ───────────────────────────────────────────── */}
      <Section id="export-and-preview" title="Export &amp; Preview">
        <div className="space-y-3 text-[14px] leading-6">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Live Preview</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Verify report styling, table pagination, and photo alignment directly on screen before finalizing.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Export PDF</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Generates an optimized, high-resolution PDF file ready for client email distribution or portal upload.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Direct Print</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Formats the document for standard A4 printing with explicit page-break rules.
            </p>
          </div>
        </div>
      </Section>

      {/* ── TROUBLESHOOTING ───────────────────────────────────────────── */}
      <Section id="troubleshooting" title="Troubleshooting">
        <div className="space-y-3 text-xs text-ink-700 dark:text-[#E5E5E5]">
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.04]">
            <p className="font-bold text-rose-700 dark:text-rose-400 mb-1">Issue: Contract metadata fields show blank placeholders</p>
            <p className="text-ink-800 dark:text-[#E5E5E5]">
              <strong>Solution:</strong> Open the Contract Details screen to verify that vessel name, berth location, and client reference fields are saved.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] dark:bg-amber-500/[0.04]">
            <p className="font-bold text-amber-700 dark:text-amber-400 mb-1">Issue: Photos missing from Photograph Report</p>
            <p className="text-ink-800 dark:text-[#E5E5E5]">
              <strong>Solution:</strong> Check that mobile surveyors synced their completed surveys to the cloud server before generating the report.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
