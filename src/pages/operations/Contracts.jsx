import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocImage from "../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "creating-contracts", label: "Creating Contracts" },
  { id: "contract-details", label: "Contract Details" },
  { id: "survey-assignment", label: "Survey Assignment" },
  { id: "status-management", label: "Status Management" },
  { id: "permissions", label: "Permissions" },
];

export default function Contracts() {
  return (
    <DocPage
      path="/operations/contracts"
      eyebrow="Operations"
      title="Contract Management"
      description="Comprehensive user guide and operational reference for contract creation, surveyor dispatch, document management, status lifecycles, and audit timelines."
      toc={toc}
      hideImage={true}
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

        <DocImage path="/operations/contracts" imageKey="overview" />
      </Section>

      {/* ── SECTION 2: CREATING CONTRACTS ──────────────────────────────── */}
      <Section id="creating-contracts" title="Creating Contracts">
        <p>
          New dispatches are created using the <strong>Create Contract Console</strong>, a comprehensive form designed to capture commercial contract details, inspection template bindings, shipment specifications, and surveyor execution plans.
        </p>

        {/* IMAGE 1: Commercial Details & Inspection Template Selection */}
        <DocImage path="/operations/contracts" imageKey="creation-commercial" />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          1. Inspection Template Selection Card
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <p className="text-ink-700 dark:text-slate-300">
            Start from a reusable inspection template to pre-fill cargo details, survey checklists, and report formats. All fields remain customizable before contract activation.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
            <li><strong>Shipment Type (Filter):</strong> Filters template library by shipment direction (e.g., <em>Export</em>, <em>Import</em>, <em>Transshipment</em>).</li>
            <li><strong>Cargo Type (Filter):</strong> Filters template library by cargo classification (e.g., <em>Containerized</em>, <em>Break Bulk</em>, <em>Liquid Bulk</em>).</li>
            <li><strong>Template Dropdown:</strong> Select a pre-configured template or select <code>CUSTOM</code> to construct a blank dispatch layout from scratch.</li>
          </ul>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          2. Contract Commercial Details Card
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Contract ID</strong>
              <span className="text-ink-650 dark:text-slate-400">System-generated unique reference number (e.g., <code>TCIS/IN/2026-PROD-0013</code>).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Contracting Party <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Mandatory dropdown to select the client or customer organization hiring the survey.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Primary Point of Contact <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Mandatory dropdown to select the key client contact receiving real-time notifications.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">PI References</strong>
              <span className="text-ink-650 dark:text-slate-400">Optional Protection &amp; Indemnity (P&amp;I) insurance club reference number.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Start Date <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Mandatory datepicker setting the planned survey commencement date.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Completion Deadline <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Mandatory datepicker defining the strict SLA completion deadline.</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Inspection Location</strong>
            <span className="text-ink-650 dark:text-slate-400">Search input specifying the designated port terminal, warehouse, or berth facility.</span>
          </div>
        </div>

        {/* IMAGE 2: Shipment Details & Execution Plan Grid */}
        <DocImage path="/operations/contracts" imageKey="creation-execution" />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          3. Shipment Details Card
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Shipment Type <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select Export, Import, or Transshipment movement.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Cargo Type <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select cargo type (e.g., Containerized, Break Bulk, Liquid Bulk).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Port of Loading</strong>
              <span className="text-ink-650 dark:text-slate-400">Select origin port terminal from Master Data.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Port of Discharge</strong>
              <span className="text-ink-650 dark:text-slate-400">Select destination port terminal from Master Data.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Packaging Type</strong>
              <span className="text-ink-650 dark:text-slate-400">Select cargo packaging (Drums, Pallets, Containers, ISO Tanks).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Quantity</strong>
              <span className="text-ink-650 dark:text-slate-400">Enter total cargo package quantity or tonnage weight.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Stage Execution <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Choose <em>Sequential</em> (step-by-step order) or <em>Parallel</em> execution.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Vessel Name</strong>
              <span className="text-ink-650 dark:text-slate-400">Enter vessel name from Vessel Masters directory.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Voyage Number</strong>
              <span className="text-ink-650 dark:text-slate-400">Enter ocean carrier voyage identification code.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Berth No. (If Available)</strong>
              <span className="text-ink-650 dark:text-slate-400">Specific terminal quay or berth docking number.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01] md:col-span-2">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">BL Number <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Mandatory unique Bill of Lading primary tracking number.</span>
            </div>
          </div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          4. Execution Plan &amp; Surveyor Dispatch Grid
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <p className="text-ink-700 dark:text-slate-300">
            The Execution Plan table maps individual survey checklists to physical terminal locations, execution dates, and surveyor assignees.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-ink-900/10 dark:border-white/10">
              <thead className="bg-ink-900/5 dark:bg-white/5 font-semibold text-ink-900 dark:text-slate-100">
                <tr>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">#</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Associated Surveys *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Assignment</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Assignee</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Location *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Date *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">POC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/5 dark:divide-white/5 text-ink-700 dark:text-slate-300">
                <tr>
                  <td className="p-2 font-mono text-center">1</td>
                  <td className="p-2">Select survey checklist from template library dropdown</td>
                  <td className="p-2">Choose <code>Individual</code> or <code>Team</code> mode</td>
                  <td className="p-2">Select surveyor user account or operational team</td>
                  <td className="p-2">Search &amp; select terminal GPS geofence location</td>
                  <td className="p-2 font-mono">dd-mm-yyyy datepicker</td>
                  <td className="p-2">Select Point of Contact for berth coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-ink-650 dark:text-slate-400">
            Click <code>+ Add Row</code> to add multiple survey stages to a single dispatch contract.
          </p>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          5. Action Controls &amp; Keyboard Shortcuts
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-1">Cancel Button</strong>
            <span className="text-ink-650 dark:text-slate-400">Aborts creation and returns to the Contract Management Console.</span>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-1 flex items-center justify-between">
              <span>Save as Draft</span>
              <kbd className="px-1.5 py-0.5 rounded bg-ink-900/10 dark:bg-white/10 font-mono text-[10px]">Ctrl + Shift + S</kbd>
            </strong>
            <span className="text-ink-650 dark:text-slate-400">Saves incomplete contract setup as a draft without triggering surveyor notifications.</span>
          </div>
          <div className="p-3.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
            <strong className="block mb-1 flex items-center justify-between">
              <span>Activate Contract</span>
              <kbd className="px-1.5 py-0.5 rounded bg-cyan-500/20 font-mono text-[10px]">Ctrl + Enter</kbd>
            </strong>
            <span className="text-xs">Dispatches contract into Active state and syncs mobile survey checklists to assignees.</span>
          </div>
        </div>
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

      {/* ── SECTION 5: STATUS MANAGEMENT ───────────────────────────────── */}
      <Section id="status-management" title="Status Management">
        <p>
          Contracts transition through three strict operational states across their lifecycle:
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
        </div>

        <Callout type="important">
          Transitioning a contract to Completed locks all associated checklist data and report layouts. No further surveyor edits or photo additions are permitted.
        </Callout>
      </Section>

      {/* ── SECTION 6: PERMISSIONS ──────────────────────────────────────── */}
      <Section id="permissions" title="Permissions">
        <p>
          Contract Management enforces role-based security permissions across built-in system roles and custom Portal operational roles:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-white/10">
            <thead className="bg-ink-900/5 dark:bg-white/5 font-semibold text-ink-900 dark:text-slate-100">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Action / Feature</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Portal Administrator (Built-in)</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Surveyor (Built-in)</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Custom Portal Roles (e.g. Coordinator, Reviewer)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-white/5 text-ink-700 dark:text-slate-300">
              <tr>
                <td className="p-2.5 font-medium">Create / Draft Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Configured in Portal (Allowed for Coordinator)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Dispatch to Active</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Configured in Portal (Allowed for Coordinator)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Execute Checklist (Mobile)</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Configured in Portal (No Access by default)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve / Complete Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Configured in Portal (Allowed for Reviewer)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Cancel Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Configured in Portal (Allowed for Coordinator/Manager)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
