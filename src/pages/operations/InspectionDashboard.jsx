import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

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
    >
      {/* ── STATUS SUMMARY ───────────────────────────────────────────────── */}
      <Section id="status-summary" title="Status Summary">
        <p>
          At the top of the Inspection Dashboard, a row of status summary cards provides a real-time snapshot of all inspections grouped by their current review state. Each card displays a count and clicking it filters the inspection list to that status.
        </p>

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
                <td className="p-2.5">Inspections that failed quality verification. The surveyor is notified to re-submit with corrected data.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── STATISTICS OVERVIEW ──────────────────────────────────────────── */}
      <Section id="statistics" title="Statistics Overview">
        <p>
          The <strong>Statistics Overview</strong> component provides an operational dashboard of inspection workload KPIs, enabling operations managers to monitor review health at a glance.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Dashboard KPIs</h4>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">KPI</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description &amp; Business Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Total Inspections</td>
                <td className="p-2.5">Aggregate count of all inspection records in the system for the active filter period. Provides operations managers a baseline volume metric.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Pending Reviews</td>
                <td className="p-2.5">Inspections received from the Mobile App that have not yet been opened by any reviewer. A rising Pending count signals a review bottleneck requiring coordinator attention.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Approved</td>
                <td className="p-2.5">Inspections that have passed quality verification and been approved. Locked and forwarded to the Report Builder for PDF generation.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Cond. Approved</td>
                <td className="p-2.5">Inspections approved with conditional remarks or non-critical overrides. Tracked to ensure minor issues are followed up before certificate release.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Rejected</td>
                <td className="p-2.5">Inspections returned to surveyors for re-submission. A high rejection rate can indicate training issues or checklist design problems.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Review Progress</td>
                <td className="p-2.5">Composite metric showing the ratio of reviewed vs. unreviewed inspections. Helps management track daily throughput against SLA targets.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip">
          Monitor <strong>Pending Reviews</strong> at the start of each shift. Any value above the team's defined SLA threshold should trigger immediate workload redistribution to prevent certification delays.
        </Callout>
      </Section>

      {/* ── SEARCH & FILTERS ─────────────────────────────────────────────── */}
      <Section id="search-filters" title="Search &amp; Filters">
        <p>
          A comprehensive filter toolbar below the status cards allows coordinators to narrow the inspection list using multiple criteria simultaneously. All filters are applied together when <strong>Apply Filters</strong> is clicked.
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Filter Control</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Search Inspections…</td>
                <td className="p-2.5">Free-text keyword search across Inspection IDs, contract numbers, surveyor names, and survey titles.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Contract Number</td>
                <td className="p-2.5">Filter inspections linked to a specific contract reference number (e.g., <code>TCIS/IN/2026-PROD-0010</code>).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">All Statuses</td>
                <td className="p-2.5">Dropdown to filter by review status: Pending, In Progress, Submitted, Approved, Cond. Approved, or Rejected.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Filter by Type</td>
                <td className="p-2.5">Dropdown to filter by shipment/inspection type badge (e.g., Export, Import, Transshipment).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Filter by Surveyor</td>
                <td className="p-2.5">Dropdown to isolate inspections submitted by a specific field surveyor account.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Filter by Party</td>
                <td className="p-2.5">Dropdown to filter by client or contracting party name associated with the contract.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Date Range</td>
                <td className="p-2.5">Two <code>dd-mm-yyyy</code> date pickers to set a submission date range for filtering inspection records.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Apply Filters</td>
                <td className="p-2.5">Executes the combined filter query and refreshes the inspection list results.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Reset</td>
                <td className="p-2.5">Clears all active filter selections and restores the full unfiltered inspection list.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── INSPECTION LIST ──────────────────────────────────────────────── */}
      <Section id="inspection-list" title="Inspection List">
        <p>
          The main table lists all inspection records matching the active filters. Each row represents one submitted survey with full operational context.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Table Columns</h4>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/5">Column</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">ID</td>
                <td className="p-2.5">System-generated unique inspection identifier (e.g., <code>INSP_2452F4D8</code>). Sortable column.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">TYPE</td>
                <td className="p-2.5">Shipment type badge — <code>Export</code>, <code>Import</code>, or <code>Transshipment</code>.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">CONTRACT</td>
                <td className="p-2.5">Parent contract number and client party name (e.g., <code>TCIS/IN/2026-PROD-0010</code> / Global Logistics).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">SURVEYOR</td>
                <td className="p-2.5">Name of the field surveyor who performed and submitted the checklist from the Mobile App.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">SURVEY</td>
                <td className="p-2.5">Name of the survey checklist template used for this inspection (e.g., VESSEL'S STOWAGE PLAN).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">PROGRESS</td>
                <td className="p-2.5">Visual completion bar showing step-level progress (e.g., <code>1/1</code> steps at 100%) with steps done vs. remaining.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">SUBMITTED</td>
                <td className="p-2.5">Date and time the survey was transmitted from the mobile app (e.g., <code>05/08/26, 12:22 pm</code>). Sortable column.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">STATUS</td>
                <td className="p-2.5">Current review status badge — Pending, In Progress, Submitted, Approved, Cond. Approved, or Rejected.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">ACTIONS</td>
                <td className="p-2.5">Two quick-action icon buttons per row (see below).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-6 mb-3">Priority Indicator</h4>
        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-3">
          Each row displays a <strong>Priority Indicator</strong> badge to help reviewers triage their workload:
        </p>
        <div className="my-3 space-y-2">
          <div className="p-3 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50/30 dark:bg-rose-500/10">
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">High Priority</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Inspection is breaching or approaching SLA deadline, GPS warning is flagged, or contract is marked priority. Must be actioned immediately.</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-200 dark:border-amber-500/30 bg-amber-50/30 dark:bg-amber-500/10">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">Medium Priority</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Within SLA but due for review within the current shift. Process after all High Priority items are cleared.</p>
          </div>
          <div className="p-3 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Low Priority</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Ample SLA time remaining. Review at coordinator's discretion after higher-priority items are cleared.</p>
          </div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-6 mb-3">Row Action Buttons</h4>
        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-3">
          Each row in the ACTIONS column has two icon buttons:
        </p>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-lg border border-orange-500/20">⊡</span>
              Contract Link Button
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-2">
              Navigates directly to the <Link to="/operations/contracts" className="text-cyan-600 dark:text-cyan-400 underline">Contract Management</Link> page for the parent contract linked to this inspection. Allows coordinators to cross-reference contract details, execution plan, and surveyor assignment.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF] flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-lg border border-cyan-500/20">👁</span>
              View Detail Button
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-2">
              Opens the full <Link to="/operations/inspection-review/details" className="text-cyan-600 dark:text-cyan-400 underline">Inspection Detail Page</Link> for that record — the primary action for conducting a quality audit.
            </p>
          </div>
        </div>
      </Section>

      {/* ── BATCH ACTIONS ────────────────────────────────────────────────── */}
      <Section id="batch-actions" title="Batch Actions">
        <p>
          The <strong>Batch Actions</strong> toolbar enables coordinators to apply the same action to multiple inspection records simultaneously, significantly reducing the time required to process large submission volumes.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Multi-Selection Controls</h4>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Control</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Behaviour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Row Checkbox</td>
                <td className="p-2.5">Click the checkbox on any row to add or remove that inspection from the active selection set.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Select All</td>
                <td className="p-2.5">Clicking the header checkbox selects all records currently visible in the filtered table view. Records on other pages are not included.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Clear Selection</td>
                <td className="p-2.5">Deselects all records and dismisses the Batch Toolbar without performing any action.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Available Batch Operations</h4>
        <div className="my-3 space-y-3">
          <div className="p-3.5 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Batch Approve</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Approves all selected inspections in a single operation. A confirmation dialog lists the affected IDs and requires explicit confirmation. Only inspections without blocking validation errors can be batch-approved.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50/30 dark:bg-rose-500/10">
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">Batch Reject</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Rejects all selected inspections and dispatches mobile notifications to respective field surveyors. A mandatory rejection reason must be entered in the confirmation dialog before execution.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-white/10 text-ink-700 dark:text-[#E5E5E5] font-bold text-xs uppercase tracking-wider">Batch Delete</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Permanently removes all selected records. Irreversible. A two-step confirmation dialog is displayed. Only Portal Administrators can perform batch deletes.</p>
          </div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Batch Action Workflow</h4>
        <div className="my-4 p-5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-700 dark:text-[#A3A3A3] text-center space-y-1">
          <div className="font-semibold text-ink-900 dark:text-white">Select Records (row checkboxes)</div>
          <div className="text-cyan-500">↓</div>
          <div>Batch Toolbar appears</div>
          <div className="text-cyan-500">↓</div>
          <div>Choose Action (Approve / Reject / Delete)</div>
          <div className="text-cyan-500">↓</div>
          <div>Confirmation Dialog (lists affected IDs)</div>
          <div className="text-cyan-500">↓</div>
          <div>Execute Operation</div>
          <div className="text-cyan-500">↓</div>
          <div>Table Refreshes &amp; Selection Cleared</div>
        </div>

        <Callout type="important">
          Batch operations are irreversible once confirmed. Always verify the selected record count shown in the Batch Toolbar before clicking <strong>Confirm</strong>. Permission checks are enforced per-record — any record the current user cannot action will be skipped, and a post-execution summary will list all skipped records.
        </Callout>
      </Section>
    </DocPage>
  );
}
