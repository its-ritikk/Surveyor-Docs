import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocImage from "../../components/DocImage";

const toc = [
  { id: "status-summary", label: "Status Summary" },
  { id: "statistics", label: "Statistics Overview" },
  { id: "search-filters", label: "Search & Filters" },
  { id: "inspection-list", label: "Inspection List" },
  { id: "batch-actions", label: "Batch Actions" },
];

export default function InspectionDashboard() {
  return (
    <DocPage
      path="/operations/inspection-review/dashboard"
      eyebrow="Inspection Review"
      title="Inspection Dashboard"
      description="Real-time dashboard for monitoring submitted inspections — view status KPIs, filter the inspection list, and perform batch review operations."
      toc={toc}
      hideImage={true}
    >
      {/* ── STATUS SUMMARY ───────────────────────────────────────────────── */}
      <Section id="status-summary" title="Status Summary">
        <p>
          At the top of the Inspection Dashboard, a row of status summary cards provides a real-time snapshot of all inspections grouped by their current review state. Each card displays a count and clicking it filters the inspection list to that status.
        </p>

        {/* SINGLE FULL-WIDTH SCREENSHOT */}
        <DocImage
          path="/operations/inspection-review/dashboard"
          imageKey="overview"
          hideCaption={true}
        />

        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs my-4">
          <strong className="text-ink-900 dark:text-slate-100 block font-semibold mb-1.5 text-[13px]">
            Step-by-Step Dashboard Operations:
          </strong>
          <ol className="list-decimal pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
            <li><strong>Select Status Filter:</strong> Click any top KPI card (Pending, In Progress, Submitted, Approved, Rejected) to filter the active queue.</li>
            <li><strong>Apply Multi-Attribute Search:</strong> Search by Contract ID, Surveyor Name, Vessel Call Sign, or Berth Location.</li>
            <li><strong>Perform Batch Approvals:</strong> Select multiple inspection rows and apply batch approve or batch re-assign actions.</li>
          </ol>
        </div>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">Status Card</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Pending</td>
                <td className="p-2.5">Inspections submitted by surveyors that have not yet been opened or reviewed by any coordinator.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">In Progress</td>
                <td className="p-2.5">Inspections currently being reviewed — the coordinator has opened the detail view but has not yet issued a final decision.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Submitted</td>
                <td className="p-2.5">Surveys that have been transmitted from the Mobile Surveyor App and are awaiting quality review.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Approved</td>
                <td className="p-2.5">Inspections that passed quality review and have been approved for report generation.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Cond. Approved</td>
                <td className="p-2.5">Inspections approved conditionally with minor non-blocking notes, GPS override remarks, or pending secondary sign-off.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Rejected</td>
                <td className="p-2.5">Inspections returned to the field surveyor for correction or additional photo evidence.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
