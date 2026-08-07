import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "inspection-reports", label: "Inspection Reports" },
  { id: "search-and-filters", label: "Search & Filters" },
  { id: "report-actions", label: "Report Actions" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function ReportsManagement() {
  return (
    <DocPage
      path="/reports/reports-management"
      eyebrow="Reports"
      title="Reports Management"
      description="A centralized, cross-contract register of every generated report in the system, providing unified search, inspection report tracking, viewer inspection, and export actions."
      toc={toc}
    >
      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          <strong>Reports Management</strong> is the global control center for viewing, managing, and exporting generated inspection and contract reports across all active maritime operations.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Why It Exists &amp; How It Differs</p>
          <p className="mt-1 text-sm text-ink-800 dark:text-[#E5E5E5]">
            While the <strong>Report Builder</strong> is a design workspace used by administrators to author custom drag-and-drop report layout templates, <strong>Reports Management</strong> is an operational register where coordinators locate, inspect, download, and dispatch completed reports generated across all contracts.
          </p>
        </div>
      </Section>

      {/* ── INSPECTION REPORTS ────────────────────────────────────────── */}
      <Section id="inspection-reports" title="Inspection Reports">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          The main register displays a master table of all compiled survey and contract reports. Coordinators can review publication status, linked contract references, and last update timestamps in real time.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 my-4">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge color="slate">Draft Status</StatusBadge>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">
              Indicates an in-progress report currently being authored by surveyors or superintendents. Drafts are hidden from client dispatch views until explicitly published.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge color="teal">Published Status</StatusBadge>
            </div>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3]">
              Indicates a finalized, client-ready report with complete auto-mapped contract metadata, verified photo grids, and authorized digital signatures.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SEARCH & FILTERS ──────────────────────────────────────────── */}
      <Section id="search-and-filters" title="Search &amp; Filters">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Coordinators can filter thousands of historical reports instantly using the visible top toolbar controls:
        </p>
        <ul className="space-y-2 text-xs text-ink-700 dark:text-[#E5E5E5] list-disc pl-5">
          <li><strong>Keyword Search:</strong> Search by Report Name, Contract ID, Vessel Name, Port Location, or Client Name.</li>
          <li><strong>Report Type Filter:</strong> Narrow down by Supervision Report, Inspection Report, Photograph Book, or Custom Pick Report.</li>
          <li><strong>Status Filter:</strong> Toggle between Draft and Published reports.</li>
          <li><strong>Date Range Picker:</strong> Filter reports by creation date or last published timestamp.</li>
        </ul>
      </Section>

      {/* ── REPORT ACTIONS ────────────────────────────────────────────── */}
      <Section id="report-actions" title="Report Actions">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          Each report row provides immediate action triggers depending on user role permissions:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">1. View (Read-Only Viewer)</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Opens the paginated Report Viewer rendering exact high-resolution layouts with corporate branding, photo grids, signatures, and summary tables.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Open (Edit Source)</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Navigates directly to the parent contract's Pick Report editor or Survey Report workspace to update text content or add photo evidence.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">3. Download (PDF Export)</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Generates and downloads a print-ready, vectorized PDF report complete with table auto-pagination and header/footer branding.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">4. Print</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Sends the report layout directly to the browser print stream formatted for A4 standard paper size.
            </p>
          </div>
        </div>
      </Section>

      {/* ── TROUBLESHOOTING ───────────────────────────────────────────── */}
      <Section id="troubleshooting" title="Troubleshooting">
        <div className="space-y-3 text-xs text-ink-700 dark:text-[#E5E5E5]">
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.04]">
            <p className="font-bold text-rose-700 dark:text-rose-400 mb-1">Issue: Downloaded PDF shows outdated data</p>
            <p className="text-ink-800 dark:text-[#E5E5E5]">
              <strong>Solution:</strong> Ensure the report summary was saved and published. Downloads always export the latest <em>Published</em> version rather than uncommitted local draft changes.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] dark:bg-amber-500/[0.04]">
            <p className="font-bold text-amber-700 dark:text-amber-400 mb-1">Issue: Report Viewer shows missing signature image</p>
            <p className="text-ink-800 dark:text-[#E5E5E5]">
              <strong>Solution:</strong> Open the source survey step in Mobile Surveyor or Inspection Review to confirm that the surveyor applied and saved their digital signature before finalizing.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
