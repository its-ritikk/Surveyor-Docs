import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import MermaidDiagram from "../../components/MermaidDiagram";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "e2e-workflow", label: "End-to-End Operational Process" },
  { id: "setup", label: "1. Checklist & Template Setup" },
  { id: "dispatch", label: "2. Contract Setup & Surveyor Assignment" },
  { id: "execution", label: "3. Mobile Inspection Execution" },
  { id: "review", label: "4. Quality Review & Approval" },
  { id: "reports", label: "5. Report Creation & Delivery" },
  { id: "roles", label: "Role Responsibilities" },
  { id: "lifecycle", label: "Status & Progress Stages" },
];

export default function BusinessWorkflows() {
  return (
    <DocPage
      path="/getting-started/workflows"
      eyebrow="Getting Started"
      title="Standard Operational Processes"
      description="Learn how different parts of CargoClave connect to guide an inspection from initial contract setup to final customer report."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          CargoClave SMS connects office coordinators with surveyors working at port terminals. The platform manages cargo inspections through five clear stages: checklist setup, contract setup, mobile inspection, quality review, and final report delivery.
        </p>
      </Section>

      <Section id="e2e-workflow" title="End-to-End Operational Process">
        <p>
          Here is how an inspection moves from initial setup in the office to final report delivery for your customer:
        </p>
        <MermaidDiagram
          chart={`flowchart TD
    A[Administrator: Create Checklist & Template] --> B[Coordinator: Set Up Contract & Assign Surveyor]
    B --> C[Surveyor Mobile App: Open Assignment & Check In]
    C --> D[Surveyor Mobile App: Fill Checklist & Snap Photos]
    D --> E[Coordinator: Check Responses & Photos]
    E -- Needs Corrections --> C
    E -- Approved --> F[System: Build & Publish Customer Report]`}
        />
      </Section>

      <Section id="setup" title="1. Checklist &amp; Template Setup">
        <p><strong>Goal:</strong> Build reusable inspection checklists and report layouts.</p>
        <div className="my-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Add Fields</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. Set Rules</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">3. Layout Report</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold border-cyan-500/20">4. Save Template</div>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> System Administrator.</li>
          <li><strong>Requirements:</strong> Template creation access.</li>
          <li><strong>What Happens Next:</strong> The new template appears in the dropdown menu when creating contracts.</li>
        </ul>
      </Section>

      <Section id="dispatch" title="2. Contract Setup &amp; Surveyor Assignment">
        <p><strong>Goal:</strong> Create a contract job and assign field surveyors.</p>
        <div className="my-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Select Template</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. Enter BL &amp; Vessel</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">3. Assign Surveyor/Team</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold border-cyan-500/20">4. Activate Contract</div>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator.</li>
          <li><strong>Status Update:</strong> Contract status changes from Draft to Active. The job appears on the surveyor's mobile app.</li>
          <li><strong>Note:</strong> Missing required shipment numbers or unassigned steps will block contract activation.</li>
        </ul>
      </Section>

      <Section id="execution" title="3. Mobile Inspection Execution">
        <p><strong>Goal:</strong> Complete inspection checklists, record seal numbers, and take photos at the port.</p>
        <div className="my-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Open Mobile App</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. GPS Check-In</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">3. Fill Checklist</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">4. Photos &amp; Signatures</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold border-cyan-500/20">5. Submit Survey</div>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Field Surveyor.</li>
          <li><strong>Status Update:</strong> Survey status changes from Pending &rarr; In Progress &rarr; Submitted.</li>
          <li><strong>Note:</strong> Required fields and photo captions must be completed before submitting.</li>
        </ul>
      </Section>

      <Section id="review" title="4. Inspection Review &amp; Approval">
        <p><strong>Goal:</strong> Verify submitted checklist responses and photos before locking the inspection.</p>
        <div className="my-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Open Review Console</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. Audit Photos &amp; GPS</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">3. Approve / Request Edits</div>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator.</li>
          <li><strong>Status Update:</strong> Survey changes to Approved or Sent Back for Revision (notifies field surveyor).</li>
        </ul>
      </Section>

      <Section id="reports" title="5. Report Creation &amp; Delivery">
        <p><strong>Goal:</strong> Generate clean inspection reports for client delivery.</p>
        <div className="my-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Steps Approved</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. Preview Layout</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">3. Export Client PDF</div>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator / Manager.</li>
          <li><strong>What Happens Next:</strong> The system locks report entries and produces clean, branded customer reports.</li>
        </ul>
      </Section>

      <Section id="roles" title="Role Responsibilities">
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>System Administrator</strong> — Builds checklist templates, sets required field rules, and configures report layouts.</li>
          <li><strong>Operations Coordinator</strong> — Sets up contracts, assigns surveyors, tracks deadlines, reviews submissions, and exports reports.</li>
          <li><strong>Field Surveyor</strong> — Receives dispatches, completes checklist steps on-site, captures photos and signatures, and submits work.</li>
        </ul>
      </Section>

      <Section id="lifecycle" title="Status &amp; Progress Stages">
        <p>
          Status indicators show work progress across the platform:
        </p>
        
        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-4 mb-2">Contract Lifecycle</h4>
        <div className="my-2 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Draft</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">Active</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">Completed</div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-4 mb-2">Survey Lifecycle</h4>
        <div className="my-2 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Pending</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">In Progress</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-1.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300">Submitted</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">Approved / Edits</div>
        </div>
      </Section>
    </DocPage>
  );
}
