import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";


const toc = [
  { id: "overview", label: "Overview" },
  { id: "creating-contracts", label: "Creating Contracts" },
  { id: "contract-details", label: "Contract Details" },
  { id: "survey-assignment", label: "Survey Assignment" },
  { id: "contract-documents", label: "Contract Documents" },
  { id: "status-management", label: "Status Management" },
  { id: "timeline", label: "Timeline" },
  { id: "search-filters", label: "Search & Filters" },
  { id: "permissions", label: "Permissions" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function Contracts() {
  return (
    <DocPage
      path="/operations/contracts"
      eyebrow="Operations"
      title="Contract Management Reference"
      description="Comprehensive user guide and operational reference for contract creation, surveyor dispatch, document management, status lifecycles, and audit timelines."
      toc={toc}
    >
      {/* ── SECTION 1: OVERVIEW ────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          A <strong>Contract</strong> is the foundational operational dispatch entity within the Surveyor Management System (CargoClave). It establishes the formal relationship between a customer's cargo shipment assignment and the execution plan governing field inspection activities at marine terminals.
        </p>
        <p className="mt-3">
          Contracts encapsulate shipment metadata (Bill of Lading numbers, vessel particulars, packing lists), bind standardized survey inspection templates, assign field surveyors or teams, establish strict Service Level Agreement (SLA) deadlines, and generate final customer-facing PDF report packages.
        </p>

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Dispatch Core</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Acts as the parent container for all field checklists, surveyor check-ins, and inspection steps.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">SLA Enforcer</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Tracks completion deadlines per survey step to prevent penalties and operational delays.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Report Source</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Feeds verified inspection data into the Report Builder to compile customer PDF certificates.</p>
          </div>
        </div>

      </Section>

      {/* ── SECTION 2: CREATING CONTRACTS ──────────────────────────────── */}
      <Section id="creating-contracts" title="Creating Contracts">
        <p>
          New dispatches are created using the <strong>Create Contract Wizard</strong>, a 4-step guided workflow that captures contract metadata, parses cargo packing lists, binds inspection templates, and assigns field surveyors.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-2">The 4-Step Contract Creation Wizard</h4>
        <div className="space-y-3 my-4">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Step 1: Basic Information</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Select customer organization, input Bill of Lading (BL) Number, select Vessel Name from Master Data, choose Cargo Type (Containerized, Break Bulk, Liquid Bulk), and select Destination Terminal.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Step 2: Packing List &amp; Cargo Specifications</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Upload cargo manifests or manually add packing list rows (Container Numbers, Commodity Type, Gross Weight, Net Weight, Package Quantity, Hazardous Class).
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Step 3: Execution Plan &amp; Template Binding</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Select an Inspection Template from the library. The wizard automatically expands required survey steps (e.g., Initial Hatch Inspection, Discharge Supervision, Final Tally).
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Step 4: Surveyor Assignment &amp; Verification</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Assign individual field surveyors or operational teams to each step, set SLA target completion dates, configure terminal GPS coordinates, and dispatch.
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-5 mb-2">Validation Rules &amp; Constraints</h4>
        <ul className="list-disc pl-5 space-y-1.5 text-[13.5px]">
          <li><strong>BL Number Format:</strong> Must be unique per customer organization; duplicate BL numbers are rejected.</li>
          <li><strong>Mandatory Template Binding:</strong> Every contract must bind at least one published Inspection Template before dispatch.</li>
          <li><strong>SLA Date Validation:</strong> Target completion dates must be set in the future relative to contract creation time.</li>
        </ul>
      </Section>

      {/* ── SECTION 3: CONTRACT DETAILS ────────────────────────────────── */}
      <Section id="contract-details" title="Contract Details">
        <p>
          The <strong>Contract Details Screen</strong> provides a centralized dashboard for a single contract, displaying real-time inspection progress, vessel specifications, packing list tables, and document attachments.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Key Functional Sub-Panels</h4>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Header Summary Bar</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Displays Contract ID (e.g., <code>CNT-2026-0892</code>), active status badge, customer name, BL number, and vessel call sign.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Execution Plan Progress Tracker</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Shows step-by-step progress bar indicating completed, in-progress, and pending survey activities.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Packing List &amp; Container Grid</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Interactive table displaying container IDs, seal numbers, damage flags, and tally counts.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: SURVEY ASSIGNMENT ───────────────────────────────── */}
      <Section id="survey-assignment" title="Survey Assignment">
        <p>
          Coordinators schedule survey activities by binding specific field surveyors or operational teams to steps in the Execution Plan.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Assignment Modes &amp; Geofencing</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Individual Surveyor Assignment:</strong> Assigns a single licensed surveyor account. The dispatch appears on their mobile app home screen.</li>
          <li><strong>Team Assignment:</strong> Assigns an operational team (e.g., <em>Berth 4 Shift A Team</em>). Any surveyor in the team can pick up and execute the checklist.</li>
          <li><strong>SLA Deadline Configuration:</strong> Establishes target completion date and time. Exceeding SLA triggers red warnings on the <Link to="/operations/dashboard">Operations Dashboard</Link>.</li>
          <li><strong>GPS Geofence Binding:</strong> Defines target latitude/longitude coordinates for the port terminal. Field surveyor check-ins outside the <strong>1.0 km radius</strong> flag a distance mismatch warning.</li>
        </ul>
      </Section>

      {/* ── SECTION 5: CONTRACT DOCUMENTS ──────────────────────────────── */}
      <Section id="contract-documents" title="Contract Documents">
        <p>
          Contracts maintain a centralized repository for external shipping records, reference files, and regulatory certificates uploaded during or after contract creation.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Supported Document Types</h4>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-xs text-ink-900 dark:text-slate-100">Bill of Lading (BL)</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">PDF copy of primary shipping contract and cargo ownership certificate.</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-xs text-ink-900 dark:text-slate-100">Packing List &amp; Manifest</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Spreadsheet or PDF breakdown of container numbers, weights, and commodities.</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-xs text-ink-900 dark:text-slate-100">Weight &amp; Draft Certificates</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Official weighbridge or draft survey measurement certificates.</p>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-xs text-ink-900 dark:text-slate-100">Stowage Plans &amp; Drawings</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Vessel hatch layout diagrams and cargo placement blueprints.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: STATUS MANAGEMENT ───────────────────────────────── */}
      <Section id="status-management" title="Status Management">
        <p>
          Contracts transition through four strict operational states across their lifecycle:
        </p>

        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/5 dark:bg-white/5">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-white/15 text-ink-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">Draft</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Initial configuration state. Validations are relaxed to allow coordinators to pause and resume setup. Mobile sync is disabled.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-950/10">
            <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-700 dark:text-green-300 font-bold text-xs uppercase tracking-wider">Active</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Dispatched state. Execution plan is locked and active checklists are pushed to assigned surveyors' mobile devices.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-blue-200 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold text-xs uppercase tracking-wider">Completed</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Closed state. Triggered automatically when all execution plan surveys receive coordinator approval in Inspection Review. Final PDF reports are generated.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-700 dark:text-red-300 font-bold text-xs uppercase tracking-wider">Cancelled</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Voided state. Used to terminate dispatches, revoke mobile app checklists, and record cancellation audit reasons.</p>
          </div>
        </div>

        <Callout type="important">
          Transitioning a contract to Completed locks all associated checklist data and report layouts. No further surveyor edits or photo additions are permitted.
        </Callout>
      </Section>

      {/* ── SECTION 7: TIMELINE ─────────────────────────────────────────── */}
      <Section id="timeline" title="Timeline">
        <p>
          The <strong>Contract Timeline</strong> maintains an immutable, chronological audit trail recording every significant operational event throughout the contract's lifetime.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Tracked Timeline Events</h4>
        <ul className="list-disc pl-5 space-y-1.5 text-[13.5px]">
          <li><strong>Contract Created:</strong> Time, user ID, and initial template selection.</li>
          <li><strong>Surveyor Dispatched:</strong> Assignment timestamp and mobile push confirmation.</li>
          <li><strong>Field Check-In:</strong> Geotagged check-in timestamp with GPS coordinates.</li>
          <li><strong>Checklist Submission:</strong> Mobile survey upload timestamp.</li>
          <li><strong>Quality Review Audit:</strong> Approval or revision request timestamp by reviewer.</li>
          <li><strong>Report Finalized:</strong> Automated PDF generation completion time.</li>
        </ul>
      </Section>

      {/* ── SECTION 8: SEARCH & FILTERS ─────────────────────────────────── */}
      <Section id="search-filters" title="Search &amp; Filters">
        <p>
          The Contract Console includes a multi-attribute search and filtering engine to locate specific contracts across high-volume terminal dispatches.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Search &amp; Filter Capabilities</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Global Text Search:</strong> Instant full-text search by Contract ID, Customer Name, BL Number, or Vessel Name.</li>
          <li><strong>Status Filter:</strong> Multi-select filter for Draft, Active, Completed, or Cancelled states.</li>
          <li><strong>Cargo Type Filter:</strong> Narrow dispatches by Containerized, Break Bulk, or Liquid Bulk cargo.</li>
          <li><strong>Priority Filter:</strong> Filter by Standard, High Priority, or Urgent SLA risk.</li>
          <li><strong>Date Range Picker:</strong> Filter contracts by creation date, dispatch date, or completion date.</li>
        </ul>
      </Section>

      {/* ── SECTION 9: PERMISSIONS ──────────────────────────────────────── */}
      <Section id="permissions" title="Permissions">
        <p>
          Contract Management enforces role-based security permissions across all actions:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-white/10">
            <thead className="bg-ink-900/5 dark:bg-white/5 font-semibold text-ink-900 dark:text-slate-100">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Action / Feature</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Coordinator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Reviewer</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Surveyor</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-white/5 text-ink-700 dark:text-slate-300">
              <tr>
                <td className="p-2.5 font-medium">Create / Draft Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Dispatch to Active</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Execute Checklist (Mobile)</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve / Complete Contract</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Cancel Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
              </tr>
            </tbody>
          </table>
        </div>

      </Section>

      {/* ── TUTORIAL VIDEO ─────────────────────────────────────────────── */}
      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="contract-management-tutorial-video"
          caption="Contract Management Operations Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
