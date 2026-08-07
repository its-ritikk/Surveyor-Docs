import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import MermaidDiagram from "../../components/MermaidDiagram";

const toc = [
  { id: "overview", label: "Reports Ecosystem Overview" },
  { id: "key-modules", label: "Core Modules" },
  { id: "how-it-works", label: "How Data Flows" },
];

export default function ReportsOverviewPage() {
  return (
    <DocPage
      path="/reports/overview"
      eyebrow="Reports"
      title="Reports Ecosystem Overview"
      description="A high-level architecture overview of the Surveyor Management System reporting ecosystem, from reusable workflow templates to contract execution and centralized master reporting."
      toc={toc}
    >
      <Section id="overview" title="Reports Ecosystem Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Reports Ecosystem</strong> is an end-to-end framework designed to streamline corporate inspection reporting across global port operations. It unifies layout design, template configuration, live mobile data capture, and client dispatching into a single cohesive pipeline.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Business Purpose</p>
          <p className="mt-1 text-sm text-ink-800 dark:text-[#E5E5E5]">
            Ensures that every survey executed across global port terminals yields 100% compliant, branded PDF dispatches while providing superintendents and executives with complete auditability.
          </p>
        </div>
      </Section>

      <Section id="key-modules" title="Core Modules">
        <div className="grid gap-3 sm:grid-cols-2 my-4">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Workflow Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Reusable, standardized report templates bound to operational workflow stages.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Inspection Template Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Attaching and configuring report layouts during Step 4 of the Inspection Template Wizard.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">3. Contract Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Live split-screen authoring workspace where superintendents complete summaries while survey data populates.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">4. Reports Management</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Master register providing cross-contract report search, status tracking, read-only viewing, and PDF exports.
            </p>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" title="How Data Flows">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Reports move seamlessly through 4 structural layers:
        </p>
        <MermaidDiagram
          chart={`flowchart TD
    A["1. Workflow Reports<br/>Author Template Layouts"] --> B["2. Inspection Template Reports<br/>Bind & Map Field Tags"]
    B --> C["3. Contract Reports<br/>Mobile Capture & Live Execution"]
    C --> D["4. Reports Management<br/>Register & PDF Exports"]`}
        />
      </Section>
    </DocPage>
  );
}
