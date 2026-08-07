import React from "react";
import DocPage, { Section } from "../../components/DocPage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "comparison-table", label: "Comparison Table" },
  { id: "workflow-reports", label: "1. Workflow Reports" },
  { id: "inspection-template-reports", label: "2. Inspection Template Reports" },
  { id: "contract-reports", label: "3. Contract Reports" },
];

export default function ReportCreationMethodsPage() {
  return (
    <DocPage
      path="/reports/report-creation-methods"
      eyebrow="Reports"
      title="Report Creation Methods"
      description="A detailed comparison guide explaining the three primary methods for creating, configuring, and generating reports within the Surveyor Management System."
      toc={toc}
    >
      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The Surveyor Management System provides three distinct methods for report creation, each tailored to a specific operational phase—from global template design to contract execution.
        </p>
      </Section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
      <Section id="comparison-table" title="Comparison Table">
        <div className="my-4 overflow-x-auto rounded-xl border border-ink-900/10 dark:border-[#262626]">
          <table className="w-full text-left text-xs text-ink-700 dark:text-[#E5E5E5]">
            <thead className="bg-ink-900/[0.04] dark:bg-[#171717] font-bold text-ink-900 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Used By</th>
                <th className="p-3">Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10 dark:divide-[#262626] bg-white dark:bg-[#0A0A0A]">
              <tr>
                <td className="p-3 font-semibold text-cyan-700 dark:text-cyan-400">Workflow Reports</td>
                <td className="p-3">Reusable report templates linked directly to operational workflow stages.</td>
                <td className="p-3">System Admins &amp; Workflow Designers</td>
                <td className="p-3">Global Workflow Template Schema</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-cyan-700 dark:text-cyan-400">Inspection Template Reports</td>
                <td className="p-3">Attach and configure report layouts inside Step 4 of Inspection Template Wizard.</td>
                <td className="p-3">Inspection Template Authors</td>
                <td className="p-3">Bound Template Package with Field Mappings</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-cyan-700 dark:text-cyan-400">Contract Reports</td>
                <td className="p-3">Author executive summary notes &amp; auto-populate live survey answers during contract execution.</td>
                <td className="p-3">Superintendents &amp; Field Surveyors</td>
                <td className="p-3">Published PDF Client Report Dispatch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 1. WORKFLOW REPORTS ───────────────────────────────────────── */}
      <Section id="workflow-reports" title="1. Workflow Reports">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>What It Is:</strong> Reusable report templates that are linked directly to operational workflow definitions in the Workflow Builder.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>When Used:</strong> Used when corporate management wants every contract running a specific workflow (e.g., Grain Import Supervision) to automatically produce identical report layouts.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>Main Capabilities:</strong> Global stage trigger binding, automated version locking, and multi-port schema reuse.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          <strong>Relationship with Workflow Builder:</strong> Configured inside Workflow Stage Properties to trigger automated report generation upon stage completion.
        </p>
      </Section>

      {/* ── 2. INSPECTION TEMPLATE REPORTS ─────────────────────────────── */}
      <Section id="inspection-template-reports" title="2. Inspection Template Reports">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>What It Is:</strong> Attaching and configuring report layouts during Step 4 (Report Builder Integration) of the wizard-based Inspection Template Builder.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>Report Selection:</strong> Designers browse published report templates and select the appropriate layout for the template.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>Report Configuration:</strong> Maps survey checklist questions directly to report tags, table columns, and photo grids.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          <strong>Relationship with Inspection Templates:</strong> Ensures every contract spawned from the Inspection Template automatically inherits pre-configured report mappings.
        </p>
      </Section>

      {/* ── 3. CONTRACT REPORTS ───────────────────────────────────────── */}
      <Section id="contract-reports" title="3. Contract Reports">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>What It Is:</strong> The operational workspace where superintendents complete final supervision reports during live contract execution.
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>Contract Reports &amp; Survey Reports:</strong> Features split-screen authoring (editable summary form on left, real-time live preview on right).
        </p>
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          <strong>Media Capture &amp; Version History:</strong> Photos uploaded by mobile surveyors stream into multi-column photo grids, while every save snapshot is preserved in version history.
        </p>
      </Section>
    </DocPage>
  );
}
