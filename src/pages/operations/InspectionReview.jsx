import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocImage from "../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "review-lifecycle", label: "Review Lifecycle" },
  { id: "integrations", label: "Related Modules" },
];

export default function InspectionReview() {
  return (
    <DocPage
      path="/operations/inspection-review"
      eyebrow="Operations"
      title="Inspection Review"
      description="Central quality assurance console for reviewing submitted mobile survey checklists — monitor inspection workload, audit GPS compliance, inspect field data, and approve or reject completed inspections."
      toc={toc}
      hideImage={true}
    >
      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          The <strong>Inspection Review</strong> module is the quality assurance gateway within the CargoClave Surveyor Management System. It aggregates all survey checklist submissions from field surveyors operating the Mobile Surveyor App and provides portal coordinators with a structured workspace to audit, verify, and act on each inspection before it advances to the Report Builder for certificate generation.
        </p>

        {/* SINGLE FULL-WIDTH SCREENSHOT */}
        <DocImage
          path="/operations/inspection-review"
          imageKey="overview"
          hideCaption={true}
        />

        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs my-4">
          <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
            Step-by-Step Quality Review Workflow:
          </strong>
          <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
            <li><strong>Filter Review Queue:</strong> Filter incoming inspection submissions by status (Submitted, In Progress, Approved, Rejected).</li>
            <li><strong>Verify Surveyor Geotags:</strong> Inspect GPS coordinates and timestamp overlays to confirm on-site berth presence.</li>
            <li><strong>Audit Response Integrity:</strong> Review filled field inputs, photos, and digital sign-offs for operational accuracy.</li>
            <li><strong>Issue Review Decision:</strong> Mark inspection as Approved, Conditionally Approved, or Rejected back to surveyor.</li>
          </ol>
        </div>

        <p className="mt-3 text-xs text-ink-650 dark:text-slate-400">
          The module is accessible from <strong>Operations → Inspection Review</strong> and is designed for operations coordinators and portal administrators who are responsible for maintaining inspection data integrity and SLA compliance.
        </p>
      </Section>

      {/* ── REVIEW LIFECYCLE ─────────────────────────────────────────────── */}
      <Section id="review-lifecycle" title="Review Lifecycle">
        <p>
          Every inspection record passes through a defined status lifecycle from initial mobile submission to final report generation:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">Status</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Submitted</td>
                <td className="p-2.5">Survey payload received from the Mobile App. Awaiting coordinator assignment and initial review.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Pending</td>
                <td className="p-2.5">Assigned to the review queue. No coordinator has opened the record yet.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">In Progress</td>
                <td className="p-2.5">A coordinator has opened the Inspection Detail Page and is actively reviewing the submission.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Approved</td>
                <td className="p-2.5">Inspection validated and approved for customer report building.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Rejected</td>
                <td className="p-2.5">Inspection flagged with issues and returned to field surveyor for correction.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── RELATED MODULES ──────────────────────────────────────────────── */}
      <Section id="integrations" title="Related Modules">
        <div className="grid gap-3 sm:grid-cols-2">
          <Link to="/operations/contracts" className="p-3.5 rounded-xl border border-ink-900/10 dark:border-white/10 hover:border-cyan-500 transition-colors">
            <strong className="text-xs font-semibold text-ink-900 dark:text-slate-100 block">Contract Management</strong>
            <span className="text-[11px] text-ink-650 dark:text-slate-400">View contract dispatches feeding into review queue.</span>
          </Link>
          <Link to="/operations/inspection-review/dashboard" className="p-3.5 rounded-xl border border-ink-900/10 dark:border-white/10 hover:border-cyan-500 transition-colors">
            <strong className="text-xs font-semibold text-ink-900 dark:text-slate-100 block">Inspection Dashboard</strong>
            <span className="text-[11px] text-ink-650 dark:text-slate-400">Access real-time KPI metrics and batch action tools.</span>
          </Link>
        </div>
      </Section>
    </DocPage>
  );
}
