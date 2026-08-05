import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import MermaidDiagram from "../../components/MermaidDiagram";

const toc = [
  { id: "overview", label: "Report Lifecycle Overview" },
  { id: "lifecycle-diagram", label: "Lifecycle Diagram" },
  { id: "stage-1", label: "Stage 1: Workflow Reports" },
  { id: "stage-2", label: "Stage 2: Inspection Template Reports" },
  { id: "stage-3", label: "Stage 3: Contract Reports" },
  { id: "stage-4", label: "Stage 4: Reports Management" },
  { id: "best-practices", label: "Best Practices" },
];

export default function ReportLifecyclePage() {
  return (
    <DocPage
      path="/reports/report-lifecycle"
      eyebrow="Reports"
      title="Report Lifecycle Guide"
      description="Understanding the 4-stage lifecycle of reports from initial workflow template creation down to live contract execution and centralized master archiving."
      toc={toc}
    >
      <Section id="overview" title="Report Lifecycle Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          The <strong>Report Lifecycle</strong> governs how inspection reports are authored, bound, executed, and archived across the system. Every client-facing PDF document passes sequentially through four operational stages.
        </p>
      </Section>

      <Section id="lifecycle-diagram" title="Lifecycle Diagram">
        <MermaidDiagram
          chart={`flowchart LR
    A[Stage 1: Workflow Reports\nAuthor Layouts] --> B[Stage 2: Template Reports\nMap Survey Fields]
    B --> C[Stage 3: Contract Reports\nExecute & Populate]
    C --> D[Stage 4: Reports Management\nMaster Register & Dispatch]`}
        />
      </Section>

      <Section id="stage-1" title="Stage 1: Workflow Reports">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-1">Stage Responsibility</p>
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-6">
            System Administrators author master report templates in the Report Builder and bind them to global operational workflows, defining reusable layout structures, corporate branding regions, and dynamic tag placeholders.
          </p>
        </div>
      </Section>

      <Section id="stage-2" title="Stage 2: Inspection Template Reports">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-1">Stage Responsibility</p>
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-6">
            Template Designers attach published report layouts to specific Inspection Templates in Step 4 of the wizard, mapping survey checklist questions directly to report tags to guarantee seamless automated field population.
          </p>
        </div>
      </Section>

      <Section id="stage-3" title="Stage 3: Contract Reports">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-1">Stage Responsibility</p>
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-6">
            Field Surveyors collect live mobile data and photo evidence, while Cargo Superintendents author executive summaries in the split-screen workspace, previewing the complete document before publishing the report snapshot.
          </p>
        </div>
      </Section>

      <Section id="stage-4" title="Stage 4: Reports Management">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] mb-1">Stage Responsibility</p>
          <p className="text-xs text-ink-700 dark:text-[#E5E5E5] leading-6">
            Coordinators and Quality Managers monitor published reports across all active contracts in a centralized register, performing search filtering, read-only document inspection, vectorized PDF downloads, and direct client dispatches.
          </p>
        </div>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="best-practice" title="Lifecycle Governance">
          Ensure each stage transitions cleanly: publish workflow templates before binding in Stage 2, complete mobile surveys before publishing in Stage 3, and verify dispatches in Stage 4.
        </Callout>
      </Section>
    </DocPage>
  );
}
